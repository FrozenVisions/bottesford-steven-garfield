import { insidePlaces } from "@/lib/places"

const cx = 260
const cy = 260
const ring = 210
const scale = 30

// Straight-line distance and bearing from Bottesford (52.944, -0.800), worked out from town-centre coordinates.
const towns = [
  { name: "Nottingham", miles: 14.9, bearing: 273 },
  { name: "Grantham", miles: 6.9, bearing: 109 },
  { name: "Newark", miles: 9.1, bearing: 358 },
  { name: "Melton Mowbray", miles: 12.8, bearing: 196 },
  { name: "Leicester", miles: 25.5, bearing: 214 },
  { name: "Lincoln", miles: 22.5, bearing: 28 },
]

function point(miles: number, bearing: number) {
  const radians = (bearing * Math.PI) / 180
  const radius = (miles / scale) * ring
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
      aria-label="Map of the 30 miles around Bottesford, with rings at 10 and 20 miles, nearby villages and towns including Nottingham, Grantham, Newark, Melton Mowbray, Leicester, Lincoln. The full list of areas is beside the map."
      className="h-auto w-full max-w-[540px]"
    >
      <circle cx={cx} cy={cy} r={ring} fill="#ffffff" stroke="#111111" strokeWidth="3" />
      {[10, 20].map((m) => (
        <circle key={m} cx={cx} cy={cy} r={(m / scale) * ring} fill="none" stroke="#595959" strokeWidth="1.5" strokeDasharray="4 6" />
      ))}
      {[10, 20].map((m) => (
        <text key={`l${m}`} x={cx + (m / scale) * ring + 4} y={cy - 6} stroke="#ffffff" strokeWidth="4" paintOrder="stroke" fill="#333333" fontSize="13" fontWeight="700" fontFamily="Georgia, serif">
          {m} miles
        </text>
      ))}
      {insidePlaces.map((place) => {
        const { x, y } = point(place.miles, place.bearing)
        return (
          <circle key={place.name} cx={x} cy={y} r="3" fill="#0b3d91" stroke="#ffffff" strokeWidth="1.5">
            <title>{`${place.name}, ${place.county}`}</title>
          </circle>
        )
      })}
      {towns.map((town) => {
        const { x, y } = point(town.miles, town.bearing)
        const left = x < cx
        return (
          <g key={town.name}>
            <circle cx={x} cy={y} r="6" fill="#a61c1c" stroke="#ffffff" strokeWidth="2" />
            <text x={left ? x - 10 : x + 10} y={y + 5} textAnchor={left ? "end" : "start"} stroke="#ffffff" strokeWidth="4" paintOrder="stroke" fill="#111111" fontSize="14" fontWeight="700" fontFamily="Georgia, serif">
              {town.name}
            </text>
          </g>
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
        y={cy + 30}
        textAnchor="middle"
        stroke="#ffffff"
        strokeWidth="5"
        paintOrder="stroke"
        fill="#111111"
        fontSize="17"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        Bottesford
      </text>
      <text
        x={cx + ring + 8}
        y={cy + 6}
        fill="#111111"
        fontSize="16"
        fontWeight="700"
        fontFamily="Georgia, serif"
      >
        30 miles
      </text>
    </svg>
  )
}
