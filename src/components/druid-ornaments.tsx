/** Lightweight druid ornaments. Decorative only: hidden from assistive tech. */

export function OakLeaf({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 1.5c-.4 3.2-2.6 4.6-5.2 5.2 2.2.8 3.2 2.6 3.4 4.6-1.6-.2-3.2.4-4.6 1.8 2 .6 3.2 2.2 3.4 4.2-1.2-.6-2.6-.4-3.8.4 1.6 1.6 3.6 2.2 5.8 1.8.4 2.2.6 3.6 1 4.5.4-.9.6-2.3 1-4.5 2.2.4 4.2-.2 5.8-1.8-1.2-.8-2.6-1-3.8-.4.2-2 1.4-3.6 3.4-4.2-1.4-1.4-3-2-4.6-1.8.2-2 1.2-3.8 3.4-4.6-2.6-.6-4.8-2-5.2-5.2z"
      />
    </svg>
  )
}

export function TrinityKnot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="8" r="5" />
        <circle cx="8.2" cy="15" r="5" />
        <circle cx="15.8" cy="15" r="5" />
      </g>
    </svg>
  )
}

/** Moon phases over a short row of standing stones. */
export function SectionRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-[#3f6b4a] ${className}`} aria-hidden="true">
      <OakLeaf className="size-6 shrink-0" />
      <svg viewBox="0 0 248 52" className="h-11 w-56 max-w-[70%]">
        <line x1="4" y1="46" x2="244" y2="46" stroke="#5c564e" strokeWidth="1.2" />
        <circle cx="24" cy="20" r="8" fill="none" stroke="#5c564e" strokeWidth="1.5" />
        <circle cx="54" cy="20" r="8" fill="#c45d78" />
        <circle cx="59" cy="19" r="6.4" fill="#f3ecdf" />
        <path fill="#c45d78" stroke="#5c564e" strokeWidth="1" d="M84 12a8 8 0 0 1 0 16z" />
        <circle cx="116" cy="20" r="8" fill="#c45d78" />
        <g fill="#6b655d">
          <rect x="148" y="22" width="8" height="24" rx="1" />
          <rect x="164" y="16" width="9" height="30" rx="1" />
          <rect x="146" y="14" width="29" height="5" rx="1" />
          <rect x="190" y="20" width="8" height="26" rx="1" />
          <rect x="206" y="28" width="6" height="18" rx="1" />
        </g>
      </svg>
      <TrinityKnot className="size-6 shrink-0" />
    </div>
  )
}
