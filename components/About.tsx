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

const leftColVariants: Variants = {
  hidden: { opacity: 0, x: -35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const rightColVariants: Variants = {
  hidden: { opacity: 0, x: 35 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

const capabilityVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={ref}
      className="section-padding bg-white dark:bg-[#0d0d18] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Text */}
          <motion.div
            variants={leftColVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
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
              className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-base sm:text-lg"
            >
              Saya menggabungkan analisis sistem dan pengembangan perangkat lunak
              untuk membangun aplikasi yang sesuai dengan kebutuhan pengguna.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 text-sm sm:text-base"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {capabilities.map((item) => (
                  <motion.div
                    key={item}
                    variants={capabilityVariants}
                    className="flex items-center gap-2.5 group"
                  >
                    <div className="p-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 group-hover:scale-110 transition-transform">
                      <CheckCircle2 size={15} />
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Info Cards */}
          <motion.div
            variants={rightColVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col gap-4"
          >
            {infoCards.map((card) => (
              <motion.div
                key={card.label}
                variants={cardItemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-start gap-4 p-5 bg-[#fafafa] dark:bg-white/[0.03] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover shadow-sm"
              >
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl flex-shrink-0 text-indigo-600 dark:text-indigo-400">
                  <card.icon size={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-0.5">
                    {card.label}
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white text-base">
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
                    {card.sub}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quote card */}
            <motion.div
              variants={cardItemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 bg-gradient-to-br from-indigo-50 to-violet-50/60 dark:from-indigo-950/40 dark:to-violet-950/30 border border-indigo-100/80 dark:border-indigo-900/40 rounded-2xl shadow-sm"
            >
              <p className="text-sm text-indigo-800 dark:text-indigo-200 leading-relaxed italic">
                &ldquo;Berproses bukan tentang seberapa cepat kita sampai, tetapi tentang seberapa jauh diri kita tumbuh di sepanjang perjalanan.&rdquo;
              </p>
              <p className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                — Sahar Dwi Anugrah
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
