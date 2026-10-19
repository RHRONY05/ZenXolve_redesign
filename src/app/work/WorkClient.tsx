"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { work, workCategories, type WorkCategory } from "@/content/work";
import { WorkGrid } from "@/components/home/WorkGrid";
import { PlaceholderTag } from "@/components/ui/Placeholder";
import { Icon } from "@/components/ui/Icon";

export function WorkClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawType = searchParams.get("type")?.toLowerCase() || "all";

  // Normalize category
  const activeCategory = useMemo(() => {
    if (!rawType || rawType === "all") return "all";
    if (rawType === "ai-automation" || rawType === "ai") return "ai";
    return rawType;
  }, [rawType]);

  const setCategory = (cat: string) => {
    if (cat === "all") {
      router.replace("/work", { scroll: false });
    } else {
      router.replace(`/work?type=${cat}`, { scroll: false });
    }
  };

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return work;
    return work.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const counts = useMemo(() => {
    const map: Record<string, string> = {
      all: work.length.toString().padStart(2, "0"),
    };
    for (const cat of workCategories) {
      if (cat.id !== "all") {
        const c = work.filter((item) => item.category === cat.id).length;
        map[cat.id] = c.toString().padStart(2, "0");
      }
    }
    return map;
  }, []);

  const currentCategoryObj = workCategories.find((c) => c.id === activeCategory);

  return (
    <section className="px-(--gutter-m) md:px-(--gutter-d) pb-(--section-y-m) md:pb-(--section-y)">
      <div className="container mx-auto max-w-(--container)">
        <div className="flex items-center justify-between gap-4 mb-7 md:mb-9">
          <div
            className="filters flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-wrap"
            role="group"
            aria-label="Filter work"
          >
            {workCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = counts[cat.id];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`chip inline-flex items-center gap-1.5 h-[44px] md:h-[38px] px-4 rounded-full border text-sm whitespace-nowrap cursor-pointer transition-colors focus-visible:outline-none focus-visible:shadow-(--focus-ring) ${
                    isActive
                      ? "bg-ink text-bg border-ink"
                      : "bg-surface text-ink border-line hover:border-line-strong"
                  }`}
                >
                  <span>
                    <span className="md:hidden">{cat.shortLabel}</span>
                    <span className="hidden md:inline">{cat.label}</span>
                  </span>
                  <span
                    className={`n font-mono text-[10px] ${
                      isActive ? "text-bg/70" : "text-ink-3"
                    } ${cat.id === "all" ? "" : "hidden md:inline"}`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="hidden md:block">
            <PlaceholderTag>Placeholder · all projects</PlaceholderTag>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="mx-auto max-w-[420px] rounded-lg border border-dashed border-line-strong p-7 py-10 text-center">
            <Icon name="folder-open" size={28} className="mx-auto text-ink-3" />
            <h4 className="font-serif text-[32px] leading-9 my-3 mb-1.5">
              No {currentCategoryObj?.label || "matching"} projects yet.
            </h4>
            <p className="text-ink-3 text-sm mb-4.5">We&apos;ve built them, the write-ups are coming.</p>
            <button
              type="button"
              onClick={() => setCategory("all")}
              className="chip on inline-flex items-center gap-1.5 h-[44px] md:h-[38px] px-4 rounded-full border border-ink bg-ink text-bg text-sm whitespace-nowrap cursor-pointer hover:bg-ink-2 transition-colors focus-visible:outline-none focus-visible:shadow-(--focus-ring)"
            >
              Show all work
            </button>
          </div>
        ) : (
          <WorkGrid items={filteredItems} showAllOnMobile />
        )}
      </div>
    </section>
  );
}
