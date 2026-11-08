import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { insidePlaces, placeSlug } from "@/lib/places"
import { absoluteUrl } from "@/lib/site"

export const dynamic = "force-static"
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    ...insidePlaces.map((place) => ({
      url: absoluteUrl(`/sell-vinyl-records/${placeSlug(place)}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/blog"), changeFrequency: "weekly" as const, priority: 0.6 },
    ...getAllPosts().map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
