import type { NextConfig } from "next"
import { redirectSources } from "./src/lib/redirects"

const staticSite = process.env.NEXT_PUBLIC_STATIC_SITE === "true"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Static export cannot emit HTTP redirects. GitHub Pages gets HTML refresh
  // files from scripts/redirects.ts, and vercel.json carries the 301s.
  ...(staticSite
    ? {}
    : {
        async redirects() {
          return redirectSources().map(({ source, destination }) => ({
            source,
            destination,
            permanent: true,
          }))
        },
      }),
  ...(staticSite
    ? {
        output: "export" as const,
        basePath,
        images: { unoptimized: true },
      }
    : {}),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
}

export default nextConfig
