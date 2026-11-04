/** Plain <img> for static GitHub Pages: prefixes the Pages base path. */
export function Photo({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`${base}${src}`} alt={alt} loading="lazy" decoding="async" className={className} />
}
