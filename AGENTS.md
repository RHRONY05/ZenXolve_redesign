<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

---

# XenZolve Redesign: Agent Context, Client Taste & Progress Directives

## 1. Client Taste & Core Design Rules (STRICT - DO NOT VIOLATE)
1. **Zero Glassmorphism**:
   - Do NOT add heavy frosted glass effects (`backdrop-blur-2xl`, high-opacity white/black blur overlays).
   - Use clean, solid, architectural surfaces (`bg-[var(--surface)]/95`, `border border-white/10` or `border-white/15`) with crisp typography and subtle inner rim lights.
2. **Subtle, Low-Visibility Atmospheric Backgrounds ("Less Art is Good UI")**:
   - The client prefers subtle, muted atmospheric effects over loud, distracting art.
   - Do NOT add vivid, high-saturation color splashes (no random purples, no brick reds).
   - The palette is strictly synchronized to the brand: `#060713` cosmic dark base, midnight navy (`#0a0e24`), subtle slate indigo (`#121430`), muted cyan mist (`#0d3d61`), soft ice crests (`#2e739e`), and diffuse celestial starlight.
3. **100% Code for Atmospheric Backgrounds (Zero AI Wallpapers / Zero Grid Lines)**:
   - The background atmosphere is rendered purely via code (`NebulaShader.tsx` with WebGL GLSL).
   - NO static AI-generated stock wallpapers for section backgrounds.
   - NO orthogonal grid lines in the body background (grid lines are reserved exclusively for Hero).
4. **Performance & 60fps Scrolling Discipline**:
   - Never call layout-measuring functions (`clientWidth`, `clientHeight`, `getBoundingClientRect`) inside animation loops (`render` / `requestAnimationFrame`).
   - All resizing must be event-driven and debounced (`window.resize`).
   - Frame rates must be throttled to ~30-35fps with automatic pause via `IntersectionObserver` when offscreen.
   - Keep internal rendering buffers lightweight (max DPR 1.0, capped dimensions) to guarantee 0 lag across all devices.

## 2. Component Status & Locked Directives
- **Background Shader (`src/components/ui/NebulaShader.tsx`)**: **LOCKED 🔒**
  - Spans Sections 01, 02, and 03 in `src/app/page.tsx` with soft edge fades.
  - Opacity is locked at `0.38`.
  - Do NOT modify its shader formulas, palette tokens, or canvas styling without explicit user instruction.
- **Section 02 (The Single-Studio Advantage - `src/components/home/StudioComparator.tsx`)**: **APPROVED & LOCKED 🔒**
  - Sequential interactive 3-stage circuit architecture (Design → Code → Automated Operations) vs. traditional 3-agency handoff friction.
  - Interactive mode switch ("XenZolve Studio" vs. "3 Separate Agencies").
  - Clean solid shell styling (`bg-[var(--surface)]/95 p-5 sm:p-8 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.65)]`).
- **Section 01 (Capabilities & Services - `src/components/home/ServicesGrid.tsx`)**: **IN PROGRESS ⏳**
  - Features all 6 dedicated custom isometric technical line-art illustrations in `public/hero/` (`service-web-isometric.jpg`, `service-design-isometric.jpg`, `service-mobile-isometric.jpg`, `service-ai-isometric.jpg`, `service-bot-isometric.jpg`, `service-cloud-isometric.jpg`).
  - Next immediate step: Refine the layout of Section 01 slightly based on user feedback.
- **Section 03 (How We Work - `src/components/home/ProcessSteps.tsx`)**: **NEXT IN QUEUE ⏳**
  - Will be tackled immediately after Section 01 layout refinement is completed.

## 3. Active Next Steps
1. Refine Section 01 layout slightly as requested by the user.
2. Proceed to review and enhance Section 03 (How We Work - 4 steps).
3. Continue sequentially down the page (Section 04 Why Xenzolve, Section 05 Client Words, Industries, FAQ, and CTA Band).
