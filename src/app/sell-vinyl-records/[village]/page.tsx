import type { Metadata } from "next"
import Link from "next/link"
import { Photo } from "@/components/photo"
import { PhotoCredits } from "@/components/photo-credits"
import { SectionRule } from "@/components/druid-ornaments"
import { SiteHeader } from "@/components/site-chrome"
import { HowItWorks } from "@/components/how-it-works"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { EnquiryForm } from "@/components/enquiry-form"
import { buttonVariants } from "@/components/ui/button"
import { nearbyTowns, placeBySlug, placeSlug, townPages } from "@/lib/places"
import { placeTitle } from "@/lib/place-meta"
import { townCopy } from "@/lib/town-copy"
import { absoluteUrl, contact, site } from "@/lib/site"
import { socialMetadata } from "@/lib/social"
import { cn } from "cn"

export const dynamicParams = false

export function generateStaticParams() {
  return townPages().map((place) => ({ village: placeSlug(place) }))
}

function articleFor(slug: string) {
  const place = placeBySlug(slug)
  const article = townCopy[slug]
  if (!place || !article) return null
  return { place, article, title: placeTitle(place.name) }
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]|]+\|[^\]]+\]\])/)
  return parts.map((part, index) => {
    const link = /^\[\[([^\]|]+)\|([^\]]+)\]\]$/.exec(part)
    if (!link) return <span key={index}>{part}</span>
    const href = link[1]
    const external = href.startsWith("mailto:") || href.startsWith("tel:")
    const className = external
      ? "text-foreground underline decoration-primary underline-offset-4 break-all"
      : "underline underline-offset-4"
    if (external) {
      return (
        <a key={index} href={href} className={className}>
          {link[2]}
        </a>
      )
    }
    return (
      <Link key={index} href={href} className={className}>
        {link[2]}
      </Link>
    )
  })
}

export async function generateMetadata(props: PageProps<"/sell-vinyl-records/[village]">): Promise<Metadata> {
  const { village } = await props.params
  const page = articleFor(village)
  if (!page) return {}
  return socialMetadata({
    title: page.title,
    description: page.article.description,
    path: `/sell-vinyl-records/${village}/`,
    keywords: [
      `sell vinyl records ${page.place.name}`,
      `record buyer ${page.place.name}`,
      `records wanted ${page.place.name}`,
      "1960s and 1970s rock vinyl",
      "Pink Moon Records",
    ],
    image: {
      url: "/images/holding-record.webp",
      alt: "Someone holding a vinyl record from a home collection",
    },
  })
}

export default function VillagePage(props: PageProps<"/sell-vinyl-records/[village]">) {
  return (
    <Suspense fallback={null}>
      <VillageContent params={props.params} />
    </Suspense>
  )
}

async function VillageContent({ params }: { params: Promise<{ village: string }> }) {
  const { village } = await params
  const page = articleFor(village)
  if (!page) notFound()
  const { place, article } = page
  const [lede, second, ...rest] = article.paragraphs
  const neighbours = nearbyTowns(place)
  const url = absoluteUrl(`/sell-vinyl-records/${village}`)

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Buying vinyl record collections in ${place.name}`,
        description: article.description,
        provider: { "@id": `${absoluteUrl("/")}#business` },
        areaServed: { "@type": "Place", name: `${place.name}, ${place.county}` },
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Pink Moon Records", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: `Sell vinyl records in ${place.name}`, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-5 pt-5 pb-16 sm:pt-6 sm:pb-20">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="underline underline-offset-4">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{place.name}</li>
          </ol>
        </nav>

        <div className="grid items-center gap-4 rounded-3xl border border-border bg-card p-3 sm:gap-5 sm:p-4 md:grid-cols-[1.2fr_0.8fr]">
          <section className="flex flex-col gap-3">
            <p className="text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
              {place.name} · {place.county}
            </p>
            <h1 className="text-2xl leading-[1.1] text-balance uppercase sm:text-4xl">
              Selling vinyl records in {place.name}?
            </h1>
            <p className="text-base leading-6 text-muted-foreground"><RichText text={lede} /></p>
            {second && !second.startsWith("## ") ? (
              <p className="text-base leading-6 text-muted-foreground"><RichText text={second} /></p>
            ) : null}
            <div className="flex flex-col gap-2 sm:flex-row">
              <a href={`mailto:${contact.email}`} className={cn(buttonVariants({ size: "lg" }), "h-10 px-4 text-sm")}>
                Email me
              </a>
              <a
                href={contact.phoneHref}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-10 px-4 text-sm")}
              >
                Or call {contact.phoneDisplay}
              </a>
            </div>
          </section>
          <Photo src="/images/holding-record.webp" alt="Someone holding a record from a home collection" className="aspect-[4/5] w-full rounded-2xl object-cover" />
        </div>

        <article className="flex max-w-3xl flex-col gap-4">
          {(second?.startsWith("## ") ? [second, ...rest] : rest).map((paragraph) =>
            paragraph.startsWith("## ") ? (
              <h2 key={paragraph} className="mt-4 text-3xl">{paragraph.replace(/^##\s+/, "")}</h2>
            ) : (
              <p key={paragraph} className="leading-7 text-muted-foreground"><RichText text={paragraph} /></p>
            )
          )}
        </article>

        <section className="max-w-3xl">
          <h2 className="text-3xl">Other places with a page</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {neighbours.map((other) => (
              <li key={other.name}>
                <Link
                  href={`/sell-vinyl-records/${placeSlug(other)}`}
                  className="inline-block border border-foreground px-4 py-2 underline-offset-4 hover:underline"
                >
                  Sell vinyl in {other.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/" className="inline-block border border-foreground px-4 py-2 underline-offset-4 hover:underline">
                Bottesford
              </Link>
            </li>
            <li>
              <Link href="/blog" className="inline-block border border-foreground px-4 py-2 underline-offset-4 hover:underline">
                Notes on selling records
              </Link>
            </li>
          </ul>
        </section>

        <SectionRule className="-my-6" />
        <figure>
          <Photo src="/images/castlerigg-circle.webp" alt="Castlerigg stone circle, standing stones in a green field with misty hills behind" className="aspect-[16/8] w-full rounded-3xl object-cover" />
          <figcaption className="mt-2 text-sm leading-6 text-muted-foreground">
            Castlerigg stone circle on a misty morning, by <a className="underline underline-offset-4" href="https://commons.wikimedia.org/wiki/File:Castlerigg_Stone_Circle_with_Latrigg_behind.jpg">Dominic Nelson</a> (<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>).
          </figcaption>
        </figure>
        <HowItWorks />

        <section id="contact" className="grid grid-cols-1 gap-8 [&>*]:min-w-0 rounded-3xl border border-border bg-card p-5 sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Email me, or ring</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Email is best:{" "}
              <a className="text-foreground underline decoration-primary underline-offset-4 break-all" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              . I am happy to take a phone call too, on{" "}
              <a className="text-foreground underline decoration-primary underline-offset-4" href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
              . Give me a rough idea of what is in the collection, or attach a
              few photos to the email. No full list is needed, as I can come
              round and look. Tell me you are in {place.name}. My card is also on the notice board at {site.hall}.
            </p>
          </div>
          <div className="border border-border bg-card p-4 sm:p-7">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border pb-24 sm:pb-0">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>
              {site.name}, {site.place}, {site.county}, {site.postcode}
            </p>
            <p className="flex gap-4">
              <Link href="/" className="underline underline-offset-4">Home</Link>
              <Link href="/blog" className="underline underline-offset-4">Blog</Link>
            </p>
            <p>Email {contact.email} (best) or call {contact.phoneDisplay}.</p>
            <p>Steven Gee. I buy vinyl.</p>
          </div>
          <p className="max-w-3xl leading-6"><PhotoCredits /></p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <a href={`mailto:${contact.email}`} className={cn(buttonVariants({ size: "lg" }), "h-12 w-full px-5 text-base")}>
          Email me
        </a>
      </div>
    </>
  )
}
