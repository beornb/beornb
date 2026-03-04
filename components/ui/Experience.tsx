"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expData = [
  {
    role: "VP of Engineering",
    company: "Morpher",
    date: "Apr 2024 - Present",
    location: "Vienna, Austria",
    description: [
      "Rolled out a company-wide AI-augmented workflow for AI-integrated features, significantly increasing development output, doubling feature releases in half the time and reducing post-release bugs.",
      "Set up a standardized AI tooling stack and usage policy, reducing AI-related coding issues and information leaks.",
      "Optimized AWS infrastructure for Morpher, reducing our monthly AWS bill by 50%.",
      "Reengineered the architecture of Morphers entire mobile application using Expo, reducing crashes and bug reports by 80%.",
    ]
  },
  {
    role: "Principal Software Engineer",
    company: "Morpher",
    date: "Jan 2020 - Mar 2024",
    location: "Vienna, Austria",
    description: [
      "Led a project to migrate from a self-hosted sidechain to the public Base chain, reducing infrastructure costs and increasing user and ecosystem exposure.",
      "Built and led a high-performing engineering team, increasing delivery velocity by 40% and strengthening ownership culture.",
      "Implemented DevOps and CI/CD pipelines, cutting deployment time from 2 hours to 15 minutes and accelerating feature delivery.",
      "Aligned engineering with growth strategy, supporting market expansion and contributing to 2x user growth."
    ]
  },
  {
    role: "Technical Director",
    company: "BizFrame",
    date: "Jan 2002 - Jan 2020",
    location: "Johannesburg, South Africa",
    description: [
      "Pioneered the BizFrame Platform, creating a rapid-application framework adopted by 10+ enterprises and portals, accelerating web application development.",
      "Delivered large-scale enterprise systems, including customized ERP and asset management platforms supporting 10,000+ assets.",
      "Improved business agility by building workflow automation and customer-facing solutions, streamlining operations.",
      "Built and mentored development teams in Agile practices, significantly increasing delivery quality.",
      "Led technical innovation at scale, balancing design with business needs to deliver durable solutions used daily by 10,000+ users."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray(".exp-item");
    
    sections.forEach((section) => {
      const element = section as HTMLElement;
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    // Animate the timeline line itself
    gsap.from(".timeline-line", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom center",
        scrub: 1,
      },
      scaleY: 0,
      transformOrigin: "top",
      ease: "none"
    });
  }, { scope: containerRef });

  return (
    <section id="experience" ref={containerRef} className="py-32 relative z-10 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase">
          Pro._<span className="text-[var(--color-bright-blue)]">Experience</span>
        </h2>
        
        <div className="relative pl-8 md:pl-0">
          {/* Main vertical line */}
          <div className="timeline-line absolute left-0 md:left-[50%] top-0 bottom-0 w-[2px] bg-border hidden md:block" />
          <div className="timeline-line absolute left-0 top-0 bottom-0 w-[2px] bg-border md:hidden" />

          {expData.map((exp, index) => (
            <div key={index} className={`exp-item relative mb-24 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:ml-0' : 'md:pl-16 md:ml-auto'}`}>
              
              {/* Timeline marker point */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-[var(--background)] border-2 border-[var(--color-bright-purple)] shadow-[0_0_10px_var(--color-bright-purple)] z-10 
                left-[-35px] md:left-auto
                ${index % 2 === 0 ? 'md:right-[-9px]' : 'md:left-[-9px]'}
              `} />
              
              <div className="glass-panel p-8 md:p-10 rounded-xl relative hover:border-[var(--color-bright-purple)] transition-colors duration-500 group">
                <div className="flex flex-col mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-[var(--color-bright-purple)] transition-colors">{exp.role}</h3>
                  <div className="flex justify-between items-center text-secondary text-sm mt-1 uppercase tracking-wider font-semibold">
                    <span>{exp.company}</span>
                    <span>{exp.date}</span>
                  </div>
                  <div className="text-xs text-muted mt-1">{exp.location}</div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-secondary text-sm md:text-base leading-relaxed flex items-start">
                      <span className="text-[var(--color-bright-blue)] mr-3 mt-1 text-xs">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
