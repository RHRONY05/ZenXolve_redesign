import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { HeroSuspendedRail } from "@/components/home/HeroSuspendedRail";
import { HeroProjectsCarousel } from "@/components/home/HeroProjectsCarousel";
import { HeroStarfield } from "@/components/home/HeroStarfield";
import { HeroArchitecturalGrid } from "@/components/home/HeroArchitecturalGrid";

/**
 * Home hero: full-screen edge-to-edge canvas featuring the signature deep cosmic dark navy base,
 * layered ambient nebula glow elevated to illuminate the top XenZolve title box, fine micro-starfield
 * sitting underneath the CSS orthogonal coordinate grid, dual-tone headline, white glowing CTA button,
 * full-bleed social media icon badges, and 2-row live project showcase.
 */
export function HeroPhoto() {
  return (
    <section
      id="hero"
      className="hero-photo relative min-h-[100svh] w-full overflow-x-clip overflow-y-visible bg-(--hero-bg) flex flex-col justify-start items-center px-4 sm:px-6 pt-12 sm:pt-10 md:pt-12 pb-0"
    >
      {/* 1. Atmospheric radial glow: focused on center column, keeping outer margins deep and moody */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 48% at 50% 16%, var(--hero-glow-1) 0%, var(--hero-glow-2) 42%, var(--hero-glow-3) 68%, transparent 85%), radial-gradient(ellipse 65% 58% at 50% 22%, var(--hero-glow-4) 0%, var(--hero-glow-5) 45%, transparent 82%), radial-gradient(480px 320px at 50% 15%, var(--hero-glow-6), transparent 72%)",
        }}
        aria-hidden
      />

      {/* 2. Micro-starfield texture sitting directly underneath the grid lines */}
      <HeroStarfield />

      {/* 3. Precision Architectural Micro-Grid with Refined Whisper Crosshairs */}
      <HeroArchitecturalGrid />

      {/* 4. Bilateral side darkening vignette: gently fades left & right flanks into deep cosmic dark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, var(--hero-bg) 0%, color-mix(in srgb, var(--hero-bg) 95%, transparent) 8%, color-mix(in srgb, var(--hero-bg) 55%, transparent) 22%, transparent 36%, transparent 64%, color-mix(in srgb, var(--hero-bg) 55%, transparent) 78%, color-mix(in srgb, var(--hero-bg) 95%, transparent) 92%, var(--hero-bg) 100%)",
        }}
        aria-hidden
      />

      {/* 6. Soft bottom vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, var(--hero-vignette-start) 80%, var(--hero-vignette-end) 100%)",
        }}
        aria-hidden
      />

      {/* Centerpiece Hero Title, Statements, Headline, CTA & Socials */}
      <div className="relative z-10 flex w-full flex-col items-center justify-start text-center">
        <div className="relative flex w-full flex-col items-center">

          {/* Clean Neon Rectangular Line Frame (Pushed to the top with illuminated backdrop) */}
          <div
            className="relative inline-flex flex-col items-center select-none"
            style={{
              filter: "drop-shadow(0 0 18px var(--hero-frame-glow))",
            }}
          >
            {/* The single continuous seamless border box with bottom gap */}
            <div
              className="pointer-events-none absolute inset-0 border-2 border-(--hero-frame-stroke) rounded-2xl md:rounded-3xl"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 100%, calc(50% + clamp(140px, 22vw, 195px)) 100%, calc(50% + clamp(140px, 22vw, 195px)) calc(100% - 10px), calc(50% - clamp(140px, 22vw, 195px)) calc(100% - 10px), calc(50% - clamp(140px, 22vw, 195px)) 100%, 0% 100%)",
              }}
              aria-hidden
            />

            {/* Inside Content: Logo with padding */}
            <div className="relative px-8 pt-5 sm:px-12 sm:pt-7 md:px-16 md:pt-8 pb-5 sm:pb-6 md:pb-7 bg-transparent">
              <Image
                src="/logo-paper.png"
                alt="XenZolve"
                width={640}
                height={172}
                priority
                loading="eager"
                className="relative h-11 sm:h-14 md:h-18 lg:h-22 w-auto select-none"
              />
            </div>

            {/* Tagline centered in the bottom border gap with vivid neon theme accent */}
            <div className="absolute -bottom-2.5 sm:-bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
              <span className="px-3 sm:px-4 font-sans text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-(--accent-text) whitespace-nowrap bg-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] drop-shadow-[0_0_12px_var(--hero-tagline-glow)]">
                YOUR VISION <span className="mx-2 text-(--hero-dot) font-extrabold">•</span> OUR INNOVATION
              </span>
            </div>
          </div>

          {/* Core Service Pillars directly placed on the canvas (no separate bg wrappers, no burnt orange) */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-x-3.5 sm:gap-x-7 md:gap-x-8 gap-y-1.5 sm:gap-y-2 max-w-3xl px-2 sm:px-4 select-none z-20">
            {/* 1. Full-Stack Web Apps */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 sm:gap-2 py-0.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span
                className="size-1.5 sm:size-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                style={{
                  backgroundColor: "#A855F7",
                  boxShadow: "0 0 8px rgba(168, 85, 247, 0.9)",
                }}
                aria-hidden
              />
              <span
                className="font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em] uppercase whitespace-nowrap transition-colors group-hover:text-white"
                style={{
                  color: "#C4B5FD",
                  textShadow: "0 0 16px rgba(168, 85, 247, 0.35)",
                }}
              >
                Full-Stack Web Apps
              </span>
            </Link>

            {/* 2. AI Agents & Chatbots */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 sm:gap-2 py-0.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span
                className="size-1.5 sm:size-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                style={{
                  backgroundColor: "#06B6D4",
                  boxShadow: "0 0 8px rgba(6, 182, 212, 0.9)",
                }}
                aria-hidden
              />
              <span
                className="font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em] uppercase whitespace-nowrap transition-colors group-hover:text-white"
                style={{
                  color: "#67E8F9",
                  textShadow: "0 0 16px rgba(6, 182, 212, 0.35)",
                }}
              >
                AI Agents & Chatbots
              </span>
            </Link>

            {/* 3. Workflow Automation */}
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 sm:gap-2 py-0.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span
                className="size-1.5 sm:size-2 rounded-full shrink-0 group-hover:scale-125 transition-transform"
                style={{
                  backgroundColor: "#EC4899",
                  boxShadow: "0 0 8px rgba(236, 72, 153, 0.9)",
                }}
                aria-hidden
              />
              <span
                className="font-sans text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em] uppercase whitespace-nowrap transition-colors group-hover:text-white"
                style={{
                  color: "#F9A8D4",
                  textShadow: "0 0 16px rgba(236, 72, 153, 0.35)",
                }}
              >
                Workflow Automation
              </span>
            </Link>
          </div>

          {/* Dual-Tone Headline */}
          <div className="mt-4 sm:mt-6 w-full">
            <HeroSuspendedRail />
          </div>

          {/* Call-to-Action Pill Buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 px-4 z-20">
            {/* Primary Crisp White CTA with luminous drop shadow */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-9 sm:py-3.5 rounded-full bg-white text-neutral-950 font-sans font-bold text-sm sm:text-[15px] tracking-wide shadow-[0_4px_24px_rgba(255,255,255,0.35)] hover:bg-neutral-100 hover:shadow-[0_4px_32px_rgba(255,255,255,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none cursor-pointer"
            >
              <span>Start Your Project</span>
              <svg className="size-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Secondary Bordered Glass CTA */}
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center px-8 py-3 sm:px-9 sm:py-3.5 rounded-full border border-(--hero-frame-stroke) bg-(--hero-frame-stroke)/10 hover:bg-(--hero-frame-stroke)/20 text-white font-sans font-semibold text-sm sm:text-[15px] tracking-wide backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none cursor-pointer"
            >
              Explore Services
            </Link>
          </div>

          {/* Social Links Connection using unified monochrome glass buttons */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2.5 select-none z-20">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/50">
              Connect with us
            </span>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Facebook */}
              <a
                href="https://facebook.com/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group relative size-10 sm:size-10.5 rounded-full bg-white/[0.04] border border-[#c4b5fd]/25 backdrop-blur-md flex items-center justify-center text-[#e2e8f0]/85 transition-all duration-200 hover:border-[#c084fc]/65 hover:bg-[#a855f7]/18 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              >
                <svg className="size-4.5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group relative size-10 sm:size-10.5 rounded-full bg-white/[0.04] border border-[#c4b5fd]/25 backdrop-blur-md flex items-center justify-center text-[#e2e8f0]/85 transition-all duration-200 hover:border-[#c084fc]/65 hover:bg-[#a855f7]/18 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              >
                <svg className="size-4.5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 0C5.397 0 0 5.391 0 12.019c0 2.115.55 4.18 1.597 5.99L.07 24l6.177-1.504A11.968 11.968 0 0012.031 24C18.665 24 24 18.609 24 12.019 24 5.391 18.665 0 12.031 0zm0 21.99a9.94 9.94 0 01-5.076-1.385l-.364-.216-3.77.918.995-3.67-.238-.378a9.972 9.972 0 01-1.536-5.25c0-5.508 4.486-9.99 10.009-9.99 5.514 0 10.001 4.482 10.001 9.99 0 5.509-4.487 9.99-10.022 9.99zm5.485-7.487c-.301-.15-1.782-.88-2.058-.98-.276-.1-.477-.15-.677.15-.201.3-.778.98-.954 1.18-.176.2-.352.225-.653.075-.301-.15-1.272-.469-2.423-1.495-.896-.799-1.501-1.786-1.677-2.087-.176-.3-.019-.462.132-.612.136-.135.301-.35.452-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.677-1.632-.928-2.235-.245-.588-.494-.508-.677-.517-.176-.009-.377-.01-.578-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512 0 1.482 1.079 2.914 1.23 3.115.15.2 2.124 3.243 5.147 4.549.719.311 1.28.497 1.718.636.722.23 1.379.197 1.898.12.578-.086 1.782-.728 2.033-1.431.251-.703.251-1.306.176-1.431-.075-.125-.276-.2-.577-.35z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group relative size-10 sm:size-10.5 rounded-full bg-white/[0.04] border border-[#c4b5fd]/25 backdrop-blur-md flex items-center justify-center text-[#e2e8f0]/85 transition-all duration-200 hover:border-[#c084fc]/65 hover:bg-[#a855f7]/18 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              >
                <svg className="size-4.5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group relative size-10 sm:size-10.5 rounded-full bg-white/[0.04] border border-[#c4b5fd]/25 backdrop-blur-md flex items-center justify-center text-[#e2e8f0]/85 transition-all duration-200 hover:border-[#c084fc]/65 hover:bg-[#a855f7]/18 hover:text-white hover:shadow-[0_0_18px_rgba(168,85,247,0.35)] hover:-translate-y-0.5 active:scale-95 cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
              >
                <svg className="size-4.5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* 2-Row Live Projects Showcase: Row 1 in Hero Viewport, Row 2 straddles the fold */}
          <div className="w-full mt-10 sm:mt-14 md:mt-16 pb-16 sm:pb-24 z-20">
            <HeroProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
