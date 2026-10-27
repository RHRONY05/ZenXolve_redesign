import dynamic from "next/dynamic";
import { Faq } from "@/components/home/Faq";
import { HeroPhoto } from "@/components/home/HeroPhoto";
import { IndustryList } from "@/components/home/IndustryList";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Quotes } from "@/components/home/Quotes";
import { Reasons } from "@/components/home/Reasons";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { StudioComparator } from "@/components/home/StudioComparator";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { testimonials } from "@/content/testimonials";

const ContactWithGlobe = dynamic(
  () => import("@/components/home/ContactWithGlobe")
);

const NebulaShader = dynamic(
  () => import("@/components/ui/NebulaShader").then((m) => m.NebulaShader)
);

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

        {/* SECTION 01: Our Core Services */}
        <Section top="first" id="services" className="relative z-10 pt-6 sm:pt-12 md:pt-14 !pb-14 md:!pb-12">
          <SectionHead
            layout="centered"
            leadOnMobile
            title={
              <>
                Our Core <em className="acc">Services</em>
              </>
            }
            lead="From intuitive interfaces to intelligent systems — built to scale."
          />
          <ServicesGrid />
        </Section>

        {/* SECTION 02: The Single-Studio Advantage (The Comparison) */}
        <Section top="flow" id="advantage" className="relative z-10 pt-4 md:pt-6 !pb-8 md:!pb-12">
          <SectionHead
            layout="centered"
            leadOnMobile
            title={
              <>
                The Single-Studio <em className="acc">Advantage</em>
              </>
            }
            lead="Design, code, and automated operations — with zero handoff friction."
          />
          <StudioComparator />
        </Section>

        {/* SECTION 03: How We Work (4 Steps) */}
        <Section top="flow" id="process" className="relative z-10 !pt-2 md:!pt-4 !pb-6 md:!pb-10">
          <SectionHead
            layout="centered"
            leadOnMobile
            title={
              <>
                Four Steps, <em className="acc">No Surprises</em>
              </>
            }
            lead="A proven four-step methodology — transparent, structured, and predictable."
          />
          <ProcessSteps />
        </Section>
      </div>

      <Section top="flow" id="why-us" className="!pt-2 md:!pt-4">
        <SectionHead
          layout="centered"
          leadOnMobile
          title={
            <>
              Why Clients <em className="acc">Stay</em>
            </>
          }
          lead="One synchronized team that builds it, supports it, and scales it with you."
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
    </>
  );
}
