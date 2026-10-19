# Xenzolve web: build progress

## Slice 1 (done): scaffold + Home `/`
`npm run build` passes (Next 16.4.2, React 19, Tailwind v4, TS strict). Run `npm run dev -- -p 3100`.

### Built
- **Tokens**: every variable from `.agent/design/tokens.css` lives in `src/app/globals.css` (light + `prefers-color-scheme: dark`) and is mapped in `@theme` (colours, fonts, type scale `text-display-*`, radii, `lgx` breakpoint = 1100px). Extra tokens added for things the design hard-coded: `--photo-ink`, `--white`, `--flash-glow`, `--cta-accent`, `--mock-*` (phone mockups). No raw hex in components.
- **Fonts**: Instrument Serif (400 + italic), Inter Tight (variable), JetBrains Mono (400/500) via `next/font/google`.
- **Icons**: `components/ui/Icon.tsx` (lucide-react, same names as `data-lucide`). lucide 1.x removed brand icons, so `facebook`, `instagram`, `linkedin` are inline SVGs with the old lucide paths.
- **Assets**: hero photo + both logo PNGs in `public/`. Hero uses `next/image` with `priority`; credit line links to the Commons page and must stay (CC BY-SA 4.0).
- **Content** in `src/content/*.ts`: site, services, steps, reasons, industries, faq, work, testimonials, picker. `work` and `testimonials` carry `placeholder: true` and render through `<Placeholder>` / `<PlaceholderTag>` (dashed outline and tag in dev, plain in production).
- **Components** (`src/components`): `chrome/` ChromeProvider, SiteHeader (on-photo, then fixed paper after the hero), MobileHeader, MobileMenu (focus trap, Esc, scroll lock, focus returns to opener), MobileContactBar, SiteFooter; `home/` HeroPhoto, DhakaClock (live Asia/Dhaka), WorkGrid/WorkCard, Services (ServiceGroup/ServiceRow), ProcessSteps, Reasons, Quotes/QuoteCard (swipe + dots on mobile), IndustryList, Faq, CtaBand; `picker/` NeedPicker (radio group, arrow keys/Home/End, cross-fade) + PickerScenes (agent, store, erp) + Mock primitives; `ui/` Button (primary, accent, ghost, on-photo, glass, inverse, ghost-inverse), LinkArrow, Section, SectionHead, Logo, Placeholder.
- **Motion**: hero drift + flash, hero text rise (CSS, fill `backwards`, so content is visible with or without JS), section heads fade in via a scroll-driven `view()` animation under `@supports` (always visible where unsupported), picker cross-fade, work-card hover. All off or reduced under `prefers-reduced-motion`.

### Verified
Headless Chrome side-by-side vs `desktop/01-home.html` at 1440 and `mobile/01-home.html` at 390 (my page in a 390px iframe), light and dark. Layout matches section by section. Fixed during the pass: Tailwind `leading-*` leaking into `md:text-display-*`, base rules moved into `@layer base` (they were overriding button text colours), `lgx` breakpoint in rem so it sorts after `md`, picker "Something else" link hidden on mobile.

### Known small differences
- Total page height is about 9 px taller than the design by the Reasons section (sub-pixel row heights). Not chased.
- Mobile placeholder tag in Client words shows the long desktop text; design has a shorter one.
- FAQ opens instantly (native `<details>`); the spec's height animation is not done.
- CTA italic in dark uses cobalt `#2F4BFF` (the design's forced-dark rule) in both dark modes.
- Nav/footer links point to routes that do not exist yet (see slice 2/3), so they 404.
- Nothing was tested with a real screen reader. Menu focus trap and Esc were written but only reviewed in code, not driven in a browser.

## Slice 2 (in progress): Work, Case study, Services, About, Stack
- [x] **Task 1: `/work`**: PageHero, FilterChips (`?type=`, no reload), WorkGrid from `content/work.ts`, empty state from `states.html`. Design: `desktop/02-work.html`, `mobile/04-work.html`. Verified at 1440 and 390, light and dark. Zero horizontal overflow, touch targets >= 44px on mobile. Header count for Work derived dynamically from content.
- [x] **Task 2: `/work/[slug]`**: case-study template (CaseStudyMeta, cover, Challenge / What we built / Result, StatRow, screenshots, quote, NextCase, BackLink). `generateStaticParams` from `content/work.ts`. Prerenders all 6 project static pages. Design: `desktop/03-case-study.html`, `mobile/05-case-study.html`. Side-by-side verified at 1440 and 390, light and dark.
- [x] **Task 3: `/services`**: ServiceDetail ×6 with `id=<slug>` anchors, filter chips (`?group=`, no reload), ProcessSteps, Faq (without 08 index), CtaBand. Timelines real where known, placeholders for AI/Bots/UI-UX. Design: `desktop/04-services.html`, `mobile/06-services.html`. Side-by-side verified at 1440 and 390, light and dark.
- [x] **Task 4: `/about`**: PageHero, PhotoBand (Dhaka storm photo, height 560px desktop / 320px mobile with caption + Commons credit link), StatRow (placeholder), TeamGrid (placeholder: 4 team members), Reasons, IndustryList (with 03 index). Prerendered statically. Verified side-by-side at 1440 and 390, light and dark. Zero horizontal overflow.
- [ ] **Task 5: `/stack`**: StackGroup/ToolTile from `content/stack.ts`, 301 `/technologies` -> `/stack`, dynamic Stack nav count. Design: `desktop/07-stack.html`, `mobile/10-stack.html`.


## Slice 3 (todo): Contact, SEO/OG, 404, Lighthouse, deploy
- `/contact` form (ContactChannels, ContactForm, FormSuccess; validate on submit then blur; `?service=ai|web|systems` from the picker preselects the chip; the picker links already use it) and a server action or API route for sending.
- Production gate: README says the build must fail while `placeholder: true` items remain. Not implemented (it would break `npm run build` today). Add a prebuild script that scans `src/content/*.ts`, gated by an env flag.
- Per-page `<title>` and description, Open Graph image (hero photo + headline), favicon from the logo mark, sitemap/robots, `not-found` page (design in `states.html`).
- Swap PNG logo for the team's SVG (`Logo.tsx`, `currentColor`).
- Lighthouse pass, real photo/OG assets, then deploy (not started; no repo or hosting created).
