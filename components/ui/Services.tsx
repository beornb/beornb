"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { LaptopPhoneOutlined, BitcoinOutlined, DashboardSquare1Outlined } from "@lineiconshq/free-icons";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Full‑stack web and mobile apps",
    icon: LaptopPhoneOutlined,
    color: "var(--color-bright-purple)"
  },
  {
    title: "Web3 / DeFi integrations",
    icon: BitcoinOutlined,
    color: "var(--color-bright-pink)"
  },
  {
    title: "Performance and architecture consulting",
    icon: DashboardSquare1Outlined,
    color: "var(--color-bright-blue)"
  }
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "+=500", // Adds 1500px of artificial scroll distance
        scrub: 1,
        pin: true,
      }
    });

    tl.fromTo(".service-card", 
      { x: 150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.3,
        ease: "power2.out"
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="w-full">
      <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase text-center md:text-left">
        Freelance_<span className="text-[var(--color-bright-purple)]">Services</span>
      </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {services.map((service, i) => (
            <div 
              key={i} 
              className="service-card glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center hover:border-[var(--color-bright-purple)] hover:bg-white/5 transition-all duration-300 group"
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-black/40 group-hover:scale-110 transition-transform duration-300"
                style={{ color: service.color, border: `1px solid ${service.color}` }}
              >
                <Lineicons icon={service.icon} size={32} />
              </div>
              <h3 className="text-lg font-bold text-secondary">{service.title}</h3>
            </div>
          ))}
        </div>
    </div>
  );
}
