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
import { PlaceholderTag } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { testimonials } from "@/content/testimonials";

export default function Home() {
  return (
    <>
      <HeroPhoto />

      {/* SECTIONS 01 & 02: Unified Cosmic Studio Canvas (Capabilities + Single-Studio Advantage) */}
      <div className="relative overflow-hidden">
        {/* Procedural WebGL GLSL Cosmic Nebula Shader (100% Code, Zero Grid) */}
        <NebulaShader opacity={0.65} />

        {/* Soft edge-only fades so it blends smoothly into hero and section 3 */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--bg)] to-transparent z-0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--bg)] to-transparent z-0" />

        {/* SECTION 01: What We Build (The 6 Services) */}
        <Section top="first" id="services" className="relative z-10 pt-8 sm:pt-12 md:pt-14 !pb-10 md:!pb-12">
          <SectionHead
            index="01"
            label="Capabilities & Services"
            title={
              <>
                What we build. <em className="acc">Engineered to scale.</em>
              </>
            }
            lead="From high-conversion web platforms and native mobile apps to autonomous AI agents and custom business systems — everything your business runs on."
          />
          <ServicesGrid />
        </Section>

        {/* SECTION 02: The Single-Studio Advantage (The Comparison) */}
        <Section top="flow" id="advantage" className="relative z-10 pt-4 md:pt-6">
          <SectionHead
            index="02"
            label="The Single-Studio Advantage"
            layout="stacked"
            title={
              <>
                Stop managing 3 agencies. <em className="acc">Run on one studio.</em>
              </>
            }
            lead="Why hire three separate agencies when you can run on one synchronized studio? We design your interface, engineer your codebase, and automate your business operations under one roof with zero handoff friction."
            leadOnMobile
          />
          <StudioComparator />
        </Section>
      </div>

      {/* SECTION 03: How We Work (4 Steps) */}
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
