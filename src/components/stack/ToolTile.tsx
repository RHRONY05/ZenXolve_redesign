import type { StackTool } from "@/content/stack";

export function ToolTile({ tool }: { tool: StackTool }) {
  return (
    <div className="flex items-center gap-3 h-14 md:h-16 px-3.5 md:px-[18px] rounded-[var(--radius-md)] bg-[var(--surface)] border border-[var(--line)] font-medium text-[15px] md:text-base text-[var(--ink)]">
      <span
        className="w-[30px] h-[30px] rounded-lg bg-[var(--surface-2)] grid place-items-center font-mono text-[11px] text-[var(--ink-2)] shrink-0"
        aria-hidden="true"
      >
        {tool.mk}
      </span>
      <span className="truncate">{tool.name}</span>
    </div>
  );
}
