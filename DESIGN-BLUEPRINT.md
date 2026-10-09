# 🎯 DESIGN-BLUEPRINT.md — Leanquality × DAQ Fusion Blueprint

> ⚠️ **AGENT RULE:** This file defines HOW the UI upgrade must be executed.
> Read together with COLOR-SYSTEM.md (colors) and CONTENT-MASTER.md (content).
> Content NEVER changes — only presentation, effects, and layout treatment.
> All colors come from COLOR-SYSTEM.md tokens. Never raw hex.

---

## 1. DESIGN DIRECTION

**Old personality:** Corporate, standard, safe
**New personality (DAQ-adapted):** "Premium Engineering House — warm gold luxury"

Core strategy: **HYBRID LIGHT/DARK**
- Dark cinematic sections: hero banners, stats strips, CTA strips, footer
  (bg: brand-earth-900 / brand-maroon-900, text: pollen-300 + neutral-50)
- Light content sections: white / neutral-50 (black headings, neutral-600 body)
- Rhythm: dark hero → light content → dark strip → light → dark climax footer

---

## 2. FONT SYSTEM UPDATE

Keep: Roboto (body), Roboto Slab (editorial headings)
ADD: **JetBrains Mono** (Google Fonts) — DAQ's signature instrumentation font

| Role | Font | Usage |
|---|---|---|
| Display H1/H2 | Roboto Slab (600/700) | Hero + section titles, tight line-height 1.05 |
| Body | Roboto (400/500) | Paragraphs, 1.7 line-height |
| Instrumentation | JetBrains Mono (500) | Chapter labels, tags, stats, buttons-ghost, coordinates |

Instrumentation style (mandatory): 10-11px, UPPERCASE, letter-spacing 0.25-0.3em,
tabular-nums for all numbers.

---

## 3. PATTERN ADOPTION MAP (DAQ pattern → Leanquality location)

### ✅ PHASE 1 — Adopt (High impact, all pages)

| # | DAQ Pattern | Adapted For | Treatment |
|---|---|---|---|
| P01 | Liquid Ink Text Reveal | All H1 heroes (Home, About, Services, DM, Career, Contact, Blog) | Wireframe stroke layer (pollen-300 at 32% alpha) + solid fill layer (pollen-300). Scroll-bound mask fill. Dark heroes only. |
| P02 | Morphing Floating Nav Pill | Header | Transparent → scroll>40px → compact frosted dark pill: bg-earth-900/80, backdrop-blur, border-white/10, rounded-full, 0.7s cubic-bezier(0.19,1,0.22,1). Logo + nav + gold CTA "Start Project" style. |
| P03 | Monospace Chapter Anchors | Every section on every page | `01 / Our Focus` style: mono 10px uppercase pollen-400 + 1px hairline rule (white/10 on dark, neutral-200 on light) |
| P04 | Monospace Tech Stack Pills | Services detail, DM Related Technology, Home "Technology We Used" | Pills: mono 10px uppercase, px-3 py-1, rounded-full, bg-white/5, border-white/12 (on dark) / bg-neutral-100, border-neutral-200 (on light) |
| P05 | Tabular-Nums Counters | Home + DM stats (500+, 200+, 1.2M+) | Dark strip bg-maroon-900, numbers pollen-300 mono tabular-nums, count-up on scroll, hairline dividers between stats |
| P06 | Expandable Reading Rows | Services deliverables, Career jobs list, About quality policy, Blog list | 1px hairline rows, mono index (01, 02...), hover: text→100%, row lift 2px, description expands. Career: click expands job details + Apply button |
| P07 | CAD Blueprint Grid Canvas | Dark hero backgrounds + stats strips | 24px grid: linear-gradient hairlines white/4 on earth-900. Subtle — never on light sections |
| P08 | Capability Tile Hover | Home "Our Focus In" (5 cards) + Services page cards | Number top (mono), title, 2-line desc, tag strip, "Explore →" arrow hover translate-x-1.5, border white/10→white/35 hover, bg-white/2 fill hover |
| P09 | Full-Height Climax Footer | Footer upgrade | Dark earth-950, giant Slab headline "Let's build something exceptional." + huge arrow link → /contact, then existing 4 columns below, coordinate line: "18.5639° N, 73.7746° E — Baner, Pune" in mono |
| P10 | Wireframe SVG Trace | Logo mark + section divider ornaments | pathLength animation, stroke pollen-400, traces on first load/hover |

### ⚠️ PHASE 2 — Adapt (Selective, after Phase 1 review)

| # | DAQ Pattern | Adapted For | Treatment |
|---|---|---|---|
| P11 | Diptych Before/After Sheets | About (Vision vs Mission), DM "Why us" | Left card: dashed border = "Without LQSIPL" pain points; Right card: solid border + subtle fill = "With LQSIPL" outcomes. Subgrid-aligned headers |
| P12 | Scrollytelling Sticky Rail | DM "Our Approach" (4 steps) | 220svh container, sticky stage, vertical rail fills, steps highlight sequentially: Goals → Objectives → KPIs → Promotional Strategy |
| P13 | Intro Curtain | First load only (sessionStorage) | Logo SVG traces 1.4s → curtain lifts into header. Skip on repeat visits. respects prefers-reduced-motion |
| P14 | Stepper Tactile Buttons | Lightbox controls, mobile nav toggles | 44px targets, active scale 0.96, focus-visible outlines |

### ❌ SKIP (Not fitting content/complexity)

| # | DAQ Pattern | Reason |
|---|---|---|
| S01 | Document Scanner (SSRS vs PBI) | No equivalent legacy-vs-modern content |
| S02 | Ledger Paper Specimen | No financial report content |
| S03 | CAD Interactive Pipeline Inspector | Content doesn't need it — revisit if client wants architecture showcase |
| S04 | Web Audio Synth Clicks | Corporate audience — too gimmicky |
| S05 | Container Queries + Subgrid everywhere | Tailwind responsive breakpoints sufficient |

---

## 4. PAGE-BY-PAGE BLUEPRINT (content = CONTENT-MASTER.md, unchanged)

### HOME (/)
1. **Hero** (dark, 100svh): earth-900 bg + P07 grid + radial pollen glow (12% opacity top-left). Badge pill: mono uppercase "PREMIER IT SERVICES & CONSULTING IN PUNE" with pollen border. H1 P01 liquid ink reveal. White body copy. CTAs: gold pill (pollen-400→pollen-300 gradient, black text) + ghost mono button. P10 logo trace.
2. **About-preview** (light): white bg, black Slab H2, P03 chapter "01 / Who We Are"
3. **Our Focus In** (dark strip): earth-900, P08 capability tiles × 5 (IoT, 5G, AI/ML, Blockchain, Data Science) with mono index 01-05
4. **Elevate + 6 features** (light): P06 reading rows (Expertise, Tailored Solutions, Cutting-Edge, QA, Timely, Transparent)
5. **Why We Are Different** (light neutral-50): 3 cards AWS/Salesforce/AutomationEdge, P04 pills for tech names
6. **Technology We Used** (light): P04 pills grid
7. **Values** (light): 6 compact value chips
8. **Counters** (dark maroon-900 strip): P05 — 500+ / 200+ / 1.2M+
9. **Footer climax** (P09)

### ABOUT (/about)
Dark hero (P01 "About LQSIPL") → light: intro, Vision, Revolutionizing (P03 chapters 01-04) → Quality Policy + Objective (P06 rows) → Corporate Values (10 chips grid) → CTA strip

### SERVICES (/services + 10 detail pages)
- Index: dark hero + P08 tiles × 10 with mono indexes + pills
- Detail: dark hero P01 (service name) → light content: P03 chapters (01 / Overview, 02 / What We Deliver as P06 rows, 03 / Technologies as P04 pills) → dark CTA strip "Discuss your project →"

### DIGITAL MARKETING (/digital-marketing + 4 subs)
- Main: dark hero → light Why Us → P05 stats strip → **P12 scrollytelling rail (Our Approach)** → Features (6, light) → Related Technology (8, P04 pills, light)
- Subs: same hero + chapter pattern, simplified

### CAREER (/career)
Dark hero ("Become a part of our dedicated team.") → light: P06 expandable job rows (mono index, position title, hover lift, click → expands JD + responsibilities + requirements + gold Apply button → existing JobModal unchanged)

### CONTACT (/contact)
Dark hero P01 → light: info cards (mono labels: ADDRESS / PHONE / EMAIL / HOURS) → form (DAQ brief style: hairline inputs, focus border pollen-400, mono labels) → map embed (grayscale filter, hover color)

### EVENTS (/events)
Light gallery: P07 not used; hairline grid, mono captions "001 — Team Gathering", existing Lightbox + P14 tactile controls

### BLOG (/blog + posts)
Light: P06 reading rows list (mono index, title, date, hover expand excerpt) → post stub pages with P03 chapter header

### 404
Dark, giant outlined "404" wireframe→fill on load (P01 variant), ghost button home

---

## 5. MOTION SYSTEM (global)

- Easing standard: cubic-bezier(0.19, 1, 0.22, 1)
- Durations: micro 150-200ms / standard 250-300ms / nav morph 700ms
- Scroll reveals: fade-up 16px, stagger children 60ms
- All motion respects prefers-reduced-motion (disable ink reveal, parallax, counters render final values)
- IntersectionObserver once:true (no re-trigger)

## 6. IMPLEMENTATION RULES

1. Phase 1 first → review → Phase 2. Never mix.
2. One pattern = one reusable component (InkReveal.jsx, ChapterAnchor.jsx, TechPill.jsx, ReadingRows.jsx, CounterStrip.jsx, CapabilityTile.jsx, ClimaxFooter part of Footer.jsx)
3. New components go to components/daq/ folder — existing components untouched until swap
4. Every dark section: pollen-300 headings, neutral-50 body, white/10 borders
5. Every light section: black headings, neutral-600 body, neutral-200 borders
6. `npm run build` must pass after each phase
7. Update README.md structure table after adding new components

## 7. FINAL CHECKLIST

- [ ] All heroes use P01 ink reveal + P07 grid (dark)
- [ ] Nav morphs (P02) on all pages
- [ ] Every section has P03 chapter anchor
- [ ] All tech mentions use P04 pills
- [ ] Counters P05 with tabular-nums
- [ ] Jobs + deliverables + blog use P06 rows
- [ ] Footer = P09 climax
- [ ] Fonts loaded: Roboto, Roboto Slab, JetBrains Mono
- [ ] Colors: only COLOR-SYSTEM.md tokens
- [ ] Content: zero changes from CONTENT-MASTER.md
- [ ] Reduced-motion respected
- [ ] Build passes