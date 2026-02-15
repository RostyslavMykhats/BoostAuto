import FadeUp from "../components/FadeUp.jsx";
import { faq } from "../data/content.js";

export default function Faq() {
  return (
    <section id="faq" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <FadeUp>
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            FAQ
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
            Поширені запитання
          </h2>
        </div>
      </FadeUp>
      <div className="mt-10 grid gap-4">
        {faq.map((item, index) => (
          <FadeUp
            key={item.q}
            delay={0.1 + index * 0.08}
            className="rounded-2xl border border-[#1f2937] bg-gradient-to-br from-white/5 to-transparent p-6 transition hover:border-[#0284c7]/60 focus-visible:border-[#0284c7]/60"
          >
            <h3 className="text-base font-semibold text-white">{item.q}</h3>
            <p className="mt-2 text-sm text-white/70">{item.a}</p>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
