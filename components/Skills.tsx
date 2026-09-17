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

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-[#fafafa] dark:bg-[#0a0a0f]"
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
            Skills
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight"
          >
            What I work with.
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed"
          >
            Kumpulan teknologi dan metodologi yang saya gunakan dalam setiap
            project.
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
                variants={itemVariants}
                className="p-6 bg-white dark:bg-white/[0.03] border border-gray-200/80 dark:border-gray-800/60 rounded-2xl card-hover group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl group-hover:bg-indigo-100 dark:group-hover:bg-indigo-950 transition-colors">
                    {Icon && (
                      <Icon
                        size={18}
                        className="text-indigo-600 dark:text-indigo-400"
                      />
                    )}
                  </div>
                  <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 py-1.5 px-3 bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-gray-800/40 rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
