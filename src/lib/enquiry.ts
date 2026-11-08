import { findPlace } from "@/lib/places"

export type EnquiryInput = {
  name: string
  phone: string
  email: string
  village: string
  collection: string
}

export type EnquiryResult =
  | { ok: true; village: string }
  | { ok: false; message: string; field?: "name" | "phone" | "email" | "village" | "collection" }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateEnquiry(input: EnquiryInput): EnquiryResult {
  const name = input.name.trim().replace(/\s+/g, " ")
  const phone = input.phone.trim()
  const email = input.email.trim()
  const village = input.village.trim().replace(/\s+/g, " ")
  const collection = input.collection.trim().replace(/\s+/g, " ")

  if (name.length < 2) {
    return { ok: false, field: "name", message: "Please tell me your name." }
  }
  if (name.length > 80) {
    return { ok: false, field: "name", message: "A shorter name will do." }
  }

  const digits = phone.replace(/\D/g, "")
  if (digits.length < 10 || digits.length > 15) {
    return {
      ok: false,
      field: "phone",
      message: "Please leave a number I can ring.",
    }
  }

  if (email && !emailPattern.test(email)) {
    return { ok: false, field: "email", message: "That email does not look complete." }
  }

  if (!village) {
    return { ok: false, field: "village", message: "Tell me your location." }
  }

  const known = findPlace(village)

  if (collection.length < 12) {
    return {
      ok: false,
      field: "collection",
      message: "Tell me what you have. Sixties and seventies rock is what I come for first.",
    }
  }
  if (collection.length > 800) {
    return { ok: false, field: "collection", message: "Keep the note under 800 characters." }
  }

  return { ok: true, village: known?.place.name ?? village }
}
