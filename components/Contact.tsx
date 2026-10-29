"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUpRight,
  Copy,
  Check,
  AlertCircle,
  MapPin,
} from "lucide-react";
import { CONTACT_INFO, type SocialLink } from "@/data/contact";

const iconMap = {
  email: Mail,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-[#F0F1EB]/50 dark:bg-[#202725]/50 border-t border-[#DEE3DD]/70 dark:border-[#2F3835] relative overflow-hidden transition-colors duration-200"
    >
      <div className="site-container">
        {/* Header */}
        <div data-aos="fade-up" className="max-w-2xl mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
            KONTAK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight leading-tight mb-4">
            Mari Terhubung
          </h2>
          <p className="text-base text-[#4A555B] dark:text-[#D4DBD7] leading-relaxed">
            Punya pertanyaan atau ingin berdiskusi mengenai project? Hubungi saya
            melalui email atau media sosial.
          </p>
        </div>

        {/* 4 Cards Grid (Email, LinkedIn, Instagram, Facebook) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CONTACT_INFO.socials.map((social: SocialLink, index: number) => {
            const Icon = iconMap[social.id as keyof typeof iconMap] || Mail;
            const isEmail = social.id === "email";

            return (
              <div
                key={social.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="flex flex-col justify-between p-6 bg-white dark:bg-[#252D2A] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] shadow-[0_2px_12px_rgba(38,50,56,0.03)] hover:border-[#CBD5CC] dark:hover:border-[#3E4A45] transition-all duration-200 group"
              >
                <div>
                  {/* Top Bar with Icon & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center group-hover:bg-[#4F695B] group-hover:text-white dark:group-hover:bg-[#83A090] dark:group-hover:text-[#171C1B] transition-colors duration-200">
                      <Icon size={20} />
                    </div>

                    {social.isConfigured ? (
                      <span className="text-[11px] font-medium text-[#4F695B] dark:text-[#83A090] bg-[#E8EDE8] dark:bg-[#1D2522] px-2.5 py-0.5 rounded-full">
                        Aktif
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#77858A] dark:text-[#9BA7A3] bg-[#F0F1EB] dark:bg-[#202725] px-2.5 py-0.5 rounded-full">
                        <AlertCircle size={11} />
                        Belum Diisi
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-lg text-[#263238] dark:text-[#F2F3EE] mb-1">
                    {social.name}
                  </h3>
                  <p className="text-xs text-[#77858A] dark:text-[#9BA7A3] mb-4">
                    {social.label}
                  </p>

                  {/* Handle / Address */}
                  <div className="p-3 bg-[#F7F6F1] dark:bg-[#1F2623] rounded-xl border border-[#DEE3DD]/70 dark:border-[#2F3835] mb-5">
                    <p className="text-xs font-semibold text-[#263238] dark:text-[#F2F3EE] truncate font-mono">
                      {social.usernameDisplay}
                    </p>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#DEE3DD]/60 dark:border-[#2F3835]">
                  {isEmail ? (
                    <div className="flex items-center gap-2">
                      <a
                        href={social.href}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-[#4F695B] hover:bg-[#3A5044] dark:bg-[#5E7D6C] dark:hover:bg-[#4D6758] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                        aria-label={`Kirim email ke ${CONTACT_INFO.email}`}
                      >
                        <Mail size={13} />
                        <span>Kirim Email</span>
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-2.5 rounded-xl border border-[#DEE3DD] dark:border-[#2F3835] text-[#77858A] dark:text-[#9BA7A3] hover:text-[#263238] dark:hover:text-[#F2F3EE] hover:bg-[#F0F1EB] dark:hover:bg-[#1D2522] transition-colors"
                        title="Salin alamat email"
                        aria-label="Salin alamat email"
                      >
                        {copiedEmail ? (
                          <Check size={14} className="text-emerald-600 dark:text-emerald-400" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  ) : social.isConfigured ? (
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-[#4F695B] hover:bg-[#3A5044] dark:bg-[#5E7D6C] dark:hover:bg-[#4D6758] text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                      aria-label={`Buka profil ${social.name}`}
                    >
                      <span>Buka Profil</span>
                      <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <div className="w-full text-center py-2 text-xs text-[#77858A] dark:text-[#9BA7A3] bg-[#F0F1EB]/50 dark:bg-[#1D2522]/50 rounded-xl border border-dashed border-[#DEE3DD] dark:border-[#2F3835]">
                      <span>Siap dihubungkan</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Location & Response Note */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-[#252D2A] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835]"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#E8EDE8] dark:bg-[#1D2522] text-[#4F695B] dark:text-[#83A090] flex items-center justify-center flex-shrink-0">
              <MapPin size={17} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#263238] dark:text-[#F2F3EE]">
                {CONTACT_INFO.location}
              </p>
              <p className="text-[11px] text-[#77858A] dark:text-[#9BA7A3]">
                Terbuka untuk diskusi online maupun tatap muka
              </p>
            </div>
          </div>

          <p className="text-xs text-[#77858A] dark:text-[#9BA7A3] text-center sm:text-right">
            ⚡ Respon cepat melalui email atau WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}
