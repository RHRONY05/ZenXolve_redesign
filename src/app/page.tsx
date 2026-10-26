import ContactWithGlobe from "@/components/home/ContactWithGlobe";
import { CtaBand } from "@/components/home/CtaBand";
import { Faq } from "@/components/home/Faq";
import { HeroPhoto } from "@/components/home/HeroPhoto";
import { IndustryList } from "@/components/home/IndustryList";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Quotes } from "@/components/home/Quotes";
import { Reasons } from "@/components/home/Reasons";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StudioComparator } from "@/components/home/StudioComparator";
import { NebulaShader } from "@/components/ui/NebulaShader";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <HeroPhoto />

      {/* SECTIONS 01, 02 & 03: Unified Subtle Cosmic Nebula Canvas */}
      <div className="relative">
        {/* Procedural WebGL GLSL Cosmic Nebula Shader (Muted & Synchronized with #060713) */}
        <NebulaShader opacity={0.38} />

        {/* Soft edge-only fades so it blends seamlessly into hero above and section 04 below */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--bg)] to-transparent z-0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent z-0" />

        {/* SECTION 01: What We Build (The 6 Services) */}
        <Section top="first" id="services" className="relative z-10 pt-8 sm:pt-12 md:pt-14 !pb-10 md:!pb-12">
          <SectionHead
            index="01"
            label="Capabilities & Services"
            layout="stacked"
            leadOnMobile
            title={
              <>
                What we build. <em className="acc">Engineered to scale.</em> <span className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-slate-300 tracking-normal align-middle">— From high-conversion web platforms and native mobile apps to autonomous AI agents and custom business systems — everything your business runs on.</span>
              </>
            }
          />
          <ServicesGrid />
        </Section>

        {/* SECTION 02: The Single-Studio Advantage (The Comparison) */}
        <Section top="flow" id="advantage" className="relative z-10 pt-4 md:pt-6 !pb-8 md:!pb-12">
          <SectionHead
            index="02"
            label="The Single-Studio Advantage"
            layout="stacked"
            leadOnMobile
            title={
              <>
                Stop managing 3 agencies. <em className="acc">Run on one studio.</em> <span className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-slate-300 tracking-normal align-middle">— Why hire three separate agencies when you can run on one synchronized studio? We design your interface, engineer your codebase, and automate your operations with zero handoff friction.</span>
              </>
            }
          />
          <StudioComparator />
        </Section>

        {/* SECTION 03: How We Work (4 Steps) */}
        <Section top="flow" id="process" className="relative z-10 !pt-2 md:!pt-4 !pb-6 md:!pb-10">
          <SectionHead
            index="03"
            label="How we work"
            layout="stacked"
            leadOnMobile
            title={
              <>
                Four steps, <em className="acc">no surprises.</em> <span className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-slate-300 tracking-normal align-middle">— A proven 4-step methodology that delivers results. You see progress every week and know exactly what's next.</span>
              </>
            }
          />
          <ProcessSteps />
        </Section>
      </div>

      <Section top="flow" id="why-us" className="!pt-2 md:!pt-4">
        <SectionHead
          index="04"
          label="Why Xenzolve"
          layout="stacked"
          leadOnMobile
          title={
            <>
              Why clients <em className="acc">stay.</em> <span className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-slate-300 tracking-normal align-middle">— We aim to be the last agency you'll need to hire: one team that builds it, supports it and grows it with you.</span>
            </>
          }
        />
        <Reasons />
      </Section>

      <Section top="flow" id="reviews" className="!pt-4 md:!pt-6">
        <SectionHead
          index="05"
          label="Client words"
          layout="stacked"
          leadOnMobile
          title={
            <>
              In their <em className="acc">words.</em> <span className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-slate-300 tracking-normal align-middle">— Direct feedback from founders and engineering leaders we've built, deployed, and scaled with.</span>
            </>
          }
        />
        <Quotes items={testimonials} />
      </Section>

      <Section top="flow" id="industries" className="!pt-4 md:!pt-6">
        <SectionHead
          index="06"
          label="Industries We Serve"
          layout="stacked"
          className="!mb-6 sm:!mb-8 md:!mb-10"
          title={
            <>
              Domains we empower. <em className="acc">Engineered for depth.</em>
            </>
          }
        />
        <IndustryList />
      </Section>

      <Section top="flow" id="faq" className="!pt-6 md:!pt-10">
        <div className="max-w-4xl mx-auto">
          <SectionHead
            index="07"
            label="Frequently Asked Questions"
            layout="stacked"
            leadOnMobile
            title={
              <>
                Got questions? <em className="acc">Clear answers.</em> <span className="font-sans font-normal text-base sm:text-lg md:text-[20px] text-slate-300 tracking-normal align-middle">— Everything you need to know about our sprints, pricing, communication, and IP ownership.</span>
              </>
            }
          />
          <Faq hideHeader={true} />
        </div>
      </Section>

      {/* SECTION 08: Direct Contact & Project Inquiry with Interactive Globe */}
      <Section top="flow" id="contact" className="!pt-6 sm:!pt-10 md:!pt-12 !pb-12 md:!pb-16">
        <ContactWithGlobe />
      </Section>

      <CtaBand />
    </>
  );
}
