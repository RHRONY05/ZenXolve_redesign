import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Placeholder } from "@/components/ui/Placeholder";
import { CtaBand } from "@/components/home/CtaBand";
import { work } from "@/content/work";
import { WorkClient } from "./WorkClient";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Websites, apps, AI agents and business systems for startups and growing businesses. Built, shipped, running.",
};

export default function WorkPage() {
  const countStr = work.length.toString().padStart(2, "0");

  return (
    <>
      <PageHero
        eyebrow={
          <>
            Work · <Placeholder active>{countStr}</Placeholder> projects
          </>
        }
        title={
          <>
            Built, shipped, <em className="acc">running.</em>
          </>
        }
        lead={
          <>
            <span className="hidden md:inline">
              Websites, apps, AI agents and business systems for startups and growing businesses.{" "}
            </span>
            Each project has a short write-up: the problem, what we built, and what changed.
          </>
        }
      />
      <Suspense fallback={null}>
        <WorkClient />
      </Suspense>
      <CtaBand />
    </>
  );
}
