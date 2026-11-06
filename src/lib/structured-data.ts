import { insidePlaces, origin, placeSlug } from "@/lib/places"
import { contact, faqs, seo, site, siteUrl } from "@/lib/site"

export function structuredData() {
  const url = siteUrl()
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${url}/#steven-gee`,
        name: site.brand,
        alternateName: ["Steven Gee", "Steven Gee vinyl buyer"],
        founder: { "@type": "Person", name: site.name },
        description: seo.description,
        url,
        telephone: "+447359456528",
        email: contact.email,
        image: `${url}/opengraph-image`,
        address: {
          "@type": "PostalAddress",
          addressLocality: site.place,
          postalCode: site.postcode,
          addressRegion: site.county,
          addressCountry: "GB",
        },
        geo: { "@type": "GeoCoordinates", latitude: origin.lat, longitude: origin.lon },
        areaServed: [
          {
            "@type": "GeoCircle",
            geoMidpoint: { "@type": "GeoCoordinates", latitude: origin.lat, longitude: origin.lon },
            geoRadius: "48280",
          },
          ...insidePlaces.map((place) => ({
            "@type": "Place",
            name: `${place.name}, ${place.county}`,
            url: `${url}/sell-vinyl-records/${placeSlug(place)}`,
          })),
        ],
        knowsAbout: [
          "late 1960s rock vinyl",
          "early 1970s rock vinyl",
          "all types of vinyl record collections",
        ],
        makesOffer: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Buying vinyl record collections",
            areaServed: `Within ${site.radiusMiles} miles of ${site.place}`,
          },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#questions`,
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
