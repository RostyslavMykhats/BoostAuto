import FadeUp from "../components/FadeUp.jsx";
import { processSteps } from "../data/content.js";

export default function Process() {
  return (
    <section id="process" className="mx-auto w-full max-w-6xl px-6 pb-20 pt-20">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeUp>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Як працюємо
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl font-montserrat">
              Повний цикл продажу без зайвих дзвінків
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/70">
              Від первинної заявки до підписання договору ми беремо на себе
              підготовку, маркетинг, обробку лідів і комунікацію з покупцями. Ти
              отримуєш звіти та контроль над процесом.
            </p>
          </div>
        </FadeUp>
        <div className="grid gap-4">
          {processSteps.map((step, index) => (
            <FadeUp
              key={step.title}
              delay={0.1 + index * 0.08}
              className="rounded-2xl border border-[#1f2937] bg-gradient-to-br from-white/5 to-transparent p-5 transition hover:-translate-y-1 hover:border-[#0284c7]/60 focus-visible:-translate-y-1 focus-visible:border-[#0284c7]/60 active:translate-y-0"
            >
              <h3 className="text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-white/70">{step.desc}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
