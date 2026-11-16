import rows from "./village-redirects.json"
import {
  distance,
  homePlace,
  insidePlaces,
  isTownPage,
  placeSlug,
  townPages,
  type Place,
} from "./places"

export type RedirectRule = {
  source: string
  destination: string
}

export type VillageRedirect = {
  slug: string
  destination: string
}

const kept = () => [
  { place: homePlace, href: "/" },
  ...townPages().map((place) => ({
    place,
    href: `/sell-vinyl-records/${placeSlug(place)}/`,
  })),
]

/** Nearest kept town, or the Bottesford home page when that is nearer. */
export function nearestKept(place: Place) {
  let best = kept()[0]
  let bestApart = Number.POSITIVE_INFINITY
  for (const candidate of kept()) {
    if (candidate.place.name === place.name) continue
    const apart = distance(place, candidate.place)
    if (apart < bestApart) {
      best = candidate
      bestApart = apart
    }
  }
  return best
}

/** Recompute from coordinates. Used only to refresh the committed JSON. */
export function buildVillageRedirects(): VillageRedirect[] {
  return insidePlaces
    .filter((place) => !isTownPage(place))
    .map((place) => ({
      slug: placeSlug(place),
      destination: nearestKept(place).href,
    }))
}

/** Committed map. Builds read this so the redirect targets do not drift. */
export function villageRedirects(): VillageRedirect[] {
  return rows
}

/** Both slash forms. GitHub Pages also 301s a path with no slash onto the slash form. */
export function redirectSources(): RedirectRule[] {
  return villageRedirects().flatMap(({ slug, destination }) => [
    { source: `/sell-vinyl-records/${slug}`, destination },
    { source: `/sell-vinyl-records/${slug}/`, destination },
  ])
}
