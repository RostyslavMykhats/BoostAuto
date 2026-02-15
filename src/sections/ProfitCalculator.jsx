import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import FadeUp from "../components/FadeUp.jsx";
import { trackCalculatorInteraction } from "../utils/metaPixel.js";

const formatUsd = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

function useAnimatedNumber(targetValue, duration = 450) {
  const [value, setValue] = useState(targetValue);

  useEffect(() => {
    let frame;
    const start = value;
    const end = targetValue;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const next = start + (end - start) * progress;
      setValue(next);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [targetValue, duration]);

  return value;
}

export default function ProfitCalculator() {
  const [price, setPrice] = useState(18000);

  const { upliftLow, upliftHigh, totalLow, totalHigh } = useMemo(() => {
    const low = price * 0.08;
    const high = price * 0.1;
    return {
      upliftLow: low,
      upliftHigh: high,
      totalLow: price + low,
      totalHigh: price + high,
    };
  }, [price]);

  const animatedLow = useAnimatedNumber(upliftLow);
  const animatedHigh = useAnimatedNumber(upliftHigh);
  const animatedTotalLow = useAnimatedNumber(totalLow);
  const animatedTotalHigh = useAnimatedNumber(totalHigh);

  const sparkline = useMemo(() => {
    const points = [price * 0.9, price, totalLow, totalHigh, totalHigh * 1.02];
    const max = Math.max(...points);
    return points
      .map((value, index) => {
        const x = index * 42;
        const y = 60 - (value / max) * 44;
        return `${x},${y}`;
      })
      .join(" ");
  }, [price, totalLow, totalHigh]);

  return (
    <section id="calculator" className="mx-auto w-full max-w-6xl px-6 pb-24">
      <FadeUp>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="flex flex-col gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">
              Калькулятор прибутку
            </p>
            <h2 className="text-2xl font-bold sm:text-3xl font-montserrat">
              Скільки можна виграти від професійного продажу
            </h2>
            <p className="max-w-2xl text-base text-white/70">
              Підготовка авто та таргет піднімають фінальну вартість продажу на
              8–10%, що повністю перекриває комісію сервісу.
            </p>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="rounded-2xl border border-white/10 bg-[#0b1220]/60 p-6">
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>Оціночна ціна авто</span>
                <span className="text-white">{formatUsd(price)}</span>
              </div>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={price}
                onChange={(event) => {
                  const newPrice = Number(event.target.value);
                  setPrice(newPrice);
                  trackCalculatorInteraction(newPrice);
                }}
                className="mt-4 w-full accent-[#0284c7]"
              />
              <div className="mt-3 flex justify-between text-xs text-white/40">
                <span>$1,000</span>
                <span>$50,000</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#030712]/60 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                Потенційний приріст
              </p>
              <div className="mt-4 text-3xl font-semibold text-white drop-shadow-[0_0_18px_rgba(2,132,199,0.35)]">
                {formatUsd(animatedLow)} – {formatUsd(animatedHigh)}
              </div>
              <p className="mt-3 text-sm text-white/60">
                Новий діапазон ціни продажу
              </p>
              <div className="mt-2 text-xl font-semibold text-white drop-shadow-[0_0_12px_rgba(2,132,199,0.25)]">
                {formatUsd(animatedTotalLow)} – {formatUsd(animatedTotalHigh)}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
