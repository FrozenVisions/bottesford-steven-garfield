import { contact } from "@/lib/site"

/** Thin bar with email first, phone second, shown above every header. */
export function ContactStrip() {
  return (
    <div className="bg-[#152018] text-sm text-[#faf6ee]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2">
        <p>
          <span className="font-bold text-[#f3c6d4]">E</span>{" "}
          <a href={`mailto:${contact.email}`} className="underline underline-offset-4 break-all">{contact.email}</a>
          <span className="mx-3 opacity-50">|</span>
          <span className="font-bold text-[#f3c6d4]">T</span>{" "}
          <a href={contact.phoneHref} className="underline underline-offset-4">{contact.phoneDisplay}</a>
        </p>
        <p className="hidden tracking-[0.12em] uppercase sm:block">Pink Moon · Bottesford · 30 miles</p>
      </div>
    </div>
  )
}
