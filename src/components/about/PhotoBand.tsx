import Image from "next/image";

/**
 * Shorter photo band for About page reusing the storm over Dhaka photo.
 */
export function PhotoBand() {
  return (
    <div className="hero-photo relative h-[320px] md:h-[560px]">
      <div className="panel absolute inset-2 overflow-hidden rounded-lg bg-photo-bg md:inset-(--frame-inset) md:rounded-xl">
        <Image
          src="/hero-storm-dhaka.jpg"
          alt="Dhaka storm"
          fill
          sizes="100vw"
          className="object-cover object-[50%_85%]"
        />
        <div className="absolute inset-0 [background:var(--photo-scrim)]" aria-hidden />
      </div>

      <div className="clock mono absolute right-(--gutter-d) bottom-10 z-[2] hidden text-right text-on-photo-2 font-mono text-xs uppercase tracking-(--tracking-mono) md:block">
        Dhaka · 23.81°N 90.41°E
        <b className="block font-serif font-normal italic text-[26px] leading-[30px] text-on-photo mt-1 normal-case tracking-normal">
          Where we build.
        </b>
      </div>

      <div className="credit mono absolute right-5 bottom-[14px] z-[2] font-mono text-[10px] leading-4 tracking-mono text-on-photo-2 uppercase opacity-70 md:right-[30px] md:bottom-[22px]">
        <a
          href="https://commons.wikimedia.org/wiki/File:Stormy_night_in_dhaka_16.jpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Photo: Wasiul Bahar · CC BY-SA 4.0
        </a>
      </div>
    </div>
  );
}
