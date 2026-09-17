# Sahar Dwi Anugrah — Portfolio Website

Portfolio website pribadi modern dan profesional dibangun dengan Next.js 15, TypeScript, Tailwind CSS, dan Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter + Syne (Google Fonts)
- **Deployment**: Vercel

---

## 📁 Struktur Folder

```
sahar/
├── app/
│   ├── layout.tsx         # Root layout + metadata + fonts
│   ├── page.tsx           # Main page
│   └── globals.css        # Global styles
├── components/
│   ├── Navbar.tsx         # Sticky navbar + dark mode toggle
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About + info cards
│   ├── Skills.tsx         # Skills by category
│   ├── Projects.tsx       # Projects grid
│   ├── ProjectCard.tsx    # Individual project card
│   ├── Experience.tsx     # Timeline experience
│   ├── Process.tsx        # How I work - 4 steps
│   ├── Contact.tsx        # Contact CTA
│   └── Footer.tsx         # Footer + social links
├── data/
│   ├── projects.ts        # ← Edit untuk tambah/ubah project
│   ├── skills.ts          # ← Edit untuk tambah/ubah skill
│   └── experience.ts      # ← Edit untuk tambah/ubah pengalaman
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## ⚙️ Cara Menjalankan Secara Lokal

### Prasyarat
- Node.js >= 18.x
- npm >= 9.x

### Langkah

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

---

## 🏗️ Build Production

```bash
# Build untuk production
npm run build

# Jalankan hasil build
npm start
```

---

## 📤 Upload ke GitHub

```bash
# 1. Inisialisasi repository (kalau belum)
git init

# 2. Tambahkan semua file
git add .

# 3. Commit pertama
git commit -m "feat: initial portfolio website"

# 4. Buat repository baru di GitHub (https://github.com/new)
#    Jangan centang "Initialize this repository with a README"

# 5. Hubungkan ke GitHub (ganti URL sesuai repository Anda)
git remote add origin https://github.com/USERNAME/REPO-NAME.git

# 6. Push ke GitHub
git branch -M main
git push -u origin main
```

---

## 🌐 Deploy ke Vercel

### Cara 1: Via GitHub (Recommended)
1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New Project"**
3. Import repository GitHub yang sudah dibuat
4. Vercel akan otomatis mendeteksi Next.js
5. Klik **"Deploy"** — selesai!

### Cara 2: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy ke production
vercel --prod
```

---

## ✏️ Data yang Perlu Diubah

### 1. Email & Social Links
File: `components/Contact.tsx` dan `components/Footer.tsx`

Cari bagian:
```typescript
// ─────────────────────────────────────────────────────
// REPLACE these placeholder values with your real contact info:
// ─────────────────────────────────────────────────────
const CONTACT_EMAIL = "your.email@example.com";  // ← ganti
const GITHUB_URL = "https://github.com/your-username";  // ← ganti
const LINKEDIN_URL = "https://linkedin.com/in/your-profile";  // ← ganti
```

### 2. Project Baru
File: `data/projects.ts`

Tambahkan object baru ke array `projects`:
```typescript
{
  id: 4,
  title: "Nama Project",
  category: "Category",
  description: "Deskripsi project...",
  technologies: ["Tech1", "Tech2"],
  url: "https://url-project.com",  // atau undefined jika belum ada
  featured: false,
  status: "completed",  // "completed" | "in-development" | "coming-soon"
},
```

### 3. Skills Baru
File: `data/skills.ts` — tambahkan ke array `skills` di kategori yang sesuai.

### 4. Pengalaman Baru
File: `data/experience.ts` — tambahkan object baru ke array `experiences`.

### 5. Foto Profil (Opsional)
Jika ingin menambahkan foto:
1. Simpan foto di `public/images/photo.jpg`
2. Tambahkan ke komponen `About.tsx` menggunakan `next/image`

### 6. CV/Resume (Opsional)
1. Simpan file PDF di `public/cv.pdf`
2. Tambahkan tombol download di `Hero.tsx`

---

## 🎨 Kustomisasi Warna

File: `tailwind.config.ts` dan `app/globals.css`

Accent color utama adalah **Indigo (`#6366f1`)**. Untuk mengganti:
- Cari semua `indigo-600`, `indigo-500`, dll.
- Ganti dengan warna lain seperti `blue`, `violet`, `purple`, dll.

---

## 📱 Fitur

- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Dark Mode dengan toggle + simpan preferensi
- ✅ Animasi smooth dengan Framer Motion
- ✅ SEO optimized (title, description, Open Graph)
- ✅ Sticky navbar + hamburger menu di mobile
- ✅ Scroll-triggered animations
- ✅ TypeScript strict mode
- ✅ ESLint configured
- ✅ Ready to deploy to Vercel
