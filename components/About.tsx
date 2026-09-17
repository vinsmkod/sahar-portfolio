"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, MapPin, CheckCircle2 } from "lucide-react";

const capabilities = [
  "Analisis kebutuhan pengguna",
  "Perancangan alur sistem",
  "Pengembangan aplikasi web",
  "CRUD & Database management",
  "Testing & evaluasi sistem",
  "Dokumentasi sistem",
];

const infoCards = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Universitas Subang",
    sub: "Sistem Informasi · 2023",
  },
  {
    icon: Target,
    label: "Focus",
    value: "System Analysis",
    sub: "& Web Development",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Subang, Indonesia",
    sub: "Jawa Barat",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white dark:bg-[#0d0d18]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left — Text */}
          <div>
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400">
                About
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6"
            >
              Who I am.
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4"
            >
              Saya menggabungkan analisis sistem dan pengembangan perangkat lunak
              untuk membangun aplikasi yang sesuai dengan kebutuhan pengguna.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8"
            >
              Saya mahasiswa Sistem Informasi yang memiliki ketertarikan pada
              pengembangan perangkat lunak dan analisis sistem. Saya terbiasa
              memahami kebutuhan pengguna, merancang alur sistem, mengelola
              database, serta mengembangkan aplikasi berbasis web.
            </motion.p>

            {/* Capabilities */}
            <motion.div variants={itemVariants}>
              <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                Terbiasa dengan:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={15}
                      className="text-indigo-500 flex-shrink-0"
                    />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Info Cards */}
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-4"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.label}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 bg-[#fafafa] dark:bg-white/[0.03] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover"
              >
                <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl flex-shrink-0">
                  <card.icon size={20} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-0.5">
                    {card.label}
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {card.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Small quote card */}
            <motion.div
              variants={itemVariants}
              className="p-5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100/80 dark:border-indigo-900/40 rounded-2xl"
            >
              <p className="text-sm text-indigo-700 dark:text-indigo-300 leading-relaxed italic">
                &ldquo;Saya percaya bahwa solusi terbaik lahir dari pemahaman
                mendalam tentang kebutuhan pengguna dan perancangan sistem yang
                matang.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-indigo-500">
                — Sahar Dwi Anugrah
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
