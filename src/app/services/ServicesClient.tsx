"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { services, serviceGroups } from "@/content/services";
import { ServiceDetail } from "@/components/services/ServiceDetail";
import { PageHero } from "@/components/ui/PageHero";

export function ServicesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawGroup = searchParams.get("group")?.toLowerCase() || searchParams.get("type")?.toLowerCase() || "all";

  const activeGroup = useMemo(() => {
    if (rawGroup === "build") return "Build";
    if (rawGroup === "automate") return "Automate";
    if (rawGroup === "design") return "Design";
    return "All";
  }, [rawGroup]);

  const setGroup = (group: string) => {
    if (group === "All") {
      router.replace("/services", { scroll: false });
    } else {
      router.replace(`/services?group=${group.toLowerCase()}`, { scroll: false });
    }
  };

  const filteredServices = useMemo(() => {
    if (activeGroup === "All") return services;
    return services.filter((s) => s.group === activeGroup);
  }, [activeGroup]);

  const groups = [
    { key: "All", label: "All", count: "" },
    ...serviceGroups.map((g) => ({ key: g.key, label: g.key, count: g.count })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Services · 06"
        title={
          <>
            One studio, <em className="acc">end to end.</em>
          </>
        }
        lead={
          <>
            <span className="hidden md:inline">
              End-to-end digital solutions tailored to accelerate your business growth.{" "}
            </span>
            Design, build, automate — and we stay on to support it.
          </>
        }
      >
        <div
          className="filters mt-6 md:mt-12 flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap"
          role="group"
          aria-label="Filter services"
        >
          {groups.map((g) => {
            const isActive = activeGroup === g.key;
            return (
              <button
                key={g.key}
                type="button"
                onClick={() => setGroup(g.key)}
                className={`chip inline-flex items-center gap-1.5 h-[44px] md:h-[38px] px-4 rounded-full border text-sm whitespace-nowrap cursor-pointer transition-colors focus-visible:outline-none focus-visible:shadow-(--focus-ring) ${
                  isActive
                    ? "bg-ink text-bg border-ink"
                    : "bg-surface text-ink border-line hover:border-line-strong"
                }`}
              >
                <span>{g.label}</span>
                {g.count && (
                  <span
                    className={`n font-mono text-[10px] hidden md:inline ${
                      isActive ? "text-bg/70" : "text-ink-3"
                    }`}
                  >
                    {g.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </PageHero>

      <section className="px-(--gutter-m) md:px-(--gutter-d) pb-(--section-y-m) md:pb-(--section-y)">
        <div className="container mx-auto max-w-(--container)">
          {filteredServices.map((service) => {
            const originalIndex = services.findIndex((s) => s.slug === service.slug);
            return (
              <ServiceDetail
                key={service.slug}
                service={service}
                index={originalIndex + 1}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}
