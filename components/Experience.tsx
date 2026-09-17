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
  visible: {
    transition: {
      staggerChildren: 0.18,
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

const timelineItemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-[#fafafa] dark:bg-[#0a0a0f] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.span
            variants={headerVariants}
            className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 block mb-3"
          >
            Experience & Education
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-12"
          >
            My journey so far.
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Animated vertical timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ originY: 0 }}
              className="absolute left-6 top-2 bottom-6 w-0.5 bg-gradient-to-b from-indigo-500 via-violet-400 to-transparent dark:from-indigo-500 dark:via-violet-600 dark:to-transparent"
            />

            <div className="flex flex-col gap-8">
              {experiences.map((exp) => {
                const config = typeConfig[exp.type];
                const Icon = config.icon;

                return (
                  <motion.div
                    key={exp.id}
                    variants={timelineItemVariants}
                    className="relative pl-16 group"
                  >
                    {/* Animated Timeline Node */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className={`absolute left-0 top-1 w-12 h-12 rounded-2xl flex items-center justify-center border shadow-sm transition-shadow group-hover:shadow-md group-hover:shadow-indigo-500/20 ${config.bg} ${config.border} z-10`}
                    >
                      <Icon size={20} className={config.color} />
                    </motion.div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ x: 4, transition: { duration: 0.2 } }}
                      className="p-6 bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover shadow-sm"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {exp.title}
                        </h3>
                        <span className="text-xs font-mono font-medium text-indigo-600 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/50 flex-shrink-0 self-start sm:self-auto">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-3">
                        {exp.organization}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
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
