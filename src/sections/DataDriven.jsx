import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp.jsx";

const timeline = [
  {
    time: "0 хв",
    text: "Авто завантажено в систему. Запущено аналіз 45 майданчиків.",
  },
  {
    time: "+15 хв",
    text: "Сформовано стратегію Boost. Запущено таргет на цільову аудиторію (Київ, Львів, Одеса).",
  },
  {
    time: "+2 год",
    text: "Отримано 14 цільових запитів. Відфільтровано 12 перекупів.",
  },
  {
    time: "Фінал",
    text: "Знайдено реального покупця. Ціна: +$900 від початкової оцінки.",
  },
];

export default function DataDriven() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/70 p-6 backdrop-blur">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#0284c7]/10 blur-[24px]" />
            <motion.div
              className="grid gap-6"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } },
              }}
            >
              <motion.div
                className="relative rounded-2xl border border-white/10 bg-[#0b1220]/70 p-5"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-4 text-xs text-white/50">
                  Live Sales Feed
                </div>
                <div className="relative">
                  <div className="absolute left-[5px] top-0 h-full w-px bg-gradient-to-b from-[#0284c7]/50 via-[#0284c7]/30 to-transparent" />
                  <motion.div
                    className="space-y-3"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.1 } },
                    }}
                  >
                    {timeline.map((event, index) => (
                      <motion.div
                        key={event.time}
                        className="relative flex gap-4"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 },
                        }}
                        transition={{ duration: 0.35 }}
                      >
                        <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
                          <div className="h-2.5 w-2.5 mt-1.5 rounded-full border border-[#0284c7] bg-[#0284c7] shadow-[0_0_8px_rgba(2,132,199,0.5)]" />
                        </div>
                        <div className={index === timeline.length - 1 ? "pb-0" : "pb-8"}>
                          <div className="text-[10px] font-bold uppercase tracking-wider text-[#0284c7]">
                            {event.time}
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-white/90">
                            {event.text}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="grid gap-3 md:grid-cols-2"
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {[
                  {
                    label: "Попит",
                    value: "+12%",
                    text: "на модель виріс",
                  },
                  {
                    label: "Перегляди",
                    value: "400",
                    text: "за останню годину",
                  },
                  {
                    label: "Запити",
                    value: "6/14",
                    text: "відповідають бюджету",
                  },
                  {
                    label: "Торг",
                    value: "+$900",
                    text: "до старту",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-[#0b1220]/70 px-4 py-3"
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-white/50">{item.label}</span>
                      <span className="text-sm font-semibold text-[#0284c7]">
                        {item.value}
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-white/70">{item.text}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Data-Driven Approach
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl font-montserrat">
              Продаж на основі даних, а не везіння
            </h2>
            <p className="mt-4 text-base text-white/70">
              Ми не просто виставляємо оголошення. Ми використовуємо алгоритми
              аналізу ринку та арбітраж трафіку, щоб ваше авто побачили саме ті,
              хто готовий купити зараз. Продаж на основі даних, а не везіння.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/60">
              <p>Ми аналізуємо 45 майданчиків одночасно</p>
              <p>Ваше авто бачать сотні водіїв за годину</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
