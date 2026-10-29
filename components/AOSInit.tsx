"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 70,
      delay: 30,
      disable: () => {
        // Hormati preferensi prefers-reduced-motion
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      },
    });

    // Refresh AOS setelah font dan aset selesai dimuat
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

