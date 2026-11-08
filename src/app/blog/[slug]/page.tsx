import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteFooter, SiteHeader } from "@/components/site-chrome"
import { assetPath, formatDate, getAllPosts, getPost } from "@/lib/blog"
import { siteUrl } from "@/lib/site"

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params
  const post = getPost(slug)
  if (!post) return {}
  const url = `${siteUrl()}/blog/${post.slug}/`
  const images = post.image
    ? [/^https?:\/\//.test(post.image) ? post.image : `${new URL(siteUrl()).origin}${assetPath(post.image)}`]
    : undefined
  return {
    title: `${post.title} | Pink Moon Records`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "en_GB",
      siteName: "Pink Moon Records",
      url,
      publishedTime: post.date,
      authors: ["Steven Gee"],
      ...(images ? { images } : {}),
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, ...(images ? { images } : {}) },
  }
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params
  const post = getPost(slug)
  if (!post) notFound()
  const url = `${siteUrl()}/blog/${post.slug}/`
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Person", name: "Steven Gee" },
    mainEntityOfPage: url,
    url,
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-5 pt-10 pb-28 sm:pb-20">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="underline underline-offset-4">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/blog" className="underline underline-offset-4">Blog</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{post.title}</li>
          </ol>
        </nav>
        <article className="flex max-w-3xl flex-col gap-6">
          <header className="flex flex-col gap-3">
            <p className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · Steven Gee
            </p>
            <h1 className="text-4xl leading-[1.05] text-balance sm:text-5xl">{post.title}</h1>
            <p className="text-lg leading-8 text-muted-foreground">{post.description}</p>
          </header>
          {post.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={assetPath(post.image)} alt={post.imageAlt ?? "The standing stones of Stonehenge under a wide sky, by Iryna Marienko on Unsplash"} className="w-full rounded-2xl object-cover" />
          ) : null}
          <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.html }} />
          <p>
            <Link href="/blog" className="font-semibold underline underline-offset-4">← All posts</Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
