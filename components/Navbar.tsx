"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Karya", href: "#projects" },
  { label: "Jasa", href: "#jasa" },
  { label: "Pengalaman", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "projects",
        "jasa",
        "experience",
        "faq",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F6F1]/92 dark:bg-[#171C1B]/92 backdrop-blur-md border-b border-[#DEE3DD] dark:border-[#2F3835] shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
          : "bg-[#F7F6F1] dark:bg-[#171C1B]"
      }`}
    >
      <nav className="site-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
            aria-label="Sahar Dwi Anugrah — Beranda"
          >
            <div className="w-10 h-10 rounded-xl bg-[#4F695B] dark:bg-[#6D8B7B] text-white flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-sm group-hover:bg-[#3A5044] dark:group-hover:bg-[#83A090] transition-colors">
              SDA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-[#263238] dark:text-[#F2F3EE] tracking-tight group-hover:text-[#4F695B] dark:group-hover:text-[#83A090] transition-colors">
                Sahar Dwi Anugrah
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#263238] dark:text-[#F2F3EE] font-semibold"
                      : "text-[#77858A] dark:text-[#9BA7A3] hover:text-[#263238] dark:hover:text-[#F2F3EE]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#4F695B] dark:bg-[#83A090] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Controls: Theme Toggle & CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  isDark
                    ? "Beralih ke mode terang (Light Mode)"
                    : "Beralih ke mode gelap (Dark Mode)"
                }
                title={
                  isDark
                    ? "Beralih ke mode terang (Light Mode)"
                    : "Beralih ke mode gelap (Dark Mode)"
                }
                className="w-10 h-10 rounded-xl bg-white/80 dark:bg-[#252D2A] border border-[#DEE3DD] dark:border-[#2F3835] text-[#263238] dark:text-[#F2F3EE] hover:bg-[#EAEFE9] dark:hover:bg-[#2F3835] flex items-center justify-center transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F695B]"
              >
                {isDark ? (
                  <Sun size={18} className="text-[#F2F3EE]" />
                ) : (
                  <Moon size={18} className="text-[#263238]" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#4F695B] hover:bg-[#3A5044] dark:bg-[#6D8B7B] dark:hover:bg-[#7E9C8B] text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>Mari Terhubung</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Tutup menu" : "Buka menu"}
              className="lg:hidden p-2 rounded-lg text-[#263238] dark:text-[#F2F3EE] hover:bg-[#EAEFE9] dark:hover:bg-[#252D2A] transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#F7F6F1] dark:bg-[#171C1B] border-b border-[#DEE3DD] dark:border-[#2F3835] px-5 py-5 shadow-lg"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#EAEFE9] dark:bg-[#252D2A] text-[#263238] dark:text-[#F2F3EE] font-semibold"
                        : "text-[#77858A] dark:text-[#9BA7A3] hover:bg-[#F0F1EB] dark:hover:bg-[#202725] hover:text-[#263238] dark:hover:text-[#F2F3EE]"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-[#4F695B] hover:bg-[#3A5044] dark:bg-[#6D8B7B] dark:hover:bg-[#7E9C8B] text-white text-base font-medium rounded-full transition-colors"
              >
                <span>Mari Terhubung</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


