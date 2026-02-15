import FadeUp from "./FadeUp.jsx";
import { Shield, Clock, CheckCircle2, Zap } from "lucide-react";

const badges = [
  {
    icon: Shield,
    text: "Безкоштовна оцінка",
    subtext: "Без зобов'язань",
  },
  {
    icon: Clock,
    text: "Швидкий старт",
    subtext: "Запуск за 24 години",
  },
  {
    icon: CheckCircle2,
    text: "Оплата за результат",
    subtext: "Без передоплати",
  },
  {
    icon: Zap,
    text: "Гарантія продажу",
    subtext: "Або працюємо безкоштовно",
  },
];

export default function TrustBadges() {
  return (
    <FadeUp>
      <div className="mx-auto w-full max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-4 text-center transition hover:border-[#0284c7]/30 hover:bg-white/10"
              >
                <div className="rounded-full bg-[#0284c7]/20 p-2">
                  <Icon className="h-5 w-5 text-[#0284c7]" />
                </div>
                <div className="text-sm font-semibold text-white">
                  {badge.text}
                </div>
                <div className="text-xs text-white/50">{badge.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </FadeUp>
  );
}
