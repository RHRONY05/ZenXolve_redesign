import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { HeroSuspendedRail } from "@/components/home/HeroSuspendedRail";
import { HeroProjectsCarousel } from "@/components/home/HeroProjectsCarousel";

/**
 * Home hero: full-screen edge-to-edge canvas featuring the signature deep cosmic dark navy base,
 * rich atmospheric radial nebula glow, high-tech orthogonal grid, illuminated XenZolve title framed
 * in a neon rectangular line with an open gap for "Your Vision · Our Innovation", followed by the
 * supporting statements, white CTA button, prominent brand social icons, and a 2-row live project
 * showcase where Row 1 sits in the hero viewport and Row 2 crosses the fold into the next section.
 */
export function HeroPhoto() {
  return (
    <section
      id="hero"
      className="hero-photo relative min-h-[100svh] w-full overflow-x-clip overflow-y-visible bg-(--hero-bg) flex flex-col justify-start items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-0"
    >
      {/* Primary rich atmospheric radial nebula highlighting the center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 36%, var(--hero-glow-1) 0%, var(--hero-glow-2) 40%, var(--hero-glow-3) 65%, transparent 80%), radial-gradient(ellipse 100% 85% at 50% 38%, var(--hero-glow-4) 0%, var(--hero-glow-5) 50%, transparent 88%), radial-gradient(560px 400px at 50% 33%, var(--hero-glow-6), transparent 72%)",
        }}
        aria-hidden
      />

      {/* High-tech orthogonal grid with illuminated stroke and soft perimeter falloff */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hero-grid) 1px, transparent 1px), linear-gradient(to bottom, var(--hero-grid) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(ellipse 92% 82% at 50% 38%, black 35%, rgba(0, 0, 0, 0.75) 70%, transparent 98%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 92% 82% at 50% 38%, black 35%, rgba(0, 0, 0, 0.75) 70%, transparent 98%)",
        }}
        aria-hidden
      />

      {/* Center grid glow enhancement for high-tech studio feel */}
      <div
        className="pointer-events-none absolute inset-0 mix-blend-screen opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--hero-grid-highlight) 1px, transparent 1px), linear-gradient(to bottom, var(--hero-grid-highlight) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          backgroundPosition: "center center",
          maskImage:
            "radial-gradient(circle 420px at 50% 36%, black 15%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle 420px at 50% 36%, black 15%, transparent 80%)",
        }}
        aria-hidden
      />

      {/* Soft bottom vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, var(--hero-vignette-start) 80%, var(--hero-vignette-end) 100%)",
        }}
        aria-hidden
      />

      {/* Centerpiece Hero Title, Statements, Flanking Lines, CTA & Socials */}
      <div className="relative z-10 flex w-full flex-col items-center justify-start text-center">
        <div className="relative flex w-full flex-col items-center">

          {/* Clean Neon Rectangular Line Frame (Seamless single-path border with bottom gap) */}
          <div
            className="relative inline-flex flex-col items-center select-none"
            style={{
              filter: "drop-shadow(0 0 15px var(--hero-frame-glow))",
            }}
          >
            {/* The single continuous seamless border box with bottom gap */}
            <div
              className="pointer-events-none absolute inset-0 border-2 border-(--hero-frame-stroke) rounded-2xl md:rounded-3xl"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 100%, calc(50% + clamp(135px, 22vw, 185px)) 100%, calc(50% + clamp(135px, 22vw, 185px)) calc(100% - 10px), calc(50% - clamp(135px, 22vw, 185px)) calc(100% - 10px), calc(50% - clamp(135px, 22vw, 185px)) 100%, 0% 100%)",
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
                className="relative h-12 sm:h-16 md:h-20 lg:h-24 w-auto select-none"
              />
            </div>

            {/* Tagline centered precisely in the bottom border gap */}
            <div className="absolute -bottom-2.5 sm:-bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none">
              <span className="px-3 sm:px-4 font-mono text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap bg-transparent">
                Your Vision <span className="mx-2 text-(--hero-dot) font-bold">·</span> Our Innovation
              </span>
            </div>
          </div>

          {/* Line 1 below the box: Next-Gen Problems, Next-Level Solutions._ */}
          <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.16em] uppercase text-white max-w-2xl px-4">
            <span>Next-Gen Problems, Next-Level Solutions.</span>
            <span className="ml-1 text-(--hero-cursor) font-bold text-base sm:text-lg animate-pulse">_</span>
          </div>

          {/* Headline flanked by straight horizontal lines with margins */}
          <div className="mt-4 sm:mt-5 w-full">
            <HeroSuspendedRail />
          </div>

          {/* Call-to-Action Pill Buttons (Main Button is 100% White with dark bold text) */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 px-4 z-20">
            {/* Primary Crisp White CTA */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 sm:px-9 sm:py-3.5 rounded-full bg-white text-neutral-950 font-sans font-bold text-sm sm:text-[15px] tracking-wide shadow-[0_4px_24px_rgba(255,255,255,0.25)] hover:bg-neutral-100 hover:shadow-[0_4px_32px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none cursor-pointer"
            >
              <span>Start Your Project</span>
              <svg className="size-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>

            {/* Secondary Bordered CTA */}
            <Link
              href="/services"
              className="group relative inline-flex items-center justify-center px-8 py-3 sm:px-9 sm:py-3.5 rounded-full border border-(--hero-frame-stroke) bg-(--hero-frame-stroke)/10 hover:bg-(--hero-frame-stroke)/20 text-white font-sans font-semibold text-sm sm:text-[15px] tracking-wide backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 select-none cursor-pointer"
            >
              Explore Services
            </Link>
          </div>

          {/* Social Links Connection (Prominent size & authentic brand colors by default) */}
          <div className="mt-5 sm:mt-6 flex flex-col items-center gap-2.5 select-none z-20">
            <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50">
              Connect with us
            </span>
            <div className="flex items-center gap-3.5 sm:gap-4.5">
              {/* Facebook */}
              <a
                href="https://facebook.com/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group relative size-11 sm:size-12 rounded-full bg-white/[0.08] border border-white/20 hover:bg-white/[0.18] hover:border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(24,119,242,0.5)]"
              >
                <svg
                  className="size-6 sm:size-7 transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  style={{ fill: "#1877F2" }}
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group relative size-11 sm:size-12 rounded-full bg-white/[0.08] border border-white/20 hover:bg-white/[0.18] hover:border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(37,211,102,0.5)]"
              >
                <svg
                  className="size-6 sm:size-7 transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  style={{ fill: "#25D366" }}
                >
                  <path d="M12.031 2C6.516 2 2.016 6.5 2.016 12.016c0 1.953.563 3.844 1.625 5.469L2 22l4.672-1.609c1.547.969 3.344 1.484 5.359 1.484 5.516 0 10.016-4.5 10.016-10.016C22.047 6.5 17.547 2 12.031 2zm5.844 14.281c-.25.703-1.453 1.328-2.016 1.406-.547.078-1.25.109-3.703-.906-2.906-1.203-4.781-4.141-4.922-4.328-.141-.188-1.172-1.563-1.172-2.984s.734-2.125 1-2.406c.266-.281.578-.359.781-.359.188 0 .406 0 .578.016.203.016.469-.078.734.563.266.656.906 2.219.984 2.375.078.156.125.344.031.547-.078.203-.125.328-.25.484-.125.156-.266.344-.375.469-.125.125-.266.266-.109.531.156.266.688 1.141 1.484 1.844 1.016.906 1.891 1.188 2.156 1.328.266.141.422.125.578-.063.156-.188.688-.813.875-1.094.188-.281.375-.234.625-.141.25.094 1.594.75 1.859.891.266.141.453.219.516.328.078.125.078.703-.172 1.406z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/company/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group relative size-11 sm:size-12 rounded-full bg-white/[0.08] border border-white/20 hover:bg-white/[0.18] hover:border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(10,102,194,0.5)]"
              >
                <svg
                  className="size-6 sm:size-7 transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  style={{ fill: "#0A66C2" }}
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/xenzolve"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group relative size-11 sm:size-12 rounded-full bg-white/[0.08] border border-white/20 hover:bg-white/[0.18] hover:border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-[0_4px_16px_rgba(0,0,0,0.35)] hover:shadow-[0_0_24px_rgba(228,64,95,0.5)]"
              >
                <svg
                  className="size-6 sm:size-7 transition-transform duration-200 group-hover:scale-110"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <radialGradient id="hero-ig-gradient" cx="0.2" cy="1" r="1">
                      <stop offset="0%" stopColor="#ffd521" />
                      <stop offset="35%" stopColor="#f50000" />
                      <stop offset="70%" stopColor="#b900b4" />
                      <stop offset="100%" stopColor="#c13584" />
                    </radialGradient>
                  </defs>
                  <path
                    fill="url(#hero-ig-gradient)"
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* 2-Row Live Projects Showcase: Row 1 in Hero Viewport, Row 2 straddles the fold */}
          <div className="w-full mt-12 sm:mt-16 md:mt-20 pb-16 sm:pb-24 z-20">
            <HeroProjectsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
