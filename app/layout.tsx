import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AOSInit from "@/components/AOSInit";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sahar Dwi Anugrah — Mahasiswa Sistem Informasi",
  description:
    "Portfolio resmi Sahar Dwi Anugrah, mahasiswa Sistem Informasi Universitas Subang dengan minat di bidang Web Development dan System Analysis.",
  keywords: [
    "Sahar Dwi Anugrah",
    "Sistem Informasi",
    "Universitas Subang",
    "System Analyst",
    "Web Developer",
    "Laravel",
    "CodeIgniter 4",
    "Portfolio",
  ],
  authors: [{ name: "Sahar Dwi Anugrah" }],
  creator: "Sahar Dwi Anugrah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Sahar Dwi Anugrah — Mahasiswa Sistem Informasi",
    description:
      "Portfolio resmi Sahar Dwi Anugrah, mahasiswa Sistem Informasi Universitas Subang dengan minat di bidang Web Development dan System Analysis.",
    siteName: "Sahar Dwi Anugrah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahar Dwi Anugrah — Mahasiswa Sistem Informasi",
    description:
      "Portfolio resmi Sahar Dwi Anugrah, mahasiswa Sistem Informasi Universitas Subang dengan minat di bidang Web Development dan System Analysis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jakarta.variable} font-sans antialiased bg-[#F7F6F1] dark:bg-[#171C1B] text-[#263238] dark:text-[#F2F3EE] transition-colors duration-200`}
      >
        <AOSInit />
        {children}
        <Analytics />
      </body>
    </html>
  );
}


