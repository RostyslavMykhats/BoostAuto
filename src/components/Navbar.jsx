import { useState } from "react";
import { Menu, X } from "lucide-react";
import { trackTelegramClick } from "../utils/metaPixel.js";

const navItems = [
  { label: "Переваги", href: "#features" },
  { label: "Як працюємо", href: "#process" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Порівняння", href: "#comparison" },
  { label: "Тарифи", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-[9999] mx-auto flex w-full max-w-6xl items-center justify-between border-b border-white/5 bg-[#030712]/80 backdrop-blur-md px-6 py-6">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="relative z-[10000] text-xl font-extrabold tracking-tight transition hover:opacity-80"
      >
        <span className="text-white">BOOST </span>
        <span className="text-[#0284c7]">AUTO</span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="text-sm font-medium text-white/70 transition hover:text-white"
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://t.me/boostauto_bot"
          onClick={() => trackTelegramClick("navbar")}
          className="rounded-full border border-[#1f2937] bg-white/5 px-5 py-2 text-sm font-semibold text-white transition hover:border-[#0284c7] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0284c7] active:scale-[0.98]"
        >
          Оцінити моє авто
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[10000] md:hidden rounded-lg border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          {/* Menu */}
          <div className="fixed left-0 right-0 top-[73px] border-t border-white/10 bg-[#030712]/95 backdrop-blur-md md:hidden z-[9999] shadow-xl">
            <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-sm font-medium text-white/70 transition hover:text-white py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://t.me/boostauto_bot"
                onClick={() => trackTelegramClick("navbar_mobile")}
                className="block rounded-full border border-[#1f2937] bg-white/5 px-5 py-2 text-sm font-semibold text-white text-center transition hover:border-[#0284c7] hover:text-white mt-4"
              >
                Оцінити моє авто
              </a>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
