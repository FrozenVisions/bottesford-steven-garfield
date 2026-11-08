import Link from "next/link"

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

function logoSrc(width: number) {
  return `${base}/images/pink-moon-logo-${width}.webp`
}

function BrandMark() {
  return (
    // Plain img so the static GitHub Pages export keeps the base path, same as Photo.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logoSrc(320)}
      srcSet={`${logoSrc(160)} 160w, ${logoSrc(320)} 320w, ${logoSrc(480)} 480w`}
      sizes="(min-width: 640px) 96px, 76px"
      width={480}
      height={480}
      alt="Pink Moon Records"
      decoding="async"
      className="h-[4.75rem] w-auto sm:h-24"
    />
  )
}

/**
 * Header brand mark. The picture replaces the old “Pink Moon” wordmark.
 * The home link’s accessible name is “Pink Moon Records”; a visually hidden
 * “Pink Moon” stays in the markup so the brand words are not dropped.
 */
export function BrandName({ href }: { href?: string }) {
  const className =
    "inline-flex shrink-0 items-center rounded-2xl outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
  if (href) {
    return (
      <Link href={href} aria-label="Pink Moon Records" className={className}>
        <BrandMark />
        <span className="sr-only">Pink Moon</span>
      </Link>
    )
  }
  return (
    <p className={className}>
      <BrandMark />
    </p>
  )
}
