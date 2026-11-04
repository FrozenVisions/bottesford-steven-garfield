import type { MetadataRoute } from "next"
import { insidePlaces, placeSlug } from "@/lib/places"
import { siteUrl } from "@/lib/site"

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
  ]
}
