import React from "react";

/** Static HTML illustrations for the picker stage. Always aria-hidden, always sample data. */

export function MockBrowser({
  url,
  className = "",
  children,
}: {
  url: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute overflow-hidden rounded-2xl bg-[#0b0d1e]/95 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md ${className}`}
    >
      <div className="flex h-[38px] items-center gap-2 border-b border-white/10 bg-white/[0.03] px-3.5">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-full bg-rose-500/80 shadow-[0_0_6px_rgba(244,63,94,0.4)]" />
          <span className="size-2.5 rounded-full bg-amber-500/80 shadow-[0_0_6px_rgba(251,191,36,0.4)]" />
          <span className="size-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_6px_rgba(52,211,153,0.4)]" />
        </div>
        <div className="ml-2 flex items-center gap-1.5 rounded-full bg-white/[0.05] border border-white/10 px-3 py-1 font-mono text-[11px] text-slate-300">
          <svg className="size-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <span>{url}</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export function MockPhone({
  className = "",
  screenClassName = "",
  children,
}: {
  className?: string;
  screenClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      aria-hidden="true"
      className={`absolute overflow-hidden rounded-[36px] md:rounded-[42px] border-2 border-white/20 bg-[#070814] p-2 md:p-2.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9)] ring-1 ring-black/90 ${className}`}
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div
        className={`relative flex h-full w-full flex-col overflow-hidden rounded-[26px] md:rounded-[32px] bg-[#0b141a] text-slate-100 ${screenClassName}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Modern dynamic island notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 rounded-full bg-black/90 z-20 flex items-center justify-end px-2 pointer-events-none">
          <div className="size-1.5 rounded-full bg-slate-900 ring-1 ring-white/10" />
        </div>
        {children}
      </div>
    </div>
  );
}

export function FlowCard({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-2xl bg-[#0c0e22]/95 border border-white/15 p-4 text-sm text-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.75)] backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

export function Msg({ me, time, children }: { me?: boolean; time: string; children: React.ReactNode }) {
  const isRead = time.includes("✓✓");
  const cleanTime = time.replace(" ✓✓", "");

  return (
    <div
      className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-[12px] md:text-[13px] leading-relaxed shadow-[0_2px_8px_rgba(0,0,0,0.3)] ${
        me
          ? "self-end bg-[#005c4b] text-white border border-[#005c4b]/60 rounded-tr-xs"
          : "self-start bg-[#202c33] text-slate-100 border border-white/10 rounded-tl-xs"
      }`}
    >
      {children}
      <div className="mt-1 flex items-center justify-end gap-1 font-mono text-[10px] text-slate-400">
        <span>{cleanTime}</span>
        {isRead && <span className="text-[#53bdeb] font-bold">✓✓</span>}
      </div>
    </div>
  );
}

export function SceneLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute top-4 left-5 flex items-center gap-2.5 z-10 px-3.5 py-1.5 rounded-full bg-[#0a0c1e]/85 border border-white/15 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
      <span className="relative flex size-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full size-2 bg-emerald-500 shadow-[0_0_8px_#34d399]" />
      </span>
      <span className="font-mono text-xs uppercase tracking-wider text-slate-200 font-semibold">{children}</span>
    </div>
  );
}

export function SceneNote() {
  return (
    <div className="absolute bottom-3.5 left-5 font-mono text-[11px] text-slate-500 tracking-wide">
      <span className="md:hidden">Sample data · illustrative</span>
      <span className="hidden md:inline">Sample data · interactive preview</span>
    </div>
  );
}
