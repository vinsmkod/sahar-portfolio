"use client";

import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// Real contact details for Sahar Dwi Anugrah:
// ─────────────────────────────────────────────────────────────────────────────
const EMAIL = "sahardwianugrah10@gmail.com";
const PHONE = "081324768193";
const PHONE_DISPLAY = "+62 813-2476-8193";
const WHATSAPP_URL = "https://wa.me/6281324768193";
const GITHUB_URL = "https://github.com/vinsmkod";
const LINKEDIN_URL = "https://www.linkedin.com/in/sahar-dwi-anugrah-bb658233a/";
// ─────────────────────────────────────────────────────────────────────────────

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${EMAIL}`,
    title: EMAIL,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: WHATSAPP_URL,
    title: `WhatsApp: ${PHONE_DISPLAY}`,
  },
  {
    icon: Phone,
    label: "Telepon",
    href: `tel:${PHONE}`,
    title: `Tel: ${PHONE_DISPLAY}`,
  },
  {
    icon: Github,
    label: "GitHub",
    href: GITHUB_URL,
    title: "GitHub Profile",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: LINKEDIN_URL,
    title: "LinkedIn Profile",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#0d0d18] border-t border-gray-200 dark:border-gray-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand & Quick Contacts */}
          <div className="flex-shrink-0">
            <div className="font-display font-bold text-2xl text-gray-900 dark:text-white tracking-tight mb-2">
              SDA.
            </div>
            <p className="text-sm text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed mb-3">
              Sahar Dwi Anugrah · Information Systems Student · System Analyst & Web Developer
            </p>
            <div className="flex flex-col gap-1 text-xs text-gray-500 dark:text-gray-400">
              <a
                href={`mailto:${EMAIL}`}
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5"
              >
                <Mail size={13} className="text-indigo-500" />
                <span>{EMAIL}</span>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
              >
                <MessageCircle size={13} className="text-emerald-500" />
                <span>{PHONE_DISPLAY} (WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact and Social links */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {contactLinks.map((item) => {
              const Icon = item.icon;
              const isExternal =
                item.href.startsWith("http") || item.href.startsWith("https");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={item.label}
                  title={item.title}
                  className="p-2.5 rounded-xl text-gray-400 dark:text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800/40 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-400 dark:text-gray-600">
            © {currentYear} Sahar Dwi Anugrah. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-600">
            Subang, Indonesia · Universitas Subang
          </p>
        </div>
      </div>
    </footer>
  );
}
