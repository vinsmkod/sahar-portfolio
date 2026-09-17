"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";
import { Briefcase, GraduationCap, FolderKanban } from "lucide-react";

const typeConfig = {
  work: {
    icon: Briefcase,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/50",
    border: "border-violet-200/60 dark:border-violet-800/40",
  },
  education: {
    icon: GraduationCap,
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/50",
    border: "border-indigo-200/60 dark:border-indigo-800/40",
  },
  project: {
    icon: FolderKanban,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/50",
    border: "border-emerald-200/60 dark:border-emerald-800/40",
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-[#fafafa] dark:bg-[#0a0a0f]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 block mb-3"
          >
            Experience
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-12"
          >
            My journey so far.
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-300/60 via-indigo-200/40 to-transparent dark:from-indigo-700/60 dark:via-indigo-800/40" />

            <div className="flex flex-col gap-8">
              {experiences.map((exp, index) => {
                const config = typeConfig[exp.type];
                const Icon = config.icon;

                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    custom={index}
                    className="relative pl-16"
                  >
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center border ${config.bg} ${config.border}`}
                    >
                      <Icon size={18} className={config.color} />
                    </div>

                    {/* Content */}
                    <div className="p-5 bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-mono font-medium text-indigo-500 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/40 flex-shrink-0">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-xs font-medium text-gray-400 dark:text-gray-500 mb-3">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
