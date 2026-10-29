"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 lg:py-28 bg-[#F7F6F1] dark:bg-[#171C1B] border-t border-[#DEE3DD]/70 dark:border-[#2F3835] relative overflow-hidden transition-colors duration-200"
    >
      <div className="site-container">
        <div data-aos="fade-down" data-aos-delay="60" className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
            FAQ
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight leading-tight mb-4">
            Sering Ditanyakan
          </h2>
          <p className="text-sm sm:text-base text-[#77858A] dark:text-[#9BA7A3] leading-relaxed">
            Jawaban untuk pertanyaan umum seputar layanan pembuatan website untuk
            mahasiswa.
          </p>
        </div>

        <div className="flex flex-col gap-3.5 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              // Outer wrapper terpisah untuk AOS agar tidak bentrok dengan Framer Motion pada accordion
              <div
                key={faq.id}
                data-aos="fade-up"
                data-aos-delay={80 + index * 70}
              >
                <div
                  className={`editorial-card overflow-hidden bg-white dark:bg-[#252D2A] border transition-colors ${
                    isOpen
                      ? "border-[#CBD5CC] dark:border-[#3E4A45] shadow-sm"
                      : "border-[#DEE3DD] dark:border-[#2F3835]"
                  }`}
                >
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F695B] rounded-xl transition-colors group cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-[#263238] dark:text-[#F2F3EE] group-hover:text-[#4F695B] dark:group-hover:text-[#83A090] transition-colors leading-snug">
                      {faq.question}
                    </span>

                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isOpen
                          ? "bg-[#4F695B] dark:bg-[#83A090] text-white dark:text-[#171C1B]"
                          : "bg-[#F0F1EB] dark:bg-[#1D2522] text-[#77858A] dark:text-[#9BA7A3] group-hover:bg-[#E8EDE8] dark:group-hover:bg-[#2A3631] group-hover:text-[#263238] dark:group-hover:text-[#F2F3EE]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus size={16} strokeWidth={2.5} />
                      ) : (
                        <Plus size={16} strokeWidth={2.5} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                        style={{ willChange: "height, opacity" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 border-t border-[#DEE3DD]/50 dark:border-[#2F3835]">
                          <p className="text-xs sm:text-sm text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
