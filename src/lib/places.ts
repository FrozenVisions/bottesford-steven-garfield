export type Place = {
  name: string
  county: string
  miles: number
  bearing: number
  aliases?: string[]
}

/** Straight-line miles from the centre of Bottesford, using OpenStreetMap place points. */
export const origin = {
  name: "Bottesford",
  lat: 52.941862,
  lon: -0.8017767,
}

export const insidePlaces: Place[] = [
  { name: "Easthorpe", county: "Leicestershire", miles: 1.18, bearing: 118 },
  { name: "Muston", county: "Leicestershire", miles: 1.5, bearing: 112 },
  { name: "Alverton", county: "Nottinghamshire", miles: 2.22, bearing: 339 },
  { name: "Normanton", county: "Leicestershire", miles: 2.26, bearing: 17 },
  { name: "Elton on the Hill", county: "Nottinghamshire", miles: 2.43, bearing: 268, aliases: ["Elton"] },
  { name: "Kilvington", county: "Nottinghamshire", miles: 2.48, bearing: 352 },
  { name: "Orston", county: "Nottinghamshire", miles: 2.56, bearing: 301 },
  { name: "Barkestone-le-Vale", county: "Leicestershire", miles: 2.97, bearing: 213, aliases: ["Barkestone"] },
  { name: "Staunton in the Vale", county: "Nottinghamshire", miles: 2.97, bearing: 1, aliases: ["Staunton"] },
  { name: "Redmile", county: "Leicestershire", miles: 3.0, bearing: 204 },
  { name: "Flawborough", county: "Nottinghamshire", miles: 3.07, bearing: 336 },
  { name: "Sedgebrook", county: "Lincolnshire", miles: 3.18, bearing: 102 },
  { name: "Allington", county: "Lincolnshire", miles: 3.27, bearing: 74 },
  { name: "Woolsthorpe by Belvoir", county: "Lincolnshire", miles: 3.34, bearing: 142, aliases: ["Woolsthorpe"] },
  { name: "Thoroton", county: "Nottinghamshire", miles: 3.5, bearing: 309 },
  { name: "Long Bennington", county: "Lincolnshire", miles: 3.62, bearing: 24 },
  { name: "Granby", county: "Nottinghamshire", miles: 3.85, bearing: 245 },
  { name: "Shelton", county: "Nottinghamshire", miles: 3.9, bearing: 333 },
  { name: "Plungar", county: "Leicestershire", miles: 3.91, bearing: 218 },
  { name: "Belvoir", county: "Leicestershire", miles: 3.92, bearing: 170 },
  { name: "Whatton-in-the-Vale", county: "Nottinghamshire", miles: 3.92, bearing: 269, aliases: ["Whatton"] },
  { name: "Foston", county: "Lincolnshire", miles: 4.27, bearing: 53 },
  { name: "Aslockton", county: "Nottinghamshire", miles: 4.29, bearing: 281 },
  { name: "Scarrington", county: "Nottinghamshire", miles: 4.61, bearing: 292 },
  { name: "Harston", county: "Leicestershire", miles: 4.82, bearing: 156 },
  { name: "Knipton", county: "Leicestershire", miles: 4.9, bearing: 167 },
  { name: "Sibthorpe", county: "Nottinghamshire", miles: 4.92, bearing: 328 },
  { name: "Barnstone", county: "Nottinghamshire", miles: 4.97, bearing: 245 },
  { name: "Barrowby", county: "Lincolnshire", miles: 5.03, bearing: 111 },
  { name: "Stathern", county: "Leicestershire", miles: 5.3, bearing: 205 },
  { name: "Screveton", county: "Nottinghamshire", miles: 5.41, bearing: 305 },
  { name: "Denton", county: "Lincolnshire", miles: 5.52, bearing: 137 },
  { name: "Dry Doddington", county: "Lincolnshire", miles: 5.57, bearing: 31 },
  { name: "Great Gonerby", county: "Lincolnshire", miles: 5.65, bearing: 95 },
  { name: "Langar", county: "Nottinghamshire", miles: 5.67, bearing: 243 },
  { name: "Branston", county: "Leicestershire", miles: 5.8, bearing: 178 },
  { name: "Car Colston", county: "Nottinghamshire", miles: 5.86, bearing: 296 },
  { name: "Flintham", county: "Nottinghamshire", miles: 5.92, bearing: 319 },
  { name: "Marston", county: "Lincolnshire", miles: 6.01, bearing: 63 },
  { name: "Hougham", county: "Lincolnshire", miles: 6.1, bearing: 57 },
  { name: "Harby", county: "Leicestershire", miles: 6.14, bearing: 218 },
  { name: "Eaton", county: "Leicestershire", miles: 6.15, bearing: 186 },
  { name: "Harlaxton", county: "Lincolnshire", miles: 6.23, bearing: 130 },
  { name: "Bingham", county: "Nottinghamshire", miles: 6.3, bearing: 276 },
  { name: "Elston", county: "Nottinghamshire", miles: 6.37, bearing: 334 },
  { name: "Syerston", county: "Nottinghamshire", miles: 6.4, bearing: 326 },
  { name: "Croxton Kerrial", county: "Leicestershire", miles: 6.41, bearing: 164 },
  { name: "Eastwell", county: "Leicestershire", miles: 6.69, bearing: 197 },
  { name: "Claypole", county: "Lincolnshire", miles: 6.81, bearing: 24 },
  { name: "Grantham", county: "Lincolnshire", miles: 6.87, bearing: 107 },
  { name: "Manthorpe", county: "Lincolnshire", miles: 7.11, bearing: 97 },
  { name: "Hose", county: "Leicestershire", miles: 7.31, bearing: 217 },
  { name: "Fernwood", county: "Nottinghamshire", miles: 7.34, bearing: 10 },
  { name: "Colston Bassett", county: "Nottinghamshire", miles: 7.4, bearing: 243 },
  { name: "East Stoke", county: "Nottinghamshire", miles: 7.4, bearing: 335 },
  { name: "Newton", county: "Nottinghamshire", miles: 7.43, bearing: 285 },
  { name: "Kneeton", county: "Nottinghamshire", miles: 7.44, bearing: 308 },
  { name: "East Bridgford", county: "Nottinghamshire", miles: 7.45, bearing: 292 },
  { name: "Stubton", county: "Lincolnshire", miles: 7.47, bearing: 35 },
  { name: "Cropwell Butler", county: "Nottinghamshire", miles: 7.57, bearing: 262 },
  { name: "Hawton", county: "Nottinghamshire", miles: 7.62, bearing: 353 },
  { name: "Belton", county: "Lincolnshire", miles: 7.69, bearing: 88 },
  { name: "Syston", county: "Lincolnshire", miles: 7.7, bearing: 82 },
  { name: "Cropwell Bishop", county: "Nottinghamshire", miles: 7.87, bearing: 256 },
  { name: "Goadby Marwood", county: "Leicestershire", miles: 7.89, bearing: 192 },
  { name: "Balderton", county: "Nottinghamshire", miles: 7.9, bearing: 7 },
  { name: "Barkston", county: "Lincolnshire", miles: 7.92, bearing: 78 },
  { name: "Hoveringham", county: "Nottinghamshire", miles: 8.2, bearing: 307 },
  { name: "Gunthorpe", county: "Nottinghamshire", miles: 8.32, bearing: 293 },
  { name: "Saltby", county: "Leicestershire", miles: 8.32, bearing: 161 },
  { name: "Farndon", county: "Nottinghamshire", miles: 8.34, bearing: 345 },
  { name: "Waltham on the Wolds", county: "Leicestershire", miles: 8.68, bearing: 182 },
  { name: "Caythorpe", county: "Nottinghamshire", miles: 8.7, bearing: 301 },
  { name: "Fiskerton", county: "Nottinghamshire", miles: 8.7, bearing: 331 },
  { name: "Bleasby", county: "Nottinghamshire", miles: 8.78, bearing: 321 },
  { name: "Long Clawson", county: "Leicestershire", miles: 8.78, bearing: 216 },
  { name: "Stonesby", county: "Leicestershire", miles: 8.87, bearing: 174 },
  { name: "Honington", county: "Lincolnshire", miles: 8.95, bearing: 74 },
  { name: "Barnby in the Willows", county: "Nottinghamshire", miles: 9.02, bearing: 23 },
  { name: "Owthorpe", county: "Nottinghamshire", miles: 9.04, bearing: 249 },
  { name: "Great Ponton", county: "Lincolnshire", miles: 9.12, bearing: 127 },
  { name: "Shelford", county: "Nottinghamshire", miles: 9.12, bearing: 284 },
  { name: "Morton", county: "Nottinghamshire", miles: 9.16, bearing: 328 },
  { name: "Newark-on-Trent", county: "Nottinghamshire", miles: 9.29, bearing: 358, aliases: ["Newark"] },
  { name: "Rolleston", county: "Nottinghamshire", miles: 9.36, bearing: 336 },
  { name: "Thurgarton", county: "Nottinghamshire", miles: 9.4, bearing: 314 },
  { name: "Gonalston", county: "Nottinghamshire", miles: 9.49, bearing: 305 },
  { name: "Hickling", county: "Nottinghamshire", miles: 9.49, bearing: 230 },
  { name: "Kinoulton", county: "Nottinghamshire", miles: 9.58, bearing: 239 },
  { name: "Sproxton", county: "Leicestershire", miles: 9.59, bearing: 162 },
  { name: "Scalford", county: "Leicestershire", miles: 9.63, bearing: 197 },
  { name: "Carlton Scroop", county: "Lincolnshire", miles: 9.65, bearing: 68 },
  { name: "Lowdham", county: "Nottinghamshire", miles: 9.67, bearing: 300 },
  { name: "Bulcote", county: "Nottinghamshire", miles: 9.83, bearing: 292 },
  { name: "Coddington", county: "Nottinghamshire", miles: 9.86, bearing: 12 },
  { name: "Radcliffe-on-Trent", county: "Nottinghamshire", miles: 9.87, bearing: 272 },
  { name: "Frieston", county: "Lincolnshire", miles: 9.9, bearing: 57 },
]

export const outsidePlaces: Place[] = [
  { name: "Cotgrave", county: "Nottinghamshire", miles: 11.05, bearing: 259 },
  { name: "Ancaster", county: "Lincolnshire", miles: 11.11, bearing: 74 },
  { name: "Southwell", county: "Nottinghamshire", miles: 11.19, bearing: 326 },
  { name: "Melton Mowbray", county: "Leicestershire", miles: 12.72, bearing: 196, aliases: ["Melton"] },
  { name: "Nottingham", county: "Nottinghamshire", miles: 14.86, bearing: 274 },
  { name: "Oakham", county: "Leicestershire", miles: 18.93, bearing: 171 },
]

export function formatMiles(miles: number) {
  return miles.toFixed(1)
}

function normalise(value: string) {
  return value.trim().toLowerCase().replace(/\s+/g, " ")
}

function matches(input: string, place: Place) {
  const value = normalise(input)
  const names = [place.name, ...(place.aliases ?? [])]
  return names.some((name) => {
    const candidate = normalise(name)
    return (
      value === candidate ||
      value.startsWith(`${candidate},`) ||
      value.startsWith(`${candidate} `)
    )
  })
}

export function findPlace(input: string) {
  const inside = insidePlaces.find((place) => matches(input, place))
  if (inside) return { place: inside, inside: true as const }
  const outside = outsidePlaces.find((place) => matches(input, place))
  if (outside) return { place: outside, inside: false as const }
  return null
}

export function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export function placeSlug(place: Place) {
  return slugify(place.name)
}

export function placeBySlug(slug: string) {
  return insidePlaces.find((place) => placeSlug(place) === slug)
}

const compassPoints = [
  "north",
  "north-east",
  "east",
  "south-east",
  "south",
  "south-west",
  "west",
  "north-west",
]

export function compass(bearing: number) {
  return compassPoints[Math.round((((bearing % 360) + 360) % 360) / 45) % 8]
}

function xy(place: Place) {
  const rad = (place.bearing * Math.PI) / 180
  return { x: place.miles * Math.sin(rad), y: place.miles * Math.cos(rad) }
}

export function nearestInside(place: Place, count = 4) {
  const a = xy(place)
  return insidePlaces
    .filter((other) => other.name !== place.name)
    .map((other) => {
      const b = xy(other)
      return { other, apart: Math.hypot(a.x - b.x, a.y - b.y) }
    })
    .sort((l, r) => l.apart - r.apart)
    .slice(0, count)
    .map((entry) => entry.other)
}
