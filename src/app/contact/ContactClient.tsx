"use client";

import { useSearchParams } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { ContactChannels } from "@/components/contact/ContactChannels";
import { ContactForm } from "@/components/contact/ContactForm";

export function ContactClient() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || undefined;

  return (
    <>
      <PageHero
        className="!pb-7 md:!pb-16"
        eyebrow={
          <>
            Contact <span className="hidden md:inline">· Get in touch</span>
          </>
        }
        title={
          <>
            Have a project in mind?{" "}
            <em className="not-italic text-[var(--accent)]">
              <span className="hidden md:inline">Let&apos;s bring your vision to life.</span>
              <span className="md:hidden">Let&apos;s talk.</span>
            </em>
          </>
        }
      />

      <section className="px-(--gutter-m) md:px-(--gutter-d) pb-[var(--section-y-m)] md:pb-[var(--section-y)]">
        <div className="container mx-auto max-w-(--container)">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_640px] gap-8 md:gap-24 items-start">
            <ContactChannels />
            <ContactForm initialService={serviceParam} />
          </div>
        </div>
      </section>
    </>
  );
}
