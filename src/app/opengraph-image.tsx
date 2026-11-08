import { ImageResponse } from "next/og"

export const alt =
  "Pink Moon Records. I am Steven Gee, and I buy vinyl collections for my own shelves, mainly 1960s and 1970s rock. Email diotima2003@yahoo.co.uk or call 07359 456528."
export const dynamic = "force-static"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#f3ecdf",
          color: "#1a2418",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 28, letterSpacing: 4, color: "#3a4636" }}>
            PINK MOON RECORDS
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, marginTop: 28, maxWidth: 760 }}>
            I buy vinyl collections
          </div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#3a4636" }}>
            1960s and 1970s rock, and whatever else belongs with me
          </div>
          <div style={{ fontSize: 40, marginTop: "auto", color: "#1e4632", fontWeight: 700 }}>
            07359 456528
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 280,
            height: 280,
            borderRadius: 280,
            background: "#1e4632",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: 220,
              border: "8px solid #cfc6b8",
            }}
          />
          <div
            style={{
              display: "flex",
              width: 110,
              height: 110,
              borderRadius: 110,
              background: "#e7a8bc",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
