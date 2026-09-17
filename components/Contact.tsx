"use client";

import { useRef, useState } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";

const CONTACT_EMAIL = "sahardwianugrah10@gmail.com";
const CONTACT_PHONE = "081324768193";
const CONTACT_PHONE_DISPLAY = "+62 813-2476-8193";
const WHATSAPP_URL =
  "https://wa.me/6281324768193?text=Halo%20Sahar%20Dwi%20Anugrah,%20saya%20tertarik%20untuk%20berdiskusi%20mengenai%20project%20atau%20kolaborasi.";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-[#fafafa] dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-800 dark:from-indigo-950 dark:via-indigo-900/90 dark:to-violet-950/80 border border-indigo-400/30 dark:border-indigo-700/50 p-8 sm:p-12 lg:p-16 shadow-2xl text-white"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center mb-10">
            {/* Section label badge */}
            <motion.div variants={itemVariants} className="inline-block mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-widest uppercase text-indigo-100 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                <Mail size={13} className="text-indigo-200" />
                Let&apos;s Connect
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight"
            >
              Have a project in mind or want to collaborate?
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-indigo-100/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Terbuka untuk diskusi mengenai perancangan sistem informasi,
              analisis kebutuhan pengguna, pengembangan web, maupun peluang kerja dan magang.
            </motion.p>
          </div>

          {/* Contact Direct Cards */}
          <motion.div
            variants={containerVariants}
            className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          >
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold">
                    Email
                  </p>
                  <p className="text-xs text-indigo-100/70">Kirim pesan langsung</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm font-medium text-white hover:underline truncate"
                  title={CONTACT_EMAIL}
                >
                  {CONTACT_EMAIL}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-indigo-200 hover:text-white hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                  title="Salin email"
                  aria-label="Salin email"
                >
                  {copied ? (
                    <Check size={14} className="text-green-300" />
                  ) : (
                    <Copy size={14} />
                  )}
                </button>
              </div>
            </motion.div>

            {/* WhatsApp / Phone Card */}
            <motion.div
              variants={itemVariants}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold">
                    WhatsApp & Telepon
                  </p>
                  <p className="text-xs text-indigo-100/70">Respon cepat</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mt-1">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-white hover:underline truncate"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-indigo-200 hover:text-white hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                  title="Buka WhatsApp"
                  aria-label="Buka WhatsApp"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-between p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-indigo-200 font-semibold">
                    Lokasi
                  </p>
                  <p className="text-xs text-indigo-100/70">Jawa Barat, Indonesia</p>
                </div>
              </div>
              <div className="mt-1">
                <p className="text-sm font-medium text-white">
                  Subang · Available Remote
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              <span>Chat via WhatsApp</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            {/* Email CTA */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white hover:bg-gray-100 text-indigo-900 font-semibold rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Mail size={18} className="text-indigo-600" />
              <span>Kirim Email Langsung</span>
            </a>

            {/* Direct Phone Call */}
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-2xl border border-white/20 transition-all duration-200"
            >
              <Phone size={16} />
              <span>{CONTACT_PHONE_DISPLAY}</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
