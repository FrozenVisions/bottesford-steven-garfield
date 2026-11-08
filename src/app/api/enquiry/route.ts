import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { validateEnquiry } from "@/lib/enquiry"
import { contact } from "@/lib/site"

type StoredEnquiry = {
  receivedAt: string
  name: string
  phone: string
  email: string
  village: string
  collection: string
}

export async function POST(request: Request) {
  let form: FormData
  try {
    form = await request.formData()
  } catch {
    return Response.json(
      { ok: false, message: "The note could not be read. Try again." },
      { status: 400 }
    )
  }

  const villageChoice = String(form.get("village") ?? "")
  const otherVillage = String(form.get("otherVillage") ?? "")
  const village = villageChoice === "other" ? otherVillage : villageChoice

  const result = validateEnquiry({
    name: String(form.get("name") ?? ""),
    phone: String(form.get("phone") ?? ""),
    email: String(form.get("email") ?? ""),
    village,
    collection: String(form.get("collection") ?? ""),
  })

  if (!result.ok) {
    return Response.json(result, { status: 400 })
  }

  const entry: StoredEnquiry = {
    receivedAt: new Date().toISOString(),
    name: String(form.get("name") ?? "").trim(),
    phone: String(form.get("phone") ?? "").trim(),
    email: String(form.get("email") ?? "").trim(),
    village: result.village,
    collection: String(form.get("collection") ?? "").trim(),
  }

  try {
    const directory = path.join(process.cwd(), "data")
    const file = path.join(directory, "enquiries.json")
    await mkdir(directory, { recursive: true })
    let existing: StoredEnquiry[] = []
    try {
      existing = JSON.parse(await readFile(file, "utf8")) as StoredEnquiry[]
      if (!Array.isArray(existing)) existing = []
    } catch {
      existing = []
    }
    existing.push(entry)
    await writeFile(file, JSON.stringify(existing, null, 2))
  } catch {
    return Response.json(
      {
        ok: false,
        message: `I could not keep that note. Please call me on ${contact.phoneDisplay} or email ${contact.email}.`,
      },
      { status: 500 }
    )
  }

  return Response.json({
    ok: true,
    message: `I have your note. If the records are in ${result.village}, I will be glad to come and see them.`,
  })
}
