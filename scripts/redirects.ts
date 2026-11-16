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

function writeHtml() {
  assertComplete()
  const out = path.join(root, "out", "sell-vinyl-records")
  if (!existsSync(out)) return
  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://pinkmoonrecords.co.uk").replace(/\/$/, "")
  for (const item of villageRedirects()) {
    const directory = path.join(out, item.slug)
    mkdirSync(directory, { recursive: true })
    const absolute = item.destination === "/" ? `${site}/` : `${site}${item.destination}`
    const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<link rel="canonical" href="${absolute}">
<meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${item.destination}">
<script>location.replace(${JSON.stringify(item.destination)})</script>
</head>
<body>
<p>This page has moved. <a href="${item.destination}">Continue</a>.</p>
</body>
</html>
`
    writeFileSync(path.join(directory, "index.html"), html)
  }
}

const command = process.argv[2]
if (command === "--check") checkVercel()
else if (command === "--write-vercel") writeVercel()
else if (command === "--write-html") writeHtml()
else {
  throw new Error("Use --check, --write-vercel, or --write-html")
}
