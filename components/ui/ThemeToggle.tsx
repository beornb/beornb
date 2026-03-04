"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="p-2 h-[36px] w-[36px] rounded-full border border-[var(--color-border-glass)] bg-black/20" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex items-center justify-center gap-0 p-2 rounded-full border border-[var(--color-border-glass)] bg-black/20 hover:bg-black/40 transition-all duration-300 group overflow-hidden hover:gap-2 hover:px-4"
      aria-label={theme === "dark" ? "Walk the Path of Light" : "Join the Dark Side"}
      title={theme === "dark" ? "Walk the Path of Light" : "Join the Dark Side"}
    >
      <div className="relative w-5 h-5 flex-shrink-0 flex items-center justify-center">
        {/* Light Side / Rebel Alliance Logo (Visible in Light Mode) */}
        <Image 
          src="/images/dark.svg"
          alt="Dark Side"
          fill
          className="object-contain transition-all duration-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
        />
        
        {/* Dark Side / Galactic Empire Logo (Visible in Dark Mode) */}
        <Image 
          src="/images/light.svg"
          alt="Light Side"
          fill
          className="object-contain transition-all duration-500 absolute top-0 left-0 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
        />
      </div>
      <span className="text-xs font-semibold uppercase tracking-wider text-muted group-hover:text-foreground transition-all duration-300 max-w-0 opacity-0 group-hover:max-w-[160px] group-hover:opacity-100 overflow-hidden whitespace-nowrap block">
        {theme === "dark" ? "Walk the Path of Light" : "Join the Dark Side"}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
