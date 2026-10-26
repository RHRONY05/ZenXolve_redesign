"use client";

import { stepsData, type StepTool } from "@/content/steps";

function ToolIcon({ name }: { name: string }) {
  switch (name) {
    case "notion":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l11.458-.84c1.12-.093 1.214.373.933 1.026l-2.052 4.673c-.094.186-.374.373-.654.373l-7.485.466c-.466.047-.793.373-.886.746l-1.54 6.784c-.093.42.094.654.56.654l7.95-.56c.467-.046.7-.42.7-.84l.374-2.8c0-.42.233-.653.653-.653h1.866c.42 0 .653.28.653.653l-.373 3.64c-.094.747-.56 1.027-1.4 1.074L3.712 19.98c-1.12.093-1.493-.42-1.306-1.307l2.053-14.465zm1.586-1.587c-1.027 0-1.82.747-1.82 1.774L2.08 18.95c-.093 1.494.747 2.334 2.193 2.24l13.905-.98c1.68-.14 2.333-1.027 2.473-2.334l.467-4.433c.046-.467-.14-.933-.56-.933h-1.866c-.42 0-.747.28-.793.7l-.374 2.894c0 .42-.28.607-.7.653L8.72 17.3c-.513.047-.746-.14-.653-.607l1.54-6.83c.093-.42.373-.607.793-.653l7.67-.467c.56-.047.887-.373 1.074-.793l2.24-5.093c.373-.887.046-1.68-1.074-1.587L5.045 2.62z" />
        </svg>
      );
    case "claude":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
        </svg>
      );
    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2a7 7 0 0 1 6.8 5.4A7 7 0 0 1 20 12a7 7 0 0 1-5.4 6.8A7 7 0 0 1 12 22a7 7 0 0 1-6.8-5.4A7 7 0 0 1 4 12a7 7 0 0 1 5.4-6.8A7 7 0 0 1 12 2z" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "excalidraw":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
        </svg>
      );
    case "loom":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
        </svg>
      );
    case "figma":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5zm4 0h4a2.5 2.5 0 0 1 0 5h-4V2zm-4 5h4v5H8a2.5 2.5 0 0 1 0-5zm4 0h4a2.5 2.5 0 0 1 0 5h-4V7zm-4 5h4v5H8a2.5 2.5 0 0 1 0-5zm0 5h4a2.5 2.5 0 0 1-2.5 2.5c-1.38 0-2.5-1.12-2.5-2.5z" />
        </svg>
      );
    case "stitch":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 8l16 8M4 16L20 8" />
          <circle cx="4" cy="8" r="2" fill="currentColor" />
          <circle cx="20" cy="8" r="2" fill="currentColor" />
          <circle cx="4" cy="16" r="2" fill="currentColor" />
          <circle cx="20" cy="16" r="2" fill="currentColor" />
        </svg>
      );
    case "canva":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M15 9.5c-1-1-2.5-1.5-4-1s-2.5 1.8-2.5 3.5 1 3 2.5 3.5 3 0 4-1" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
    case "framer":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M4 2h16v7h-8l8 7H4v-7h8L4 2z" />
        </svg>
      );
    case "nextjs":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm2.5 13.5L9.5 9h-1v6h1.2v-4.5l4.5 5.5h.3v-7h-1.2v4.5z" />
        </svg>
      );
    case "typescript":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="4" />
          <path d="M6 9h5M8.5 9v8M13 14c.5 1 1.5 1.5 2.5 1.5 1 0 1.5-.5 1.5-1s-.5-1-1.5-1.2l-1-.2c-1.5-.3-2.5-1-2.5-2.3 0-1.5 1.2-2.5 3-2.5 1.5 0 2.5.5 3 1.5l-1.2 1c-.3-.7-.8-1-1.8-1s-1.5.4-1.5 1c0 .5.4.8 1.2 1l1 .2c1.8.4 2.8 1.2 2.8 2.5 0 1.5-1.2 2.5-3.2 2.5-1.8 0-3-.8-3.5-2l1.2-.8z" fill="#fff" />
        </svg>
      );
    case "supabase":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M13.4 2.2a1 1 0 0 0-1.7.7v8.5H3.6a1 1 0 0 0-.8 1.6l8.8 10a1 1 0 0 0 1.7-.7v-8.5h8.1a1 1 0 0 0 .8-1.6l-8.8-10z" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-none stroke-current stroke-2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="6" cy="6" r="3" fill="currentColor" />
          <circle cx="18" cy="6" r="3" fill="currentColor" />
          <circle cx="12" cy="18" r="3" fill="currentColor" />
          <path d="M6 9v3a3 3 0 0 0 3 3h3m6-9v3a3 3 0 0 1-3 3h-3" />
        </svg>
      );
    case "github":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case "vercel":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M12 2L2 20h20L12 2z" />
        </svg>
      );
    case "cloudflare":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M18.8 11.2c-.4-3-3-5.2-6.1-5.2-2.7 0-5 1.7-5.9 4.1C6.2 10.4 5.5 11 5 11.9c-.8 1.1-.9 2.5-.4 3.7.5 1.2 1.6 2 2.9 2h11.2c1.8 0 3.3-1.5 3.3-3.3 0-1.6-1.1-2.9-2.7-3.2-.2 0-.3 0-.5.1z" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M2.5 13.5c.3 2 1.5 3.7 3.3 4.7 2.1 1.2 5 .8 7.3.3 3.3-.7 6.4-2.5 7.6-5.8.3-.9.4-1.8.3-2.7-.8.5-1.7.7-2.6.7-1.1 0-2.2-.4-3-1.1-.3-.3-.6-.6-.7-1h-6.2c-.3.4-.6.8-1 1-.8.5-1.8.6-2.7.4-.7-.2-1.4-.7-1.8-1.3-.2 1.6-.4 3.2-.5 4.8zM7 7h2v2H7V7zm3 0h2v2h-2V7zm3 0h2v2h-2V7zm-6 3h2v2H7v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2z" />
        </svg>
      );
    case "sentry":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.9V18h-2v-1.1a4.9 4.9 0 0 1-3.9-3.9H6v-2h1.1a4.9 4.9 0 0 1 3.9-3.9V6h2v1.1a4.9 4.9 0 0 1 3.9 3.9H18v2h-1.1a4.9 4.9 0 0 1-3.9 3.9z" />
        </svg>
      );
    case "telegram":
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}

export function ProcessSteps() {
  return (
    <div className="relative space-y-6 sm:space-y-8 pb-12">
      {stepsData.map((s, i) => {
        // Sticky offset calculations so each previous card's top colored tab stays visible on scroll
        // (e.g. 80px, 128px, 176px, 224px)
        const topOffsetDesktop = 80 + i * 48;
        const topOffsetMobile = 64 + i * 36;

        return (
          <div
            key={s.step}
            className={`sticky rounded-2xl sm:rounded-3xl lg:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-12 border ${s.theme.bg} ${s.theme.border} shadow-[0_-12px_40px_rgba(0,0,0,0.35)] transition-all duration-300`}
            style={
              {
                top: `clamp(${topOffsetMobile}px, ${topOffsetDesktop}px, 260px)`,
                zIndex: 10 + i,
              } as React.CSSProperties
            }
          >
            {/* Top Category Tab Header (stays visible when cards stack on top of each other) */}
            <div className="flex items-center justify-between pb-6 border-b border-black/10">
              <div className="flex items-center gap-3">
                <span
                  className={`font-serif italic text-lg sm:text-xl font-bold tracking-tight ${s.theme.text}`}
                >
                  Step {s.step} — {s.tab}
                </span>
              </div>

              <div
                className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-xs font-bold ${s.theme.tagBg} ${s.theme.tagText}`}
              >
                <span className={`size-1.5 rounded-full ${s.theme.tabAccent}`} />
                PHASE {s.step} // 04
              </div>
            </div>

            {/* Main 2-Column Grid: Text & Scope (Left) vs Toolkit Matrix (Right) */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
              {/* Left Column: Heading, Description & Scope Highlights */}
              <div className="space-y-6">
                <div>
                  <h3
                    className={`font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight tracking-tight ${s.theme.text}`}
                  >
                    {s.headline}
                  </h3>
                  <p
                    className={`mt-4 text-sm sm:text-base md:text-[16.5px] leading-relaxed font-sans ${s.theme.subtext}`}
                  >
                    {s.body}
                  </p>
                </div>

                {/* Scope & Deliverables Highlights */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4 border-t border-black/10">
                  {s.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-3 sm:p-3.5 rounded-xl bg-white/40 border border-black/[0.08]"
                    >
                      <span
                        className={`block font-mono text-[10.5px] font-bold uppercase tracking-wider opacity-75 ${s.theme.subtext}`}
                      >
                        {m.label}
                      </span>
                      <span
                        className={`mt-1 block font-sans text-xs sm:text-sm font-semibold tracking-tight ${s.theme.text}`}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Tech Stack / Phase Toolkit */}
              <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                  <span
                    className={`font-mono text-xs font-bold uppercase tracking-wider ${s.theme.subtext}`}
                  >
                    Phase Toolkit & Architecture
                  </span>
                  <span
                    className={`font-mono text-[11px] font-semibold opacity-70 ${s.theme.subtext}`}
                  >
                    {s.tools.length} Core Technologies
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {s.tools.map((t: StepTool) => (
                    <div
                      key={t.name}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border transition-all duration-200 cursor-default shadow-xs ${s.theme.toolCardBg} ${s.theme.toolCardBorder} hover:scale-[1.02]`}
                    >
                      <div className="size-9 rounded-lg bg-black/[0.06] flex items-center justify-center shrink-0 text-slate-900">
                        <ToolIcon name={t.icon} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4
                          className={`font-sans text-sm font-bold tracking-tight truncate ${s.theme.toolNameColor}`}
                        >
                          {t.name}
                        </h4>
                        <p
                          className={`font-mono text-[11px] truncate leading-tight ${s.theme.toolRoleColor}`}
                        >
                          {t.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
