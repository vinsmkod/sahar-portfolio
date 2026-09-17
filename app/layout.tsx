import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sahar Dwi Anugrah — System Analyst & Web Developer",
  description:
    "Portfolio Sahar Dwi Anugrah, mahasiswa Sistem Informasi yang fokus pada system analysis dan web development.",
  keywords: [
    "Sahar Dwi Anugrah",
    "System Analyst",
    "Web Developer",
    "Portfolio",
    "Universitas Subang",
    "Sistem Informasi",
    "Laravel",
    "Next.js",
  ],
  authors: [{ name: "Sahar Dwi Anugrah" }],
  creator: "Sahar Dwi Anugrah",
  openGraph: {
    type: "website",
    locale: "id_ID",
    title: "Sahar Dwi Anugrah — System Analyst & Web Developer",
    description:
      "Portfolio Sahar Dwi Anugrah, mahasiswa Sistem Informasi yang fokus pada system analysis dan web development.",
    siteName: "Sahar Dwi Anugrah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahar Dwi Anugrah — System Analyst & Web Developer",
    description:
      "Portfolio Sahar Dwi Anugrah, mahasiswa Sistem Informasi yang fokus pada system analysis dan web development.",
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
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
