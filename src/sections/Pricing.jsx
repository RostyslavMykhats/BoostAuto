import { Rocket, ShieldCheck } from "lucide-react";
import FadeUp from "../components/FadeUp.jsx";
import { pricing } from "../data/content.js";

const iconMap = {
  shield: ShieldCheck,
  rocket: Rocket,
};

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20">
      <FadeUp>
        <div className="flex flex-col items-start gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Тарифи
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
            Вибери формат співпраці
          </h2>
        </div>
      </FadeUp>
      <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-stretch">
        {pricing.map((plan, index) => {
          const Icon = iconMap[plan.icon];
          return (
            <FadeUp
              key={plan.title}
              delay={0.1 + index * 0.1}
              className={`flex h-full min-h-[280px] flex-col rounded-2xl border border-[#1f2937] bg-gradient-to-br from-white/5 to-transparent p-7 shadow-soft transition hover:-translate-y-1 hover:border-[#0284c7]/60 focus-visible:-translate-y-1 focus-visible:border-[#0284c7]/60 active:translate-y-0 ${
                plan.highlight ? "ring-1 ring-[#0284c7]/50" : ""
              }`}
            >
              <div className="flex items-center gap-3 text-[#0284c7]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#1f2937] bg-white/5">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {plan.title}
                </h3>
              </div>
              <div className="mt-5 flex-1">
                <p className="text-lg font-semibold text-white">
                  {plan.price}
                </p>
                <p className="mt-3 text-sm text-white/70">
                  {plan.description}
                </p>
              </div>
              <a
                href="https://t.me/boostauto_bot"
                className="mt-6 w-full rounded-full border border-[#1f2937] bg-white/5 px-5 py-3 text-center text-sm font-semibold text-white transition hover:border-[#0284c7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284c7] active:scale-[0.98]"
              >
                Обрати тариф
              </a>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
