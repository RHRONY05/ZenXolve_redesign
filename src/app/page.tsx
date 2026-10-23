import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { HeroPhoto } from "@/components/home/HeroPhoto";
import { IndustryList } from "@/components/home/IndustryList";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Quotes } from "@/components/home/Quotes";
import { Reasons } from "@/components/home/Reasons";
import { ServiceList } from "@/components/home/Services";
import { NeedPicker } from "@/components/picker/NeedPicker";
import { PlaceholderTag } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <HeroPhoto />

      <Section top="first" className="pt-16 sm:pt-24 md:pt-28">
        <SectionHead
          index="01"
          label="What do you need built?"
          title={
            <>
              Pick one. <em className="acc">See it running.</em>
            </>
          }
          lead="Every business we work with needs something different. Here's what three of our most-asked-for builds look like when they're live."
        />
        <NeedPicker />
      </Section>

      <Section top="full" id="services">
        <SectionHead
          index="02"
          label="Services"
          title={
            <>
              One studio, <em className="acc">end to end.</em>
            </>
          }
          lead={
            <>
              <span className="md:hidden">End-to-end digital solutions tailored to accelerate your business growth.</span>
              <span className="hidden md:inline">
                End-to-end digital solutions tailored to accelerate your business growth: we design it, build it, automate it
                and keep it running.
              </span>
            </>
          }
          leadOnMobile
        />
        <ServiceList />
      </Section>

      <Section>
        <SectionHead
          index="03"
          label="How we work"
          title={
            <>
              Four steps, <em className="acc">no surprises.</em>
            </>
          }
          lead="A proven 4-step methodology that delivers results. You see progress every week and know what's next."
        />
        <ProcessSteps />
      </Section>

      <Section>
        <SectionHead
          index="04"
          label="Why Xenzolve"
          title={
            <>
              Why clients <em className="acc">stay.</em>
            </>
          }
          lead="We aim to be the last agency you'll need to hire: one team that builds it, supports it and grows it with you."
        />
        <Reasons />
      </Section>

      <Section>
        <SectionHead
          index="05"
          label="Client words"
          title={
            <>
              In their <em className="acc">words.</em>
            </>
          }
          lead={
            <PlaceholderTag>
              <span className="hidden md:inline">
                Placeholder · replace with real, named clients (photo + link)
              </span>
              <span className="md:hidden">Placeholder · real, named clients</span>
            </PlaceholderTag>
          }
          leadOnMobile
        />
        <Quotes items={testimonials} />
      </Section>

      <Section>
        <IndustryList />
      </Section>

      <Section>
        <Faq />
      </Section>

      <CtaBand />
    </>
  );
}
