import Link from "next/link"
import { BrandName } from "@/components/brand-name"
import { ContactStrip } from "@/components/contact-strip"
import { PhotoCredits } from "@/components/photo-credits"
import { buttonVariants } from "@/components/ui/button"
import { contact, site } from "@/lib/site"
import { cn } from "cn"

export function SiteHeader() {
  return (
    <>
    <ContactStrip />
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-2.5 sm:py-3">
        <div className="flex items-center gap-6">
          <BrandName href="/" />
          <nav aria-label="Main">
            <Link href="/blog" className="text-sm font-semibold underline-offset-4 hover:underline">
              Blog
            </Link>
          </nav>
        </div>
        <a href={`mailto:${contact.email}`} className={cn(buttonVariants({ size: "lg" }), "hidden h-12 px-5 text-base sm:inline-flex")}>
          Email me
        </a>
      </div>
    </header>
    </>
  )
}

export function SiteFooter() {
  return (
    <>
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
            <p>Steven Gee. I buy vinyl, within 30 miles of Bottesford.</p>
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
