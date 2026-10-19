import type { Metadata } from "next";
import { Suspense } from "react";
import { ServicesClient } from "./ServicesClient";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end digital solutions tailored to accelerate your business growth. Full stack web development, mobile apps, business systems, AI agents, bots, and UI/UX design.",
};

export default function ServicesPage() {
  return (
    <>
      <Suspense fallback={null}>
        <ServicesClient />
      </Suspense>

      <Section top="flow" className="!pt-0">
        <SectionHead
          index="—"
          label="How we work"
          title={
            <>
              Four steps, <em className="acc">no surprises.</em>
            </>
          }
          lead="A proven 4-step methodology that delivers results."
        />
        <ProcessSteps />
      </Section>

      <Section top="flow" className="!pt-0">
        <Faq index={null} hideLead={true} />
      </Section>

      <CtaBand />
    </>
  );
}
