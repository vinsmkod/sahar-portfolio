export const WHATSAPP_NUMBER = "6281324768193";

export interface StudentService {
  id: string;
  title: string;
  icon: "landing" | "frontend" | "backend" | "fullstack";
  description: string;
  scope: string[];
  waMessage: string;
}

export const studentServices: StudentService[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    icon: "landing",
    description:
      "Pembuatan halaman website sederhana untuk tugas kuliah, profil organisasi, presentasi produk, atau project praktikum.",
    scope: [
      "HTML, CSS, dan JavaScript",
      "Tampilan responsif",
      "Layout dan navigasi halaman",
      "Penyesuaian desain sesuai referensi",
    ],
    waMessage:
      "Halo, saya mahasiswa dan ingin konsultasi project landing page untuk tugas kuliah.",
  },
  {
    id: "frontend-website",
    title: "Frontend Website",
    icon: "frontend",
    description:
      "Pembuatan antarmuka website yang rapi dan responsif berdasarkan desain atau kebutuhan project.",
    scope: [
      "Implementasi UI website",
      "Komponen dan navigasi",
      "Form dan validasi sisi pengguna",
      "Penyesuaian tampilan desktop dan mobile",
    ],
    waMessage:
      "Halo, saya ingin konsultasi pengerjaan frontend untuk project kuliah.",
  },
  {
    id: "backend-database",
    title: "Backend dan Database",
    icon: "backend",
    description:
      "Pengembangan bagian server dan database untuk mendukung fitur pada project website mahasiswa.",
    scope: [
      "CRUD data",
      "Login dan autentikasi",
      "Integrasi database MySQL",
      "Logika dan alur aplikasi",
    ],
    waMessage:
      "Halo, saya ingin konsultasi backend dan database untuk tugas kuliah.",
  },
  {
    id: "fullstack-website",
    title: "Full-Stack Website",
    icon: "fullstack",
    description:
      "Pengembangan project website dari frontend hingga backend, termasuk integrasi database dan fitur sesuai kebutuhan tugas.",
    scope: [
      "Frontend dan backend",
      "Integrasi database",
      "Dashboard dan pengelolaan data",
      "Pengujian fitur utama",
    ],
    waMessage:
      "Halo, saya ingin konsultasi pembuatan project website full-stack untuk kuliah.",
  },
];
