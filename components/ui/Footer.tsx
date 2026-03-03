"use client";

import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { 
  Envelope1Outlined, 
  LinkedinOutlined, 
  PhoneOutlined,
  FileMultipleOutlined
} from "@lineiconshq/free-icons";

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-[var(--color-border-glass)] bg-black/50 text-center relative z-10 px-4">
      <h2 className="text-2xl font-bold mb-6 tracking-tight uppercase">
        Let&apos;s <span className="text-[var(--color-bright-purple)]">Connect</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-secondary mb-8 font-mono text-sm">
        <a href="mailto:mailto@beornb.com" className="hover:text-foreground transition-colors flex items-center gap-2 group">
          <Lineicons icon={Envelope1Outlined} size={22} className="text-muted group-hover:text-[var(--color-bright-purple)] transition-colors" />
          mailto@beornb.com
        </a>
        <span className="hidden md:inline text-zinc-700">|</span>
        <a href="https://www.linkedin.com/in/BeornBishop" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077b5] transition-colors flex items-center gap-2 group">
          <Lineicons icon={LinkedinOutlined} size={22} className="text-muted group-hover:text-[#0077b5] transition-colors" />
          in/BeornBishop
        </a>
        <span className="hidden md:inline text-zinc-700">|</span>
        <span className="flex items-center gap-2">
          <Lineicons icon={PhoneOutlined} size={22} className="text-muted" />
          +43 676 489 7987
        </span>
        <span className="hidden md:inline text-zinc-700">|</span>
        <a href="/downloads/BeornBishop.CV.pdf" download="BeornBishop_Resume.pdf" className="hover:text-[var(--color-light-teal)] transition-colors flex items-center gap-2 group">
          <Lineicons icon={FileMultipleOutlined} size={22} className="text-muted group-hover:text-[var(--color-light-teal)] transition-colors" />
          Resume / CV
        </a>
      </div>
      
      <div className="flex justify-center mb-8">
        <ThemeToggle />
      </div>

      <div className="text-xs text-zinc-600">
        © {new Date().getFullYear()} Beorn Bishop. All rights reserved. Built with Next.js, Framer Motion, and GSAP.
      </div>
    </footer>
  );
}
