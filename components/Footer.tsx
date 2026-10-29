import { Github, Linkedin, Mail, Instagram, Facebook } from "lucide-react";

const EMAIL = "sahardwianugrah10@gmail.com";
const GITHUB_URL = "https://github.com/vinsmkod";
const LINKEDIN_URL = "https://www.linkedin.com/in/sahar-dwi-anugrah-bb658233a/";
const INSTAGRAM_URL = "https://www.instagram.com/iridescentsahar_/";
const FACEBOOK_URL = "https://www.facebook.com/SaharMoriarty";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Karya", href: "#projects" },
  { label: "Jasa", href: "#jasa" },
  { label: "Pengalaman", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-aos="fade-up"
      data-aos-offset="30"
      className="bg-[#263238] dark:bg-[#121615] text-white border-t border-[#37474F] dark:border-[#1E2523] select-none transition-colors duration-200"
    >
      <div className="site-container py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 border-b border-[#37474F]/80 dark:border-[#1E2523]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#4F695B] dark:bg-[#34463C] text-white flex items-center justify-center font-display font-bold text-sm tracking-wider">
              SDA
            </div>
            <div>
              <p className="font-display font-bold text-base text-white leading-tight">
                Sahar Dwi Anugrah
              </p>
              <p className="text-xs text-[#9EA8AC] mt-0.5">
                Mahasiswa Sistem Informasi
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-sm text-[#CBD5CC] dark:text-[#9BA7A3] hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/5 dark:bg-white/[0.04] hover:bg-white/10 text-[#CBD5CC] dark:text-[#9BA7A3] hover:text-white flex items-center justify-center border border-white/10 dark:border-white/5 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className="w-9 h-9 rounded-lg bg-white/5 dark:bg-white/[0.04] hover:bg-white/10 text-[#CBD5CC] dark:text-[#9BA7A3] hover:text-white flex items-center justify-center border border-white/10 dark:border-white/5 transition-colors"
            >
              <Github size={16} />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="w-9 h-9 rounded-lg bg-white/5 dark:bg-white/[0.04] hover:bg-white/10 text-[#CBD5CC] dark:text-[#9BA7A3] hover:text-white flex items-center justify-center border border-white/10 dark:border-white/5 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
              className="w-9 h-9 rounded-lg bg-white/5 dark:bg-white/[0.04] hover:bg-white/10 text-[#CBD5CC] dark:text-[#9BA7A3] hover:text-white flex items-center justify-center border border-white/10 dark:border-white/5 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              aria-label="Email"
              title={EMAIL}
              className="w-9 h-9 rounded-lg bg-white/5 dark:bg-white/[0.04] hover:bg-white/10 text-[#CBD5CC] dark:text-[#9BA7A3] hover:text-white flex items-center justify-center border border-white/10 dark:border-white/5 transition-colors"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9EA8AC]">
          <p>© {currentYear} Sahar Dwi Anugrah. All rights reserved.</p>
          <p className="font-serif italic text-white/70">
            Keep learning, keep growing ◡̈
          </p>
        </div>
      </div>
    </footer>
  );
}
