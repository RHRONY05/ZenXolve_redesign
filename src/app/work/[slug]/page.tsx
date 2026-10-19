import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/ui/BackLink";
import { PageHero } from "@/components/ui/PageHero";
import { Placeholder, PlaceholderTag } from "@/components/ui/Placeholder";
import { CaseStudyCover } from "@/components/work/CaseStudyCover";
import { CaseStudyMeta } from "@/components/work/CaseStudyMeta";
import { NextCase } from "@/components/work/NextCase";
import { StatRow } from "@/components/work/StatRow";
import { CtaBand } from "@/components/home/CtaBand";
import { work } from "@/content/work";

export function generateStaticParams() {
  return work.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) {
    return { title: "Case Study" };
  }
  return {
    title: `${item.name}: ${item.outcome || item.kind}`,
    description: `${item.kind} — ${item.result}. Case study by XenZolve.`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = work.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();

  const item = work[index];
  const nextItem = work[(index + 1) % work.length];

  return (
    <>
      <PageHero
        className="!pb-8 md:!pb-14"
        eyebrow={
          <div className="flex flex-col items-start gap-5 md:gap-7">
            <BackLink href="/work">All work</BackLink>
            <div className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">
              Case study · {item.kind.split("·")[0].trim()}
            </div>
          </div>
        }
        title={
          <Placeholder active={item.placeholder} className="max-w-[1180px]">
            {item.name}: <em className="acc">{item.outcome || "[outcome]"}</em>
          </Placeholder>
        }
      >
        <CaseStudyMeta item={item} />
      </PageHero>

      <CaseStudyCover item={item} />

      <section className="section px-(--gutter-m) md:px-(--gutter-d) py-(--section-y-m) md:py-(--section-y)">
        <div className="container mx-auto max-w-(--container) grid gap-14 md:gap-24">
          {/* 01 The challenge */}
          <div className="cs-body grid grid-cols-1 md:grid-cols-[340px_1fr] gap-4 md:gap-20">
            <div>
              <span className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">01</span>
              <h3 className="font-serif font-normal text-[34px] leading-[38px] md:text-[44px] md:leading-[48px] m-0">
                The challenge
              </h3>
            </div>
            <div className="txt">
              <Placeholder active={item.placeholder}>
                {(
                  item.challenge || [
                    "[2–3 short paragraphs: who the client is, what was broken or missing, and why it mattered to their business. Use their words if you can.]",
                    "[What they had tried before, and the constraint: budget, deadline, existing systems.]",
                  ]
                ).map((paragraph, i) => (
                  <p
                    key={i}
                    className="mb-4.5 text-base md:text-lg text-ink-2 leading-[26px] md:leading-[30px] max-w-[720px] last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </Placeholder>
            </div>
          </div>

          {/* 02 What we built */}
          <div className="cs-body grid grid-cols-1 md:grid-cols-[340px_1fr] gap-4 md:gap-20">
            <div>
              <span className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">02</span>
              <h3 className="font-serif font-normal text-[34px] leading-[38px] md:text-[44px] md:leading-[48px] m-0">
                What we built
              </h3>
            </div>
            <div className="txt">
              <Placeholder active={item.placeholder}>
                {(
                  item.solution || [
                    "[The solution in plain language: the storefront, the admin, the payment flow, the integrations. One paragraph per part.]",
                    "[One technical decision worth mentioning, e.g. how stock stays correct when two people order the last item.]",
                  ]
                ).map((paragraph, i) => (
                  <p
                    key={i}
                    className="mb-4.5 text-base md:text-lg text-ink-2 leading-[26px] md:leading-[30px] max-w-[720px] last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </Placeholder>
            </div>
          </div>

          {/* Screenshots */}
          <div className="cs-shots grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className="wide md:col-span-2 h-[280px] md:h-[620px] rounded-lg border border-line relative overflow-hidden"
              style={{ background: `var(--${item.tile})` }}
            >
              <PlaceholderTag className="absolute left-3.5 top-3.5 md:left-5 md:top-5">
                <span className="md:hidden">Placeholder · screenshot</span>
                <span className="hidden md:inline">Placeholder · full-width screenshot</span>
              </PlaceholderTag>
            </div>
            <div className="hidden md:block h-[460px] rounded-lg border border-line bg-surface-2 relative overflow-hidden">
              <PlaceholderTag className="absolute left-5 top-5">Placeholder · mobile screens</PlaceholderTag>
            </div>
            <div className="hidden md:block h-[460px] rounded-lg border border-line bg-surface-2 relative overflow-hidden">
              <PlaceholderTag className="absolute left-5 top-5">Placeholder · admin / dashboard</PlaceholderTag>
            </div>
          </div>

          {/* 03 The result */}
          <div className="cs-body grid grid-cols-1 md:grid-cols-[340px_1fr] gap-4 md:gap-20">
            <div>
              <span className="mono font-mono text-xs tracking-(--tracking-mono) uppercase text-ink-3">03</span>
              <h3 className="font-serif font-normal text-[34px] leading-[38px] md:text-[44px] md:leading-[48px] m-0">
                The result
              </h3>
            </div>
            <div>
              <StatRow
                placeholder={item.placeholder}
                stats={
                  item.stats || [
                    { value: "[40%]", label: "[more conversions]" },
                    { value: "[2.1s]", label: "[faster page loads]" },
                    { value: "[0]", label: "[oversold orders]" },
                    { value: "[6 wk]", label: "[idea to launch]" },
                  ]
                }
              />
              {item.quote && (
                <figure className="quote big ph mt-12 bg-surface border border-line rounded-lg p-6 md:p-[30px] hidden md:flex flex-col gap-6">
                  <blockquote className="m-0 font-serif text-[28px] md:text-[38px] leading-[34px] md:leading-[44px] text-ink">
                    {item.quote.text}
                  </blockquote>
                  <figcaption className="who mt-auto flex items-center gap-3 text-sm">
                    <span className="avatar size-11 rounded-full bg-surface-3 grid place-items-center font-semibold text-ink-2 shrink-0">
                      —
                    </span>
                    <span>
                      <b className="block font-medium text-ink">{item.quote.author}</b>
                      <span className="text-ink-3">{item.quote.role}</span>
                    </span>
                  </figcaption>
                </figure>
              )}
            </div>
          </div>

          {/* Next case */}
          <NextCase item={nextItem} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
