/**
 * Public contact details for Steven Garfield.
 * Phone and email are shown on the page and in the local-business listing.
 */
export const contact = {
  phoneDisplay: "07359 456528",
  phoneHref: "tel:+447359456528",
  email: "diotima2003@yahoo.co.uk",
}

export const site = {
  name: "Steven Garfield",
  alias: "Steven Gee",
  place: "Bottesford",
  postcode: "NG13",
  county: "Leicestershire",
  country: "United Kingdom",
  radiusMiles: 10,
  hall: "Bottesford VC Hall, Belvoir Road, NG13 0BG",
}

export const seo = {
  title: "Steven Garfield | Vinyl Buyer near Bottesford, NG13",
  description:
    "I am Steven Garfield. I buy vinyl record collections within 10 miles of Bottesford, NG13. Email diotima2003@yahoo.co.uk or call 07359 456528. I come for 1960s and 1970s rock of any kind, and for other records I want in my own collection.",
  keywords: [
    "Steven Garfield",
    "Steven Garfield Bottesford",
    "Steven Gee",
    "Steven Gee Bottesford",
    "Steven Gee vinyl",
    "Steven Gee records",
    "Steven Gee NG13",
    "Steven Gee Garfield",
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
    question: "Is Steven Gee the same person as Steven Garfield?",
    answer:
      "Yes. I write my name as Steven Gee on the notice boards at Bottesford VC Hall, and my name is Steven Garfield. If you saw my card in the village hall, you have found the right man. Ring me on 07359 456528.",
  },
  {
    question: "Who buys vinyl record collections near Bottesford?",
    answer:
      "I do. I am Steven Garfield, and I live in Bottesford, NG13, in the Vale of Belvoir. If the records are within ten miles, I will come and see them. That takes in Bingham, Grantham, Newark-on-Trent, Radcliffe-on-Trent and the villages of the Vale of Belvoir.",
  },
  {
    question: "Does Steven Garfield buy 1960s and 1970s rock?",
    answer:
      "Yes. Those two decades of rock are the music I have loved longest, and I mean any type of it. I would rather sit with the records in your house than have them posted to me.",
  },
  {
    question: "Will he look at records that are not rock?",
    answer:
      "I will. I collect for my own shelves, and I am glad of anything that belongs there. Tell me about the whole collection, not only the rock.",
  },
  {
    question: "How far from Bottesford will he travel?",
    answer:
      "Ten miles, in a straight line from the middle of Bottesford, and no further. Melton Mowbray, Ancaster, Southwell and Nottingham are outside my round.",
  },
  {
    question: "How do I contact Steven Garfield?",
    answer:
      "Email is best: diotima2003@yahoo.co.uk. I am happy to take a phone call too, on 07359 456528. A rough idea of what is in the collection, or a few photos attached to the email, is plenty. No full list is needed, as I can come round and look. My card is also on the notice board at Bottesford VC Hall, Belvoir Road, NG13 0BG.",
  },
]

export const wanted = {
  rock: [
    "Led Zeppelin",
    "Deep Purple",
    "Black Sabbath",
    "Pink Floyd",
    "The Who",
    "Cream",
    "Jimi Hendrix",
    "The Doors",
    "Fleetwood Mac",
    "Free",
    "Traffic",
    "Jethro Tull",
    "King Crimson",
    "Yes",
    "Genesis",
    "Rolling Stones",
    "The Kinks",
    "Small Faces",
    "Steppenwolf",
    "Santana",
  ],
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
    "jazz",
    "classical",
    "soul and Motown",
    "country",
    "folk",
    "reggae",
    "film soundtracks",
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
