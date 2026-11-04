import { EnquiryForm } from "@/components/enquiry-form"
import { RangeMap } from "@/components/range-map"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { formatMiles, insidePlaces, outsidePlaces, placeSlug } from "@/lib/places"
import { structuredData } from "@/lib/structured-data"
import { contact, faqs, site, wanted } from "@/lib/site"
import { cn } from "cn"

const callClass = cn(
  buttonVariants({ size: "lg" }),
  "h-12 px-5 text-base"
)

const near = insidePlaces.filter((place) => place.miles <= 5)
const far = insidePlaces.filter((place) => place.miles > 5)

export default function Home() {
  const data = structuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <a
        href="#contact"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:bg-card focus:px-3 focus:py-2"
      >
        Skip to contact
      </a>

      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
          <p className="text-sm tracking-[0.16em] uppercase">Steven Garfield</p>
          <a href={contact.phoneHref} className={cn(callClass, "hidden sm:inline-flex")}>
            Call {contact.phoneDisplay}
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-5 pt-12 pb-28 sm:pb-20">
        <section className="grid items-center gap-10 md:grid-cols-[1.3fr_0.7fr]">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-foreground uppercase">
              {site.place} · {site.postcode} · ten miles, no further
            </p>
            <h1 className="text-4xl leading-[1.05] text-balance sm:text-6xl">
              I buy vinyl collections near Bottesford
            </h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              I am Steven Garfield. I will come to the house and sit with the
              records. Rock from the nineteen-sixties and seventies, any type
              of it, is the music I have loved longest. If the rest is not
              rock, I still want to see it. I collect for my own shelves.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={contact.phoneHref} className={callClass}>
                Call {contact.phoneDisplay}
              </a>
              <a
                href={`mailto:${contact.email}`}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-12 px-5 text-base")}
              >
                Write to me
              </a>
            </div>
          </div>
          <div className="mx-auto grid size-64 place-items-center rounded-full bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.25)] sm:size-72" aria-hidden="true">
            <div className="grid size-32 place-items-center rounded-full bg-[#f5a800] text-[#111111]">
              <span className="text-center leading-none">
                <span className="block font-[family-name:var(--font-fraunces)] text-6xl font-bold">10</span>
                <span className="text-xs font-bold tracking-[0.2em]">MILES</span>
              </span>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-3" aria-label="What I buy">
          <article className="border-t border-foreground pt-4">
            <h2 className="text-2xl">I come to you</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              There is no shop. If you are within ten miles of Bottesford, I
              will come and see the collection where it has lived.
            </p>
          </article>
          <article className="border-t border-foreground pt-4">
            <h2 className="text-2xl">1960s and 1970s rock</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Any rock from those years. The loud and the quiet, the famous
              and the one that never left its sleeve. Lofts, shelves, boxes
              from a house being cleared.
            </p>
          </article>
          <article className="border-t border-foreground pt-4">
            <h2 className="text-2xl">Whatever else belongs with me</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              I am eager to collect more than those two decades. If another
              record ought to be on my shelves, I want the chance to know it.
            </p>
          </article>
        </section>

        <section aria-labelledby="wanted">
          <h2 id="wanted" className="text-3xl sm:text-4xl">
            What I am hoping to find
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Late 1960s and early 1970s rock LPs, singles and box sets are my
            first love: {wanted.styles.join(", ")}. Original UK pressings,
            gatefold sleeves and the old label designs ({wanted.labels.join(", ")}) make me smile, though I will look at any copy.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {wanted.rock.map((name) => (
              <li key={name} className="border border-foreground px-3 py-1 text-sm">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
            And all the rest, too: {wanted.other.join(", ")}. I collect for my
            own shelves, so a good record is never turned away.
          </p>
        </section>

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,540px)_1fr]" id="area">
          <div>
            <h2 className="text-3xl sm:text-4xl">Ten miles from my village</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              I live in Bottesford. Ten miles, in a straight line from the
              middle of the village, is as far as I go. If you are in Muston,
              Redmile, Orston, Belvoir, or another place inside the circle, I
              can come and look at a vinyl collection.
            </p>
            <div className="mt-8">
              <RangeMap />
            </div>
          </div>
          <div className="grid gap-8">
            {[
              { title: "Within five miles", places: near },
              { title: "Five to ten miles", places: far },
            ].map((band) => (
              <div key={band.title}>
                <h3 className="text-xl">{band.title}</h3>
                <ul className="mt-4 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  {band.places.map((place) => (
                    <li key={place.name} className="flex items-baseline justify-between gap-3 border-b border-border py-2 text-sm">
                      <span>
                        <Link
                          href={`/sell-vinyl-records/${placeSlug(place)}`}
                          className="underline decoration-primary underline-offset-4"
                        >
                          Sell vinyl in {place.name}
                        </Link>
                        <span className="block text-muted-foreground">{place.county}</span>
                      </span>
                      <span className="shrink-0 text-muted-foreground">
                        {formatMiles(place.miles)} miles
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-xl">Where I stop, beyond ten miles</h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {outsidePlaces.map((place) => (
                  <li key={place.name} className="text-sm text-muted-foreground">
                    {place.name}, {formatMiles(place.miles)} miles from Bottesford
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl sm:text-4xl">What people ask me</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer text-lg font-[family-name:var(--font-fraunces)]">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl sm:text-4xl">Ring me, or write</h2>
            <p className="mt-4 leading-7 text-muted-foreground">
              Call{" "}
              <a className="text-foreground underline decoration-primary underline-offset-4" href={contact.phoneHref}>
                {contact.phoneDisplay}
              </a>
              , or email{" "}
              <a className="text-foreground underline decoration-primary underline-offset-4 break-all" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              . Tell me the village, and whether there is sixties and seventies
              rock among the records. My card is also on the notice board at {site.hall}.
            </p>
          </div>
          <div className="border border-border bg-card p-5 sm:p-7">
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name}, {site.place}, {site.county}, {site.postcode}
          </p>
          <p>Steven Garfield, also Steven Gee. I buy vinyl, within ten miles.</p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <a href={contact.phoneHref} className={cn(callClass, "w-full")}>
          Call {contact.phoneDisplay}
        </a>
      </div>
    </>
  )
}
