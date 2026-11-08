import { EnquiryForm } from "@/components/enquiry-form"
import { SectionRule } from "@/components/druid-ornaments"
import { SiteHeader } from "@/components/site-chrome"
import { HowItWorks } from "@/components/how-it-works"
import { Photo } from "@/components/photo"
import { PhotoCredits } from "@/components/photo-credits"
import { RangeMap } from "@/components/range-map"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { formatMiles, insidePlaces, placeSlug } from "@/lib/places"
import { structuredData } from "@/lib/structured-data"
import { contact, faqs, site, wanted } from "@/lib/site"
import { cn } from "cn"

const callClass = cn(
  buttonVariants({ size: "lg" }),
  "h-10 px-4 text-sm"
)


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

      <SiteHeader />

      <main className="mx-auto flex w-full max-w-5xl flex-col gap-20 px-5 pt-5 pb-16 sm:pt-6 sm:pb-20">
        <section className="grid items-center gap-4 rounded-3xl border border-border bg-card p-3 shadow-sm sm:gap-5 sm:p-4 md:grid-cols-[0.9fr_1.1fr]">
          <Photo src="/images/record-bins.webp" alt="Rows of vinyl records in browser boxes" className="order-first aspect-[4/3] w-full rounded-2xl object-cover md:aspect-[4/5]" />
          <div className="flex flex-col gap-3">
            <h1 className="text-2xl leading-[1.1] text-balance uppercase sm:text-4xl">
              I buy vinyl collections near Bottesford
            </h1>
            <p className="max-w-xl text-base leading-6 text-muted-foreground">
              I am Steven. I will come to your home and view your records.
              Rock from the nineteen-sixties and seventies, any type of it, is
              the music I have loved longest. If the rest is not rock, that is
              OK: I still may be interested in buying it, as I collect all
              kinds of music for my own shelves.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a href={`mailto:${contact.email}`} className={callClass}>
                Email me
              </a>
              <a
                href={contact.phoneHref}
                className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-10 px-4 text-sm")}
              >
                Or call {contact.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <SectionRule className="-my-10" />
        <HowItWorks />

        <figure>
          <Photo src="/images/pink-moon.webp" alt="A very large pink full moon rising over a dark forest" className="aspect-[16/8] w-full rounded-3xl object-cover" />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            The pink moon, by <a className="underline underline-offset-4" href="https://unsplash.com/photos/a-very-large-pink-full-moon-rising-over-a-forest-g7iIhEsy5TI">Maciek Sulkowski on Unsplash</a>. Pink Moon is just me, Steven Gee, and these are the colours of the evenings I spend with my records.
          </figcaption>
        </figure>

        <section className="grid gap-8 md:grid-cols-3" aria-label="What I buy">
          <article className="overflow-hidden rounded-2xl border-2 border-foreground bg-card">
            <Photo src="/images/holding-record.webp" alt="Someone holding a record from a home collection" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
            <h2 className="text-2xl uppercase">I come to you</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              There is no shop. If you are within 30 miles of Bottesford, I
              will come and see the collection in the comfort of your own home.
            </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border-2 border-foreground bg-card">
            <Photo src="/images/turntable-needle.webp" alt="A turntable needle on a spinning record" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
            <h2 className="text-2xl uppercase">1960s and 1970s rock</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Any rock from those years. The loud and the quiet, the famous
              and the one that never left its sleeve. Lofts, shelves, boxes
              from a house being cleared, any situation or quantity always considered.
            </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl border-2 border-foreground bg-card">
            <Photo src="/images/record-shelves.webp" alt="Shelves of records in many styles" className="aspect-[4/3] w-full object-cover" />
            <div className="p-5">
            <h2 className="text-2xl uppercase">Whatever else belongs with me</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              I am interested in viewing more than 60s and 70s rock. If you have
              other records, I would like the opportunity to view and buy them.
            </p>
            </div>
          </article>
        </section>

        <SectionRule className="-my-10" />
        <figure>
          <Photo src="/images/oak-in-the-mist.webp" alt="A large oak tree standing in pink mist beside a still pond" className="aspect-[16/9] w-full rounded-3xl object-cover" />
          <figcaption className="mt-2 text-sm leading-6 text-muted-foreground">
            Oak in the mist, by <a className="underline underline-offset-4" href="https://www.geograph.org.uk/photo/2271111">Sally</a> (<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>). The same pink light I named Pink Moon after.
          </figcaption>
        </figure>

        <section aria-labelledby="wanted">
          <h2 id="wanted" className="text-3xl sm:text-4xl">
            What I am hoping to find
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            Late 1960s and early 1970s rock LPs, singles and box sets are my
            first love: {wanted.styles.join(", ")}. Original UK pressings,
            gatefold sleeves and the old label designs ({wanted.labels.join(", ")}) make me smile, though I will look at any copy.
          </p>
          <p className="mt-6 max-w-2xl leading-7 text-muted-foreground">
            And all the rest, too: {wanted.other.join(", ")}. I collect for my
            own shelves, so a good record is never turned away.
          </p>
        </section>

        <figure>
          <Photo src="/images/druid-stonehenge.webp" alt="The ancient standing stones of Stonehenge on green grass under a grey sky" className="aspect-[16/8] w-full rounded-3xl object-cover" />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            The old stones the druids are remembered by, by <a className="underline underline-offset-4" href="https://unsplash.com/photos/a-large-stone-structure-in-the-middle-of-a-field-yP8HHiF2okM">Priyank V on Unsplash</a>. Records from the sixties and seventies feel much the same to me: made to last, and worth standing in a field for.
          </figcaption>
        </figure>

        <figure>
          <Photo src="/images/castlerigg-circle.webp" alt="Castlerigg stone circle, standing stones in a green field with misty hills behind" className="aspect-[16/9] w-full rounded-3xl object-cover" />
          <figcaption className="mt-2 text-sm leading-6 text-muted-foreground">
            Castlerigg stone circle on a misty morning, by <a className="underline underline-offset-4" href="https://commons.wikimedia.org/wiki/File:Castlerigg_Stone_Circle_with_Latrigg_behind.jpg">Dominic Nelson</a> (<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>).
          </figcaption>
        </figure>

        <section className="grid items-start gap-10 lg:grid-cols-[minmax(0,540px)_1fr]" id="area">
          <div>
            <h2 className="text-3xl sm:text-4xl">30 miles from my home</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
              I live in Bottesford. I will travel 30 miles from home to look at
              a vinyl collection, or even further if you have a very large or
              unusual collection. Open the list for some of the places nearest
              to me.
            </p>
            <div className="mt-8">
              <RangeMap />
            </div>
          </div>
          <details className="group rounded-2xl border-2 border-foreground bg-card">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              See nearby areas ({insidePlaces.length})
              <span aria-hidden="true" className="text-2xl transition-transform group-open:rotate-180">▾</span>
            </summary>
            <ul className="grid max-h-80 gap-x-6 overflow-y-auto border-t border-border px-5 py-3 sm:grid-cols-2">
              {insidePlaces.map((place) => (
                <li key={place.name} className="flex items-baseline justify-between gap-3 border-b border-border py-2 text-sm">
                  <Link
                    href={`/sell-vinyl-records/${placeSlug(place)}`}
                    className="underline decoration-primary underline-offset-4"
                  >
                    {place.name}
                  </Link>
                  <span className="shrink-0 text-muted-foreground">{formatMiles(place.miles)} mi</span>
                </li>
              ))}
            </ul>
          </details>
        </section>

        <figure>
          <Photo src="/images/stanton-drew-moon.webp" alt="Standing stones of the north-east circle at Stanton Drew under a bright moon at night" className="aspect-[16/10] w-full rounded-3xl object-cover" />
          <figcaption className="mt-2 text-sm leading-6 text-muted-foreground">
            The north-east circle at Stanton Drew under the moon, by <a className="underline underline-offset-4" href="https://www.geograph.org.uk/photo/8229296">Neil Owen</a> (<a className="underline underline-offset-4" href="https://creativecommons.org/licenses/by-sa/2.0">CC BY-SA 2.0</a>).
          </figcaption>
        </figure>

        <SectionRule className="-my-10" />
        <section>
          <h2 className="text-3xl sm:text-4xl">What people ask me</h2>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {faqs.map((item) => (
              <details key={item.question} className="group py-4">
                <summary className="cursor-pointer text-lg font-heading">
                  {item.question}
                </summary>
                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

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
              round and look. Tell me your location, too. My card is also on the notice board at {site.hall}.
            </p>
          </div>
          <div className="min-w-0 rounded-2xl border border-border bg-background p-4 sm:p-7">
            <EnquiryForm />
          </div>
        </section>
        <Photo src="/images/record-shop-crates.webp" alt="Crates of records" className="aspect-[16/7] w-full rounded-3xl object-cover" />
      </main>

      <footer className="border-t border-border pb-24 sm:pb-0">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-8 text-sm text-muted-foreground">
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p>
              {site.name}, {site.place}, {site.county}, {site.postcode}
            </p>
            <p>
              <Link href="/blog" className="underline underline-offset-4">Blog</Link>
            </p>
            <p>Email {contact.email} (best) or call {contact.phoneDisplay}.</p>
            <p>Steven Gee. I buy vinyl, within 30 miles of Bottesford.</p>
          </div>
          <p className="max-w-3xl leading-6"><PhotoCredits /></p>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <a href={`mailto:${contact.email}`} className={cn(callClass, "w-full")}>
          Email me
        </a>
      </div>
    </>
  )
}
