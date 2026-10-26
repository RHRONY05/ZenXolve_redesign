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
  - Desktop View (`md:` and above): 6 services organized via 2 vertical + 1 horizontal divider lines on n8n-style dotted grid floor with interactive arrow links.
  - Mobile View (`< md`): Height constrained to contain a single service card at a time to eliminate tiring vertical scrolling; features an interactive hardware-accelerated continuous swiper with 4.5s auto-advance, touch gesture swipe (left/right), pause on touch/hover, 6 interactive indicator dots, and previous/next arrow control buttons at the bottom.
  - Header converted to stacked 2-row layout with full-width title like Section 02.
  - Backup preserved at `src/components/home/ServicesGrid.backup.tsx`.
- **Section 02 (The Single-Studio Advantage - `src/components/home/StudioComparator.tsx`)**: **APPROVED & LOCKED 🔒**
  - Sequential interactive 3-stage circuit architecture (Design → Code → Automated Operations) vs. traditional 3-agency handoff friction.
  - Interactive mode switch ("XenZolve Studio" vs. "3 Separate Agencies").
  - Clean solid shell styling (`bg-[var(--surface)]/95 p-5 sm:p-8 backdrop-blur-xl shadow-[0_24px_60px_rgba(0,0,0,0.65)]`).
  - Redundant bottom banner removed completely per client instruction.
- **Section 03 (How We Work - `src/components/home/ProcessSteps.tsx`)**: **APPROVED & LOCKED 🔒**
  - Interactive scroll-stacking deck of cards (sticky tab offsets mimicking the client reference).
  - 4 distinct colored cards: Sky Blue (Discovery), Fresh Mint (Design), Soft Lavender (Engineering), Warm Peach (Deployment).
  - Left column: Step title, display headline, process description, and bold highlighted key deliverables with ▶ bullet points (redundant PHASE pill badges removed for clean header focus).
  - Mobile Optimization (`< sm`): Descriptive paragraph hidden and bullet points streamlined to bold key deliverable highlights without secondary descriptions, reducing mobile card height by 275px (from 938px to 662px) so cards fit cleanly within the viewport. Full text preserved on desktop (`sm:` and above).
  - Right column: Full-height Orbital Constellation with central core hubs (Brain, Pen, CPU, Globe) and continuous, seamless flowing circuit connections with large brand tool icons.
- **Section 04 (Why Xenzolve - `src/components/home/Reasons.tsx`)**: **APPROVED & LOCKED 🔒**
  - Unified with Section 01's architectural Light Canvas layout (dark outer frame + dark window header + light dotted grid floor).
  - Desktop View (`md:` and above): 6 contiguous boxes divided via 2 vertical + 1 horizontal divider lines with inline Icons8 color icons (`target`, `speed`, `secure`, `innovative`, `support`, `pricing`).
  - Mobile View (`< md`): Shorter height containing 1 reason card at a time with continuous 4.5s auto-advance, touch drag gestures, pause on interaction, 6 progress indicator pills, and bottom custom circular arrow control buttons.
  - Integrated 4-pillar trust stats (98% Client Retention, 10+ Delivered Projects, < 2h Direct Engineer SLA, 100% IP & Code Ownership) kept permanently fixed on the canvas floor across all mobile & desktop viewports with full dotted grid floor transparency.
  - Vertical spacing normalized between Section 2 -> 3 and Section 3 -> 4.
- **Global Section Headers & Typography**: **STANDARDIZED & UNIFIED ✨**
  - All sections (01, 02, 03, 04, 05, 06) now use the Section 04 inline format: Heading + accent followed immediately by the subtext separated by an em dash (`—`).
  - Italic font styling completely removed everywhere across all headings, accent spans, and sub-elements (`em.acc, .acc` set to `font-style: normal`), providing a clean, cohesive, upright architectural font appearance.
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

## 3. Active Next Steps (For Next Session)
1. **Mobile Responsiveness Audit & Optimization**:
   - Comprehensive viewport audit (360px, 390px, 412px, 768px, 1024px) across all 8 homepage sections.
   - Verify layout stacking, typography scale, touch targets, and mobile performance for:
     - Hero centerpiece and project carousel
     - Section 01 Services Grid (architectural frame and cards on mobile)
     - Section 02 Studio Comparator (mode toggle and circuit cards)
     - Section 03 How We Work (stacking deck + orbital constellation on small screens)
     - Section 04 Why XenZolve (6 boxes + trust pillars)
     - Section 05 & 06 Marquees (touch pause-on-hover & smooth 60fps translation)
     - Section 07 FAQ accordion touch targets
     - Section 08 Contact & Rotating Wireframe Globe (form inputs, dropdown, and globe scaling)
     - Global Footer & Brand Display ("XENZOLVE" SVG scaling without horizontal overflow)
  - **Dual-Palette Multi-Theme Calibration (`cosmic` vs `editorial`)**: **APPROVED & FULLY VERIFIED ACROSS ALL 8 SECTIONS ✨**
    - **WebGL Shader Canvas (`NebulaShader.tsx`)**: Dynamically interpolates between Cosmic Violet (`#060713`, midnight navy, cyan mist, soft ice crests) and Warm Editorial (`#151817`, deep warm charcoal, umber slate, burnt terracotta, and warm amber crests) via live `u_palette` uniform with smooth 60fps lerp transitions.
    - **Hero Section (`HeroPhoto.tsx` & `HeroProjectsCarousel.tsx`)**:
      - 3 Service Pillars adapt dynamically: violet/cyan/pink in Cosmic Violet <-> terracotta (`#ff7857`)/warm amber (`#facc15`)/sage emerald (`#59c7a6`) in Warm Editorial.
      - 4 Social Icon Buttons (Facebook, WhatsApp, LinkedIn, Instagram) adapt from violet rim to `border-[var(--line-strong)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)] hover:shadow-[0_0_18px_var(--accent-soft)]`.
      - 2-Row Project Showcase cards adapt from dark purple background to `bg-[var(--surface-2)]/90`, `border-[var(--line)]`, `hover:border-[var(--accent)]/50`, and `hover:shadow-[0_0_30px_var(--accent-soft)]`.
    - **Architectural Frames (Sections 01 & 04 - `ServicesGrid.tsx` & `Reasons.tsx`)**: Replaced hardcoded `#090b1e` and `#121634` with `bg-[var(--surface-2)]`, `bg-[var(--surface)]`, and `border-[var(--line)]`, harmonizing with both cosmic navy and warm charcoal surfaces.
    - **Section 02 Studio Comparator (`StudioComparator.tsx` & `globals.css`)**:
      - Replaced hardcoded keyframe colors (`circuit-stage1-glow`, `circuit-arrow1-circle`, `circuit-stage2-glow`, `circuit-arrow2-circle`, `circuit-stage3-glow`) with explicit dual-theme animation overrides (`circuit-stage1-glow-editorial`, etc.) so Stage 01, Stage 02, Stage 03, and connecting laser arrows pulse exclusively in warm terracotta (`#ff7857`), warm amber (`#facc15`), and sage emerald (`#59c7a6`) in Warm Editorial mode, with zero residual cosmic violet flashing.
    - **Client Words Marquee (Section 05 - `Quotes.tsx`)**: Replaced hardcoded `#1b2248` with `bg-[var(--surface-2)]` (hover `bg-[var(--surface-3)]`).
    - **Industry Marquee (Section 06 - `IndustryList.tsx`)**: Replaced hardcoded `#c4b5fd` with `text-[var(--accent-text)]` (hover `group-hover:text-[var(--accent-text)]`), rendering theme-matched soft peach in Editorial and soft violet in Cosmic.
    - **FAQ Accordion (Section 07 - `Faq.tsx`)**: Replaced hardcoded violet with `text-[var(--accent-text)]`, `border-[var(--accent)]/50`, and `bg-[var(--accent-soft)]`.
    - **Contact & Wireframe Globe (Section 08 - `ContactWithGlobe.tsx`)**:
      - Globe bottom gradient fade updated to `from-[var(--bg)]` to eliminate hardcoded dark seams.
      - Architectural form card updated to `bg-[var(--surface)]` and all inputs/textarea updated to `bg-[var(--bg)]/90` with `focus:border-[var(--accent)]` and `focus:ring-[var(--accent-soft)]`, completely resolving the leftover `#080b1a` blue textarea.
    - **Back to Home Floating Button (`BackToHome.tsx`)**:
      - Synchronized with `bg-[var(--surface-2)]/95`, `hover:bg-[var(--surface-3)]`, `hover:border-[var(--accent)]/60`, and arrow badge to `text-[var(--accent-text)]`, eliminating hardcoded `#090b1e` and violet.
    - **Footer Wordmark & Atmosphere (`SiteFooter.tsx` & `TextHoverEffect.tsx`)**:
      - Ambient rise updated to `var(--accent-soft)` for sunset glow in Editorial and celestial cyan glow in Cosmic.
      - Unhovered outline stroke is theme-matched: signature `#3ca2fa` cyan with neon bloom in Cosmic Violet, and `#ff7857` burnt orange with warm glow in Warm Editorial.
      - Hover reveal lightning beam is locked to the default vibrant multi-color iridescent neon beam (`#38bdf8` → `#818cf8` → `#c084fc` → `#38bdf8` → `#80eeb4` → `#06b6d4`) across both themes per client preference ("the default color that looks better").
    - **Floating Dock & Custom Scrollbar (`FloatingBottomNav.tsx`, `MobileMenu.tsx` & `globals.css`)**:
      - Mobile navigation bar attached edge-to-edge to the bottom and side borders (`bottom: 0`, `inset-x: 0`, full width, zero floating margins) like a native mobile phone app bar, with safe-area padding for home-indicator screens.
      - Full-width SVG path contour with centered scooped cradle and continuous neon-glowing top rim spanning from left screen edge to right screen edge.
      - Synchronized navigation links 1:1 with desktop: **About Us** (`/#advantage`), **Services** (`/#services`), **Let's Talk** (`/#contact`), **Process** (`/#process`), and **Why Us** (`/#why-us`), with active section scroll-spy tracking and smooth animated anchor scrolling.
      - Dock body and mobile SVG path synchronized to `var(--surface)` and `var(--line-strong)`.
      - Mobile action button background synchronized to `from-[var(--surface-2)] to-[var(--surface)]`.
      - Scrollbar thumb and track synchronized to `var(--accent)` and `var(--bg)`.

## 3. Active Next Steps (For Next Session)
1. **Mobile Responsiveness Audit & Optimization**:
   - Comprehensive viewport audit (360px, 390px, 412px, 768px, 1024px) across all 8 homepage sections.
   - Verify layout stacking, typography scale, touch targets, and mobile performance for:
     - Hero centerpiece and project carousel
     - Section 01 Services Grid (architectural frame and cards on mobile)
     - Section 02 Studio Comparator (mode toggle and circuit cards)
     - Section 03 How We Work (stacking deck + orbital constellation on small screens)
     - Section 04 Why XenZolve (6 boxes + trust pillars)
     - Section 05 & 06 Marquees (touch pause-on-hover & smooth 60fps translation)
     - Section 07 FAQ accordion touch targets
     - Section 08 Contact & Rotating Wireframe Globe (form inputs, dropdown, and globe scaling)
     - Global Footer & Brand Display ("XENZOLVE" SVG scaling without horizontal overflow)
