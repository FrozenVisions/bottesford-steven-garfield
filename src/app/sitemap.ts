import type { MetadataRoute } from "next"
import { insidePlaces, placeSlug } from "@/lib/places"
import { siteUrl } from "@/lib/site"
import { getAllPosts } from "@/lib/blog"

export const dynamic = "force-static"
export default function sitemap(): MetadataRoute.Sitemap {
  const url = siteUrl()
  return [
    { url, changeFrequency: "monthly", priority: 1 },
    ...insidePlaces.map((place) => ({
      url: `${url}/sell-vinyl-records/${placeSlug(place)}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${url}/blog`, changeFrequency: "weekly" as const, priority: 0.6 },
    ...getAllPosts().map((post) => ({
      url: `${url}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
