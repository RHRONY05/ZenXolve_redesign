import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { StackGroup } from "@/components/stack/StackGroup";
import { CtaBand } from "@/components/home/CtaBand";
import { stack, stackGroups } from "@/content/stack";

export const metadata: Metadata = {
  title: "Tech Stack · XenZolve",
  description:
    "We pick the tool that fits the job, not the trend. These are the ones we ship with most.",
};

export default function StackPage() {
  return (
    <>
      <PageHero
        eyebrow={`Tech stack · ${stack.length} tools & more`}
        title={
          <>
            Technologies <em className="italic text-[var(--accent)]">we use.</em>
          </>
        }
        lead={
          <>
            We pick the tool that fits the job, not the trend.{" "}
            <span className="hidden md:inline">These are the ones we ship with most.</span>
          </>
        }
      />

      <section className="px-(--gutter-m) md:px-(--gutter-d) pb-[var(--section-y-m)] md:pb-[var(--section-y)]">
        <div className="container mx-auto max-w-(--container)">
          {stackGroups.map((group) => (
            <StackGroup key={group.id} group={group} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
