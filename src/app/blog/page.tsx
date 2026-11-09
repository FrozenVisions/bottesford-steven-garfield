import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { formatDate, getAllPosts } from "@/lib/blog"
import { socialMetadata } from "@/lib/social"

const title = "I Buy Vinyl Record Collections | Pink Moon Records"
const description =
  "Notes on selling a vinyl collection, and on records from a house being cleared. I am Steven Gee of Pink Moon Records, and I buy 1960s and 1970s rock vinyl."

export const metadata: Metadata = socialMetadata({
  title,
  description,
  path: "/blog/",
  image: {
    url: "/images/pink-moon.webp",
    alt: "A very large pink full moon rising over a dark forest",
  },
})

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 pt-10 pb-28 sm:pb-20">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-4">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Blog</li>
          </ol>
        </nav>
        <section className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl leading-[1.05] text-balance sm:text-5xl">Selling vinyl records</h1>
          <p className="text-lg leading-8 text-muted-foreground">
            I am Steven Gee. These are short notes on selling a vinyl collection, and on records from a house being cleared.
          </p>
          <p className="leading-7 text-muted-foreground">
            Pages for{" "}
            <Link href="/sell-vinyl-records/grantham" className="underline underline-offset-4">Grantham</Link>,{" "}
            <Link href="/sell-vinyl-records/newark-on-trent" className="underline underline-offset-4">Newark</Link> and{" "}
            <Link href="/sell-vinyl-records/bingham" className="underline underline-offset-4">Bingham</Link>
            , and the <Link href="/#places" className="underline underline-offset-4">other places I visit</Link>.
          </p>
        </section>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul className="flex max-w-3xl flex-col gap-6">
            {posts.map((post) => (
              <li key={post.slug} className="border border-border bg-card p-5 sm:p-7">
                <p className="text-sm text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
                <h2 className="mt-2 text-2xl">
                  <Link href={`/blog/${post.slug}`} className="underline-offset-4 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 leading-7 text-muted-foreground">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-block font-semibold underline underline-offset-4">
                  Read the post
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <SiteFooter />
    </>
  )
}
