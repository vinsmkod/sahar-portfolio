"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Layers, Code2, Database, Wrench } from "lucide-react";
import { skillCategories } from "@/data/skills";

const iconMap: Record<string, React.ElementType> = {
  Layers,
  Code2,
  Database,
  Wrench,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
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

const categoryCardVariants: Variants = {
  hidden: { opacity: 0, y: 35, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 18,
    },
  },
};

const skillPillVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-[#fafafa] dark:bg-[#0a0a0f] relative overflow-hidden"
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
            variants={headerVariants}
            className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 block mb-3"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            variants={headerVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            What I work with.
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed text-base"
          >
            Kumpulan teknologi, framework, dan metodologi analisis sistem yang
            saya gunakan dalam setiap project.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.id}
                variants={categoryCardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="p-6 bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover group shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl group-hover:bg-indigo-600 group-hover:text-white text-indigo-600 dark:text-indigo-400 transition-all duration-300">
                      {Icon && <Icon size={20} />}
                    </div>
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-col gap-2">
                    {category.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillPillVariants}
                        whileHover={{ x: 4, transition: { duration: 0.15 } }}
                        className="flex items-center gap-2.5 py-2 px-3 bg-gray-50/80 dark:bg-white/[0.02] hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 border border-gray-100 dark:border-gray-800/50 hover:border-indigo-200 dark:hover:border-indigo-800/50 rounded-xl transition-all duration-200"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
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
