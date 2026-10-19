import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderTag } from "@/components/ui/Placeholder";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { PhotoBand } from "@/components/about/PhotoBand";
import { TeamGrid } from "@/components/about/TeamGrid";
import { StatRow } from "@/components/work/StatRow";
import { Reasons } from "@/components/home/Reasons";
import { IndustryList } from "@/components/home/IndustryList";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "The last agency you'll need to hire. XenZolve is at the forefront of innovation, delivering cutting-edge solutions that transform how businesses operate. From Dhaka, for anywhere.",
};

const aboutStats = [
  { value: "500+", label: "Projects completed" },
  { value: "100+", label: "Happy clients" },
  { value: "50+", label: "Team members" },
  { value: "10+", label: "Years experience" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={
          <>
            <span className="hidden md:inline">About Xenzolve</span>
            <span className="md:hidden">About</span> · Dhaka, Bangladesh
          </>
        }
        title={
          <>
            The last agency <em className="acc">you&apos;ll need to hire.</em>
          </>
        }
      >
        <div className="row grid grid-cols-1 md:grid-cols-[1fr_420px] gap-5 md:gap-12 md:items-start mt-5 md:mt-12">
          <p className="lead text-lg md:text-2xl leading-[29px] md:leading-9 max-w-[760px] m-0 text-ink-2">
            XenZolve is at the forefront of innovation, delivering cutting-edge solutions that transform how businesses
            operate. Our team of experts combines creativity with technical excellence to create extraordinary experiences.
          </p>
          <p className="lead text-base md:text-lg leading-[26px] md:leading-[29px] m-0 text-ink-2 hidden md:block">
            We&apos;re based in Dhaka and work with clients worldwide. One team designs, builds, automates and supports
            what we ship, so you never have to brief a second agency.
          </p>
        </div>
      </PageHero>

      <PhotoBand />

      <Section top="flow" className="pt-10 md:pt-14">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <span className="mono font-mono text-xs text-ink-3 uppercase tracking-(--tracking-mono) hidden md:inline">
            In numbers
          </span>
          <PlaceholderTag>
            <span className="md:hidden">Placeholder · verify numbers</span>
            <span className="hidden md:inline">Placeholder · numbers from the current site — verify before launch</span>
          </PlaceholderTag>
        </div>
        <StatRow placeholder={true} stats={aboutStats} />
      </Section>

      <Section top="flow" className="!pt-0">
        <SectionHead
          index="01"
          label="The team"
          title={
            <>
              People you&apos;ll <em className="acc">actually talk to.</em>
            </>
          }
          lead={
            <PlaceholderTag>
              <span className="md:hidden">Placeholder · real names and photos</span>
              <span className="hidden md:inline">Placeholder · real names, roles and photos</span>
            </PlaceholderTag>
          }
          leadOnMobile
        />
        <TeamGrid />
      </Section>

      <Section top="flow" className="!pt-0">
        <SectionHead
          index="02"
          label="Why Xenzolve"
          title={
            <>
              Why clients <em className="acc">stay.</em>
            </>
          }
          lead="One team that builds it, supports it and grows it with you."
        />
        <Reasons />
      </Section>

      <Section top="flow" className="!pt-0">
        <IndustryList index="03" />
      </Section>

      <CtaBand />
    </>
  );
}
