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
5. **Git Workflow Discipline**:
   - Always run `git push origin main` immediately after creating any commit.

## 2. Component Status & Locked Directives
- **Background Shader (`src/components/ui/NebulaShader.tsx`)**: **LOCKED 🔒**
  - Spans Sections 01, 02, and 03 in `src/app/page.tsx` with soft edge fades.
  - Opacity is locked at `0.38`.
  - Do NOT modify its shader formulas, palette tokens, or canvas styling without explicit user instruction.
- **Section 01 (Capabilities & Services - `src/components/home/ServicesGrid.tsx`)**: **APPROVED & LOCKED 🔒**
  - Light Architecture Workflow Canvas wrapped in an outer dark environment frame/border per client markup.
  - Header converted to stacked 2-row layout with full-width title like Section 02.
  - Top row of each box displays the service title directly + interactive arrow link.
  - 6 services organized via 2 vertical + 1 horizontal divider lines on n8n-style dotted grid floor.
  - Redundant bottom banner removed and relocated to Section 02.
  - Backup preserved at `src/components/home/ServicesGrid.backup.tsx`.
- **Section 02 (The Single-Studio Advantage - `src/components/home/StudioComparator.tsx`)**: **APPROVED & LOCKED 🔒**
  - Sequential interactive 3-stage circuit architecture (Design → Code → Automated Operations) vs. traditional 3-agency handoff friction.
  - Interactive mode switch ("XenZolve Studio" vs. "3 Separate Agencies").
  - Clean solid shell styling (`bg-[var(--surface)]/95 p-5 sm:p-8 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.65)]`).
  - Redundant bottom banner removed completely per client instruction.
- **Section 03 (How We Work - `src/components/home/ProcessSteps.tsx`)**: **APPROVED & LOCKED 🔒**
  - Interactive scroll-stacking deck of cards (sticky tab offsets mimicking the client reference).
  - 4 distinct colored cards: Sky Blue (Discovery), Fresh Mint (Design), Soft Lavender (Engineering), Warm Peach (Deployment).
  - Left column: Step title, display headline, process description, and bold highlighted key deliverables with ▶ bullet points.
  - Right column: Full-height Orbital Constellation with central core hubs (Brain, Pen, CPU, Globe) and continuous, seamless flowing circuit connections with large brand tool icons.
- **Section 04 (Why Xenzolve - `src/components/home/Reasons.tsx`)**: **APPROVED & LOCKED 🔒**
  - Unified with Section 01's architectural Light Canvas layout (dark outer frame + dark window header + light dotted grid floor).
  - Compact, shorter height tailored to concise copy without unnecessary vertical padding.
  - Divided into 6 contiguous boxes via 2 vertical + 1 horizontal divider lines.
  - Authentic Icons8 color icons (`target`, `speed`, `secure`, `innovative`, `support`, `pricing`) inline with titles.
  - Integrated 4-pillar trust stats directly inside the canvas with full dotted grid floor transparency and updated "10+ Delivered Projects".
  - Vertical spacing normalized between Section 2 -> 3 and Section 3 -> 4.
- **Global Section Headers**: **STANDARDIZED & UNIFIED ✨**
  - All sections (01, 02, 03, 04, 05, 06) now use the Section 04 inline format: Heading + accent followed immediately by the subtext separated by an em dash (`—`).
- **Section 05 (Client Words / Testimonials - `src/components/home/Quotes.tsx` & `src/content/testimonials.ts`)**: **APPROVED & LOCKED 🔒**
  - Infinite moving marquee running at 60fps GPU-accelerated speed with pause-on-hover.
  - Left & right soft gradient masks for smooth fade-in / fade-out.
  - Lighter card color (`bg-[#1b2248]` hover `bg-[#222a58]`) with crisp rim light and high-contrast readability against the dark background.
  - 4 optimized square avatars (`avatar-1.webp` through `avatar-4.webp` in `public/testimonials/`, 5-9KB each).
  - Placeholder instruction texts and dashed dev outlines removed.
- **Section 06 (Industries We Serve - `src/components/home/IndustryList.tsx` & `src/content/industries.ts`)**: **APPROVED & LOCKED 🔒**
  - SectionHead streamlined to single bold headline: `Domains we empower. Engineered for depth.`.
  - Open, container-free layout floating directly across the section.
  - 3-row bi-directional continuous infinite moving marquee (Row 1 Left, Row 2 Right, Row 3 Left at varied speeds) with pause-on-hover.
  - Luminous light brand marks styled with theme soft-violet accents (`#c4b5fd`), light slate typography (`text-slate-200` hover `text-white`), and crisp SVG icons.
  - Soft left & right bilateral edge masks (`mask-image: linear-gradient`) for a seamless infinite horizon.
- **Section 07 (Frequently Asked Questions - `src/components/home/Faq.tsx` & `src/content/faq.ts`)**: **APPROVED & LOCKED 🔒**
  - Unified SectionHead (Index `07`, Eyebrow `Frequently Asked Questions`, inline headline + em dash subtext).
  - Constrained to an optimal centered reading width (`max-w-4xl mx-auto`) so concise questions and answers feel comfortable and tightly aligned with the plus indicators.
  - High-contrast interactive rows with numeric mono indicators (`01`-`05`), illuminated plus badges, and smooth grid-template-rows expansion.
- **Global Theme Scrollbar**: **IMPLEMENTED ✨**
  - Custom thin 6px scrollbar synchronized with the brand: `#060713` cosmic dark track + soft violet thumb (`rgba(139, 92, 246, 0.45)`, hover `rgba(167, 139, 250, 0.8)`), supported across all modern browsers (WebKit + Firefox).

- **Section 08 (Interactive Contact Section with Rotating Wireframe Globe - `ContactWithGlobe.tsx`)**: **APPROVED & LOCKED 🔒**
  - Viewport-fitted 2-column layout matching 21st.dev reference.
  - Left column: Unified Index `08` + Eyebrow `Get In Touch`, display heading, direct channels (Email `hello@xenzolve.com`, Phone/WhatsApp `+880 1633-707780`, Location), and continuously auto-rotating D3 TopoJSON wireframe globe with soft bottom gradient fade and pause-on-offscreen performance discipline.
  - Right column: Clean architectural form card (`bg-[#0d122b]`, `border-white/10`, `shadow-[0_24px_60px_rgba(0,0,0,0.65)]`) with Full Name & Service Type dropdown (2-col), Email Address (full width), Message (textarea), honeypot anti-spam, and responsive submit button.
  - Company and budget fields completely removed per client directive; Service Type dropdown maps directly to backend inquiry payload.
  - Anchored to `id="contact"` so all "Start a project" / "Let's Talk" buttons across the site navigate directly here.
- **Section 09 (Final CTA Band - `src/components/home/CtaBand.tsx`)**: **REMOVED PER CLIENT DIRECTIVE 🔒**
  - Removed "Ready to transform your business?" CTA card to let the page flow cleanly from Section 08 (Interactive Contact Section) directly into the footer.
- **Global Footer & Brand Display (`SiteFooter.tsx` & `TextHoverEffect.tsx`)**: **APPROVED & LOCKED 🔒**
  - Integrated massive outlined typographic brand display **"XENZOLVE"** (`TextHoverEffect.tsx`) spanning edge-to-edge across the full content length of the footer section (underneath social icons to copyright).
  - Increased font height and width with generous letter gaps (`textLength="815"` for `ENZOLVE` across `viewBox="0 0 1010 140"`).
  - Customized the **"X"** with the authentic geometric dual-chevron cybernetic XenZolve brand logo emblem path matching the home-screen mark.
  - Interactive cursor-following radial mask reveals a vibrant neon iridescent gradient beam across both the custom "X" emblem and "ENZOLVE" on hover, with initial SVG stroke animation and brand cyan `#3ca2fa` illumination.
  - Ambient cosmic glow (`FooterBackgroundGradient`) rising softly from the footer bottom edge.
- **Back to Home Navigation (`BackToHome.tsx` & Navigation Bars)**: **IMPLEMENTED ✨**
  - Global floating **Back to Home** button with upward arrow and theme violet glow preserved at the bottom-right corner, appearing smoothly when scrolled down past 350px.
  - Navbar and bottom notched dock updated to replace redundant "Home" with **"About Us"** linking directly to Section 02 (`/#advantage`).
- **Global Footer & Navigation (`SiteFooter.tsx`, `SiteHeader.tsx`, `FloatingBottomNav.tsx`, `MobileMenu.tsx`)**: **OPTIMIZED & UNIFIED ✨**
  - Excessive vertical padding in Footer normalized to compact, well-balanced dimensions.
  - Clean anchor navigation:
    - `About Us` (`/#advantage`), `Services` (`/#services`), `Process` (`/#process`), `Why Us` (`/#why-us`), `FAQ` (`/#faq`), and `Start a project` (`/#contact`).

## 3. Active Next Steps
1. Client final review of full homepage and navigation flow.
