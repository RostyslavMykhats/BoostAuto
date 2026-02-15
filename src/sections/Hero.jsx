import { motion } from "framer-motion";
import FadeUp from "../components/FadeUp.jsx";
import Navbar from "../components/Navbar.jsx";
import { hero } from "../data/content.js";
import { trackTelegramClick, trackViewContent } from "../utils/metaPixel.js";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    trackViewContent("Hero Section", "Landing Page", 0);
  }, []);

  return (
    <header className="relative z-10 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(3, 7, 18, 0.96) 0%, rgba(12, 20, 32, 0.78) 45%, rgba(2, 132, 199, 0.22) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0.05) 70%, rgba(255, 255, 255, 0) 100%)",
            backgroundSize: "320px 320px",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.35) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px", "0px 0px"],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#030712]/40 to-[#030712]" />
      </div>

      <Navbar />

      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6 pb-32 pt-10 text-center">
        <FadeUp>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
            {hero.tagline}
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="relative">
            <h1 className="max-w-3xl text-3xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/80 sm:text-5xl font-montserrat">
              {hero.title}
            </h1>
            <motion.div
              className="absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-[#0284c7] to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 rounded-full bg-[#0284c7] blur-[8px]"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 128, opacity: [0, 0.6, 0.4] }}
              transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
            />
          </div>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-8 max-w-2xl text-base text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/70 sm:text-lg">
            {hero.description}
          </p>
        </FadeUp>
        <FadeUp
          delay={0.3}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://t.me/boostauto_bot"
            onClick={() => trackTelegramClick("hero_primary")}
            className="rounded-full bg-[#0284c7] px-7 py-3 text-base font-semibold text-white shadow-soft transition hover:bg-[#0369a1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284c7] active:scale-[0.98]"
          >
            {hero.primaryCta}
          </a>
          <a
            href="https://t.me/boostauto_bot"
            onClick={() => trackTelegramClick("hero_secondary")}
            className="rounded-full border border-[#1f2937] bg-white/5 px-6 py-3 text-base font-semibold text-white/80 transition hover:border-[#0284c7] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284c7] active:scale-[0.98]"
          >
            {hero.secondaryCta}
          </a>
        </FadeUp>
      </section>
    </header>
  );
}
