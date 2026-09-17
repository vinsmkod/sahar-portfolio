"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Loader2, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const statusConfig = {
  completed: { label: "Completed", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40", border: "border-emerald-100 dark:border-emerald-900/40" },
  "in-development": { label: "In Development", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40", border: "border-amber-100 dark:border-amber-900/40" },
  "coming-soon": { label: "Coming Soon", color: "text-gray-500 dark:text-gray-400", bg: "bg-gray-50 dark:bg-white/[0.03]", border: "border-gray-200 dark:border-gray-800/60" },
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status];
  const isFeatured = project.featured;
  const hasUrl = !!project.url;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`group relative flex flex-col p-6 bg-white dark:bg-white/[0.03] border rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/10 ${
        isFeatured
          ? "border-indigo-200/60 dark:border-indigo-800/40 shadow-md shadow-indigo-500/8"
          : "border-gray-200/80 dark:border-gray-800/60"
      }`}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="absolute -top-3 left-6">
          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950 border border-indigo-200 dark:border-indigo-800 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
            Featured
          </span>
        </div>
      )}

      {/* Top row: number + status */}
      <div className="flex items-center justify-between mb-5">
        <span className="font-display text-3xl font-bold text-gray-100 dark:text-white/10 select-none">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border ${status.color} ${status.bg} ${status.border}`}
        >
          {project.status === "in-development" && (
            <Loader2 size={10} className="animate-spin" />
          )}
          {project.status === "coming-soon" && <Clock size={10} />}
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
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 flex-grow">
        {project.description}
      </p>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-gray-700/60 text-gray-600 dark:text-gray-400 rounded-lg font-medium"
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
          <span>View Project</span>
          <ArrowUpRight
            size={14}
            className="ml-auto transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </a>
      ) : (
        <div className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 dark:text-gray-600 pt-4 border-t border-gray-100 dark:border-gray-800/60 cursor-not-allowed select-none">
          {project.status === "in-development" ? (
            <>
              <Loader2 size={14} className="animate-spin" />
              <span>In Development</span>
            </>
          ) : (
            <>
              <Clock size={14} />
              <span>Coming Soon</span>
            </>
          )}
        </div>
      )}
    </motion.div>
  );
}
