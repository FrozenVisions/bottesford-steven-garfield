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

const destinations = () => [
  { place: homePlace, href: "/" },
  ...townPages().map((place) => ({
    place,
    href: `/sell-vinyl-records/${placeSlug(place)}/`,
  })),
]

/** Nearest kept town, or the Bottesford home page when that is nearer. */
export function nearestKept(place: Place) {
  let best = destinations()[0]
  let bestApart = Number.POSITIVE_INFINITY
  for (const candidate of destinations()) {
    if (candidate.place.name === place.name) continue
    const apart = distance(place, candidate.place)
    if (apart < bestApart) {
      best = candidate
      bestApart = apart
    }
  }
  return best
}

export function villageRedirects() {
  return insidePlaces
    .filter((place) => !isTownPage(place))
    .map((place) => {
      const target = nearestKept(place)
      return {
        slug: placeSlug(place),
        name: place.name,
        destination: target.href,
        targetName: target.place.name,
      }
    })
}

/** Both slash forms. GitHub Pages also 301s a path with no slash onto the slash form. */
export function redirectSources(): RedirectRule[] {
  return villageRedirects().flatMap(({ slug, destination }) => [
    { source: `/sell-vinyl-records/${slug}`, destination },
    { source: `/sell-vinyl-records/${slug}/`, destination },
  ])
}
