import { insidePlaces } from "@/lib/places"

const cx = 260
const cy = 260
const ring = 210

function point(miles: number, bearing: number) {
  const radians = (bearing * Math.PI) / 180
  const radius = (miles / 10) * ring
  return {
    x: cx + radius * Math.sin(radians),
    y: cy - radius * Math.cos(radians),
  }
}

export function RangeMap() {
  return (
    <svg
      viewBox="0 0 540 520"
      role="img"
      aria-label="Map of some of the villages nearest to Bottesford. The full list is beside the map."
      className="h-auto w-full max-w-[540px]"
    >
      <circle cx={cx} cy={cy} r={ring} fill="#ffffff" stroke="#111111" strokeWidth="3" />
      <circle
        cx={cx}
        cy={cy}
        r={ring * 0.5}
        fill="none"
        stroke="#595959"
        strokeWidth="1.5"
        strokeDasharray="4 6"
      />
      {insidePlaces.map((place) => {
        const { x, y } = point(place.miles, place.bearing)
        return (
          <circle key={place.name} cx={x} cy={y} r="4.5" fill="#0b3d91" stroke="#ffffff" strokeWidth="1.5">
            <title>{`${place.name}, ${place.county}`}</title>
          </circle>
        )
      })}
      <rect
        x={cx - 9}
        y={cy - 9}
        width="18"
        height="18"
        fill="#111111"
        stroke="#f5a800"
        strokeWidth="3"
        transform={`rotate(45 ${cx} ${cy})`}
      />
      <text
        x={cx}
        y={cy + 34}
        textAnchor="middle"
        fill="#111111"
        fontSize="17"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        Bottesford
      </text>
      <text
        x={cx + ring * 0.5 + 6}
        y={cy - 8}
        fill="#333333"
        fontSize="14"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        5 miles
      </text>
      <text
        x={cx + ring + 8}
        y={cy + 6}
        fill="#111111"
        fontSize="16"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        10 miles
      </text>
    </svg>
  )
}
