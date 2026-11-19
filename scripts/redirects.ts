import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import path from "node:path"
import { insidePlaces, isTownPage, placeSlug, townPages } from "../src/lib/places"
import { buildVillageRedirects, redirectSources, villageRedirects } from "../src/lib/redirects"

const root = path.join(import.meta.dirname, "..")
const vercelPath = path.join(root, "vercel.json")

function vercelDocument() {
  return {
    redirects: redirectSources().map(({ source, destination }) => ({
      source,
      destination,
      statusCode: 301,
    })),
  }
}

function assertComplete() {
  const removed = insidePlaces.filter((place) => !isTownPage(place))
  const redirects = villageRedirects()
  const problems: string[] = []
  if (redirects.length !== removed.length) {
    problems.push(`expected ${removed.length} redirects, found ${redirects.length}`)
  }
  const slugs = new Set(redirects.map((item) => item.slug))
  for (const place of removed) {
    const slug = placeSlug(place)
    if (!slugs.has(slug)) problems.push(`missing redirect for ${slug}`)
  }
  for (const place of townPages()) {
    const slug = placeSlug(place)
    if (slugs.has(slug)) problems.push(`kept town ${slug} is also redirected`)
  }
  for (const rule of redirectSources()) {
    if (rule.source === rule.destination) problems.push(`loop ${rule.source}`)
    if (!rule.destination.endsWith("/")) problems.push(`destination needs a trailing slash: ${rule.destination}`)
  }
  const sources = redirectSources()
  if (sources.length !== removed.length * 2) {
    problems.push(`expected ${removed.length * 2} slash variants, found ${sources.length}`)
  }
  if (problems.length) throw new Error(problems.join("\n"))
}

function sameRedirects(actual: unknown) {
  const expected = vercelDocument()
  return JSON.stringify(actual) === JSON.stringify(expected)
}

function checkVercel() {
  assertComplete()
  assertRedirectHtml()
  const actual = JSON.parse(readFileSync(vercelPath, "utf8")) as unknown
  if (!sameRedirects(actual)) {
    throw new Error("vercel.json does not match src/lib/village-redirects.json. Run: npx tsx scripts/redirects.ts --write-vercel")
  }
}

function writeVercel() {
  const fresh = buildVillageRedirects()
  writeFileSync(
    path.join(root, "src/lib/village-redirects.json"),
    `${JSON.stringify(fresh, null, 2)}\n`,
  )
  writeFileSync(vercelPath, `${JSON.stringify({
    redirects: fresh.flatMap(({ slug, destination }) => [
      { source: `/sell-vinyl-records/${slug}`, destination, statusCode: 301 },
      { source: `/sell-vinyl-records/${slug}/`, destination, statusCode: 301 },
    ]),
  }, null, 2)}\n`)
}

/**
 * GitHub Pages cannot send a 301. Google treats an instant (0 second) meta
 * refresh to an absolute URL as a permanent redirect, and follows
 * location.replace the same way. A noindex tag makes Search Console report
 * the stub as "Excluded by noindex" instead, including when the URL was
 * submitted in an earlier sitemap, so the stub must not carry one.
 */
export function redirectHtml(destination: string, site: string) {
  const origin = site.replace(/\/$/, "")
  const absolute = destination === "/" ? `${origin}/` : `${origin}${destination}`
  return `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${absolute}">
<meta http-equiv="refresh" content="0; url=${absolute}">
<script>location.replace(${JSON.stringify(absolute)})</script>
</head>
<body>
<p>This page has moved. <a href="${absolute}">Continue</a>.</p>
</body>
</html>
`
}

function assertRedirectHtml() {
  const site = "https://pinkmoonrecords.co.uk"
  const problems: string[] = []
  for (const item of villageRedirects()) {
    const html = redirectHtml(item.destination, site)
    const origin = site.replace(/\/$/, "")
    const absolute = item.destination === "/" ? `${origin}/` : `${origin}${item.destination}`
    if (/noindex/i.test(html)) problems.push(`${item.slug} stub contains noindex`)
    if (!html.includes(`rel="canonical" href="${absolute}"`)) problems.push(`${item.slug} canonical is not absolute`)
    if (!html.includes(`http-equiv="refresh" content="0; url=${absolute}"`)) {
      problems.push(`${item.slug} meta refresh is not an instant absolute URL`)
    }
    if (!html.includes(`location.replace(${JSON.stringify(absolute)})`)) {
      problems.push(`${item.slug} location.replace is not absolute`)
    }
  }
  const legacy = redirectHtml("/", site)
  if (/noindex/i.test(legacy) || !legacy.includes("https://pinkmoonrecords.co.uk/")) {
    problems.push("legacy base-path stub is not an absolute redirect to the home page")
  }
  if (problems.length) throw new Error(problems.join("\n"))
}

/** Redirect stubs must not be submitted. The hub page must be. */
function assertSitemapOmitsStubs() {
  const sitemapPath = path.join(root, "out", "sitemap.xml")
  if (!existsSync(sitemapPath)) return
  const xml = readFileSync(sitemapPath, "utf8")
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
  const problems: string[] = []
  for (const item of villageRedirects()) {
    if (locs.some((loc) => loc.endsWith(`/sell-vinyl-records/${item.slug}/`))) {
      problems.push(`sitemap lists redirect stub ${item.slug}`)
    }
  }
  if (locs.some((loc) => loc.includes("/bottesford-steven-garfield"))) {
    problems.push("sitemap lists the old base path")
  }
  if (!locs.some((loc) => loc.endsWith("/sell-vinyl-records/"))) {
    problems.push("sitemap is missing /sell-vinyl-records/")
  }
  if (problems.length) throw new Error(problems.join("\n"))
}

function writeHtml() {
  assertComplete()
  assertRedirectHtml()
  const out = path.join(root, "out", "sell-vinyl-records")
  if (!existsSync(out)) return
  assertSitemapOmitsStubs()
  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pinkmoonrecords.co.uk").replace(/\/$/, "")
  for (const item of villageRedirects()) {
    const directory = path.join(out, item.slug)
    mkdirSync(directory, { recursive: true })
    writeFileSync(path.join(directory, "index.html"), redirectHtml(item.destination, site))
  }
  // Old project base path from before a7ab7c5. Only the directory root can be
  // an HTML redirect. Hashed /_next assets under that prefix are gone, and a
  // static host cannot 301 a whole prefix, so those stay 404.
  const legacy = path.join(root, "out", "bottesford-steven-garfield")
  mkdirSync(legacy, { recursive: true })
  writeFileSync(path.join(legacy, "index.html"), redirectHtml("/", site))
}

const command = process.argv[2]
if (command === "--check") checkVercel()
else if (command === "--write-vercel") writeVercel()
else if (command === "--write-html") writeHtml()
else {
  throw new Error("Use --check, --write-vercel, or --write-html")
}
