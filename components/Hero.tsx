"use client";

import Image from "next/image";
import { ArrowRight, GraduationCap, Mail, User, Code, Layers, Database } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-center bg-[#F7F6F1] dark:bg-[#171C1B] pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden transition-colors duration-200"
    >
      {/* Background organic leaf motifs */}
      <div className="absolute top-12 left-4 w-40 h-40 opacity-30 dark:opacity-10 pointer-events-none select-none text-[#6D8577]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,80 Q40,10 90,20 Q60,70 10,80 Z" opacity="0.3" />
          <path d="M20,70 Q45,25 80,30" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-20 right-8 w-56 h-56 opacity-25 dark:opacity-10 pointer-events-none select-none text-[#6D8577]">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M85,20 C60,40 50,70 20,80 C40,70 70,50 85,20 Z" opacity="0.35" />
          <path d="M90,40 C70,55 55,75 35,90" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
      </div>

      <div className="relative z-10 site-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-16 items-center">
          {/* ── Left Column: Editorial Info (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Small label */}
            <span
              data-aos="fade-up"
              className="text-sm font-medium tracking-wide text-[#77858A] dark:text-[#9BA7A3] mb-2 block"
            >
              Halo, saya
            </span>

            {/* Main Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="80"
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight leading-[1.08] mb-3"
            >
              Sahar Dwi
              <br />
              Anugrah
            </h1>

            {/* Subheading */}
            <div data-aos="fade-up" data-aos-delay="140" className="mb-6">
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#77858A] dark:text-[#9BA7A3]">
                MAHASISWA SISTEM INFORMASI
              </span>
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-base sm:text-lg text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed max-w-xl mb-8"
            >
              Saya tertarik pada pengembangan web, analisis sistem, dan pemecahan
              masalah melalui teknologi. Terbiasa bekerja dengan tim,
              komunikatif, dan selalu ingin belajar hal baru.
            </p>

            {/* Action Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="260"
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#4F695B] hover:bg-[#3A5044] dark:bg-[#6D8B7B] dark:hover:bg-[#7E9C8B] text-white font-medium text-sm sm:text-base rounded-full transition-all duration-200 shadow-sm hover:shadow"
              >
                <span>Lihat Karya Saya</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>

              <a
                href="#jasa"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#jasa")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 dark:bg-[#252D2A] hover:bg-white dark:hover:bg-[#2F3835] text-[#263238] dark:text-[#F2F3EE] font-medium text-sm sm:text-base rounded-full border border-[#DEE3DD] dark:border-[#2F3835] transition-all duration-200 hover:border-[#CBD5CC]"
              >
                <span>Jasa Website Mahasiswa</span>
              </a>
            </div>

            {/* Skills summary strip */}
            <div
              data-aos="fade-up"
              data-aos-delay="320"
              className="pt-6 border-t border-[#DEE3DD]/80 dark:border-[#2F3835] w-full flex flex-wrap items-center gap-x-6 gap-y-3"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4A555B] dark:text-[#D4DBD7]">
                <Code size={15} className="text-[#6D8577] dark:text-[#83A090]" />
                <span>Web Development</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#CBD5CC] dark:bg-[#38433F] hidden sm:block" />
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4A555B] dark:text-[#D4DBD7]">
                <Layers size={15} className="text-[#6D8577] dark:text-[#83A090]" />
                <span>System Analysis</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-[#CBD5CC] dark:bg-[#38433F] hidden sm:block" />
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#4A555B] dark:text-[#D4DBD7]">
                <Database size={15} className="text-[#6D8577] dark:text-[#83A090]" />
                <span>Database Management</span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Portrait & Info Card (5 cols) ── */}
          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px] flex items-center justify-center">
              {/* Organic Soft Sage Backdrop Frame */}
              <div
                className="absolute -top-6 -bottom-6 -left-4 -right-4 bg-[#E8EDE8] dark:bg-[#232C28] rounded-[48px] -rotate-1 pointer-events-none transition-colors"
                style={{
                  borderTopLeftRadius: "140px",
                  borderTopRightRadius: "120px",
                  borderBottomLeftRadius: "60px",
                  borderBottomRightRadius: "60px",
                }}
              />

              {/* Photo Container */}
              <div
                className="relative z-10 w-64 h-80 sm:w-72 sm:h-96 lg:w-[320px] lg:h-[420px] xl:w-[340px] xl:h-[440px] overflow-hidden shadow-[0_8px_30px_rgba(38,50,56,0.08)] bg-[#E8EDE8] dark:bg-[#232C28]"
                style={{
                  borderTopLeftRadius: "130px",
                  borderTopRightRadius: "130px",
                  borderBottomLeftRadius: "48px",
                  borderBottomRightRadius: "48px",
                }}
              >
                <Image
                  src="/images/photo.jpg"
                  alt="Sahar Dwi Anugrah — Mahasiswa Sistem Informasi"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                />
              </div>

              {/* Floating Profile Info Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="280"
                className="absolute z-20 -bottom-6 -right-2 sm:-right-6 lg:-right-4 bg-white/95 dark:bg-[#252D2A]/95 backdrop-blur-md border border-[#DEE3DD] dark:border-[#2F3835] rounded-2xl p-4 shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex flex-col gap-3 min-w-[210px] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#263238] dark:text-[#F2F3EE] leading-tight">
                      Universitas Subang
                    </p>
                    <p className="text-[11px] text-[#77858A] dark:text-[#9BA7A3]">Semester 7</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0">
                    <Mail size={15} />
                  </div>
                  <div>
                    <a
                      href="mailto:sahardwianugrah10@gmail.com"
                      className="text-xs font-medium text-[#263238] dark:text-[#F2F3EE] hover:text-[#4F695B] dark:hover:text-[#83A090] transition-colors leading-tight"
                    >
                      sahardwianugrah10@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0">
                    <User size={15} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#263238] dark:text-[#F2F3EE] leading-tight">
                      Sahar Dwi Anugrah
                    </p>
                    <p className="text-[11px] text-[#77858A] dark:text-[#9BA7A3]">Subang, Jawa Barat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-14 hidden lg:flex flex-col items-center gap-2 self-end mr-6">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#77858A] dark:text-[#9BA7A3] uppercase">
                SCROLL
              </span>
              <div className="w-[1px] h-10 bg-[#CBD5CC] dark:bg-[#38433F] relative">
                <div className="w-2 h-2 rounded-full border-2 border-[#4F695B] dark:border-[#83A090] bg-white dark:bg-[#171C1B] absolute -left-[3px] top-0 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
