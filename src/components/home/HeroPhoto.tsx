import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { DhakaClock } from "./DhakaClock";

/**
 * Photo hero. The photo is "Stormy night in dhaka 16" by Wasiul Bahar, CC BY-SA 4.0 (Wikimedia Commons).
 * The credit line is a licence requirement: do not remove it.
 */
export function HeroPhoto() {
  return (
    <section
      id="hero"
      className="hero-photo relative h-[760px] md:h-[min(100svh,900px)] md:min-h-[680px]"
    >
      <div className="absolute inset-2 overflow-hidden rounded-lg bg-photo-bg md:inset-(--frame-inset) md:rounded-xl">
        <Image
          src="/hero-storm-dhaka.jpg"
          alt="Lightning over Dhaka rooftops at night"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="hero-img object-cover object-[58%_50%] md:object-[50%_40%]"
        />
        <div className="hero-flash absolute inset-0 z-[1]" aria-hidden />
        <div className="absolute inset-0 [background:var(--photo-scrim)]" aria-hidden />
      </div>

      <DhakaClock />

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

      <div className="absolute right-5 bottom-[14px] z-[2] font-mono text-[10px] leading-4 tracking-mono text-on-photo-2 uppercase opacity-70 md:right-[30px] md:bottom-[22px]">
        <a
          href="https://commons.wikimedia.org/wiki/File:Stormy_night_in_dhaka_16.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photo: Wasiul Bahar · CC BY-SA 4.0
        </a>
      </div>
    </section>
  );
}
