"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 relative z-10 px-4 md:px-0">
      <div className="container mx-auto max-w-4xl text-lg md:text-xl text-secondary leading-relaxed ">
        <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight uppercase text-center md:text-left text-foreground">
          About_<span className="text-[var(--color-bright-purple)]">Me</span>
        </h2>
        
        <div className="space-y-8">
          <p className="about-text">
            I have been programming since I was just 8 years old, kicking off my journey back in the 80s when software development looked fundamentally different. Originally from South Africa and now based in Vienna, Austria, I bring over 25 years of professional engineering experience across diverse industries. Throughout my career, I&apos;ve made it a priority to continuously evolve with the times, embracing the bleeding edge of modern tech while holding on to deep-rooted, time-tested architectural principles.
          </p>
          
          <p className="about-text">
            Technically, I am highly proficient across the modern stack. I excel at building dynamic, complex frontends using React, Next.js, and Vue, and robust, scalable backends powered by Node.js, NestJS, and C#. My architectural expertise ranges from designing containerized cloud ecosystems (AWS, Kubernetes, CI/CD pipelines) to building decentralized Web3 applications utilizing Ethereum, Solidity, and Viem.
          </p>
          
          <p className="about-text">
            For my freelance engagements, my sweet spot is building greenfield web and mobile platforms, as well as complex business applications from the ground up. I love establishing a rock-solid, scalable architecture from day one. I am, however, also highly experienced and comfortable diving into sprawling legacy systems to execute thoughtful and methodical refactoring.
          </p>
          
          <div className="about-text pt-4">
            <p className="font-medium text-[var(--color-light-teal)] text-xl md:text-2xl border-l-4 border-[var(--color-light-teal)] pl-6 py-2 bg-gradient-to-r from-[var(--color-light-teal)]/10 to-transparent">
              &quot;I love writing code because it represents the ultimate creative medium—it allows us to translate pure imagination and logic into living tools that shape the modern world.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
