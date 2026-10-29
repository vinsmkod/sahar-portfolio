import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-jakarta)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        ivory: {
          DEFAULT: "#F7F6F1",
          alt: "#F0F1EB",
          card: "#FFFFFF",
        },
        sage: {
          light: "#E8EDE8",
          DEFAULT: "#6D8577",
          dark: "#4F695B",
          darker: "#3A5044",
        },
        charcoal: {
          light: "#4A555B",
          DEFAULT: "#263238",
          dark: "#1E272C",
        },
        muted: {
          DEFAULT: "#77858A",
          light: "#9EA8AC",
        },
        border: {
          DEFAULT: "#DEE3DD",
          light: "#EAEFE9",
          dark: "#C8D0C7",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

