import type { Place } from "@/lib/places"

const brand = " | Pink Moon Records"

/** Document title for an area page, kept to about 50–60 characters. */
export function placeTitle(name: string) {
  const sell = `Sell Vinyl Records in ${name}${brand}`
  const title =
    sell.length > 60
      ? `Sell Vinyl in ${name}${brand}`
      : sell.length >= 50
        ? sell
        : `Selling Vinyl Records in ${name}${brand}`.length >= 50
          ? `Selling Vinyl Records in ${name}${brand}`
          : `Sell Your Vinyl Records in ${name}${brand}`
  if (title.length < 50 || title.length > 60) {
    throw new Error(`Area title for ${name} is ${title.length} characters: ${title}`)
  }
  return title
}

/**
 * First matching sentence is used, so each place gets one description in range.
 * Neighbour names make them different without a second essay.
 */
const descriptionTemplates = [
  "Sell vinyl records in {name}, {county}. Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl, and other records, near {near}.",
  "Sell vinyl records in {name}, {county}. Steven Gee of Pink Moon Records buys 1960s and 1970s rock and other vinyl from homes near {near}.",
  "Sell vinyl records in {name}, {county}. A record buyer, Steven Gee of Pink Moon Records, buys 1960s and 1970s rock and other vinyl near {near}.",
  "Sell vinyl records in {name}, {county}. Steven Gee of Pink Moon Records, a collector of vinyl records, buys 1960s and 1970s rock and other vinyl near {near}.",
  "Sell vinyl records in {name}, {county}. Record buyer Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl and other records near {near}.",
  "Sell vinyl records in {name}. Steven Gee, a collector of vinyl records, buys 1960s and 1970s rock vinyl and other records near {near}.",
  "Sell vinyl records in {name}. Record buyer Steven Gee of Pink Moon Records buys 1960s and 1970s rock vinyl and other records near {near}.",
]

export function placeDescription(place: Place, neighbour: Place) {
  for (const template of descriptionTemplates) {
    const description = template
      .replaceAll("{name}", place.name)
      .replaceAll("{county}", place.county)
      .replaceAll("{near}", neighbour.name)
    if (description.length >= 150 && description.length <= 160) return description
  }
  throw new Error(`No meta description in range for ${place.name}`)
}
