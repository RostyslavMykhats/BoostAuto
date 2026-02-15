import { BarChart3, Megaphone, Workflow } from "lucide-react";
import FadeUp from "../components/FadeUp.jsx";
import { features } from "../data/content.js";

const iconMap = {
  "bar-chart": BarChart3,
  megaphone: Megaphone,
  workflow: Workflow,
};

export default function Features() {
  return (
    <section id="features" className="mx-auto w-full max-w-6xl px-6 py-20">
      <FadeUp>
        <div className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Переваги
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
            Чому ми?
          </h2>
        </div>
      </FadeUp>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon];
          return (
            <FadeUp
              key={feature.title}
              delay={0.1 + index * 0.1}
              className="group rounded-2xl border border-[#1f2937] bg-gradient-to-br from-white/5 to-transparent p-6 shadow-soft transition hover:-translate-y-1 hover:border-[#0284c7]/60 focus-visible:-translate-y-1 focus-visible:border-[#0284c7]/60 active:translate-y-0"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#1f2937] bg-white/5 text-[#0284c7]">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-white/70">
                {feature.description}
              </p>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
