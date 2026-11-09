/**
 * Public contact details for Steven Gee.
 * Phone and email are shown on the page and in the local-business listing.
 */
export const contact = {
  phoneDisplay: "07359 456528",
  phoneHref: "tel:+447359456528",
  email: "diotima2003@yahoo.co.uk",
}

export const site = {
  name: "Steven Gee",
  brand: "Pink Moon Records",
  alias: "Steven Gee",
  place: "Bottesford",
  postcode: "NG13",
  county: "Leicestershire",
  country: "United Kingdom",
  hall: "the Post Office in the High Street, Bottesford",
}

export const seo = {
  title: "Pink Moon Records | I buy vinyl record collections | Steven Gee",
  description:
    "I am Steven Gee of Pink Moon Records. I buy vinyl record collections for my own shelves, especially 1960s and 1970s rock, and other records, from your home.",
  keywords: [
    "sell vinyl records",
    "record buyer",
    "vinyl collection buyer",
    "sell my records",
    "records wanted",
    "1960s rock vinyl",
    "1970s rock vinyl",
    "Pink Moon Records",
    "Steven Gee",
  ],
}

export const faqs = [
  {
    question: "Who buys vinyl record collections?",
    answer:
      "I do. I am Steven Gee. I will come and see them in the comfort of your own home.",
  },
  {
    question: "Does Steven Gee buy 1960s and 1970s rock?",
    answer:
      "Yes. Those two decades of rock are the music I have loved longest, and I mean any type of it. I would rather view the records in your home than have them posted to me.",
  },
  {
    question: "Will he look at records that are not rock?",
    answer:
      "Yes. I collect all kinds of music for my own shelves, and I may be interested in buying it. Tell me about the whole collection, not only the rock.",
  },
  {
    question: "Can I sell my records to you?",
    answer:
      "Yes. Email me or ring, tell me where you are, and I will come and look. Anywhere nearby is fine for a few records, and I will travel any distance for a good collection.",
  },
  {
    question: "How do I contact Steven Gee?",
    answer:
      "Email is best: diotima2003@yahoo.co.uk. I am happy to take a phone call too, on 07359 456528. A rough idea of what is in the collection, or a few photos attached to the email, is plenty. No full list is needed, as I can come round and look. My card is also on the Post Office notice board in the High Street, Bottesford.",
  },
]

export const wanted = {
  styles: [
    "psychedelic rock",
    "blues rock",
    "hard rock",
    "progressive rock",
    "folk rock",
    "heavy rock",
    "early heavy metal",
    "garage and freakbeat",
  ],
  labels: [
    "Island pink label",
    "Vertigo swirl",
    "Harvest",
    "Charisma",
    "Deram",
    "Atlantic plum",
    "Parlophone",
    "Immediate",
  ],
  other: [
    "soul and Motown",
    "country",
    "folk",
    "reggae",
    "mixed boxes from the loft",
  ],
}

export function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return "http://127.0.0.1:47221"
}

/** Absolute URL with a trailing slash, matching the static site. */
export function absoluteUrl(path = "/") {
  const base = siteUrl()
  if (!path || path === "/") return `${base}/`
  const normalised = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalised.endsWith("/") ? normalised : `${normalised}/`}`
}

export function hasPhone() {
  return contact.phoneDisplay.trim().length > 0 && contact.phoneHref.trim().length > 0
}

export function hasEmail() {
  return contact.email.includes("@")
}
