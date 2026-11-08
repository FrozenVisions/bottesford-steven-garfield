import type { Metadata } from "next"

type SocialImage = { url: string; alt: string }

const defaultImage: SocialImage = {
  url: "/opengraph-image",
  alt: "Pink Moon Records. Steven Gee buys vinyl records near Bottesford.",
}

/** Title, description, canonical, Open Graph and Twitter for one page. */
export function socialMetadata(options: {
  title: string
  description: string
  path: string
  image?: SocialImage
  type?: "website" | "article"
  publishedTime?: string
  keywords?: string[]
}): Metadata {
  const path = options.path.endsWith("/") ? options.path : `${options.path}/`
  const image = options.image ?? defaultImage
  const images = [{ url: image.url, alt: image.alt }]
  return {
    title: options.title,
    description: options.description,
    ...(options.keywords ? { keywords: options.keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: options.title,
      description: options.description,
      type: options.type ?? "website",
      locale: "en_GB",
      siteName: "Pink Moon Records",
      url: path,
      images,
      ...(options.publishedTime
        ? { publishedTime: options.publishedTime, authors: ["Steven Gee"] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: options.title,
      description: options.description,
      images,
    },
  }
}
