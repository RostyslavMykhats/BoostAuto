import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import FadeUp from "../components/FadeUp.jsx";

const comparison = [
  {
    feature: "Професійна зйомка",
    boostAuto: true,
    traditional: false,
  },
  {
    feature: "Аналіз ринку та ціноутворення",
    boostAuto: true,
    traditional: false,
  },
  {
    feature: "Таргетована реклама",
    boostAuto: true,
    traditional: false,
  },
  {
    feature: "Фільтрація перекупів",
    boostAuto: true,
    traditional: false,
  },
  {
    feature: "Повний супровід угоди",
    boostAuto: true,
    traditional: false,
  },
  {
    feature: "Середній термін продажу",
    boostAuto: "7-21 днів",
    traditional: "30-90 днів",
  },
  {
    feature: "Оплата",
    boostAuto: "Після продажу",
    traditional: "Перед публікацією",
  },
];

export default function Comparison() {
  return (
    <section id="comparison" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <FadeUp>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Порівняння
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
            Boost Auto vs Самостійний продаж
          </h2>
          <p className="mt-2 max-w-2xl text-base text-white/70">
            Чому професійний сервіс завжди перемагає традиційні майданчики
          </p>
        </div>
      </FadeUp>

      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220]/70 backdrop-blur">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white/90">
                  Функція
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#0284c7]">
                  Boost Auto
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white/60">
                  Традиційні майданчики
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((item, index) => (
                <motion.tr
                  key={item.feature}
                  className="border-b border-white/5 transition hover:bg-white/5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <td className="px-6 py-4 text-sm text-white/80">
                    {item.feature}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof item.boostAuto === "boolean" ? (
                      item.boostAuto ? (
                        <div className="flex items-center justify-center">
                          <Check
                            size={20}
                            className="text-[#0284c7]"
                            strokeWidth={3}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <X size={20} className="text-white/30" strokeWidth={3} />
                        </div>
                      )
                    ) : (
                      <span className="text-sm font-semibold text-[#0284c7]">
                        {item.boostAuto}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {typeof item.traditional === "boolean" ? (
                      item.traditional ? (
                        <div className="flex items-center justify-center">
                          <Check
                            size={20}
                            className="text-white/30"
                            strokeWidth={3}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <X size={20} className="text-white/30" strokeWidth={3} />
                        </div>
                      )
                    ) : (
                      <span className="text-sm text-white/50">{item.traditional}</span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
