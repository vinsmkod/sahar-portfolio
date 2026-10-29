"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectPreviewImage({ type }: { type: Project["imageType"] }) {
  if (type === "desa") {
    return (
      <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-[#2D5A43] via-[#3E6F56] to-[#608D75] flex flex-col justify-between p-4 text-white select-none">
        {/* Village hills silhouette vector */}
        <svg
          viewBox="0 0 400 150"
          className="absolute inset-x-0 bottom-0 w-full opacity-40 pointer-events-none"
          preserveAspectRatio="none"
        >
          <path
            d="M0,150 L0,90 Q80,40 180,85 T360,70 Q390,75 400,90 L400,150 Z"
            fill="#1A382A"
          />
          <path
            d="M0,150 L0,110 Q120,70 240,115 T400,95 L400,150 Z"
            fill="#0F241B"
          />
        </svg>

        {/* Top bar mockup */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/25">
            <div className="w-2 h-2 rounded-full bg-emerald-300" />
            <span className="text-[11px] font-semibold tracking-wide">
              Desa Jambelaer
            </span>
          </div>
          <span className="text-[10px] bg-black/25 px-2 py-0.5 rounded text-white/90">
            Portal Desa
          </span>
        </div>

        {/* Center Title overlay */}
        <div className="relative z-10 text-center my-auto py-2">
          <h4 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight drop-shadow-sm">
            Sistem Informasi Desa
          </h4>
          <p className="text-xs text-white/80 font-light mt-0.5">
            Profil Desa · Pelayanan Publik · Potensi UMKM
          </p>
        </div>

        {/* Bottom subtle bar */}
        <div className="relative z-10 flex items-center justify-between text-[10px] text-white/70 pt-2 border-t border-white/20">
          <span>Kec. Dawuan, Kab. Subang</span>
          <span></span>
        </div>
      </div>
    );
  }

  if (type === "disposisi") {
    return (
      <div className="w-full h-full relative overflow-hidden bg-[#24333A] p-3 text-white flex select-none font-sans">
        {/* Left Mini Sidebar */}
        <div className="w-24 bg-[#1A262C] rounded-lg p-2 flex flex-col justify-between flex-shrink-0 border border-white/10">
          <div>
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded bg-emerald-400" />
              <span className="text-[9px] font-bold text-white/90 truncate">
                Disposisi Setda
              </span>
            </div>
            <div className="flex flex-col gap-1.5 text-[8px] text-white/60">
              <div className="px-1.5 py-1 rounded bg-white/10 text-white font-medium">
                Surat Masuk
              </div>
              <div className="px-1.5 py-1 rounded hover:bg-white/5">
                Disposisi
              </div>
              <div className="px-1.5 py-1 rounded hover:bg-white/5">
                Surat Keluar
              </div>
            </div>
          </div>
          <span className="text-[7px] text-white/40">Kab. Subang</span>
        </div>

        {/* Right Dashboard Area */}
        <div className="flex-1 pl-3 flex flex-col justify-between overflow-hidden">
          {/* Header Stats */}
          <div className="flex gap-2">
            <div className="flex-1 bg-white/10 rounded-md p-1.5 border border-white/10">
              <p className="text-[8px] text-white/60">Masuk</p>
              <p className="text-xs font-bold text-emerald-300">142</p>
            </div>
            <div className="flex-1 bg-white/10 rounded-md p-1.5 border border-white/10">
              <p className="text-[8px] text-white/60">Proses</p>
              <p className="text-xs font-bold text-amber-300">28</p>
            </div>
            <div className="flex-1 bg-white/10 rounded-md p-1.5 border border-white/10">
              <p className="text-[8px] text-white/60">Selesai</p>
              <p className="text-xs font-bold text-cyan-300">114</p>
            </div>
          </div>

          {/* Mini Table Rows Mockup */}
          <div className="bg-[#1A262C] rounded-md p-2 mt-2 border border-white/10 flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-[8px] pb-1 border-b border-white/10 text-white/70">
              <span>Nomor Agenda</span>
              <span>Status</span>
            </div>
            <div className="flex items-center justify-between text-[8px]">
              <span className="text-white/80 truncate">042/Setda/Org/2026</span>
              <span className="text-[7px] bg-emerald-500/30 text-emerald-300 px-1 rounded">
                Didisposisikan
              </span>
            </div>
            <div className="flex items-center justify-between text-[8px]">
              <span className="text-white/80 truncate">043/Setda/Org/2026</span>
              <span className="text-[7px] bg-amber-500/30 text-amber-300 px-1 rounded">
                Telaah Staf
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // type === "smile"
  return (
    <div className="w-full h-full relative overflow-hidden bg-[#E8EDE8] dark:bg-[#1D2522]">
      <Image
        src="/images/smile-score.png"
        alt="Smile Score — Media Edukasi Kesehatan Gigi dan Mulut Berbasis AI"
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasUrl = !!project.url;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group flex flex-col bg-white dark:bg-[#252D2A] rounded-2xl border border-[#DEE3DD] dark:border-[#2F3835] overflow-hidden hover:border-[#CBD5CC] dark:hover:border-[#3E4A45] transition-all duration-300 shadow-[0_2px_12px_rgba(38,50,56,0.03)] hover:shadow-[0_8px_30px_rgba(38,50,56,0.06)]"
    >
      {/* 16:9 Aspect Ratio Preview Banner */}
      <div className="relative w-full aspect-video border-b border-[#DEE3DD] dark:border-[#2F3835] overflow-hidden">
        <ProjectPreviewImage type={project.imageType} />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Tech Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mb-3">
            <span className="text-[11px] font-semibold text-[#4F695B] dark:text-[#83A090] bg-[#E8EDE8] dark:bg-[#1D2522] px-2.5 py-0.5 rounded-full">
              {project.category}
            </span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] text-[#77858A] dark:text-[#9BA7A3] bg-[#F0F1EB] dark:bg-[#202725] px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Project Title */}
          <h3 className="font-display font-bold text-lg text-[#263238] dark:text-[#F2F3EE] group-hover:text-[#4F695B] dark:group-hover:text-[#83A090] transition-colors leading-snug mb-2">
            {project.title}
          </h3>

          {/* Project Description */}
          <p className="text-sm text-[#77858A] dark:text-[#9BA7A3] leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        {/* Bottom Action Link */}
        <div className="pt-4 border-t border-[#DEE3DD]/70 dark:border-[#2F3835] flex items-center justify-between">
          {hasUrl ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4F695B] dark:text-[#83A090] hover:text-[#3A5044] dark:hover:text-[#A2BAAD] transition-colors group/link"
              aria-label={`Lihat detail proyek ${project.title}`}
            >
              <span>Lihat Detail</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover/link:translate-x-1"
              />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#77858A] dark:text-[#9BA7A3]">
              <span>Karya Akademik</span>
            </span>
          )}

          {hasUrl && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#77858A] dark:text-[#9BA7A3] hover:text-[#4F695B] dark:hover:text-[#83A090] transition-colors p-1"
              title="Kunjungi website"
              aria-label="Kunjungi website"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
