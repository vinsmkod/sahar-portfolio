"use client";

import { experiences } from "@/data/experience";
import {
  Code2,
  FileSpreadsheet,
  GraduationCap,
  Building2,
  Calendar,
  Quote,
} from "lucide-react";

const iconMap = {
  capstone: Code2,
  freelance: FileSpreadsheet,
  education: GraduationCap,
  internship: Building2,
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-28 bg-[#F0F1EB]/60 dark:bg-[#202725]/60 border-t border-[#DEE3DD]/70 dark:border-[#2F3835] relative overflow-hidden transition-colors duration-200"
    >
      <div className="site-container">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
            PENGALAMAN &amp; PENDIDIKAN
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight leading-tight">
            My journey so far.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#77858A] dark:text-[#9BA7A3] max-w-xl">
            Kumpulan pengalaman, proyek, dan pendidikan yang membentuk perjalanan
            saya hingga hari ini.
          </p>
        </div>

        {/* Content: 8 cols Timeline + 4 cols Editorial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* ── Left: Timeline (8 cols) ── */}
          <div className="lg:col-span-8 relative">
            {/* Sage timeline line */}
            <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-[2px] bg-[#DEE3DD] dark:bg-[#2F3835]" />

            <div className="flex flex-col gap-6 sm:gap-7">
              {experiences.map((exp, index) => {
                const Icon = iconMap[exp.type];

                return (
                  <div
                    key={exp.id}
                    data-aos="fade-up"
                    data-aos-delay={index * 90}
                    className="relative pl-14 sm:pl-16 group"
                  >
                    {/* Node Icon */}
                    <div className="absolute left-1.5 sm:left-2 top-4 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white dark:bg-[#252D2A] border-2 border-[#6D8577] dark:border-[#83A090] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center z-10 shadow-sm group-hover:bg-[#4F695B] dark:group-hover:bg-[#83A090] group-hover:text-white dark:group-hover:text-[#171C1B] transition-colors duration-200">
                      <Icon size={14} />
                    </div>

                    {/* Timeline Card */}
                    <div className="p-5 sm:p-6 bg-white dark:bg-[#252D2A] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] shadow-[0_2px_10px_rgba(38,50,56,0.03)] hover:border-[#CBD5CC] dark:hover:border-[#3E4A45] transition-all duration-200">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display font-bold text-base sm:text-lg text-[#263238] dark:text-[#F2F3EE] leading-snug group-hover:text-[#4F695B] dark:group-hover:text-[#83A090] transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-xs font-semibold text-[#6D8577] dark:text-[#83A090] mt-0.5">
                            {exp.organization}
                          </p>
                        </div>

                        {/* Period & Badge on Right */}
                        <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 self-start">
                          <div className="inline-flex items-center gap-1.5 text-xs text-[#77858A] dark:text-[#9BA7A3]">
                            <Calendar size={13} className="text-[#6D8577] dark:text-[#83A090]" />
                            <span>{exp.year}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-medium text-[#4A555B] dark:text-[#D4DBD7] bg-[#F0F1EB] dark:bg-[#1D2522] px-2.5 py-0.5 rounded-full">
                              {exp.badge}
                            </span>
                            {exp.isOngoing && (
                              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full">
                                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                Ongoing
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[#77858A] dark:text-[#9BA7A3] leading-relaxed mt-2 pt-2 border-t border-[#DEE3DD]/60 dark:border-[#2F3835]">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right: Motivational Editorial Card (4 cols) ── */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="lg:col-span-4 bg-[#F0F1EB] dark:bg-[#202725] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] p-7 flex flex-col justify-between h-full min-h-[420px] relative overflow-hidden transition-colors"
          >
            <div>
              <Quote size={28} className="text-[#6D8577] dark:text-[#83A090] mb-4 rotate-180 opacity-70" />
              <blockquote className="text-base sm:text-lg font-medium text-[#263238] dark:text-[#F2F3EE] leading-relaxed italic">
                &ldquo;Setiap pengalaman adalah langkah menuju versi terbaik diri
                sendiri.&rdquo;
              </blockquote>
              <div className="w-8 h-[2px] bg-[#6D8577] dark:bg-[#83A090] mt-4 rounded-full" />
            </div>

            {/* Mountain / Path Journey Graphic (matching reference image) */}
            <div className="mt-8 relative w-full pt-4">
              <svg
                viewBox="0 0 200 160"
                className="w-full text-[#6D8577] dark:text-[#83A090] opacity-80"
                fill="currentColor"
              >
                {/* Sun/Moon */}
                <circle cx="160" cy="40" r="14" fill="#C4D4CB" className="dark:fill-[#384A42]" />

                {/* Background Peak */}
                <polygon
                  points="130,160 160,60 190,160"
                  fill="#98B1A2"
                  className="dark:fill-[#3A5046]"
                  opacity="0.6"
                />

                {/* Main Mountains */}
                <polygon
                  points="30,160 100,50 170,160"
                  fill="#6D8577"
                  className="dark:fill-[#476054]"
                  opacity="0.8"
                />
                <polygon
                  points="90,160 135,75 180,160"
                  fill="#4F695B"
                  className="dark:fill-[#32453C]"
                  opacity="0.9"
                />

                {/* Snowcaps */}
                <polygon points="100,50 88,72 112,72" fill="#FFFFFF" opacity="0.9" />
                <polygon points="135,75 125,92 145,92" fill="#FFFFFF" opacity="0.9" />

                {/* Pathway */}
                <path
                  d="M100,160 Q110,130 95,115 T100,90"
                  stroke="#DEE8E2"
                  className="dark:stroke-[#202725]"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                {/* Flag on Peak */}
                <line x1="100" y1="50" x2="100" y2="35" stroke="#263238" className="dark:stroke-[#F2F3EE]" strokeWidth="1.5" />
                <polygon points="100,35 112,40 100,45" fill="#4F695B" className="dark:fill-[#83A090]" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
