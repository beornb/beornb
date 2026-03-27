"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Services from "./Services";

gsap.registerPlugin(ScrollTrigger);

const competencies = [
  {
    category: "Leadership",
    skills: ["Team Building", "Mentorship", "Talent Development", "Engineering Culture", "Agile Delivery"],
    color: "var(--color-bright-purple)"
  },
  {
    category: "Technical",
    skills: ["System Architecture", "Cloud (AWS/GCP)", "DevOps", "Blockchain Infra", "SaaS Development"],
    color: "var(--color-bright-blue)"
  },
  {
    category: "Strategy",
    skills: ["Technical Roadmap", "Product Strategy", "Platform Development", "Scalability Planning"],
    color: "var(--color-bright-pink)"
  },
  {
    category: "Operations",
    skills: ["Agile/Scrum", "Project Delivery", "Vendor Management", "Workflow Automation"],
    color: "var(--color-light-teal)"
  }
];





const technologies = [
  {
    group: "Frontend", items: [
      { name: "React", tooltip: "8+ Years" },
      { name: "Next.js", tooltip: "5+ Years" },
      { name: "Vue", tooltip: "3+ Years" },
      { name: "Angular", tooltip: "Legacy Expert" },
      { name: "React Native", tooltip: "3+ Years" },
      { name: "Tailwind", tooltip: "Daily Driver" },
      { name: "Shadcn", tooltip: "Daily Driver" },
      { name: "Svelte", tooltip: "Multiple Projects" },
      { name: "Framer Motion" },
      { name: "GSAP" }
    ]
  },
  {
    group: "Backend", items: [
      { name: "NestJS", tooltip: "4+ Years" },
      { name: "Express.js", tooltip: "8+ Years" },
      { name: "Ruby on Rails", tooltip: "Legacy Expert" },
      { name: "SvelteKit", tooltip: "Multiple Projects" },
      { name: "ASP.NET", tooltip: "10+ Years - Expert" }
    ]
  },
  {
    group: "Languages", items: [
      { name: "JavaScript", tooltip: "15+ Years - Expert" },
      { name: "TypeScript", tooltip: "8+ Years - Expert" },
      { name: "Go", tooltip: "Multiple Projects - Intermediate" },      
      { name: "C#", tooltip: "15+ Years - Expert" },
      { name: "VB.NET", tooltip: "Legacy Expert" },
      { name: "Solidity", tooltip: "3+ Years" }
    ]
  },
  {
    group: "Databases & Cache", items: [
      { name: "PostgreSQL", tooltip: "10+ Years" },
      { name: "Redis", tooltip: "8+ Years" },
      { name: "Prisma", tooltip: "4+ Years" },
      { name: "Sequelize" }
    ]
  },
  {
    group: "Infrastructure", items: [
      { name: "Docker", tooltip: "3+ Years" },
      { name: "Terraform", tooltip: "1+ Years" },
      { name: "CloudFormation", tooltip: "2+ Years" },
      { name: "Kubernetes", tooltip: "1+ Years" },
      { name: "AWS", tooltip: "10+ Years" },
      { name: "Kafka" },
      { name: "RabbitMQ" }
    ]
  },
  { group: "API & Monitoring", items: [{ name: "GraphQL" }, { name: "WebSocket Services", tooltip: "5+ Years" }, { name: "tRPC", tooltip: "2+ Years" }, { name: "PostHog" }, { name: "Sentry" }, { name: "Datadog" }] },
  { group: "Blockchain/Web3", items: [{ name: "Ethereum", tooltip: "Smart Contracts" }, { name: "Viem", tooltip: "Primary Web3 toolkit" }, { name: "Smart Contracts" }, { name: "etc." }] },
  { group: "General", items: [{ name: "CI/CD", tooltip: "GH Actions / GitLab" }, { name: "Testing", tooltip: "Jest / Vitest / Cypress" }, { name: "DevOps" }] }
];

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".comp-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });

    gsap.from(".tech-pill", {
      scrollTrigger: {
        trigger: ".tech-container",
        start: "top 85%",
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.4,
      stagger: 0.02,
      ease: "back.out(1.5)"
    });
  }, { scope: containerRef });

  return (
    <section id="skills" ref={containerRef} className="py-24 relative z-10 px-4 md:px-0 bg-black/40 border-y border-[var(--color-border-glass)]">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-48">
          <Services />
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase text-center md:text-left">
          Core_<span className="text-[var(--color-light-teal)]">Competencies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {competencies.map((comp, i) => (
            <div key={i} className="comp-card glass-panel p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-4" style={{ color: comp.color }}>{comp.category}</h3>
              <ul className="space-y-2">
                {comp.skills.map((skill, j) => (
                  <li key={j} className="text-secondary text-sm flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full mr-2" style={{ backgroundColor: comp.color, opacity: 0.7 }} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight uppercase text-center md:text-left tech-container">
          Tech_<span className="text-[var(--color-bright-pink)] flex-inline items-center gap-2">
            Stack
            <span className="text-sm border border-[var(--color-bright-pink)] px-3 py-1 rounded-full text-foreground ml-4 align-middle">Live & Breathing</span>
          </span>
        </h2>

        <div className="space-y-10">
          {technologies.map((tech, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              <div className="w-48 text-secondary uppercase tracking-widest text-sm font-bold flex-shrink-0">
                {"// "} {tech.group}
              </div>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ scale: 1.05, borderColor: "var(--color-bright-pink)", color: "white" }}
                    className="group relative tech-pill px-4 py-2 rounded-md bg-white/50 dark:bg-white/5 border border-white/10 text-secondary text-sm font-mono cursor-default transition-colors"
                  >
                    {item.name}
                    {item.tooltip && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-[var(--color-bright-purple)] text-foreground text-xs font-sans rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none drop-shadow-md z-20">
                        {item.tooltip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[var(--color-bright-purple)]"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
