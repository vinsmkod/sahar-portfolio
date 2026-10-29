"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#F0F1EB]/60 dark:bg-[#202725]/60 border-t border-[#DEE3DD]/70 dark:border-[#2F3835] relative transition-colors duration-200"
    >
      <div className="site-container">
        {/* Section Header */}
        <div data-aos="fade-up" className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#77858A] dark:text-[#9BA7A3] block mb-2">
                PROYEK
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#263238] dark:text-[#F2F3EE] tracking-tight leading-tight">
                Karya &amp; Implementasi
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#77858A] dark:text-[#9BA7A3]">
                Beberapa proyek yang pernah saya kerjakan.
              </p>
            </div>

            <a
              href="https://github.com/vinsmkod"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F695B] dark:text-[#83A090] hover:text-[#3A5044] dark:hover:text-[#A2BAAD] transition-colors pb-1"
            >
              <span>Lihat Semua Karya</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
