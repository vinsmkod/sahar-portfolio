export interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "work" | "education" | "project";
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    year: "2026",
    title: "Capstone Project — System Analyst & Programmer",
    organization: "BLNTRK Outdoor",
    description:
      "Menganalisis kebutuhan pengguna dan mengembangkan sistem booking open trip BLNTRK Outdoor, mencakup perancangan alur sistem, database design, dan implementasi fitur lengkap.",
    type: "project",
  },
  {
    id: 2,
    year: "2026",
    title: "Freelance Tax Administration",
    organization: "Self-employed",
    description:
      "Mengerjakan kebutuhan administrasi perpajakan seperti e-Faktur serta SPT bulanan dan tahunan.",
    type: "work",
  },
  {
    id: 3,
    year: "2023 — Present",
    title: "Universitas Subang — Sistem Informasi",
    organization: "Universitas Subang",
    description:
      "Mempelajari analisis sistem, pengembangan web dan mobile, database management, serta pengembangan aplikasi. Mengerjakan berbagai project baik secara individu maupun tim.",
    type: "education",
  },
];
