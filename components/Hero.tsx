"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const floatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const techStack = ["Laravel", "CodeIgniter", "Next.js"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#fafafa] dark:bg-[#0a0a0f]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo-500/8 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-violet-500/8 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating geometric elements */}
      <motion.div
        variants={floatVariants}
        initial="initial"
        animate="animate"
        className="absolute top-32 right-[520px] hidden xl:block"
        aria-hidden="true"
      >
        <div className="w-16 h-16 border border-indigo-200/40 dark:border-indigo-800/30 rounded-2xl rotate-12" />
      </motion.div>

      <motion.div
        animate={{
          y: [6, -6, 6],
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-40 left-16 hidden lg:block"
        aria-hidden="true"
      >
        <div className="w-10 h-10 border border-violet-200/40 dark:border-violet-800/30 rounded-full" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* ── Left: Text ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 min-w-0"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 rounded-full">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                Available for collaboration
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-gray-900 dark:text-white mb-6"
            >
              Building digital
              <br />
              <span className="gradient-text">solutions</span> that
              <br />
              solve real problems.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              Halo, saya{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Sahar Dwi Anugrah
              </span>
              . Mahasiswa Sistem Informasi yang tertarik pada pengembangan
              perangkat lunak, analisis kebutuhan pengguna, dan pengembangan
              sistem berbasis web.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-medium rounded-xl transition-all duration-200 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white font-medium rounded-xl border border-gray-200 dark:border-gray-700/60 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Info strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <GraduationCap size={15} className="text-indigo-500" />
                <span>2023 — Present · Universitas Subang</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <MapPin size={15} className="text-indigo-500" />
                <span>Subang, Jawa Barat</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Briefcase size={15} className="text-indigo-500" />
                <span>System Analyst · Web Developer</span>
              </div>

              {/* Tech tags */}
              <div className="flex items-center gap-2">
                {techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 bg-white dark:bg-white/5 border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 blur-2xl" />

              {/* Decorative border ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-indigo-400/40 to-violet-400/40" />

              {/* Photo container */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-64 h-80 sm:w-72 sm:h-88 lg:w-80 lg:h-96 rounded-2xl overflow-hidden border-2 border-white/20 dark:border-white/10 shadow-2xl shadow-indigo-500/20"
              >
                <Image
                  src="/images/photo.jpg"
                  alt="Sahar Dwi Anugrah — System Analyst & Web Developer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                />

                {/* Subtle overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Name badge on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2">
                    <p className="text-white text-xs font-semibold tracking-wide">
                      Sahar Dwi Anugrah
                    </p>
                    <p className="text-white/70 text-xs">
                      System Analyst · Web Developer
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge: Status */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -top-3 -right-4 bg-white dark:bg-[#111120] border border-gray-200 dark:border-gray-800 rounded-2xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    Open to work
                  </span>
                </div>
              </motion.div>

              {/* Floating badge: University */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-[#111120] border border-gray-200 dark:border-gray-800 rounded-2xl px-3 py-2 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🎓</span>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 leading-tight whitespace-nowrap">
                      Universitas Subang
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      Sistem Informasi
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
