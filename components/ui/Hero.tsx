"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-8"
      >
        <div className="inline-block relative">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-2 z-10 relative">
            BEORN
            <span className="text-[var(--color-bright-purple)] glow-text">_</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-2 left-0 h-4 bg-[var(--color-bright-purple)] opacity-20 -z-10"
          />
        </div>
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-6 uppercase"
      >
        Engineering Leader
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-3xl space-y-4 text-secondary text-lg md:text-xl leading-relaxed"
      >
        <p>
          <span className="text-foreground font-semibold">Engineering Leader</span> combining strong traditional development principles with AI augmentation to deliver scalable, robust solutions.
        </p>
        <p className="text-base md:text-lg">
          I build high-velocity engineering teams and craft custom freelance solutions, turning technical execution into a massive competitive advantage.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 flex gap-4"
      >
        <a href="#experience" className="px-8 py-4 border-2 border-[var(--color-bright-purple)] text-[var(--color-bright-purple)] font-bold tracking-widest uppercase text-sm hover:bg-[var(--color-bright-purple)] hover:text-black transition-all glow-box">
          Explore Experience
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--color-bright-purple)] text-2xl hidden md:block"
      >
        ↓
      </motion.div>
    </section>
  );
}
