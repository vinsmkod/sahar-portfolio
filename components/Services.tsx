"use client";

import {
  Layout,
  Monitor,
  Database,
  Layers,
  MessageCircle,
  Check,
} from "lucide-react";
import { studentServices, WHATSAPP_NUMBER } from "@/data/services";

const iconMap = {
  landing: Layout,
  frontend: Monitor,
  backend: Database,
  fullstack: Layers,
};

export default function Services() {
  return (
    <section
      id="jasa"
      className="py-20 lg:py-28 bg-[#F7F6F1] dark:bg-[#171C1B] border-t border-[#DEE3DD]/70 dark:border-[#2F3835] relative overflow-hidden transition-colors duration-200"
    >
      <div className="site-container">
        {/* Section Header */}
        <div data-aos="fade-up" className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
            JASA UNTUK MAHASISWA
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight leading-tight mb-4">
            Butuh bantuan project website kuliah?
          </h2>
          <p className="text-base text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed">
            Saya membantu mahasiswa mengembangkan project website sesuai kebutuhan
            tugas dan perkuliahan. Mulai dari landing page sederhana hingga
            aplikasi web dengan frontend, backend, dan database. Kita diskusikan
            kebutuhan project terlebih dahulu agar solusi yang dibuat sesuai
            dengan ketentuan tugas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              service.waMessage
            )}`;

            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="group flex flex-col justify-between bg-white dark:bg-[#252D2A] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] p-6 hover:border-[#CBD5CC] dark:hover:border-[#3E4A45] transition-all duration-300 shadow-[0_2px_12px_rgba(38,50,56,0.03)] hover:shadow-[0_8px_30px_rgba(38,50,56,0.06)] h-full"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center mb-5 group-hover:bg-[#4F695B] group-hover:text-white dark:group-hover:bg-[#83A090] dark:group-hover:text-[#171C1B] transition-colors duration-200">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-[#263238] dark:text-[#F2F3EE] mb-2 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#77858A] dark:text-[#9BA7A3] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Scope Checklist */}
                  <div className="pt-4 border-t border-[#DEE3DD]/70 dark:border-[#2F3835] mb-6">
                    <p className="text-xs font-semibold text-[#263238] dark:text-[#F2F3EE] uppercase tracking-wider mb-3">
                      Cakupan Pengerjaan:
                    </p>
                    <ul className="flex flex-col gap-2">
                      {service.scope.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed"
                        >
                          <span className="w-4 h-4 rounded-full bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check size={11} strokeWidth={2.5} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* WhatsApp CTA Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#4F695B] hover:bg-[#3A5044] dark:bg-[#5E7D6C] dark:hover:bg-[#4D6758] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 shadow-sm hover:shadow"
                  aria-label={`Diskusikan project ${service.title} via WhatsApp`}
                >
                  <MessageCircle size={15} />
                  <span>Diskusikan Project</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Note below cards */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-10 p-4 sm:p-5 bg-[#F0F1EB] dark:bg-[#202725] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] text-center max-w-2xl mx-auto transition-colors"
        >
          <p className="text-xs sm:text-sm text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed">
            💡 Cakupan pengerjaan, teknologi, dan estimasi biaya disesuaikan
            dengan kebutuhan serta ketentuan tugas masing-masing.
          </p>
        </div>
      </div>
    </section>
  );
}
