"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
        <Link 
          href="/" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-2xl font-bold tracking-tighter hover:text-[var(--color-bright-purple)] transition-colors"
        >
          BEORN<span className="text-[var(--color-bright-purple)]">.</span>
        </Link>
        <nav className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-widest text-secondary">
          <a href="#experience" onClick={(e) => scrollTo(e, "about")} className="hover:text-foreground hover:glow-text transition-all">About</a>
          <a href="#experience" onClick={(e) => scrollTo(e, "experience")} className="hover:text-foreground hover:glow-text transition-all">Experience</a>
          <a href="#projects" onClick={(e) => scrollTo(e, "projects")} className="hover:text-foreground hover:glow-text transition-all">Projects</a>
          <a href="#skills" onClick={(e) => scrollTo(e, "skills")} className="hover:text-foreground hover:glow-text transition-all">Skills</a>
          <a href="#contact" onClick={(e) => scrollTo(e, "contact")} className="hover:text-[var(--color-bright-purple)] transition-all">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}
