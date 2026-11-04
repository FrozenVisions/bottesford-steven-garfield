"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { validateEnquiry } from "@/lib/enquiry"
import { insidePlaces } from "@/lib/places"
import { contact } from "@/lib/site"

const staticSite = process.env.NEXT_PUBLIC_STATIC_SITE === "true"

type FormStatus =
  | { state: "idle" }
  | { state: "saving" }
  | { state: "success"; message: string }
  | { state: "error"; message: string; field?: string }

export function EnquiryForm() {
  const [villageChoice, setVillageChoice] = useState(insidePlaces[0]?.name ?? "")
  const [status, setStatus] = useState<FormStatus>({ state: "idle" })

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus({ state: "saving" })

    if (staticSite) {
      const data = new FormData(form)
      const choice = String(data.get("village") ?? "")
      const village = choice === "other" ? String(data.get("otherVillage") ?? "") : choice
      const note = {
        name: String(data.get("name") ?? ""),
        phone: String(data.get("phone") ?? ""),
        email: String(data.get("email") ?? ""),
        village,
        collection: String(data.get("collection") ?? ""),
      }
      const result = validateEnquiry({ ...note, confirmedInside: data.get("inside") === "yes" })
      if (!result.ok) {
        setStatus({ state: "error", message: result.message, field: result.field })
        return
      }
      const body = [
        `Name: ${note.name.trim()}`,
        `Phone: ${note.phone.trim()}`,
        note.email.trim() ? `Email: ${note.email.trim()}` : "",
        `Village: ${result.village}`,
        "",
        note.collection.trim(),
      ]
        .filter((line, index) => line || index === 4)
        .join("\n")
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Vinyl records in ${result.village}`
      )}&body=${encodeURIComponent(body)}`
      setStatus({
        state: "success",
        message: `Your email app should now open with the note ready to send. If it does not, please ring me on ${contact.phoneDisplay} or write to ${contact.email}.`,
      })
      return
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: new FormData(form),
      })
      const body = (await response.json()) as {
        ok: boolean
        message: string
        field?: string
      }
      if (!response.ok || !body.ok) {
        setStatus({
          state: "error",
          message: body.message || "The note was not saved.",
          field: body.field,
        })
        return
      }
      form.reset()
      setVillageChoice(insidePlaces[0]?.name ?? "")
      setStatus({ state: "success", message: body.message })
    } catch {
      setStatus({
        state: "error",
        message: "The note could not be sent. Try again in a moment.",
      })
    }
  }

  const showOther = villageChoice === "other"
  const errorId = status.state === "error" ? "enquiry-error" : undefined

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="name">Your name</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          aria-invalid={status.state === "error" && status.field === "name"}
          aria-describedby={status.state === "error" && status.field === "name" ? errorId : undefined}
          className="h-11 bg-card md:text-base"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-invalid={status.state === "error" && status.field === "phone"}
            aria-describedby={status.state === "error" && status.field === "phone" ? errorId : undefined}
            className="h-11 bg-card md:text-base"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email, if you have one</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={status.state === "error" && status.field === "email"}
            aria-describedby={status.state === "error" && status.field === "email" ? errorId : undefined}
            className="h-11 bg-card md:text-base"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="village">Village</Label>
        <select
          id="village"
          name="village"
          value={villageChoice}
          onChange={(event) => setVillageChoice(event.target.value)}
          aria-invalid={status.state === "error" && status.field === "village"}
          aria-describedby={status.state === "error" && status.field === "village" ? errorId : undefined}
          className="h-11 w-full rounded-lg border border-input bg-card px-2.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {insidePlaces.map((place) => (
            <option key={place.name} value={place.name}>
              {place.name}, {place.county}
            </option>
          ))}
          <option value="other">My village is not in the list</option>
        </select>
      </div>

      {showOther ? (
        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="otherVillage">Village name</Label>
            <Input
              id="otherVillage"
              name="otherVillage"
              required
              className="h-11 bg-card md:text-base"
            />
          </div>
          <label className="flex items-start gap-3 text-sm leading-5 text-foreground">
            <input
              type="checkbox"
              name="inside"
              value="yes"
              className="mt-1 size-5 accent-[#0b3d91]"
            />
            <span>These records are within ten miles of Bottesford.</span>
          </label>
        </div>
      ) : null}

      <div className="grid gap-2">
        <Label htmlFor="collection">Tell me what you have</Label>
        <Textarea
          id="collection"
          name="collection"
          required
          placeholder="A couple of hundred LPs in the spare room. Mostly seventies rock, and a few other records kept with them."
          aria-invalid={status.state === "error" && status.field === "collection"}
          aria-describedby={status.state === "error" && status.field === "collection" ? errorId : undefined}
          className="min-h-32 bg-card md:text-base"
        />
      </div>

      <div aria-live="polite">
        {status.state === "error" ? (
          <p
            id="enquiry-error"
            className="border-l-4 border-destructive bg-secondary py-2 pl-3 text-base font-semibold text-foreground"
            role="alert"
          >
            Please check: {status.message}
          </p>
        ) : null}
        {status.state === "success" ? (
          <p className="text-sm text-foreground" role="status">
            {status.message}
          </p>
        ) : null}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status.state === "saving"}
        className="h-12 px-6 text-base sm:w-fit"
      >
        {status.state === "saving" ? "Sending…" : "Ask me to come and see them"}
      </Button>
    </form>
  )
}
