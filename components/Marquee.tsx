const items = [
  "SYSTEM ANALYST",
  "WEB DEVELOPMENT",
  "FRONTEND & BACKEND",
  "DATABASE MANAGEMENT",
  "CONTINUOUS LEARNING",
];

export default function Marquee() {
  return (
    <section
      aria-label="Keahlian Utama"
      className="relative w-full py-4 sm:py-5 bg-[#F0F1EB] dark:bg-[#202725] border-y border-[#DEE3DD] dark:border-[#2F3835] overflow-hidden select-none transition-colors duration-200"
    >
      <div className="marquee-container w-full overflow-hidden">
        <div className="marquee-track">
          {[0, 1].map((copyIndex) => (
            <div
              key={copyIndex}
              aria-hidden={copyIndex === 1}
              className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12 flex-shrink-0"
            >
              {items.map((text, i) => (
                <div key={i} className="flex items-center gap-8 sm:gap-12">
                  <span className="font-display text-xs sm:text-sm font-bold tracking-[0.22em] text-[#263238] dark:text-[#F2F3EE] uppercase whitespace-nowrap">
                    {text}
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#6D8577] dark:bg-[#83A090] flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
