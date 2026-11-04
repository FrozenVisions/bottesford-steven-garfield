import { CameraIcon, EnvelopeIcon, HouseIcon } from "@/components/illustrations"

const steps = [
  { Icon: EnvelopeIcon, title: "Email me", text: "Email is best, though I am happy to take a phone call." },
  { Icon: CameraIcon, title: "A rough idea or a few photos", text: "Tell me roughly what is in the collection, or attach a few photos. No full list is needed." },
  { Icon: HouseIcon, title: "I come to you", text: "I come and view your records in the comfort of your own home. Any situation or quantity always considered." },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="how" className="bg-[#f5a800]/15 -mx-5 px-5 py-10 sm:mx-0 sm:px-8">
      <h2 id="how" className="text-3xl uppercase tracking-wide sm:text-4xl">How it works</h2>
      <ol className="mt-6 grid gap-6 md:grid-cols-3">
        {steps.map(({ Icon, title, text }, i) => (
          <li key={title} className="flex flex-col gap-3 border-2 border-foreground bg-card p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-foreground text-lg font-bold text-background">{i + 1}</span>
              <Icon />
            </div>
            <h3 className="text-xl">{title}</h3>
            <p className="leading-7 text-muted-foreground">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
