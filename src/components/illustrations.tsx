/** Simple hand-drawn style illustrations, made for this site. */

export function SpinningRecord({ label }: { label: string }) {
  return (
    <div className="relative mx-auto size-64 sm:size-72" aria-hidden="true">
      <svg viewBox="0 0 200 200" className="spin-slow size-full drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]">
        <circle cx="100" cy="100" r="98" fill="#111111" />
        {[88, 78, 68, 58, 48].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#2b2b2b" strokeWidth="1.5" />
        ))}
        <path d="M40 60 A70 70 0 0 1 80 32" stroke="#555" strokeWidth="3" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="100" r="34" fill="#f5a800" />
        <circle cx="100" cy="100" r="3.5" fill="#111111" />
      </svg>
      <span className="absolute inset-0 grid place-items-center text-center leading-none text-[#111111]">
        <span>
          <span className="block font-[family-name:var(--font-fraunces)] text-5xl font-bold">{label}</span>
          <span className="text-xs font-bold tracking-[0.2em]">MILES</span>
        </span>
      </span>
    </div>
  )
}

export function CarIcon() {
  return (
    <svg viewBox="0 0 120 70" className="h-16 w-auto" aria-hidden="true">
      <path d="M10 48 L18 30 Q22 22 32 22 L74 22 Q82 22 88 30 L98 40 L108 42 Q114 44 114 50 L114 54 L10 54 Z" fill="#0b3d91" />
      <path d="M30 28 L50 28 L50 40 L22 40 Z M56 28 L76 28 L86 40 L56 40 Z" fill="#e8eef9" />
      <rect x="14" y="44" width="40" height="7" rx="2" fill="#f5a800" />
      <circle cx="32" cy="56" r="10" fill="#111" /><circle cx="32" cy="56" r="4" fill="#ddd" />
      <circle cx="90" cy="56" r="10" fill="#111" /><circle cx="90" cy="56" r="4" fill="#ddd" />
    </svg>
  )
}

export function RecordIcon() {
  return (
    <svg viewBox="0 0 120 70" className="h-16 w-auto" aria-hidden="true">
      <rect x="8" y="6" width="58" height="58" fill="#0b3d91" />
      <path d="M16 54 L36 18 L56 54 Z" fill="#f5a800" opacity="0.9" />
      <circle cx="78" cy="35" r="29" fill="#111" />
      <circle cx="78" cy="35" r="22" fill="none" stroke="#333" strokeWidth="1.5" />
      <circle cx="78" cy="35" r="10" fill="#f5a800" />
      <circle cx="78" cy="35" r="2" fill="#111" />
    </svg>
  )
}

export function CrateIcon() {
  return (
    <svg viewBox="0 0 120 70" className="h-16 w-auto" aria-hidden="true">
      {[22, 34, 46, 58, 70, 82].map((x, i) => (
        <rect key={x} x={x} y={8 + (i % 3) * 3} width="9" height="40" fill={["#111", "#0b3d91", "#f5a800"][i % 3]} />
      ))}
      <rect x="14" y="34" width="92" height="30" fill="#8a5a2b" />
      <rect x="14" y="34" width="92" height="5" fill="#6d4520" />
      <rect x="48" y="44" width="24" height="7" rx="3" fill="#5a3818" />
    </svg>
  )
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 64 48" className="h-10 w-auto" aria-hidden="true">
      <rect x="2" y="4" width="60" height="40" rx="4" fill="#0b3d91" />
      <path d="M4 8 L32 28 L60 8" fill="none" stroke="#fff" strokeWidth="3" />
    </svg>
  )
}

export function CameraIcon() {
  return (
    <svg viewBox="0 0 64 48" className="h-10 w-auto" aria-hidden="true">
      <rect x="2" y="10" width="60" height="34" rx="5" fill="#111" />
      <rect x="20" y="4" width="22" height="10" rx="2" fill="#111" />
      <circle cx="32" cy="27" r="11" fill="#f5a800" /><circle cx="32" cy="27" r="5" fill="#111" />
    </svg>
  )
}

export function HouseIcon() {
  return (
    <svg viewBox="0 0 64 48" className="h-10 w-auto" aria-hidden="true">
      <path d="M8 22 L32 4 L56 22 Z" fill="#0b3d91" />
      <rect x="12" y="22" width="40" height="24" fill="#f5a800" />
      <rect x="27" y="30" width="10" height="16" fill="#111" />
    </svg>
  )
}
