"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function BackgroundFx() {
  const gridRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !orb1Ref.current || !orb2Ref.current) return;
    
    // Pulsing and moving grid effect
    gsap.to(gridRef.current, {
      opacity: 0.3,
      y: 20,
      duration: 5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    // Slow floating orbs
    gsap.to(orb1Ref.current, {
      x: 100,
      y: 50,
      duration: 10,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });

    gsap.to(orb2Ref.current, {
      x: -100,
      y: -50,
      duration: 12,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      delay: 2
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[var(--background)]">
      {/* Perspective Grid Line */}
      <div 
        ref={gridRef}
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          perspective: '1000px',
          transform: 'rotateX(75deg) translateY(-100px) scale(3)',
          transformOrigin: 'top center',
        }}
      />
      
      {/* Ambient Lights */}
      <div 
        ref={orb1Ref}
        className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-[var(--color-bright-blue)] rounded-full blur-[120px] opacity-[0.15] mix-blend-screen"
      />
      <div 
        ref={orb2Ref}
        className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] bg-[var(--color-bright-purple)] rounded-full blur-[150px] opacity-[0.12] mix-blend-screen"
      />
      
      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E')` }}
      />
    </div>
  );
}
