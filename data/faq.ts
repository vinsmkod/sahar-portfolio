export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama proses pengerjaan website?",
    answer:
      "Waktu pengerjaan tergantung jenis project, jumlah halaman, fitur, dan tingkat kesulitannya. Landing page sederhana biasanya membutuhkan beberapa hari, sedangkan website full-stack dengan backend dan database bisa memerlukan waktu lebih lama. Estimasi akan disampaikan setelah kebutuhan project didiskusikan.",
  },
  {
    id: "faq-2",
    question: "Bisa custom fitur sesuai kebutuhan tugas?",
    answer:
      "Tentu bisa. Fitur dapat disesuaikan dengan kebutuhan project dan ketentuan tugas kuliah, mulai dari CRUD, login, dashboard, hingga integrasi database. Silakan sampaikan kebutuhan dan referensi project saat konsultasi.",
  },
  {
    id: "faq-3",
    question: "Layanan apa saja yang tersedia?",
    answer:
      "Saya menerima pengerjaan landing page, frontend website, backend dan database, serta website full-stack untuk kebutuhan project perkuliahan.",
  },
  {
    id: "faq-4",
    question: "Apakah bisa menggunakan framework tertentu?",
    answer:
      "Teknologi akan disesuaikan dengan kebutuhan project dan kemampuan yang relevan. Teknologi yang dapat didiskusikan antara lain HTML, CSS, JavaScript, Laravel, CodeIgniter, dan MySQL. Silakan informasikan framework yang diwajibkan oleh dosen.",
  },
  {
    id: "faq-5",
    question: "Berapa biaya pengerjaan website?",
    answer:
      "Biaya menyesuaikan jenis website, jumlah fitur, tingkat kesulitan, dan waktu pengerjaan. Hubungi saya untuk mendiskusikan kebutuhan project agar estimasi biaya dapat diberikan dengan lebih tepat.",
  },
  {
    id: "faq-6",
    question: "Bagaimana cara memulai pemesanan?",
    answer:
      "Hubungi saya melalui WhatsApp dan jelaskan jenis tugas, fitur yang dibutuhkan, teknologi yang diwajibkan, serta deadline. Setelah itu, kita bisa mendiskusikan ruang lingkup pengerjaan, estimasi biaya, dan waktu penyelesaian.",
  },
];
