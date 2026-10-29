export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  url?: string;
  imageType: "desa" | "disposisi" | "smile";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Informasi Profil Desa Jambelaer",
    category: "Web Application",
    description:
      "Website desa untuk menampilkan profil desa, pelayanan publik, dan promosi potensi desa.",
    technologies: ["Laravel 12", "Tailwind CSS", "MySQL"],
    imageType: "desa",
  },
  {
    id: 2,
    title: "Sistem Disposisi Surat (Magang Setda Subang)",
    category: "Web Application",
    description:
      "Aplikasi pencatatan surat masuk, disposisi, dan surat keluar pada Bagian Organisasi Sekretariat Daerah Kabupaten Subang.",
    technologies: ["Laravel 12", "MySQL", "Tailwind CSS"],
    imageType: "disposisi",
  },
  {
    id: 3,
    title: "Smile Score",
    category: "Web Application",
    description:
      "Web edukasi kesehatan gigi berbasis AI dengan fitur Smile Score untuk siswa SMK.",
    technologies: ["Laravel 12", "MySQL", "AI Integration"],
    imageType: "smile",
  },
];

