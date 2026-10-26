"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToHome() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 350px
      setVisible(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToHome}
      aria-label="Navigate to home screen"
      className={`fixed bottom-24 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border border-white/15 bg-[#090b1e]/90 text-slate-300 shadow-[0_12px_36px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:border-violet-400/60 hover:bg-[#121634] hover:text-white hover:scale-105 active:scale-95 group ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="size-5 rounded-full bg-white/10 flex items-center justify-center text-violet-300 group-hover:bg-violet-500/20 group-hover:text-white transition-colors">
        <ArrowUp className="size-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
      </div>
      <span className="font-mono text-xs font-semibold tracking-wider">Home</span>
    </button>
  );
}
