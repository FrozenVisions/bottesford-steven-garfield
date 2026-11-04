import { ImageResponse } from "next/og"

export const alt =
  "Steven Garfield. I buy all types of vinyl collections within ten miles of Bottesford, mainly late 1960s and early 1970s rock. Call 07359 456528."
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
          background: "#fffaf0",
          color: "#111111",
          padding: "64px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontSize: 28, letterSpacing: 4, color: "#333333" }}>
            BOTTESFORD · NG13 · 10 MILES
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05, marginTop: 28, maxWidth: 760 }}>
            I buy vinyl collections near Bottesford
          </div>
          <div style={{ fontSize: 32, marginTop: 28, color: "#333333" }}>
            1960s and 1970s rock, and whatever else belongs with me
          </div>
          <div style={{ fontSize: 40, marginTop: "auto", color: "#0b3d91", fontWeight: 700 }}>
            07359 456528
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 280,
            height: 280,
            borderRadius: 280,
            background: "#111111",
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 110,
              height: 110,
              borderRadius: 110,
              background: "#f5a800",
              color: "#111111",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 42,
            }}
          >
            10
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
