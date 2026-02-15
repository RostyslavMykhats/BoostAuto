import FadeUp from "../components/FadeUp.jsx";
import { Users, Star, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Задоволених клієнтів",
    color: "text-[#0284c7]",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Середня оцінка",
    color: "text-yellow-400",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "Успішних продажів",
    color: "text-green-400",
  },
];

export default function SocialProof() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-20">
      <FadeUp>
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8">
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="rounded-full bg-white/5 p-4">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-white font-montserrat">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
