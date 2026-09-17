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
    title: "Design",
    icon: GitBranch,
    description:
      "Merancang alur sistem, diagram, ERD, dan struktur database yang scalable dan efisien.",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
    border: "border-violet-200/60 dark:border-violet-800/40",
  },
  {
    number: "03",
    title: "Build",
    icon: Hammer,
    description:
      "Mengimplementasikan sistem menggunakan teknologi modern dengan kode yang rapi dan terstruktur.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    border: "border-emerald-200/60 dark:border-emerald-800/40",
  },
  {
    number: "04",
    title: "Iterate",
    icon: RefreshCw,
    description:
      "Menguji, mengevaluasi bersama pengguna, dan terus meningkatkan performa serta kegunaan sistem.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/50",
    border: "border-amber-200/60 dark:border-amber-800/40",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const stepCardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 17,
    },
  },
};

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-white dark:bg-[#0d0d18] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-14"
        >
          <motion.span
            variants={headerVariants}
            className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 block mb-3"
          >
            Methodology & Workflow
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            How I approach a project.
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepCardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative group h-full"
              >
                {/* Animated connector line between cards on desktop */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{ originX: 0 }}
                    className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-8 h-[2px] bg-gradient-to-r from-indigo-300 to-indigo-100 dark:from-indigo-600 dark:to-transparent z-10"
                  />
                )}

                <div className="p-6 sm:p-7 bg-[#fafafa] dark:bg-white/[0.02] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover h-full flex flex-col justify-between shadow-sm group-hover:border-indigo-200 dark:group-hover:border-indigo-800/60 transition-colors">
                  <div>
                    {/* Number */}
                    <div className="font-display text-4xl font-extrabold text-gray-200 dark:text-white/10 group-hover:text-indigo-500/30 dark:group-hover:text-indigo-400/20 transition-colors mb-4 select-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`inline-flex p-3 rounded-xl mb-4 border ${step.bg} ${step.border} group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={20} className={step.color} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
