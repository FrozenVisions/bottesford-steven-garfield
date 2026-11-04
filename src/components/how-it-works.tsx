const steps = [
  { title: "Email me", text: "Email is best, though I am happy to take a phone call." },
  { title: "A rough idea or a few photos", text: "Tell me roughly what is in the collection, or attach a few photos. No full list is needed." },
  { title: "I come to you", text: "I come and view your records in the comfort of your own home. Any situation or quantity always considered." },
]

export function HowItWorks() {
  return (
    <section aria-labelledby="how" className="rounded-3xl bg-[#2a1e16] px-5 py-10 text-[#f6f1ea] sm:px-8">
      <h2 id="how" className="text-3xl uppercase tracking-wide text-[#f5a800] sm:text-4xl">How it works</h2>
      <ol className="mt-6 grid gap-6 md:grid-cols-3">
        {steps.map(({ title, text }, i) => (
          <li key={title} className="flex flex-col gap-3 rounded-2xl bg-[#f6f1ea] p-5 text-[#2a1e16]">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-foreground text-lg font-bold text-background">{i + 1}</span>
            </div>
            <h3 className="text-xl uppercase">{title}</h3>
            <p className="leading-7 text-[#4a3a2e]">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
