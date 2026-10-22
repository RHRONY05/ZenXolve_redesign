import Image from "next/image";

/**
 * Home hero: full-screen edge-to-edge canvas featuring the signature deep cosmic dark navy base,
 * rich atmospheric violet/purple radial nebula glow, high-tech orthogonal grid, and the illuminated
 * XenZolve center title framed in a clean neon rectangular line with an open gap for
 * "Your Vision · Our Innovation", followed by the supporting statements below.
 */
export function HeroPhoto() {
  return (
    <section
      id="hero"
      className="hero-photo relative h-screen min-h-[100svh] w-full overflow-hidden bg-[#060713]"
    >
      {/* Primary rich atmospheric violet/purple radial nebula highlighting the center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 36%, rgba(135, 65, 255, 0.52) 0%, rgba(95, 40, 205, 0.35) 40%, rgba(45, 20, 115, 0.16) 65%, transparent 80%), radial-gradient(ellipse 100% 85% at 50% 38%, rgba(75, 35, 175, 0.30) 0%, rgba(35, 18, 95, 0.15) 50%, transparent 88%), radial-gradient(560px 400px at 50% 33%, rgba(160, 95, 255, 0.32), transparent 72%)",
        }}
        aria-hidden
      />

      {/* High-tech orthogonal purple grid with illuminated stroke and soft perimeter falloff */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(165, 145, 255, 0.20) 1px, transparent 1px), linear-gradient(to bottom, rgba(165, 145, 255, 0.20) 1px, transparent 1px)",
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
            "linear-gradient(to right, rgba(195, 175, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(195, 175, 255, 0.15) 1px, transparent 1px)",
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
            "linear-gradient(180deg, transparent 55%, rgba(6, 7, 19, 0.4) 80%, rgba(6, 7, 19, 0.9) 100%)",
        }}
        aria-hidden
      />

      {/* Centerpiece Hero Title & Statements */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <div className="relative flex flex-col items-center max-w-4xl -translate-y-[10vh]">

          {/* Clean Neon Rectangular Line Frame (Pushed up into freed space) */}
          <div
            className="relative inline-flex flex-col items-center transition-transform duration-500 hover:scale-[1.01]"
            style={{
              filter: "drop-shadow(0 0 15px rgba(168, 85, 247, 0.4))",
            }}
          >
            {/* Upper Frame: Top + Left + Right borders with rounded top corners */}
            <div className="relative border-2 border-b-0 border-[#c084fc]/70 rounded-t-2xl md:rounded-t-3xl px-10 pt-8 sm:px-14 sm:pt-10 md:px-20 md:pt-12 pb-6 bg-transparent">
              <Image
                src="/logo-paper.png"
                alt="XenZolve"
                width={640}
                height={172}
                priority
                loading="eager"
                className="relative h-16 sm:h-22 md:h-28 lg:h-32 xl:h-36 w-auto select-none"
              />
            </div>

            {/* Bottom Frame: Left line + Clean Gap for Text + Right line */}
            <div className="w-full flex items-end -mt-0.5">
              <div className="flex-1 h-3.5 border-l-2 border-b-2 border-[#c084fc]/70 rounded-bl-2xl md:rounded-bl-3xl" />
              <span className="px-4 sm:px-6 translate-y-[8px] sm:translate-y-[9px] font-mono text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-white whitespace-nowrap select-none bg-transparent">
                Your Vision <span className="mx-2 text-[#c084fc] font-bold">·</span> Our Innovation
              </span>
              <div className="flex-1 h-3.5 border-r-2 border-b-2 border-[#c084fc]/70 rounded-br-2xl md:rounded-br-3xl" />
            </div>
          </div>

          {/* Line 1 below the box: Next-Gen Problems, Next-Level Solutions._ */}
          <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center font-mono text-xs sm:text-sm md:text-base font-semibold tracking-[0.16em] uppercase text-white max-w-2xl">
            <span>Next-Gen Problems, Next-Level Solutions.</span>
            <span className="ml-1 text-[#e879f9] font-bold text-base sm:text-lg animate-pulse">_</span>
          </div>

          {/* Line 2 below the box: THE LAST AGENCY, YOU'LL NEED TO HIRE! */}
          <h1 className="mt-3 md:mt-4 font-serif font-bold italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-white uppercase text-balance">
            <span className="text-white">The last agency, </span>
            <span className="text-white">
              you&apos;ll need to hire
              <span className="animate-exclamation text-[#f5d0fe] ml-1.5 font-bold not-italic">!</span>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
