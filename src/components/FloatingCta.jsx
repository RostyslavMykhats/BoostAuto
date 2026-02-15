import { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackTelegramClick } from "../utils/metaPixel.js";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
      setShowScrollTop(scrollPosition > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* CTA Button - Right side */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="https://t.me/boostauto_bot"
            onClick={() => trackTelegramClick("floating_cta")}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-[9998] group flex items-center gap-3 rounded-full bg-[#0284c7] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#0284c7]/30 transition hover:bg-[#0369a1] hover:shadow-xl hover:shadow-[#0284c7]/40 active:scale-[0.98]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="hidden sm:inline">Оцінити авто</span>
            <span className="sm:hidden">Оцінити</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button - Left side */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-6 left-6 z-[9998] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#030712]/90 backdrop-blur-md text-white transition hover:border-[#0284c7] hover:bg-white/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
