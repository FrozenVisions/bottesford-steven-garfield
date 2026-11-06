import Link from "next/link"
import { StoneMoonMark } from "@/components/druid-ornaments"

export function BrandName({ href }: { href?: string }) {
  const className =
    "inline-flex items-center gap-2 font-heading text-xl font-bold tracking-[0.08em] uppercase sm:text-2xl"
  const inner = (
    <>
      <StoneMoonMark className="size-9 shrink-0 sm:size-10" />
      <span>Pink Moon</span>
    </>
  )
  if (href) {
    return (
      <Link href={href} className={`${className} underline-offset-4 hover:underline`}>
        {inner}
      </Link>
    )
  }
  return <p className={className}>{inner}</p>
}
