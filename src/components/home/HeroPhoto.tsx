import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { HeroSuspendedRail } from "@/components/home/HeroSuspendedRail";
import { HeroProjectsCarousel } from "@/components/home/HeroProjectsCarousel";
import { HeroStarfield } from "@/components/home/HeroStarfield";

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
      className="hero-photo relative min-h-[100svh] w-full overflow-x-clip overflow-y-visible bg-(--hero-bg) flex flex-col justify-start items-center px-4 sm:px-6 pt-6 sm:pt-9 md:pt-11 pb-0"
    >
      {/* 1. Atmospheric radial glow highlighting the elevated XenZolve title */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 18%, var(--hero-glow-1) 0%, var(--hero-glow-2) 42%, var(--hero-glow-3) 68%, transparent 85%), radial-gradient(ellipse 95% 75% at 50% 24%, var(--hero-glow-4) 0%, var(--hero-glow-5) 50%, transparent 88%), radial-gradient(540px 360px at 50% 16%, var(--hero-glow-6), transparent 72%)",
        }}
        aria-hidden
      />

      {/* 3. Micro-starfield texture sitting directly underneath the CSS grid lines */}
      <HeroStarfield />

      {/* 4. High-tech orthogonal grid with illuminated stroke and soft perimeter falloff */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hero-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--hero-grid) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(ellipse 92% 82% at 50% 28%, black 35%, rgba(0, 0, 0, 0.75) 70%, transparent 98%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 92% 82% at 50% 28%, black 35%, rgba(0, 0, 0, 0.75) 70%, transparent 98%)",
        }}
        aria-hidden
      />

      {/* 5. Center grid glow enhancement for high-tech HUD feel directly under the elevated title */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hero-grid-highlight) 1px, transparent 1px), linear-gradient(to bottom, var(--hero-grid-highlight) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(circle 440px at 50% 18%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle 440px at 50% 18%, black 20%, transparent 80%)",
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
              <span className="px-3 sm:px-4 font-sans text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-(--accent-text) whitespace-nowrap bg-transparent drop-shadow-[0_0_12px_var(--hero-frame-glow)]">
                YOUR VISION <span className="mx-2 text-(--hero-dot) font-extrabold">•</span> OUR INNOVATION
              </span>
            </div>
          </div>

          {/* Line 1 below the box: Next-Gen Problems, Next-Level Solutions._ */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center font-sans text-xs sm:text-sm md:text-[15px] font-semibold tracking-[0.16em] uppercase text-neutral-300 max-w-2xl px-4">
            <span>Next-Gen Problems, Next-Level Solutions.</span>
            <span className="ml-1 text-(--hero-cursor) font-bold text-base sm:text-lg animate-pulse">_</span>
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

          {/* Social Links Connection using authentic full-bleed PNG badges */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2.5 select-none z-20">
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.22em] uppercase text-white/50">
              Connect with us
            </span>
            <div className="flex items-center gap-3.5 sm:gap-4.5">
              {/* Facebook */}
              <a
                href="https://facebook.com/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group relative size-10 sm:size-11 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_22px_rgba(24,119,242,0.6)] cursor-pointer"
              >
                <Image
                  src="/social_media_icons/facebook.png"
                  alt="Facebook"
                  width={48}
                  height={48}
                  className="size-full object-cover rounded-full select-none"
                />
              </a>

              {/* WhatsApp */}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group relative size-10 sm:size-11 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_22px_rgba(37,211,102,0.6)] cursor-pointer"
              >
                <Image
                  src="/social_media_icons/whatsapp.png"
                  alt="WhatsApp"
                  width={48}
                  height={48}
                  className="size-full object-cover rounded-full select-none"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group relative size-10 sm:size-11 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_22px_rgba(10,102,194,0.6)] cursor-pointer"
              >
                <Image
                  src="/social_media_icons/linkedin.png"
                  alt="LinkedIn"
                  width={48}
                  height={48}
                  className="size-full object-cover rounded-full select-none"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group relative size-10 sm:size-11 rounded-full overflow-hidden flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_22px_rgba(228,64,95,0.6)] cursor-pointer"
              >
                <Image
                  src="/social_media_icons/instagram.png"
                  alt="Instagram"
                  width={48}
                  height={48}
                  className="size-full object-cover rounded-full select-none"
                />
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
