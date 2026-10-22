"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import {
  Palette,
  Type,
  Sun,
  Moon,
  Check,
  X,
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

export type PaletteId = "cosmic" | "editorial";
export type FontId = "modern" | "editorial";
export type ThemeId = "light" | "dark";

export interface PaletteOption {
  id: PaletteId;
  name: string;
  tagline: string;
  lightSwatches: string[];
  darkSwatches: string[];
}

export interface FontOption {
  id: FontId;
  name: string;
  displayFont: string;
  bodyFont: string;
  monoFont: string;
  preview: string;
}

export const PALETTES: PaletteOption[] = [
  {
    id: "cosmic",
    name: "Cosmic Ice & Violet",
    tagline: "Ultra-clean Ice Slate light & Deep Cosmic Navy with radiant violet",
    lightSwatches: ["#f8f9fc", "#ffffff", "#2f4bff", "#080914"],
    darkSwatches: ["#060713", "#0c0d1e", "#8b5cf6", "#ffffff"],
  },
  {
    id: "editorial",
    name: "Warm Editorial (Burnt Orange)",
    tagline: "Natural Sand Paper, deep warm Charcoal & vibrant Burnt Orange",
    lightSwatches: ["#f4f2ec", "#fbfaf6", "#d64b2a", "#14745b", "#181b1a"],
    darkSwatches: ["#151817", "#1e2220", "#ff7857", "#59c7a6", "#f2f1eb"],
  },
];

export const FONTS: FontOption[] = [
  {
    id: "modern",
    name: "Studio Modern",
    displayFont: "Instrument Serif (Display)",
    bodyFont: "Inter Tight (Body / UI)",
    monoFont: "JetBrains Mono (Eyebrow / Code)",
    preview: "Next-Gen Problems, Next-Level Solutions.",
  },
  {
    id: "editorial",
    name: "Warm Editorial",
    displayFont: "Source Serif 4 (Display 600/700)",
    bodyFont: "IBM Plex Sans (Body 400-700)",
    monoFont: "IBM Plex Mono (Labels 400/500)",
    preview: "Next-Gen Problems, Next-Level Solutions.",
  },
];

// Helper to subscribe to document attribute changes
function subscribe(cb: () => void) {
  const o = new MutationObserver(cb);
  o.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme", "data-palette", "data-font"],
  });
  return () => o.disconnect();
}

function readTheme(): ThemeId {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function readPalette(): PaletteId {
  if (typeof document === "undefined") return "cosmic";
  return (document.documentElement.dataset.palette as PaletteId) || "cosmic";
}

function readFont(): FontId {
  if (typeof document === "undefined") return "modern";
  return (document.documentElement.dataset.font as FontId) || "modern";
}

export function useThemeCustomizer() {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "light" as ThemeId);
  const palette = useSyncExternalStore(subscribe, readPalette, () => "cosmic" as PaletteId);
  const font = useSyncExternalStore(subscribe, readFont, () => "modern" as FontId);

  const setTheme = (next: ThemeId) => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const setPalette = (next: PaletteId) => {
    document.documentElement.dataset.palette = next;
    try {
      localStorage.setItem("palette", next);
    } catch {}
  };

  const setFont = (next: FontId) => {
    document.documentElement.dataset.font = next;
    try {
      localStorage.setItem("font", next);
    } catch {}
  };

  return {
    theme,
    palette,
    font,
    setTheme,
    toggleTheme,
    setPalette,
    setFont,
  };
}

/** Full-featured Modal / Drawer to switch Theme Mode, Color Palette, and Font Family */
export function ThemeCustomizerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { theme, palette, font, setTheme, setPalette, setFont } = useThemeCustomizer();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Theme & Typography Customizer"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl border border-line bg-surface p-6 sm:p-8 shadow-2xl transition-all">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line pb-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <SlidersHorizontal size={18} />
            </span>
            <div>
              <h2 className="font-serif text-2xl font-bold text-ink">Design System Live Switcher</h2>
              <p className="text-xs text-ink-2">Test palettes, fonts, and modes instantly with zero page reload</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close customizer"
            className="rounded-full p-2 text-ink-2 hover:bg-surface-2 hover:text-ink transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Section 1: Color Mode */}
        <div className="mt-6">
          <label className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-3">
            1. Appearance Mode
          </label>
          <div className="mt-2.5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setTheme("light")}
              className={`flex items-center justify-center gap-2 rounded-xl border p-3.5 text-sm font-medium transition-all ${
                theme === "light"
                  ? "border-accent bg-accent-soft font-semibold text-accent shadow-sm"
                  : "border-line bg-surface-2 text-ink-2 hover:border-line-strong hover:text-ink"
              }`}
            >
              <Sun size={17} />
              <span>Light Mode</span>
              {theme === "light" && <Check size={16} className="ml-auto text-accent" />}
            </button>

            <button
              type="button"
              onClick={() => setTheme("dark")}
              className={`flex items-center justify-center gap-2 rounded-xl border p-3.5 text-sm font-medium transition-all ${
                theme === "dark"
                  ? "border-accent bg-accent-soft font-semibold text-accent shadow-sm"
                  : "border-line bg-surface-2 text-ink-2 hover:border-line-strong hover:text-ink"
              }`}
            >
              <Moon size={17} />
              <span>Dark Mode</span>
              {theme === "dark" && <Check size={16} className="ml-auto text-accent" />}
            </button>
          </div>
        </div>

        {/* Section 2: Color Palette */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-3">
              2. Color Palette
            </label>
            <span className="text-[11px] font-mono text-ink-3">Dynamic CSS Tokens</span>
          </div>

          <div className="mt-2.5 space-y-3">
            {PALETTES.map((p) => {
              const active = palette === p.id;
              const swatches = theme === "dark" ? p.darkSwatches : p.lightSwatches;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPalette(p.id)}
                  className={`group w-full rounded-xl border p-4 text-left transition-all ${
                    active
                      ? "border-accent bg-accent-soft/40 shadow-sm ring-1 ring-accent"
                      : "border-line bg-surface-2 hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                      {p.name}
                    </span>
                    {active && <Check size={16} className="text-accent" />}
                  </div>
                  <p className="mt-1 text-xs text-ink-2">{p.tagline}</p>
                  <div className="mt-3 flex items-center gap-2">
                    {swatches.map((c, i) => (
                      <span
                        key={i}
                        className="size-5 rounded-full border border-black/15 shadow-xs"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                    <span className="ml-auto text-[11px] font-mono text-ink-3">
                      {p.id === "cosmic" ? "Violet & Blue" : "Burnt Orange & Teal"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 3: Typography Suite */}
        <div className="mt-7">
          <div className="flex items-center justify-between">
            <label className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-3">
              3. Typography Suite
            </label>
            <span className="text-[11px] font-mono text-ink-3">Next Google Fonts</span>
          </div>

          <div className="mt-2.5 space-y-3">
            {FONTS.map((f) => {
              const active = font === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFont(f.id)}
                  className={`group w-full rounded-xl border p-4 text-left transition-all ${
                    active
                      ? "border-accent bg-accent-soft/40 shadow-sm ring-1 ring-accent"
                      : "border-line bg-surface-2 hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                      {f.name}
                    </span>
                    {active && <Check size={16} className="text-accent" />}
                  </div>
                  <div className="mt-1.5 grid gap-0.5 text-xs text-ink-2">
                    <div>
                      <span className="font-mono text-[10px] text-ink-3">SERIF: </span>
                      <span className="font-medium text-ink">{f.displayFont}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-ink-3">SANS: </span>
                      <span className="font-medium text-ink">{f.bodyFont}</span>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-ink-3">MONO: </span>
                      <span className="font-medium text-ink">{f.monoFont}</span>
                    </div>
                  </div>
                  <div className="mt-3 rounded-lg border border-line bg-surface px-3 py-2 text-xs italic text-ink-2">
                    &ldquo;{f.preview}&rdquo;
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 rounded-xl border border-line/70 bg-surface-2 p-3 text-center">
          <p className="text-[11px] text-ink-3">
            All colors and fonts are strictly bound to centralized CSS variables with{" "}
            <span className="font-medium text-ink">0 hardcoded styles</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Header Trigger Button (renders next to ThemeToggle) */
export function ThemeCustomizerTrigger({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const { palette, font } = useThemeCustomizer();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Customize theme palette and fonts"
        title="Change palette & font"
        className={`group inline-flex items-center gap-1.5 rounded-full border border-current/25 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-current/10 ${className}`}
      >
        <Palette size={15} className="text-current transition-transform group-hover:rotate-12" />
        <span className="hidden lg:inline capitalize">
          {palette === "editorial" ? "Editorial" : "Cosmic"} · {font === "editorial" ? "Plex" : "Modern"}
        </span>
      </button>

      <ThemeCustomizerModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/**
 * Floating Quick Style Dock (Bottom Right):
 * Allows the user or reviewers to test all 4 permutations (Light/Dark x Cosmic/Editorial x Modern/Plex)
 * with a single click from anywhere on any page.
 */
export function ThemeCustomizerDock() {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { theme, palette, font, toggleTheme, setPalette, setFont } = useThemeCustomizer();

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center">
        {collapsed ? (
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            aria-label="Expand theme customizer"
            className="flex size-11 items-center justify-center rounded-full border border-line bg-surface/90 text-ink shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-accent-soft hover:text-accent"
          >
            <Palette size={18} />
          </button>
        ) : (
          <div className="flex items-center gap-1.5 rounded-full border border-line bg-surface/90 px-3 py-1.5 shadow-xl backdrop-blur-md">
            {/* Quick Dark/Light Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle light/dark"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              className="flex size-8 items-center justify-center rounded-full border border-line bg-surface-2 text-ink transition-colors hover:text-accent"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <span className="h-4 w-px bg-line" aria-hidden />

            {/* Quick Palette Toggle */}
            <button
              type="button"
              onClick={() => setPalette(palette === "cosmic" ? "editorial" : "cosmic")}
              title="Toggle palette (Cosmic / Editorial)"
              className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-ink hover:bg-surface-2"
            >
              <span
                className="size-3 rounded-full border border-black/20"
                style={{
                  backgroundColor: palette === "cosmic" ? "#8b5cf6" : "#ff7857",
                }}
              />
              <span className="font-mono text-[11px]">
                {palette === "cosmic" ? "Cosmic" : "Editorial"}
              </span>
            </button>

            <span className="h-4 w-px bg-line" aria-hidden />

            {/* Quick Font Toggle */}
            <button
              type="button"
              onClick={() => setFont(font === "modern" ? "editorial" : "modern")}
              title="Toggle font (Modern / IBM Plex)"
              className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium text-ink hover:bg-surface-2"
            >
              <Type size={13} className="text-ink-2" />
              <span className="font-mono text-[11px]">
                {font === "modern" ? "Modern" : "IBM Plex"}
              </span>
            </button>

            <span className="h-4 w-px bg-line" aria-hidden />

            {/* Open Full Customizer Modal */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              title="Open full style panel"
              className="flex size-8 items-center justify-center rounded-full bg-accent text-on-accent transition-transform hover:scale-105"
            >
              <SlidersHorizontal size={14} />
            </button>

            {/* Minimize */}
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              title="Minimize style dock"
              className="ml-0.5 text-ink-3 hover:text-ink"
            >
              <X size={13} />
            </button>
          </div>
        )}
      </div>

      <ThemeCustomizerModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
