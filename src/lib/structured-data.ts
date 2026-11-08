import { absoluteUrl, contact, faqs, seo, site, siteUrl } from "@/lib/site"

const towns = [
  ["Grantham", "/sell-vinyl-records/grantham"],
  ["Newark-on-Trent", "/sell-vinyl-records/newark-on-trent"],
  ["Bingham", "/sell-vinyl-records/bingham"],
] as const

export function structuredData() {
  const url = absoluteUrl("/")
  const personId = `${url}#steven-gee`
  const businessId = `${url}#business`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url,
        email: contact.email,
        telephone: "+447359456528",
        homeLocation: {
          "@type": "Place",
          name: "Bottesford",
          address: {
            "@type": "PostalAddress",
            addressLocality: site.place,
            postalCode: site.postcode,
            addressRegion: site.county,
            addressCountry: "GB",
          },
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": businessId,
        name: site.brand,
        alternateName: ["Steven Gee", "Pink Moon"],
        founder: { "@id": personId },
        description: seo.description,
        url,
        telephone: "+447359456528",
        email: contact.email,
        image: `${siteUrl()}/opengraph-image`,
        logo: `${siteUrl()}/images/pink-moon-logo-480.webp`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.place,
          postalCode: site.postcode,
          addressRegion: site.county,
          addressCountry: "GB",
        },
        areaServed: [
          { "@type": "Place", name: "Bottesford, Leicestershire" },
          { "@type": "Place", name: "Vale of Belvoir" },
          ...towns.map(([name, path]) => ({
            "@type": "City",
            name,
            url: absoluteUrl(path),
          })),
          { "@type": "City", name: "Melton Mowbray" },
          { "@type": "City", name: "Nottingham" },
        ],
        knowsAbout: ["1960s rock vinyl", "1970s rock vinyl", "vinyl record collections"],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Buying vinyl record collections",
            provider: { "@id": businessId },
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#questions`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }
}
