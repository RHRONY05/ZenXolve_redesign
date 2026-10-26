import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";

/** Inverse colours (ink in light, paper in dark), giant faint bolt bottom-right. On every page except Contact. */
export function CtaBand() {
  return (
    <section id="contact" className="inverse-surface relative mx-2 overflow-hidden rounded-lg bg-inverse px-6 pt-16 pb-14 text-on-inverse md:mx-(--frame-inset) md:rounded-xl md:px-(--gutter-d) md:pt-[110px] md:pb-24">
      <svg
        viewBox="0 0 100 60"
        aria-hidden="true"
        className="absolute -right-10 -bottom-20 w-[620px] text-on-inverse opacity-[0.07]"
      >
        <path d="M2 2H98L30 34H70L2 58L40 30H6Z" fill="currentColor" />
      </svg>
      <div className="relative">
        <div className="mono text-on-inverse-2">Start a project</div>
        <h2 className="mt-[18px] mb-8 max-w-[980px] font-serif text-[54px] leading-[52px] font-normal tracking-display md:text-[112px] md:leading-[102px]">
          Ready to transform <i className="text-cta-accent">your business?</i>
        </h2>
        <p className="mb-9 max-w-[520px] text-lg leading-7 text-on-inverse-2">
          Let&apos;s discuss how we can help you achieve your goals with cutting-edge technology solutions.
        </p>
        <div className="flex flex-col flex-wrap gap-3 md:flex-row">
          <Button href="/contact" size="lg" variant="inverse" icon="arrow-right" className="w-full md:w-auto">
            Start a project
          </Button>
          <Button href={site.whatsapp} external size="lg" variant="ghost-inverse" iconLeft="whatsapp" className="w-full md:w-auto">
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
