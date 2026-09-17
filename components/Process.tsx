"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Search, GitBranch, Hammer, RefreshCw } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Understand",
    icon: Search,
    description:
      "Memahami kebutuhan dan permasalahan pengguna secara mendalam sebelum memulai proses apapun.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
    border: "border-indigo-200/60 dark:border-indigo-800/40",
  },
  {
    number: "02",
    title: "Analyze",
    icon: GitBranch,
    description:
      "Menganalisis kebutuhan dan merancang solusi sistem yang tepat berdasarkan hasil pemahaman awal.",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
    border: "border-violet-200/60 dark:border-violet-800/40",
  },
  {
    number: "03",
    title: "Build",
    icon: Hammer,
    description:
      "Mengembangkan sistem sesuai rancangan yang telah dibuat, dengan memperhatikan kualitas dan clean code.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    border: "border-emerald-200/60 dark:border-emerald-800/40",
  },
  {
    number: "04",
    title: "Improve",
    icon: RefreshCw,
    description:
      "Melakukan testing, evaluasi, dan perbaikan untuk memastikan sistem berjalan optimal.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
    border: "border-amber-200/60 dark:border-amber-800/40",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-white dark:bg-[#0d0d18]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 block mb-3"
          >
            Process
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            How I approach a project.
          </motion.h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative group"
              >
                {/* Connector line (between cards) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700/60 z-10 -translate-x-8" />
                )}

                <div className="p-6 bg-[#fafafa] dark:bg-white/[0.02] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover h-full">
                  {/* Number */}
                  <div className="font-display text-4xl font-bold text-gray-100 dark:text-white/8 mb-4 select-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex p-2.5 rounded-xl mb-4 border ${step.bg} ${step.border}`}
                  >
                    <Icon size={18} className={step.color} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
