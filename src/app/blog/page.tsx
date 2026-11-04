import type { Metadata } from "next"
import Link from "next/link"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { formatDate, getAllPosts } from "@/lib/blog"
import { siteUrl } from "@/lib/site"

const title = "Blog | Steven Gee, vinyl buyer near Bottesford"
const description =
  "Notes from Steven Gee on selling a vinyl record collection in Bottesford, NG13, and the villages within 30 miles."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl()}/blog/` },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_GB",
    siteName: "Steven Gee",
    url: `${siteUrl()}/blog/`,
  },
  twitter: { card: "summary_large_image", title, description },
}

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
          <h1 className="text-4xl leading-[1.05] text-balance sm:text-5xl">Blog</h1>
          <p className="text-lg leading-8 text-muted-foreground">{description}</p>
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
