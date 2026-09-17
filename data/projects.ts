export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  url?: string;
  featured: boolean;
  status: "completed" | "in-development" | "coming-soon";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Website Desa Jambelaer",
    category: "Village Information System",
    description:
      "Platform informasi desa untuk membantu penyebaran informasi kepada masyarakat serta memperkenalkan potensi UMKM, wisata, dan budaya Desa Jambelaer.",
    technologies: ["Laravel", "MySQL", "Tailwind CSS"],
    url: "https://desajambelaer.sainzlab.my.id/",
    featured: true,
    status: "completed",
  },
  {
    id: 2,
    title: "BLNTRK Outdoor",
    category: "Open Trip Booking System",
    description:
      "Sistem booking open trip yang mencakup pengelolaan paket perjalanan, jadwal, kuota, meeting point, dokumen peserta, pembayaran, invoice, review, dan CRM admin.",
    technologies: ["CodeIgniter 4", "Mysql", "TailwindCSS"],
    url: undefined,
    featured: false,
    status: "coming-soon",
  },
  {
    id: 3,
    title: "Smile Score",
    category: "AI Education Research Platform",
    description:
      "Konsep platform edukasi kesehatan gigi dan mulut berbasis Artificial Intelligence dengan fitur Smile Score untuk mendukung proses penelitian pada siswa SMK.",
    technologies: ["Laravel 12", "MySQL", "AI Integration"],
    url: undefined,
    featured: false,
    status: "in-development",
  },
];
