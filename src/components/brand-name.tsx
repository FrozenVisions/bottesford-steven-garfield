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
      src={logoSrc(960)}
      srcSet={`${logoSrc(160)} 160w, ${logoSrc(320)} 320w, ${logoSrc(480)} 480w, ${logoSrc(960)} 960w`}
      sizes="(min-width: 768px) 360px, (min-width: 640px) 300px, min(78vw, 240px)"
      width={960}
      height={960}
      alt=""
      decoding="async"
      className="h-auto w-[min(78vw,240px)] sm:w-[300px] md:w-[360px]"
    />
  )
}

/**
 * Header brand mark. Tracey’s logo is the picture; the words sit with it
 * in the same Cinzel heading style as the rest of the page.
 */
export function BrandName({ href }: { href?: string }) {
  const className =
    "inline-flex shrink-0 flex-col items-center gap-1 rounded-2xl text-center outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground"
  const mark = (
    <>
      <BrandMark />
      <span className="font-heading text-xl font-semibold tracking-[0.03em] uppercase sm:text-2xl">
        Pink Moon Records
      </span>
    </>
  )
  if (href) {
    return (
      <Link href={href} className={className}>
        {mark}
      </Link>
    )
  }
  return <p className={className}>{mark}</p>
}
