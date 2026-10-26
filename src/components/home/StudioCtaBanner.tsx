import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function StudioCtaBanner() {
  return (
    <div className="rounded-2xl border border-white/15 bg-[var(--surface)]/95 p-5 md:p-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-slate-300 font-mono">
        <span className="flex items-center gap-1.5 text-white">
          <span className="size-1.5 rounded-full bg-violet-400" />
          01 Design
        </span>
        <span className="text-slate-600">/</span>
        <span className="flex items-center gap-1.5 text-white">
          <span className="size-1.5 rounded-full bg-cyan-400" />
          02 Build
        </span>
        <span className="text-slate-600">/</span>
        <span className="flex items-center gap-1.5 text-white">
          <span className="size-1.5 rounded-full bg-emerald-400" />
          03 Automate
        </span>
      </div>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white text-slate-950 font-sans font-semibold text-xs sm:text-sm hover:bg-white/90 hover:scale-105 active:scale-95 transition-all shadow-[0_0_18px_rgba(255,255,255,0.2)] shrink-0"
      >
        <span>Discuss Your Entire Project</span>
        <Icon name="arrow-up-right" size={14} />
      </Link>
    </div>
  );
}
