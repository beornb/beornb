"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Morpher",
    role: "VP of Engineering",
    description: "Reengineered mobile application zero-downtime microservices and rolled out an AI-augmented workflow. Set up a standardized AI tooling stack cutting AWS infrastructure costs by 50%. Led migration from self-hosted sidechain to public Base chain.",
    tech: ["React Native", "Expo", "AWS", "Node.js", "AI Tooling"],
    link: "https://morpher.com",
    hasVideo: false
  },
  {
    title: "Frenzy.Finance",
    role: "Full-Stack Architect",
    description: "Rolled out a full-stack market trading app with onboarding, on-chain deposits/withdrawals, Fiat ramps, and on-chain trading capabilities. Concept to production launch achieved within 6 weeks, securing 500+ active users instantly.",
    tech: ["Next.js", "Web3", "Smart Contracts", "PostgreSQL"],
    link: "#",
    hasVideo: true
  },
  {
    title: "UPD.io",
    role: "Technical Lead",
    description: "Created landing page and proof-of-concept application for a new privacy stablecoin. Built features for currency swaps, private transactions, and secure token transfers to support fundraising activities.",
    tech: ["Next.js", "TypeScript", "Blockchain Analytics"],
    link: "https://upd.io",
    hasVideo: true
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".project-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section id="projects" ref={containerRef} className="py-32 relative z-10 px-4 md:px-0">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase text-center md:text-left">
          Featured_<span className="text-[var(--color-bright-blue)]">Projects</span>
        </h2>
        
        <div className="space-y-24">
          {projects.map((project, i) => (
            <div key={i} className={`project-card flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center group`}>
              
              {/* Media Container Placeholder */}
              <div className="w-full md:w-1/2 aspect-video bg-zinc-900 rounded-xl border border-zinc-800 relative overflow-hidden group-hover:border-[var(--color-bright-blue)] transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 pointer-events-none z-10" />
                
                {project.hasVideo ? (
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-zinc-600">
                    <motion.div 
                      whileHover={{ scale: 1.1, color: "var(--color-bright-blue)" }}
                      className="w-16 h-16 rounded-full border-2 border-current flex items-center justify-center mb-4 cursor-pointer transition-colors"
                    >
                      ▶
                    </motion.div>
                    <span className="text-sm font-mono">[Video Demo Embed]</span>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-700 font-mono">
                    [Project Showcase Image]
                  </div>
                )}
                
                {/* Decorative overlay lines */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[var(--color-bright-blue)] opacity-0 group-hover:opacity-100 transition-opacity m-4" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[var(--color-bright-blue)] opacity-0 group-hover:opacity-100 transition-opacity m-4" />
              </div>

              {/* Content Container */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2 text-foreground group-hover:text-[var(--color-bright-blue)] transition-colors">
                  {project.title}
                </h3>
                <div className="text-[var(--color-bright-purple)] font-mono text-sm mb-6">
                  {project.role}
                </div>
                
                <p className="text-secondary leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-xs font-semibold px-2 py-1 bg-white/5 rounded text-secondary">
                      {t}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-[var(--color-bright-blue)] transition-colors"
                >
                  View Project <span className="text-lg">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
