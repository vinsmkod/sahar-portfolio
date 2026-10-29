export interface SocialLink {
  id: string;
  name: string;
  label: string;
  href: string;
  isConfigured: boolean;
  usernameDisplay: string;
}

export const CONTACT_INFO = {
  email: "sahardwianugrah10@gmail.com",
  location: "Subang, Jawa Barat, Indonesia",
  phoneDisplay: "+62 813-2476-8193",
  whatsappNumber: "6281324768193",
  socials: [
    {
      id: "email",
      name: "Email",
      label: "Kirim pesan langsung via email",
      href: "mailto:sahardwianugrah10@gmail.com",
      isConfigured: true,
      usernameDisplay: "sahardwianugrah10@gmail.com",
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      label: "Terhubung secara profesional",
      href: "https://www.linkedin.com/in/sahar-dwi-anugrah-bb658233a/",
      isConfigured: true,
      usernameDisplay: "/in/sahar-dwi-anugrah",
    },
    {
      id: "instagram",
      name: "Instagram",
      label: "Ikuti aktivitas dan update",
      href: "https://www.instagram.com/iridescentsahar_/",
      isConfigured: true,
      usernameDisplay: "@iridescentsahar_",
    },
    {
      id: "facebook",
      name: "Facebook",
      label: "Terhubung di jejaring Facebook",
      href: "https://www.facebook.com/SaharMoriarty",
      isConfigured: true,
      usernameDisplay: "/SaharMoriarty",
    },
  ] as SocialLink[],
};
