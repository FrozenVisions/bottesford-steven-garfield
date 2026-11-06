import fs from "node:fs"
import path from "node:path"
import { marked } from "marked"

export type BlogPost = {
  slug: string
  title: string
  date: string
  description: string
  image?: string
  imageAlt?: string
  html: string
}

const blogDir = path.join(process.cwd(), "content", "blog")

function parseFrontmatter(source: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(source)
  if (!match) return { data: {} as Record<string, string>, body: source }
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const field = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line)
    if (!field) continue
    data[field[1]] = field[2].trim().replace(/^(["'])(.*)\1$/, "$2")
  }
  return { data, body: match[2] }
}

/** Every post in content/blog (README.md excluded), newest first. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return []
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md") && file.toLowerCase() !== "readme.md")
    .map((file) => {
      const { data, body } = parseFrontmatter(fs.readFileSync(path.join(blogDir, file), "utf8"))
      const slug = file.replace(/\.md$/, "")
      if (!data.title || !data.date || !data.description) {
        throw new Error(`content/blog/${file} needs title, date and description in its frontmatter`)
      }
      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image || undefined,
        imageAlt: data.imageAlt || undefined,
        html: marked.parse(body, { async: false }) as string,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug)
}

/** Prefix a site-relative image path with the GitHub Pages base path. */
export function assetPath(src: string) {
  if (/^https?:\/\//.test(src)) return src
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ""
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  })
}
