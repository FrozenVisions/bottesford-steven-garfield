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
import {
  compass,
  formatMiles,
  insidePlaces,
  nearestInside,
  placeBySlug,
  placeSlug,
} from "@/lib/places"
import { contact, site, siteUrl, wanted } from "@/lib/site"
import { cn } from "cn"

export function generateStaticParams() {
  return insidePlaces.map((place) => ({ village: placeSlug(place) }))
}

function copy(slug: string) {
  const place = placeBySlug(slug)
  if (!place) return null
  const miles = formatMiles(place.miles)
  return {
    place,
    miles,
    direction: compass(place.bearing),
    title: `Sell Vinyl Records in ${place.name} | Pink Moon Records`,
    description: `Selling vinyl records in ${place.name}, ${place.county}? I am Steven Gee, ${miles} miles away in Bottesford. I buy all types of record collections and mainly want late 1960s and early 1970s rock. Email ${contact.email} or call ${contact.phoneDisplay}.`,
  }
}

export async function generateMetadata(props: PageProps<"/sell-vinyl-records/[village]">): Promise<Metadata> {
  const { village } = await props.params
  const page = copy(village)
  if (!page) return {}
  return {
    title: page.title,
    description: page.description,
    keywords: [
      `sell vinyl records ${page.place.name}`,
      `vinyl record buyer ${page.place.name}`,
      `sell record collection ${page.place.name}`,
      `we buy records ${page.place.name}`,
      `old LPs wanted ${page.place.name}`,
      `${page.place.name} ${page.place.county} vinyl`,
      "late 60s rock vinyl wanted",
      "early 70s rock records wanted",
      "Steven Gee",
    ],
    alternates: { canonical: `/sell-vinyl-records/${village}` },
    openGraph: {
      title: page.title,
      description: page.description,
      type: "website",
      locale: "en_GB",
      url: `/sell-vinyl-records/${village}`,
    },
  }
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
  const page = copy(village)
  if (!page) notFound()
  const { place, miles, direction } = page
  const neighbours = nearestInside(place)
  const url = `${siteUrl()}/sell-vinyl-records/${village}`

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `Buying vinyl record collections in ${place.name}`,
        description: page.description,
        provider: { "@id": `${siteUrl()}/#steven-gee` },
        areaServed: { "@type": "Place", name: `${place.name}, ${place.county}` },
        url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Pink Moon Records", item: siteUrl() },
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
            {place.name} · {place.county} · {miles} miles from Bottesford
          </p>
          <h1 className="text-2xl leading-[1.1] text-balance uppercase sm:text-4xl">
            Selling vinyl records in {place.name}?
          </h1>
          <p className="text-base leading-6 text-muted-foreground">
            I am Steven Gee. I live in Bottesford, and {place.name} lies
            {" "}{miles} miles {direction} of my home. I will come and view your records in the comfort of your own home
            in {place.name}. Any situation or quantity always considered.
          </p>
          <p className="text-base leading-6 text-muted-foreground">
            I will look at all types of record collection, and I may be interested
            in buying more than rock, as I collect all kinds of music for my own shelves. What I am mainly
            hoping to find is rock from the late nineteen-sixties and early
            seventies. If you have a few boxes from {place.name} that have not
            been played for years, email me before they go to the tip.
          </p>
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

        <section className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">What I am hoping to find in {place.name}</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Albums, singles and box sets, in their sleeves if you still have
              them. Original UK pressings and gatefold sleeves are a joy to me,
              but I will look at plain, played, well-loved copies too.
            </p>
          </div>
          <div>
            <h2 className="text-3xl">Every other kind of record too</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              I collect for my own shelves, so I never turn a good record away.
              From {place.name} I am happy to look at:
            </p>
            <ul className="mt-5 grid gap-x-6 gap-y-1 text-lg sm:grid-cols-2">
              {wanted.other.map((name) => (
                <li key={name} className="border-b border-border py-2">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-3xl">
          <h2 className="text-3xl">Nearby villages I also visit</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            If a neighbour in one of these places has records to sell, send them
            my way.
          </p>
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
