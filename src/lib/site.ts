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
  title: "Pink Moon Records | Sell Vinyl Records near Bottesford, NG13",
  description:
    "Pink Moon Records is just me, Steven Gee, buying records for my own shelves. I buy vinyl record collections. Email diotima2003@yahoo.co.uk or call 07359 456528. I come for 1960s and 1970s rock of any kind, and for other records I want in my own collection.",
  keywords: [
    "Steven Gee",
    "Steven Gee Bottesford",
    "Steven Gee vinyl",
    "Steven Gee records",
    "Steven Gee NG13",
    "Steven Gee vinyl buyer",
    "Pink Moon Records",
    "Pink Moon",
    "Pink Moon vinyl",
    "Pink Moon records Bottesford",
    "Pink Moon vinyl buyer",
    "vinyl buyer Bottesford",
    "buy vinyl records NG13",
    "sell vinyl collection",
    "sell vinyl records near me",
    "vinyl record collection buyer",
    "1960s rock vinyl",
    "1970s rock records",
    "60s 70s rock vinyl buyer",
    "house clearance vinyl records",
    "who buys old records",
    "Vale of Belvoir vinyl",
    "vinyl buyer Leicestershire",
    "vinyl buyer Nottinghamshire",
    "sell records Muston",
    "sell records Redmile",
    "sell records Orston",
    "sell vinyl Belvoir",
    "sell my record collection Bottesford",
    "we buy vinyl records near me",
    "cash for vinyl records Leicestershire",
    "buy LPs and 45s",
    "original UK pressings wanted",
    "first pressing vinyl wanted",
    "psychedelic rock vinyl wanted",
    "blues rock vinyl wanted",
    "progressive rock vinyl wanted",
    "hard rock vinyl 1970",
    "vinyl collector Vale of Belvoir",
    "record collection valuation NG13",
    "sell old records Grantham area",
    "sell old records Newark area",
    "sell old records Bingham area",
    "vinyl records Nottinghamshire Lincolnshire Leicestershire border",
  ],
}

export const faqs = [
  {
    question: "Who buys vinyl record collections near Bottesford?",
    answer:
      "I do. I am Steven Gee, and I live in Bottesford, NG13, in the Vale of Belvoir. I will come and see them in the comfort of your own home.",
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

export function hasPhone() {
  return contact.phoneDisplay.trim().length > 0 && contact.phoneHref.trim().length > 0
}

export function hasEmail() {
  return contact.email.includes("@")
}
