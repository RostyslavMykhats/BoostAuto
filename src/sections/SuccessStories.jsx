import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign } from "lucide-react";
import FadeUp from "../components/FadeUp.jsx";

const stories = [
  {
    model: "BMW 3 Series 2018",
    location: "Київ",
    initialPrice: 18000,
    finalPrice: 19400,
    days: 12,
    profit: 850,
    highlight: true,
  },
  {
    model: "Mercedes C-Class 2019",
    location: "Львів",
    initialPrice: 22000,
    finalPrice: 23100,
    days: 9,
    profit: 1100,
    highlight: false,
  },
  {
    model: "Audi A4 2020",
    location: "Одеса",
    initialPrice: 25000,
    finalPrice: 26200,
    days: 15,
    profit: 1200,
    highlight: false,
  },
];

const formatUsd = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

export default function SuccessStories() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      <FadeUp>
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">
            Кейси успіху
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
            Реальні результати наших клієнтів
          </h2>
          <p className="mt-2 max-w-2xl text-base text-white/70">
            Автомобілі, які ми продали за останній місяць
          </p>
        </div>
      </FadeUp>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {stories.map((story, index) => (
          <FadeUp
            key={story.model}
            delay={0.1 + index * 0.1}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6 transition hover:-translate-y-1 hover:border-[#0284c7]/60 ${
              story.highlight ? "ring-1 ring-[#0284c7]/50" : ""
            }`}
          >
            <div className="absolute right-4 top-4 h-16 w-16 rounded-full bg-[#0284c7]/10 blur-[20px] transition group-hover:bg-[#0284c7]/20" />
            
            <div className="relative">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {story.model}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{story.location}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <DollarSign size={16} className="text-[#0284c7]" />
                    <span className="text-xs text-white/60">Початкова ціна</span>
                  </div>
                  <span className="text-sm font-semibold text-white/70">
                    {formatUsd(story.initialPrice)}
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#0284c7]/30 bg-[#0284c7]/10 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={16} className="text-[#0284c7]" />
                    <span className="text-xs text-[#0284c7]">Фінальна ціна</span>
                  </div>
                  <span className="text-sm font-semibold text-[#0284c7]">
                    {formatUsd(story.finalPrice)}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-white/40" />
                    <span className="text-xs text-white/60">Термін продажу</span>
                  </div>
                  <span className="text-sm font-semibold text-white">
                    {story.days} днів
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-[#0284c7]/50 bg-[#0284c7]/10 px-3 py-2 text-center">
                  <span className="text-xs text-white/60">Додаткова вигода</span>
                  <div className="mt-1 text-lg font-bold text-[#0284c7]">
                    {formatUsd(story.profit)}
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
