import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { placeSlug, townPages } from "@/lib/places"
import { absoluteUrl, contact, site } from "@/lib/site"
import { socialMetadata } from "@/lib/social"

const title = "Sell Vinyl Records in These Places | Pink Moon Records"
const description =
  "I am Steven Gee of Pink Moon Records in Bottesford. These are the places I will come to, to view a vinyl collection at your home. 1960s and 1970s rock, and other records."

export const metadata: Metadata = {
  ...socialMetadata({
    title,
    description,
    path: "/sell-vinyl-records/",
    keywords: [
      "sell vinyl records",
      "record buyer",
      "vinyl collection buyer",
      "Pink Moon Records",
      "Steven Gee",
    ],
    image: {
      url: "/images/record-bins.webp",
      alt: "Rows of vinyl records in boxes",
    },
  }),
  robots: { index: true, follow: true },
}

export default function SellVinylRecordsPage() {
  const places = townPages()
  const url = absoluteUrl("/sell-vinyl-records")
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Pink Moon Records", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Sell vinyl records", item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: "Places with a page",
        itemListElement: places.map((place, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${place.name}, ${place.county}`,
          url: absoluteUrl(`/sell-vinyl-records/${placeSlug(place)}`),
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 pt-5 pb-16 sm:pt-6 sm:pb-20">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="underline underline-offset-4">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Sell vinyl records</li>
          </ol>
        </nav>

        <section className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl leading-[1.05] text-balance uppercase sm:text-5xl">
            Sell vinyl records
          </h1>
          <p className="text-lg leading-8 text-muted-foreground">
            I am Steven Gee. Pink Moon Records is just me, at home in {site.place}, {site.postcode}.
            There is no shop. If you want to sell vinyl records, I will come to your home and view them.
          </p>
          <p className="leading-7 text-muted-foreground">
            Rock from the nineteen-sixties and seventies is what I have loved longest. Other records
            are welcome too. These are the places with their own page, nearest to Bottesford first.
            I cover the villages around them as well. Anywhere nearby is fine for a few records, and
            I will travel any distance for a good collection. If the house is in Bottesford itself,
            start from the <Link href="/" className="underline underline-offset-4">home page</Link>.
          </p>
        </section>

        <ul className="flex flex-wrap gap-3">
          {places.map((place) => (
            <li key={place.name}>
              <Link
                href={`/sell-vinyl-records/${placeSlug(place)}`}
                className="inline-block border border-foreground px-4 py-2 underline-offset-4 hover:underline"
              >
                Sell vinyl in {place.name}
                <span className="text-muted-foreground"> · {place.county}</span>
              </Link>
            </li>
          ))}
        </ul>

        <section className="max-w-3xl">
          <h2 className="text-3xl">Email me, or ring</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Email is best:{" "}
            <a className="text-foreground underline decoration-primary underline-offset-4 break-all" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            . I am happy to take a phone call too, on{" "}
            <a className="text-foreground underline decoration-primary underline-offset-4" href={contact.phoneHref}>
              {contact.phoneDisplay}
            </a>
            . Give me a rough idea of what is in the collection, or attach a few photos to the email.
            No full list is needed, as I can come round and look. Tell me the place. My card is also
            on the notice board at {site.hall}.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
