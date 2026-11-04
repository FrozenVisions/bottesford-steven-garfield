import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { contact, site } from "@/lib/site"
import { cn } from "cn"

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm tracking-[0.16em] uppercase underline-offset-4 hover:underline">
            Steven Garfield
          </Link>
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
  )
}

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.name}, {site.place}, {site.county}, {site.postcode}
          </p>
          <p className="flex gap-4">
            <Link href="/" className="underline underline-offset-4">Home</Link>
            <Link href="/blog" className="underline underline-offset-4">Blog</Link>
          </p>
          <p>Email {contact.email} (best) or call {contact.phoneDisplay}.</p>
          <p>Steven Garfield, also Steven Gee. I buy vinyl, within ten miles.</p>
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
