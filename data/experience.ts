export interface ExperienceItem {
  id: number;
  year: string;
  title: string;
  organization: string;
  badge: string;
  description: string;
  type: "capstone" | "freelance" | "education" | "internship";
  isOngoing?: boolean;
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    year: "2026",
    title: "Capstone Project — System Analyst & Programmer",
    organization: "BLNTRK Outdoor",
    badge: "Capstone Project",
    description:
      "Menganalisis kebutuhan pengguna dan mengembangkan sistem booking open trip BLNTRK Outdoor, mencakup perancangan alur sistem, database design, dan implementasi fitur lengkap.",
    type: "capstone",
  },
  {
    id: 2,
    year: "2026",
    title: "Freelance Tax Administration",
    organization: "CV. FILOSOFI KREASI INDONESIA",
    badge: "Freelance",
    description:
      "Mengerjakan kebutuhan administrasi perpajakan seperti e-Faktur serta SPT bulanan dan tahunan.",
    type: "freelance",
  },
  {
    id: 3,
    year: "2023 — Present",
    title: "Universitas Subang — Sistem Informasi",
    organization: "Universitas Subang",
    badge: "Pendidikan",
    description:
      "Mempelajari analisis sistem, pengembangan web dan mobile, database management, serta pengembangan aplikasi. Mengerjakan berbagai project baik secara individu maupun tim.",
    type: "education",
  },
  {
    id: 4,
    year: "14 Sep 2026 – 15 Jan 2027",
    title: "Magang — Bagian Organisasi Setda Kabupaten Subang",
    organization: "Pemerintah Kabupaten Subang",
    badge: "Magang",
    description:
      "Mempelajari alur kerja, tata kelola administrasi, serta mendukung kegiatan pada Bagian Organisasi, khususnya yang berkaitan dengan kelembagaan, analisis jabatan, pelayanan publik, dan reformasi birokrasi.",
    type: "internship",
    isOngoing: true,
  },
];

