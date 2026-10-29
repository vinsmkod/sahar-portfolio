import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F6F1] dark:bg-[#171C1B] text-[#263238] dark:text-[#F2F3EE] transition-colors duration-200">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <Experience />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}


