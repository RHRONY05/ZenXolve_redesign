import { HeroBolt } from "@/components/home/HeroBolt";

/** Shorter ink band for the About page with the same 3D bolt as the home hero. */
export function PhotoBand() {
  return (
    <div className="hero-photo relative h-[320px] md:h-[480px]">
      <div className="absolute inset-2 overflow-hidden rounded-lg bg-panel-ink md:inset-(--frame-inset) md:rounded-xl">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(520px 420px at 72% 50%, color-mix(in srgb, var(--panel-cobalt) 50%, transparent), transparent 72%)",
          }}
          aria-hidden
        />
        <HeroBolt rectClass="inset-y-0 right-0 w-full md:w-[55%]" />
      </div>

      <div className="absolute bottom-6 left-6 z-[2] text-on-photo md:bottom-10 md:left-(--gutter-d)">
        <span className="mono text-on-photo-2">Dhaka · 23.81°N 90.41°E</span>
        <b className="mt-1 block font-serif text-[26px] leading-[30px] font-normal md:text-[40px] md:leading-[44px]">
          Where we build.
        </b>
      </div>
    </div>
  );
}
