import type { NextConfig } from "next"

const staticSite = process.env.NEXT_PUBLIC_STATIC_SITE === "true"
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

const nextConfig: NextConfig = {
  ...(staticSite
    ? {
        output: "export" as const,
        trailingSlash: true,
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
