import type { Metadata } from "next"
import { Cinzel, Outfit } from "next/font/google"
import "./globals.css"
import { seo, siteUrl } from "@/lib/site"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: "Steven Gee" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    locale: "en_GB",
    siteName: "Pink Moon Records",
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
      className={`${outfit.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  )
}
