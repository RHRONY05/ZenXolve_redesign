import Image from "next/image";
import { HeroSuspendedRail } from "@/components/home/HeroSuspendedRail";

/**
 * Home hero: full-screen edge-to-edge canvas featuring the signature deep cosmic dark navy base,
 * rich atmospheric radial nebula glow, high-tech orthogonal grid, and the illuminated
 * XenZolve center title framed in a clean neon rectangular line with an open gap for
 * "Your Vision · Our Innovation", followed by the supporting statements below.
 *
 * All shape geometries, dimensions, falloff stops, and layer blends are 100% preserved,
 * while color variables dynamically adapt with the active color palette.
 */
export function HeroPhoto() {
  return (
    <section
      id="hero"
      className="hero-photo relative min-h-[100svh] w-full overflow-x-clip overflow-y-visible bg-(--hero-bg) flex flex-col justify-end items-center pt-28 sm:pt-32 pb-0"
    >
      {/* Primary rich atmospheric radial nebula highlighting the center (exact shape & layer configuration) */}
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

      {/* Centerpiece Hero Title, Statements & Suspended Fiber-Optic Rail */}
      <div className="relative z-10 flex w-full flex-col items-center justify-end text-center translate-y-2 sm:translate-y-3 lg:translate-y-5">
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
            <div className="relative px-8 pt-6 sm:px-12 sm:pt-8 md:px-16 md:pt-10 pb-6 sm:pb-7 md:pb-8 bg-transparent">
              <Image
                src="/logo-paper.png"
                alt="XenZolve"
                width={640}
                height={172}
                priority
                loading="eager"
                className="relative h-14 sm:h-18 md:h-22 lg:h-26 xl:h-28 w-auto select-none"
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
          <div className="mt-6 md:mt-7 flex flex-wrap items-center justify-center font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.16em] uppercase text-white max-w-2xl px-4">
            <span>Next-Gen Problems, Next-Level Solutions.</span>
            <span className="ml-1 text-(--hero-cursor) font-bold text-base sm:text-lg animate-pulse">_</span>
          </div>

          {/* Unified Headline + Extended Horizontal Line + Connected Suspended Rail */}
          <div className="mt-4 md:mt-5 w-full">
            <HeroSuspendedRail />
          </div>
        </div>
      </div>
    </section>
  );
}
