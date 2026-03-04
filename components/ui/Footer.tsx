"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { 
  Envelope1Outlined, 
  LinkedinOutlined
} from "@lineiconshq/free-icons";
import { Check, Github } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("mailto@beornb.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <footer id="contact" className="py-20 border-t border-[var(--color-border-glass)] bg-[var(--color-footer-bg)] text-center relative z-10 px-4 overflow-hidden mask-image-bottom">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-bright-purple)]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-4xl mx-auto relative z-10"
      >
        <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-12 tracking-tight uppercase flex flex-col gap-2">
          <span>Let&apos;s <span className="text-[var(--color-bright-purple)]">Build</span></span>
          <span className="text-[var(--color-light-teal)]">Something</span>
        </motion.h2>
        
        <motion.div variants={containerVariants} className="flex flex-col md:flex-row justify-center items-stretch gap-6 mb-16 font-mono text-sm max-w-2xl mx-auto">
          
          {/* Email Button */}
          <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-md transition-all relative group overflow-hidden shadow-lg cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bright-purple)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-bright-purple)]/50 rounded-2xl transition-all duration-300" />
            
            <div className="mb-4 h-10 w-10 flex items-center justify-center relative">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="text-[var(--color-light-teal)] absolute"
                  >
                    <Check size={36} strokeWidth={3} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="mail"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="text-[var(--color-bright-purple)] group-hover:text-[var(--color-light-teal)] transition-colors absolute"
                  >
                    <Lineicons icon={Envelope1Outlined} size={40} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <span className="font-bold text-lg mb-2">{copied ? "Copied!" : "Email Me"}</span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">mailto@beornb.com</span>
          </motion.button>

          {/* LinkedIn Link */}
          <motion.a 
            href="https://www.linkedin.com/in/BeornBishop" target="_blank" rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-md transition-all relative group overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0077b5]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0077b5]/50 rounded-2xl transition-all duration-300" />
             
            <div className="mb-4 h-10 flex items-center justify-center text-[#0077b5] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
              <Lineicons icon={LinkedinOutlined} size={40} />
            </div>
            <span className="font-bold text-lg mb-2">LinkedIn</span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">in/BeornBishop</span>
          </motion.a>

          {/* Github Link */}
          <motion.a 
            href="https://github.com/beornb" target="_blank" rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-1/3 flex flex-col items-center justify-center p-8 rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-md transition-all relative group overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bright-pink)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[var(--color-bright-pink)]/50 rounded-2xl transition-all duration-300" />
            
            <div className="mb-4 h-10 flex items-center justify-center text-[var(--color-bright-pink)] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
              <Github size={40} />
            </div>
            <span className="font-bold text-lg mb-2">GitHub</span>
            <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">github.com/beornb</span>
          </motion.a>
          
        </motion.div>

        {/* Profile Picture Section with 3D Float Effect */}
        <motion.div 
          variants={itemVariants} 
          className="flex justify-center mb-16 relative perspective-1000"
        >
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--color-glass-border)] shadow-[0_0_30px_rgba(153,3,195,0.3)] bg-[var(--color-background)]"
            whileHover={{ 
              scale: 1.1,
              rotateY: 15,
              rotateX: -15,
              boxShadow: "0 20px 40px rgba(153, 3, 195, 0.5), -20px 0 40px rgba(4, 150, 252, 0.4), 20px 0 40px rgba(253, 88, 209, 0.4)" 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Using a standard img tag with optimized Next Image properties since we're unoptimized */}
            <Image
              src="/images/beornb.png" 
              alt="Beorn Bishop Profile" 
              width={160}
              height={160}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
            />
            
            {/* Overlay scanline effect */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />
          </motion.div>
          
          {/* Background decorative glow for the avatar */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[var(--color-bright-purple)] rounded-full blur-[60px] opacity-20 -z-10 animate-pulse" />
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex justify-center mb-10 relative z-20">
          <ThemeToggle />
        </motion.div>

        <motion.div variants={itemVariants} className="text-xs text-muted-foreground border-t border-[var(--color-border-glass)] pt-8 max-w-lg mx-auto">
          © {new Date().getFullYear()} Beorn Bishop. All rights reserved.<br />
          Built with Next.js, Framer Motion, and GSAP.
        </motion.div>

      </motion.div>
    </footer>
  );
}
