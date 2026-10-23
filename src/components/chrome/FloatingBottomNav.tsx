"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Briefcase, Puzzle, Users, Cpu, Sun } from "lucide-react";

type PaletteId = "cosmic" | "editorial";

function subscribePalette(cb: () => void) {
  const o = new MutationObserver(cb);
  o.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-palette"],
  });
  return () => o.disconnect();
}

function readPalette(): PaletteId {
  if (typeof document === "undefined") return "cosmic";
  return (document.documentElement.dataset.palette as PaletteId) || "cosmic";
}

export function FloatingBottomNav() {
  const pathname = usePathname();
  const currentPalette = useSyncExternalStore(subscribePalette, readPalette, () => "cosmic");
  const [, setMounted] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const [dockWidth, setDockWidth] = useState(360);

  useEffect(() => {
    setMounted(true);
    if (!mobileNavRef.current) return;
    const updateWidth = () => {
      if (mobileNavRef.current) {
        setDockWidth(mobileNavRef.current.offsetWidth);
      }
    };
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(mobileNavRef.current);
    return () => observer.disconnect();
  }, []);

  const togglePalette = () => {
    const next: PaletteId = currentPalette === "cosmic" ? "editorial" : "cosmic";
    document.documentElement.dataset.palette = next;
    document.documentElement.dataset.theme = "dark";
    try {
      localStorage.setItem("palette", next);
      localStorage.setItem("theme", "dark");
    } catch {}
  };

  const navLinks = [
    { label: "Work", href: "/work", icon: Briefcase },
    { label: "Services", href: "/services", icon: Puzzle },
    { label: "Let's Talk", href: "/contact", isCta: true },
    { label: "About", href: "/about", icon: Users },
    { label: "Stack", href: "/stack", icon: Cpu },
  ];

  const isContactActive = pathname === "/contact";

  // Responsive notched dock dimensions
  const W = Math.max(dockWidth, 320);
  const H = 66;
  const R = 24; // outer corner radius
  const C = W / 2; // cradle center

  // Refined Cradle cutout geometry matching reference
  const cradlePath = `
    M ${R} 0
    L ${C - 46} 0
    C ${C - 35} 0, ${C - 35} 42, ${C - 28} 42
    L ${C + 28} 42
    C ${C + 35} 42, ${C + 35} 0, ${C + 46} 0
    L ${W - R} 0
    A ${R} ${R} 0 0 1 ${W} ${R}
    L ${W} ${H - R}
    A ${R} ${R} 0 0 1 ${W - R} ${H}
    L ${R} ${H}
    A ${R} ${R} 0 0 1 0 ${H - R}
    L 0 ${R}
    A ${R} ${R} 0 0 1 ${R} 0
    Z
  `;

  // Neon glowing top contour
  const glowTopPath = `
    M 0 ${R + 4}
    A ${R} ${R} 0 0 1 ${R} 0
    L ${C - 46} 0
    C ${C - 35} 0, ${C - 35} 42, ${C - 28} 42
    L ${C + 28} 42
    C ${C + 35} 42, ${C + 35} 0, ${C + 46} 0
    L ${W - R} 0
    A ${R} ${R} 0 0 1 ${W} ${R + 4}
  `;

  return (
    <>
      {/* =========================================================================
          1. MOBILE NAVIGATION DOCK (< 768px): Modeled after reference layout
          - Curved floating bottom bar with smooth scooped notch
          - 4 tab items (Work, Services, About, Stack)
          - Elevated central floating action button nestled into the glowing cradle
          ========================================================================= */}
      <nav
        aria-label="Mobile Navigation Dock"
        className="fixed bottom-3 inset-x-4 z-50 flex md:hidden max-w-[370px] mx-auto select-none pointer-events-auto justify-center"
      >
        <div
          ref={mobileNavRef}
          className="relative w-full h-[66px]"
        >
          {/* SVG shaped background with blur and shadow */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            width={W}
            height={H}
            viewBox={`0 0 ${W} ${H}`}
          >
            {/* Body of the dock */}
            <path
              d={cradlePath}
              fill="#090b16"
              fillOpacity="0.95"
              stroke="rgba(255, 255, 255, 0.12)"
              strokeWidth="1"
              className="drop-shadow-[0_16px_36px_rgba(0,0,0,0.85)]"
            />

            {/* Neon glowing top edge + cradle scoop */}
            <path
              d={glowTopPath}
              fill="none"
              stroke="var(--hero-frame-stroke)"
              strokeWidth="1.8"
              strokeLinecap="round"
              style={{
                filter: "drop-shadow(0 0 6px var(--hero-frame-glow))",
              }}
            />
          </svg>

          {/* Absolute mathematically centered Action Button */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-3.5 z-20 pointer-events-auto">
            <Link
              href="/contact"
              aria-label="Let's Talk"
              className={`size-[50px] rounded-[18px] bg-gradient-to-b from-[#181a30] to-[#0c0d20] border-2 border-(--hero-frame-stroke) flex items-center justify-center transition-all duration-300 cursor-pointer select-none ${
                isContactActive
                  ? "scale-105 shadow-[0_0_24px_var(--hero-frame-glow),0_0_10px_rgba(255,255,255,0.4)]"
                  : "shadow-[0_0_18px_var(--hero-frame-glow),0_8px_20px_rgba(0,0,0,0.85)] hover:scale-105 active:scale-95"
              }`}
            >
              {/* Authentic solid speech-bubble icon with cutout smile matching reference */}
              <svg className="size-6.5 select-none transition-transform duration-200 hover:scale-105" viewBox="0 0 32 32">
                <path
                  d="M16 5C9.9 5 5 9.7 5 15.5c0 2.2.7 4.3 1.9 6L5.5 26.5l5.3-1.4c1.6.9 3.4 1.4 5.2 1.4 6.1 0 11-4.7 11-10.5S22.1 5 16 5z"
                  fill="white"
                />
                <path
                  d="M11.5 16c1.1 1.8 2.8 2.5 4.5 2.5s3.4-.7 4.5-2.5"
                  stroke="#0c0d20"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </Link>
          </div>

          {/* Nav Items (Left 2 + Right 2) */}
          <div className="relative z-10 w-full h-full flex items-center justify-between">
            {/* Left 2 items */}
            <div className="w-[calc(50%-38px)] h-full flex items-center justify-around pl-3 pr-1 pt-1">
              {/* 1. Work */}
              {(() => {
                const active = pathname === "/work" || pathname.startsWith("/work/");
                return (
                  <Link
                    href="/work"
                    aria-label="Work"
                    className={`flex flex-col items-center justify-center py-1 transition-all duration-200 cursor-pointer ${
                      active ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Briefcase className={`size-5 transition-transform ${active ? "scale-110 text-white" : ""}`} />
                    <span className={`text-[11px] tracking-wide mt-1 font-sans ${active ? "font-bold text-white" : "font-medium"}`}>
                      Work
                    </span>
                  </Link>
                );
              })()}

              {/* 2. Services */}
              {(() => {
                const active = pathname === "/services" || pathname.startsWith("/services/");
                return (
                  <Link
                    href="/services"
                    aria-label="Services"
                    className={`flex flex-col items-center justify-center py-1 transition-all duration-200 cursor-pointer ${
                      active ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Puzzle className={`size-5 transition-transform ${active ? "scale-110 text-white" : ""}`} />
                    <span className={`text-[11px] tracking-wide mt-1 font-sans ${active ? "font-bold text-white" : "font-medium"}`}>
                      Services
                    </span>
                  </Link>
                );
              })()}
            </div>

            {/* Empty Center spacer for the cradle */}
            <div className="w-[76px] h-full pointer-events-none" aria-hidden />

            {/* Right 2 items */}
            <div className="w-[calc(50%-38px)] h-full flex items-center justify-around pl-1 pr-3 pt-1">
              {/* 3. About */}
              {(() => {
                const active = pathname === "/about" || pathname.startsWith("/about/");
                return (
                  <Link
                    href="/about"
                    aria-label="About"
                    className={`flex flex-col items-center justify-center py-1 transition-all duration-200 cursor-pointer ${
                      active ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Users className={`size-5 transition-transform ${active ? "scale-110 text-white" : ""}`} />
                    <span className={`text-[11px] tracking-wide mt-1 font-sans ${active ? "font-bold text-white" : "font-medium"}`}>
                      About
                    </span>
                  </Link>
                );
              })()}

              {/* 4. Stack */}
              {(() => {
                const active = pathname === "/stack" || pathname.startsWith("/stack/");
                return (
                  <Link
                    href="/stack"
                    aria-label="Stack"
                    className={`flex flex-col items-center justify-center py-1 transition-all duration-200 cursor-pointer ${
                      active ? "text-white" : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Cpu className={`size-5 transition-transform ${active ? "scale-110 text-white" : ""}`} />
                    <span className={`text-[11px] tracking-wide mt-1 font-sans ${active ? "font-bold text-white" : "font-medium"}`}>
                      Stack
                    </span>
                  </Link>
                );
              })()}
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Theme Switcher on Mobile (Top-right corner, non-intrusive) */}
      <button
        type="button"
        onClick={togglePalette}
        title={`Active theme: ${currentPalette === "cosmic" ? "Cosmic Violet" : "Warm Editorial"}. Click to switch theme.`}
        aria-label={`Toggle theme palette, currently ${currentPalette}`}
        className="fixed top-4 right-4 z-50 flex md:hidden size-10 rounded-full bg-[#0a0c1a]/85 border border-white/20 backdrop-blur-xl items-center justify-center text-white/80 hover:text-white shadow-[0_4px_16px_rgba(0,0,0,0.6)] active:scale-95 transition-all cursor-pointer"
      >
        <Sun className="size-4.5 transition-transform duration-300 hover:rotate-45" />
      </button>

      {/* =========================================================================
          2. DESKTOP NAVIGATION DOCK (>= 768px): Sleek horizontal floating pill
          ========================================================================= */}
      <nav
        aria-label="Desktop Navigation Dock"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex select-none pointer-events-auto"
      >
        <div className="relative flex items-center gap-2 p-2 px-3 rounded-full bg-[#0a0c1a]/85 border border-white/20 backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.85),0_0_28px_rgba(168,85,247,0.24)] ring-1 ring-white/10">
          {navLinks.map((item) => {
            if (item.isCta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label="Let's Talk"
                  className={`group relative inline-flex items-center justify-center gap-2 font-sans font-bold text-[15px] tracking-wide rounded-full transition-all duration-200 px-5.5 py-2.5 whitespace-nowrap cursor-pointer ${
                    isContactActive
                      ? "bg-white text-neutral-950 shadow-[0_0_28px_rgba(255,255,255,0.75)] scale-105"
                      : "bg-white text-neutral-950 shadow-[0_0_20px_rgba(255,255,255,0.45)] hover:shadow-[0_0_30px_rgba(255,255,255,0.7)] hover:scale-105 active:scale-95"
                  }`}
                >
                  <span>{item.label}</span>
                  <svg
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              );
            }

            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative inline-flex items-center justify-center font-sans text-[15px] tracking-normal rounded-full px-4.5 py-2.5 transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "text-white font-semibold bg-white/15 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
                    : "text-neutral-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Vertical divider */}
          <div className="h-6 w-[1px] bg-white/20 mx-1" aria-hidden />

          {/* Previous theme toggle icon: Sun (Cosmic <-> Editorial) */}
          <button
            type="button"
            onClick={togglePalette}
            title={`Active theme: ${currentPalette === "cosmic" ? "Cosmic Violet" : "Warm Editorial"}. Click to switch theme.`}
            aria-label={`Toggle theme palette, currently ${currentPalette}`}
            className="relative size-9 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/15 transition-all duration-200 cursor-pointer group"
          >
            <Sun className="size-4.5 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 text-white/80 group-hover:text-white" />
          </button>
        </div>
      </nav>
    </>
  );
}
