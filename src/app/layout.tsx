import type { Metadata } from "next"
import { Oswald, Outfit } from "next/font/google"
import "./globals.css"
import { seo, siteUrl } from "@/lib/site"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const fraunces = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: "Steven Gee" }, { name: "Steven Gee" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "en_GB",
    siteName: "Steven Gee",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "GB-LEC",
    "geo.placename": "Bottesford",
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  )
}
