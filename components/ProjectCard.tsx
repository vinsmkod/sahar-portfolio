"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Loader2, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  completed: {
    label: "Completed",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    border: "border-emerald-100 dark:border-emerald-900/40",
  },
  "in-development": {
    label: "In Development",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40",
    border: "border-amber-100 dark:border-amber-900/40",
  },
  "coming-soon": {
    label: "Coming Soon",
    color: "text-gray-500 dark:text-gray-400",
    bg: "bg-gray-50 dark:bg-white/[0.03]",
    border: "border-gray-200 dark:border-gray-800/60",
  },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const isFeatured = project.featured;
  const hasUrl = !!project.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 17,
        delay: index * 0.12,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className={`group relative flex flex-col p-6 sm:p-7 bg-white dark:bg-white/[0.03] border rounded-2xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 ${
        isFeatured
          ? "border-indigo-300/80 dark:border-indigo-700/60 shadow-lg shadow-indigo-500/5"
          : "border-gray-200/80 dark:border-gray-800/60"
      }`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-full shadow-sm">
            <Sparkles size={11} className="text-indigo-500" />
            Featured Project
          </span>
        </div>
      )}

      {/* Top row: number + status */}
      <div className="flex items-center justify-between mb-5 pt-1">
        <span className="font-display text-3xl font-bold text-gray-200 dark:text-white/10 group-hover:text-indigo-500/30 dark:group-hover:text-indigo-400/20 transition-colors select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${status.color} ${status.bg} ${status.border}`}
        >
          {project.status === "in-development" && (
            <Loader2 size={11} className="animate-spin" />
          )}
          {project.status === "coming-soon" && <Clock size={11} />}
          {status.label}
        </span>
      </div>

      {/* Category */}
      <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-2 block">
        {project.category}
      </span>

      {/* Title */}
      <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-gray-50 dark:bg-white/[0.04] border border-gray-200/80 dark:border-gray-800 text-gray-600 dark:text-gray-300 rounded-lg font-medium group-hover:border-indigo-200/60 dark:group-hover:border-indigo-900/40 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      {hasUrl ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors pt-4 border-t border-gray-100 dark:border-gray-800/60"
          aria-label={`View ${project.title} project`}
        >
          <ExternalLink size={14} />
          <span>Live Demo / Preview</span>
          <ArrowUpRight
            size={15}
            className="ml-auto transition-transform duration-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
          />
        </a>
      ) : (
        <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 dark:text-gray-500 pt-4 border-t border-gray-100 dark:border-gray-800/60 cursor-not-allowed select-none">
          {project.status === "in-development" ? (
            <>
              <Loader2 size={13} className="animate-spin text-amber-500" />
              <span>In Development</span>
            </>
          ) : (
            <>
              <Clock size={13} />
              <span>Upcoming Project</span>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}
