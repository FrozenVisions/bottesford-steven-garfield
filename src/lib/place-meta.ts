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
