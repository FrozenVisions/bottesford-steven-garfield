import { contact } from "@/lib/site"

/** Thin bar with email first, phone second, shown above every header. */
export function ContactStrip() {
  return (
    <div className="bg-[#152018] text-xs leading-5 text-[#faf6ee]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-0.5 px-4 py-1">
        <p>
          <span className="font-bold text-[#f3c6d4]">E</span>{" "}
          <a href={`mailto:${contact.email}`} className="underline underline-offset-4 break-all">{contact.email}</a>
          <span className="mx-2 opacity-50">|</span>
          <span className="font-bold text-[#f3c6d4]">T</span>{" "}
          <a href={contact.phoneHref} className="underline underline-offset-4">{contact.phoneDisplay}</a>
        </p>
        <p className="hidden tracking-[0.08em] uppercase sm:block">Pink Moon · Bottesford · 30 miles</p>
      </div>
    </div>
  )
}
