import FadeUp from "../components/FadeUp.jsx";
import { metrics } from "../data/content.js";

export default function Metrics() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <FadeUp>
        <div className="rounded-2xl border border-[#1f2937] bg-gradient-to-br from-white/5 to-transparent p-8 transition hover:border-[#0284c7]/60 focus-visible:border-[#0284c7]/60">
          <div className="grid gap-6 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-white/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
