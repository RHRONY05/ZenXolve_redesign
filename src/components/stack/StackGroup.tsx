import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { StackGroup as StackGroupType } from "@/content/stack";
import { ToolTile } from "./ToolTile";

export function StackGroup({ group }: { group: StackGroupType }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 md:gap-12 py-7 md:py-9 border-t border-[var(--line)]">
      <div>
        <span className="font-mono text-xs text-[var(--ink-3)] uppercase tracking-wider block">
          {group.countLabel}
        </span>
        <h3 className="font-serif font-normal text-[32px] md:text-[40px] leading-[36px] md:leading-[44px] mt-2 text-[var(--ink)]">
          {group.title}
        </h3>
      </div>
      {group.tools ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {group.tools.map((tool) => (
            <ToolTile key={tool.name} tool={tool} />
          ))}
        </div>
      ) : group.customLead ? (
        <p className="text-base md:text-lg text-[var(--ink-2)] m-0 self-center leading-relaxed">
          {group.customLead.text}{" "}
          <Link
            href={group.customLead.linkHref}
            className="inline-flex items-center gap-1.5 font-medium text-[var(--ink)] hover:text-[var(--accent)] transition-colors ml-1"
          >
            {group.customLead.linkText} <Icon name="arrow-right" className="w-4 h-4" />
          </Link>
        </p>
      ) : null}
    </div>
  );
}
