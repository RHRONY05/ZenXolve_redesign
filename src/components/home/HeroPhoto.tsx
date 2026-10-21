import { Button } from "@/components/ui/Button";
import { DhakaClock } from "./DhakaClock";
import { HeroBolt } from "./HeroBolt";

/**
 * Home hero (kept the name HeroPhoto for the component map). Ink panel with a cobalt glow and the 3D bolt
 * (see HeroBolt). Text colours use the on-photo tokens, which are light-on-dark in both themes.
 */
export function HeroPhoto() {
  return (
    <section
      id="hero"
      className="hero-photo relative h-[760px] md:h-[min(100svh,900px)] md:min-h-[680px]"
    >
      <div className="absolute inset-2 overflow-hidden rounded-lg bg-panel-ink md:inset-(--frame-inset) md:rounded-xl">
        {/* cobalt glow behind the object, a softer lavender one off to the side */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(520px 480px at 50% 30%, color-mix(in srgb, var(--panel-cobalt) 55%, transparent), transparent 72%), radial-gradient(420px 360px at 12% 8%, color-mix(in srgb, var(--flash) 14%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "radial-gradient(760px 620px at 69% 44%, color-mix(in srgb, var(--panel-cobalt) 50%, transparent), transparent 70%)",
          }}
          aria-hidden
        />
        <div className="absolute inset-0 [background:linear-gradient(180deg,transparent_55%,rgba(0,0,0,0.35))]" aria-hidden />
        <HeroBolt />
      </div>

      <DhakaClock />

      <p className="pointer-events-none absolute top-[104px] left-1/2 z-[2] -translate-x-1/2 font-mono text-[10px] leading-4 tracking-mono text-on-photo-2 uppercase opacity-70 motion-reduce:hidden md:top-[96px]">
        <span className="hidden md:inline">Move your cursor · click to spin</span>
        <span className="md:hidden">Tap to spin</span>
      </p>

      <div className="absolute right-6 bottom-8 left-6 z-[2] grid grid-cols-1 items-end gap-[22px] text-on-photo md:right-(--gutter-d) md:bottom-16 md:left-(--gutter-d) md:grid-cols-[1fr_380px] md:gap-12">
        <div>
          <div className="rise font-mono text-xs leading-4 tracking-mono text-on-photo-2 uppercase">
            Next-gen problems, next-level solutions
          </div>
          <h1 className="mt-3 font-serif text-display-hero-m font-normal tracking-display md:mt-4 md:text-display-hero">
            <span className="rise block" style={{ "--i": 1 } as React.CSSProperties}>
              Software your <br className="hidden md:block" />
              business <span className="text-flash italic">runs on.</span>
            </span>
          </h1>
        </div>
        <div className="rise" style={{ "--i": 3 } as React.CSSProperties}>
          <p className="mb-[18px] text-base leading-[25px] text-on-photo-2 md:mb-[22px] md:text-[17px] md:leading-[27px]">
            We build powerful websites, intelligent AI systems, and custom software that help startups and businesses
            scale faster.
            <span className="hidden md:inline"> From idea to launch — from Dhaka, for anywhere.</span>
          </p>
          <div className="flex flex-col gap-[10px] md:flex-row">
            <Button href="/contact" variant="on-photo" icon="arrow-right" className="w-full md:w-auto">
              Start a project
            </Button>
            <Button href="/work" variant="glass" className="w-full md:w-auto">
              See the work
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
}
