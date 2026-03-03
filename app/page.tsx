"use client";

import Hero from "@/components/ui/Hero";
import About from "@/components/ui/About";
import Experience from "@/components/ui/Experience";
import Skills from "@/components/ui/Skills";
import Projects from "@/components/ui/Projects";
import DotGrid from '@/components/DotGrid';
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="fixed inset-0 w-[100vw] h-[100vh] -z-10 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={25}
          baseColor="var(--color-dot-base)"
          activeColor="var(--color-dot-active)"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div> 
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
