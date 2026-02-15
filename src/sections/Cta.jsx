import FadeUp from "../components/FadeUp.jsx";
import { cta } from "../data/content.js";
import { CheckCircle2, Clock } from "lucide-react";
import { trackTelegramClick, trackInitiateCheckout } from "../utils/metaPixel.js";

const benefits = [
  "Безкоштовна оцінка за 15 хвилин",
  "Запуск продажу вже завтра",
  "Оплата тільки після результату",
];

export default function Cta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <FadeUp>
        <div className="relative overflow-hidden rounded-2xl border border-[#1f2937] bg-gradient-to-br from-white/5 to-transparent p-8 text-center transition hover:border-[#0284c7]/60 focus-visible:border-[#0284c7]/60">
          {/* Urgency Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-[#0284c7]/30 bg-[#0284c7]/10 px-3 py-1 text-xs font-semibold text-[#0284c7]">
            <Clock className="h-3 w-3" />
            <span>Вільних місць: 8</span>
          </div>

          <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
            {cta.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
            {cta.description}
          </p>

          {/* Benefits List */}
          <div className="mx-auto mt-6 flex max-w-md flex-col gap-2 text-left">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-white/80"
              >
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#0284c7]" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <a
            href="https://t.me/boostauto_bot"
            onClick={() => {
              trackTelegramClick("cta_section");
              trackInitiateCheckout(0);
            }}
            className="mt-8 inline-flex rounded-full bg-[#0284c7] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#0284c7]/30 transition hover:bg-[#0369a1] hover:shadow-xl hover:shadow-[#0284c7]/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284c7] active:scale-[0.98]"
          >
            {cta.button}
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
