# Complete Forensic UI/UX Design Analysis: Oxigen (oxigen.sa)

> **Document Type:** Reference UI/UX Architectural & Interaction Blueprint  
> **Source Site:** [https://www.oxigen.sa/](https://www.oxigen.sa/) (Awwwards Site of the Day / Studio: Salt & Hue)  
> **Target Output:** `Reference-Website-2.md`  
> **Status:** Fully Crawled, Decompiled & Codified (All 5 production routes + 3D WebGL engine + 5 bespoke Canvas 2D interaction shaders analyzed)

---

# 1. BRAND & DESIGN SYSTEM

### 1.1 Color Palette & Surface Tokens
The Oxigen visual identity is rooted in an extraordinary **Gulf Sovereign Tech** aesthetic: deep petroleum-teal dark canvases juxtaposed with warm editorial ivory paper (`#f4f4f4`), cold slate hairlines, and glowing bioluminescent cyan/teal accents. It rejects generic neon purple/blue SaaS palettes in favor of a sovereign, high-stakes institutional tone.

#### Background Ramps & Canvases
| Hex / RGBA Code | Token / CSS Variable | Applied Locations |
| :--- | :--- | :--- |
| `#112228` | `--bg` / Deep Petroleum Teal | Sitewide dark canvas: root `body`, `#app` WebGL canvas backing, dark hero chapters, footer background, page transition cover `.px-p2` |
| `#0f2024` | Contrast Petroleum Black | Deep dark tile backgrounds, accent card text in `#research`, mobile nav dropdown background |
| `#14201f` | Dark Ink Surface | Dark text color when navbar is in light mode (`.navbar.on-light .ox-logo`), button borders over light surfaces |
| `#1c3a42` | Midnight Petrol Hover | Primary button hover background state (`.ct-submit:hover`), interactive tap highlight |
| `#f4f4f4` | Editorial Paper White | Section sheet `#services`, `#startups`, `#px-scene`, `.article-body` background, transition `#paper` backing |
| `#ffffff` | Pure White Surface | Service accordion cards (`.sv-card`), form input fields (`.ct-field input`), footer button hover state |
| `#e6e6e3` | Cool Limestone Grey | Research panel 03 (`.rs-light`) background |
| `#efeae1` | Warm Ivory Stone | Footer primary CTA button background (`.ft-btn`), submit button text color |
| `#06121a` | 3D Space Void Top | Three.js WebGL scene top gradient stop (`bgTop`) |
| `#0b2630` | 3D Space Void Mid | Three.js WebGL scene mid gradient stop (`bgMid`) |
| `#00364a` | 3D Deep Horizon Fog | Three.js WebGL fog color (`THREE.FogExp2(0x00364a, 0.009)`) and bottom gradient stop (`bgBottom`) |

#### Primary Text & Inks
| Hex / RGBA Code | Token / CSS Variable | Applied Locations |
| :--- | :--- | :--- |
| `#f4f2ee` | `--ink` / Raw Silk White | Primary display headings on dark surfaces (H1 display, hero lede copy, article titles) |
| `#ece8df` | Ivory Editorial Display | Footer statement headline (`.ft-headline`), preloader logo fill |
| `#1b1b18` | Charcoal Obsidian Ink | Primary body text on light sheets (`#services .sv-title`, `.article-body p.lead`, `.ct-title`), startup canvas dots |
| `#2b2b27` | Deep Graphite Ink | Longform article paragraph prose (`.ab-inner p`) |
| `#3c3c36` | Warm Muted Charcoal | CEO biography text (`.px-bio`), secondary card descriptions |
| `#b3afa6` | `--muted` / Warm Sand | Chapter metadata, muted subtitles, secondary descriptors |
| `#bdbbb2` | Muted Headline Span | Muted word contrast in service title (`.sv-title .mut`) |
| `#b3bcbc` | Cool Editorial Dek | Article lede subtitles (`.article-dek`) |
| `#7E8E90` | `--quiet` / Slate Monospace | Monospace eyebrow labels, article reading metadata, copyright copy (`#7b8a8d`) |
| `#59584f` / `#6a6961` | Warm Mineral Grey | Form field labels (`.ct-field label`), input field placeholder icons |

#### Brand Accents & Bioluminescence
| Hex / RGBA Code | Token / CSS Variable | Applied Locations |
| :--- | :--- | :--- |
| `#6E9EA4` | `--teal` / Sovereign Cyan | Primary interactive accent: focus rings (`:focus-visible`), reading progress bar (`.read-progress`), article panel 01 (`.rs-accent`), pixel canvas active dots, page transition `.px-p1` |
| `#cfeef2` | Bioluminescent Cyan Wash | Hover background for round arrow badges (`.sv-cta:hover .arw`), active dot glow |
| `#c9a96a` | `--gold` / Gulf Sand Gold | Secondary brand token, accent underlines, historical callouts |
| `#ECEEEE` | `--light` / Frost White | Nav buttons, ghost outline borders, hero action CTAs |
| `#C4CDCD` | `--soft` / Soft Platinum | Hero subtitle copy (`.hero-copy .sub`), footer directory links |

#### Hairlines, Dividers & Grids
| RGBA / CSS Value | Token / CSS Variable | Applied Locations |
| :--- | :--- | :--- |
| `rgba(236, 238, 238, 0.28)` | `--rule` | Global ghost button borders (`.nav-btn`, `.nav-cta`, `.cta-ox`), nav divider lines |
| `rgba(255, 255, 255, 0.12)` | Subtle Dark Rule | Footer horizontal rules (`.ft-rule`, `.ft-rule2`), side-nav passive tick lines |
| `rgba(20, 32, 31, 0.14)` | Light Sheet Hairline | Contact page info grid dividers (`.ct-info`), article sub-dividers |
| `rgba(20, 32, 31, 0.20)` | Form Border Rule | Input and textarea borders (`.ct-field input`, `textarea`) |
| `rgba(20, 20, 16, 0.22)` | Circular Button Ring | Service arrow button outer ring (`.sv-cta .arw`) |

---

### 1.2 Gradient Definitions
Oxigen completely avoids decorative SaaS purple/pink radial blur blobs. All gradients are architectural, atmospheric, or used as functional masks:

1. **Article Cinematic Hero Atmospheric Vignette:**
   ```css
   background-image: linear-gradient(
     180deg,
     rgba(11, 24, 28, 0.58) 0%,
     rgba(17, 34, 40, 0.22) 24%,
     rgba(17, 34, 40, 0.72) 45%,
     rgba(17, 34, 40, 0.90) 66%,
     rgba(17, 34, 40, 0.98) 100%
   );
   ```
   *Usage:* Blends photography (`transformation-hero.jpg`, `twin.jpg`) seamlessly into the petroleum canvas `#112228`.

2. **Preloader Dynamic Shimmer Mask:**
   ```css
   -webkit-mask: linear-gradient(90deg, #000 -5%, transparent 0%);
   mask: linear-gradient(90deg, #000 -5%, transparent 0%);
   ```
   *Usage:* JS dynamically interpolates the stop from `-5%` to `105%` to create a liquid loading fill across the Oxigen SVG wordmark.

3. **3D WebGL Atmospheric Vertical Backdrop:**
   *Top:* `#06121a` (deep space petrol)  
   *Mid:* `#0b2630` (oceanic twilight petrol)  
   *Bottom:* `#00364a` (ambient illuminated horizon)  
   *Usage:* Generated procedural gradient texture mapped to the Three.js scene background.

---

### 1.3 Typography System & Pairing Architecture
The site achieves an ultra-rare balance between **editorial literary authority** and **technical precision** through a three-font typographic pairing:

1. **Display & Structured Sans:** `articulat-cf` / `Articulat CF` (Geometric, sharp humanist structure, ultra-bold weights for display titles, ultra-clean medium weights for cards).
2. **Editorial Literary Serif:** `iowan-old-style-bt` / `Iowan Old Style` (Classical British book face, authoritative, high-contrast italic and roman cuts for statements and longform essays).
3. **Command-Line Monospace:** `Roboto Mono` (Crisp technical tabular data, coordinates, step indices, tags).

#### Complete Typographic Scale Hierarchy
| Level / Role | Font Family | Size (Desktop / Fluid Clamp) | Weight & Style | Line Height | Letter Spacing | Text Transform |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `Articulat CF` | `clamp(2.4rem, 5.5vw, 4.4rem)` | 700 Bold | `1.04` | `-0.025em` | Title Case |
| **Hero Lede Statement** | `Iowan Old Style` | `clamp(1.1rem, 1.6vw, 1.42rem)` | 400 Book Roman | `1.52` | `-0.005em` | Sentence case |
| **Hero Italic Tag** | `Iowan Old Style` | `clamp(15px, 1.4vw, 18px)` | 400 Italic | `1.5` | `normal` | Sentence case |
| **Section Title H2 (Dark)**| `Articulat CF` | `clamp(2.1rem, 4.2vw, 3.6rem)` | 700 Bold | `1.06` | `-0.02em` | Sentence case |
| **Section Title H2 (Light)**| `Articulat CF`| `clamp(1.5rem, 2.6vw, 2.3rem)` | 500 Medium | `1.10` | `-0.02em` | Sentence case |
| **Footer Headline H2** | `Iowan Old Style` | `clamp(1.7rem, 3.0vw, 2.7rem)` | 400 Roman | `1.20` | `-0.006em` | Sentence case |
| **Article Headline H1**| `Articulat CF` | `clamp(2.05rem, 4.6vw, 3.7rem)` | 700 Bold | `1.06` | `-0.02em` | Title Case |
| **Article Section H2** | `Articulat CF` | `clamp(1.5rem, 2.6vw, 2.05rem)` | 700 Bold | `1.16` | `-0.015em` | Sentence case |
| **Article Subheading H3**| `Articulat CF` | `clamp(1.18rem, 1.7vw, 1.42rem)`| 700 Bold | `1.20` | `-0.012em` | Sentence case |
| **Article Lead Paragraph**| `Iowan Old Style`| `1.36rem` (21.76px) | 400 Roman | `1.64` | `normal` | Sentence case |
| **Article Body Prose** | `Iowan Old Style` | `1.16rem` (18.56px) | 400 Roman | `1.78` | `normal` | Sentence case |
| **Card Title (Service)**| `Articulat CF` | `clamp(1.3rem, 1.8vw, 1.65rem)` | 700 Bold | `1.15` | `-0.015em` | Sentence case |
| **Card Body (Service)** | `Articulat CF` | `0.92rem` (14.72px) | 400 Regular | `1.55` | `normal` | Sentence case |
| **Eyebrow / Section Label**| `Roboto Mono` | `0.72rem` (11.5px) | 400 Regular | `1.00` | `+0.28em` | UPPERCASE |
| **Step / Chapter Index**| `Roboto Mono` | `clamp(1.4rem, 2.2vw, 1.9rem)` | 500 Medium | `1.00` | `+0.12em` | UPPERCASE |
| **Nav Button CTA** | `Roboto Mono` | `13px` (Desktop) / `11px` (Mobile)| 400 Regular | `1.00` | `+0.08em` | UPPERCASE |
| **Metadata / Footer Legal**| `Roboto Mono` | `0.78rem` (12.48px) | 400 Regular | `1.60` | `+0.06em` | Tabular |

---

### 1.4 Iconography & Imagery Systems
1. **Dynamic Pixel-Grammar Vector Shaders:**
   Instead of static SVG icons, all service iconography runs on native HTML5 Canvas (`.sv-canvas`, 160x160 backing canvas, 15x15 dot matrix). Each icon executes a mathematical functional shader `f(x, y, t)` running in real-time.
2. **Interactive SVG Dithered Dot Meshes:**
   Startups tiles load high-density vector SVGs (`/su-tile-1.svg`, `/su-tile-2.svg`, `/su-tile-3.svg`) rendered into oversized canvas fields where individual vector rectangles repel away from mouse cursor coordinates using vortex swirl equations.
3. **Dithered Editorial Portraiture:**
   CEO portrait section features an 8x8 Bayer dithering matrix canvas shader that develops a high-resolution base64 photographic portrait pixel-by-pixel as the user scrolls down a pinned 320vh stage.
4. **Zero Stock Photos:**
   100% of photographic imagery consists of authentic Saudi sovereign infrastructure, satellite views, or high-contrast architectural technical drawings.

---

### 1.5 Spatial Rhythm, Radii & Shadows
* **Border Radii:** **0px Absolute Strict Rectilinear Architecture**.  
  All cards (`.sv-card`), inputs (`.ct-field input`), submit buttons (`.ct-submit`), and hero cards have `border-radius: 0`. The ONLY circular element on the entire site is the 30px circular arrow badge (`.sv-cta .arw { border-radius: 50%; }`) and the side-nav ticks.
* **Box Shadows:** Completely absent (`box-shadow: none`). The site creates depth through **contrast layering**, **canvas z-index layering**, and **hairline opacity borders** rather than fuzzy drop-shadows.
* **Vertical Rhythm:**
  * Chapter height: `100svh` / `100vh`
  * Section padding: `clamp(80px, 13vh, 150px) 6.5vw clamp(70px, 12vh, 140px)`
  * Inner content containers: `max-width: 840px` (editorial headers), `max-width: 700px` (longform reading width, exactly 65–75 characters per line).

---

# 2. GLOBAL ELEMENTS (SITEWIDE)

### 2.1 Navigation Header (`nav.navbar`)
* **Layout:** Fixed header spanning 100% viewport width (`position: fixed; top: 0; left: 0; right: 0; z-index: 40; pointer-events: none`).
* **Content:**
  * Left: Oxigen SVG wordmark (`.brand`, `pointer-events: auto`).
  * Right: Nav links container with ghost outlined CTA button (`.nav-btn` / `.nav-cta`, `pointer-events: auto`).
* **Adaptive Surface Inversion (`.navbar.on-light`):**
  When scrolling past dark hero chapters into light sheets (`#startups`, `#services`, `#research`), an IntersectionObserver automatically toggles `.on-light` onto the navbar:
  * Wordmark fill flips: `#ffffff` $\rightarrow$ `#14201f`
  * CTA button text flips: `#ECEEEE` $\rightarrow$ `#14201f`
  * CTA border flips: `rgba(236,238,238,0.28)` $\rightarrow$ `rgba(20,32,31,0.34)`
* **Mobile Menu Pattern ($\le 560\text{px}$):**
  * CTA button compresses to compact padding (`9px 13px; font-size: 11px;`).
  * Hamburger button appears (`.nav-toggle`, 42x36px).
  * Clicking toggles `.navbar.menu-open`, sliding down a glass-backed drawer (`background: rgba(17,34,40,0.97); border: 1px solid var(--rule);`).

---

### 2.2 Right Edge Section Rail (`nav.side-nav`)
* **Layout:** Vertical floating navigation rail pinned to the right edge (`position: fixed; top: 50%; right: clamp(16px, 1.8vw, 34px); transform: translateY(-50%); z-index: 44; mix-blend-mode: difference`).
* **Components:** 4 interactive track links:
  1. `Approach` (`#approach`)
  2. `Capability` (`#services`)
  3. `Products` (`#startups`)
  4. `Articles` (`#research`)
* **Interaction:**
  * Passive state: 14px wide hairline tick (`.side-line`, 1px tall white bar) with hidden text label.
  * Hover / Active state: Label slides into view on the left (`font: 400 11px/1 var(--mono); letter-spacing: 0.14em; text-transform: uppercase;`), hairline tick expands to 28px width with 100% white opacity.
  * IntersectionObserver observes `#footer` and applies `.side-nav.gone` (`opacity: 0; pointer-events: none`) so the rail never overlaps the footer wordmark.

---

### 2.3 The Architectural Preloader (`#loader`)
* **Structure:** Fixed fullscreen dark petroleum canvas (`position: fixed; inset: 0; z-index: 60; background: var(--bg)`).
* **Loading Shimmer Sequence:**
  * The center Oxigen wordmark features a dynamic CSS mask stop: `linear-gradient(90deg, #000 -5%, transparent 0%)`.
  * As Three.js assets and geometries initialize, the mask stop advances from `-5%` to `100%`, filling the mark with ivory white.
* **The 'g' Aperture Zoom Reveal:**
  * The SVG letter `"g"` has its inner counter positioned at `transform-origin: 52.3% 36.1%`.
  * Once assets load, the logo scales up exponentially (`scale(45)`), effectively turning the circular loop of the letter `"g"` into a giant camera aperture that zooms through into the 3D WebGL scene!

---

### 2.4 Multilayer Sliding Page Transition (`#px-tx`)
* **Structure:** Fixed overlay (`position: fixed; inset: 0; z-index: 99999; pointer-events: none`) containing two independent curtain panels:
  * Panel 1: `.px-p1` (`background: #6E9EA4;` Cyan-Teal)
  * Panel 2: `.px-p2` (`background: #112228;` Deep Petroleum)
* **Exit Animation (On Link Click):**
  1. Internal link click is intercepted (`e.preventDefault()`).
  2. `.px-p1` sweeps up from `translateY(100%)` to `translateY(0%)` in **520ms** (`easing: cubic-bezier(.76, 0, .24, 1)`).
  3. `.px-p2` sweeps up from `translateY(100%)` to `translateY(0%)` in **520ms** with a **90ms delay**.
  4. On completion, `location.href` updates to the target page.
* **Enter Animation (On Page Arrival):**
  1. Next page starts with `.px-cover` class (`background: #112228`).
  2. `.px-p2` sweeps upwards off-screen from `translateY(0%)` to `translateY(-100%)` in **560ms**.
  3. `.px-p1` sweeps upwards off-screen from `translateY(0%)` to `translateY(-100%)` with a **90ms delay**, smoothly revealing the new page.

---

### 2.5 Sitewide Footer (`#footer`)
* **Background:** Deep Petroleum `#112228` with subtle top hairline.
* **Structure:**
  * **Top Callout:** Giant editorial question (`.ft-headline` in Iowan Old Style, `clamp(1.7rem, 3vw, 2.7rem)`):  
    *"The clearest way to understand how we work is to put a real problem in front of us."*
  * **Primary CTA:** `.ft-btn` (`background: #efeae1; color: #112228; font-weight: 600;`) with sliding hover arrow $\rightarrow$.
  * **Directory Columns (3-Column Grid):**
    * Column 1: Brand statement (*"Oxigen — Applied intelligence for the next decade. A small firm, by intention."*).
    * Column 2: Navigation anchor links (`Approach`, `Capability`, `Products`, `Articles`).
    * Column 3: Contact coordinates (`info@oxigen.sa`, `Riyadh · across the Gulf`).
  * **Interactive Dispersion Wordmark (`#ft-vox`):** A full-bleed 224x58 grid canvas running particle dispersion physics (see Section 4).
  * **Bottom Bar:** Centered monospace copyright, Awwwards Site of the Day citation, and Salt & Hue design credit.

---

# 3. PAGE-BY-PAGE UI BREAKDOWN

---

## 3.1 HOMEPAGE (`/`)

### Chapter 0: Hero Display & Opening Stance
* **Layout:** Bottom-aligned flex layout (`.chapter.hero-chapter`, `align-items: flex-end; padding: 8vh 7vw`).
* **Background:** Real-time 3D Three.js WebGL scene (`#app`), framing the whole cybernetic palm tree from waypoint 0 `(0, 24, 100)`.
* **Content:**
  * H1 Headline: *"The hard technology calls, made from inside the Gulf."* (`Articulat CF`, 700 bold, tight tracking).
  * Subtitle: *"For a decade, the Kingdom has imported its hardest technology decisions..."* (`Iowan Old Style`, 400).
  * Ghost CTA: *"Start with a diagnostic"* (`.cta-ox`, monospace, bordered with `--rule`).
  * Bottom Scroll Cue: Monospace `"Scroll"` label paired with a vertical pulsing 1px line.

### Chapter 1: The Problem
* **Layout:** Scrollytelling stage pinned to camera waypoint 1 `(18, 29, 58)`.
* **Visual:** The 3D cybernetic tree transitions into an illuminated wireframe mesh.
* **Content:**
  * Section Tag: Monospace uppercase `"The Problem"`.
  * H1 Headline: *"The hard part was never the technology."*
  * Typewriter Subtitle: Interactive character-by-character typewriter effect with steady cursor `.ox-caret.tw-typing`.

### Chapter 2: What We Believe
* **Layout:** Right-aligned chapter (`.chapter.hero-chapter.hero-right`).
* **Visual:** 3D camera moves to waypoint 2 `(-19, 19, 34)`; bioluminescent glow drains down into the deep root system.
* **Content:**
  * Label: Monospace uppercase `"What we believe"`.
  * Body Prose: *"The value of AI is application, not technology. The models are solved. What's built, for whom, and who owns the IP is the entire game."*

### Chapters 3–6: The Four-Step Methodology (`#approach`)
* **Layout:** 4 consecutive scroll milestones, each unlocking a step with monospace chapter counters (`01`, `02`, `03`, `04`):
  * **Chapter 3 (01 Diagnose):** Camera pans to roots `(-15, 6, 27)`. Focus: understanding operational bottlenecks.
  * **Chapter 4 (02 Decide):** Camera climbs to lower trunk `(-15, 15, 31)`. Focus: architectural roadmap, build vs buy.
  * **Chapter 5 (03 Apply):** Camera ascends to upper trunk `(-14, 25, 40)`. Focus: embedded co-engineering.
  * **Chapter 6 (04 Transfer):** Camera pulls out to crown `(-4, 23, 92)`. The entire palm canopy blooms in light. Focus: complete team ownership.

### Section 7: Our Startups (`#startups`)
* **Transition:** The 3D canvas shrinks anchored at top (`transform: scale(0.87)`), while white sheet `#paper` fades in from `opacity: 0` to `1.0`.
* **Layout:** Asymmetric 2-column split (Left: Editorial copy & CTA; Right: Interactive floating canvas field `.su-tiles`).
* **Components:**
  * Headline: *"Companies we build, keep, and own in the Gulf."*
  * 3 Tilted Dithered Canvases (`.su-slot-1` at $-5^\circ$, `.su-slot-2` at $+4^\circ$, `.su-slot-3` at $-3^\circ$).
  * Real-time cursor repellent vortex physics across all 3 canvases.

### Section 8: Our Capabilities (`#services`)
* **Layout:** Full-width light grey sheet (`#f4f4f4`), grid header + horizontal expanding accordion (`.sv-cards`).
* **Header:**
  * Eyebrow: `Our Capabilities` (monospace).
  * Title: *"Advanced systems, deployed and owned by your team."* (Two-tone ink: dark charcoal + muted grey).
  * Action: Top-right circular arrow button (`.sv-cta`).
* **Cards (4 Expanding Service Cards):**
  1. **Applied AI** (`intelligence`): Animated stochastic target canvas icon (`f01`).
  2. **Digital Twin** (`simulation`): Animated sinusoidal standing wave canvas icon (`f02`).
  3. **Digital Transformation** (`strategy`): Animated scanning Cartesian sweep icon (`f03`).
  4. **Autonomous Systems** (`autonomy`): Animated stepping reservoir gauge icon (`f04`).
* **Interaction:** Hovering any card expands its width from `flex: 1` to `flex: 2.7` over 550ms.

### Section 9: Leadership & Sovereign Track Record (`#px-scene`)
* **Layout:** Pinned 320vh scrollytelling stage (`.px-stage`, `position: sticky; top: 0; height: 100vh;`).
* **Left Column:**
  * Role: Monospace uppercase `"CEO"`.
  * Name: *"Ftoon Alsagabi"* (`Articulat CF`, 700 bold).
  * Biography: Editorial narrative highlighting SDAIA (Saudi Data & AI Authority) leadership and Swarm Technologies tenure.
* **Right Column:**
  * Canvas `#px-cv`: High-resolution dithered portrait that dynamically develops from raw noise into a photo as the user scrolls.

### Section 10: Research & Articles (`#research`)
* **Layout:** 3 full-bleed vertical split panels (`.rs-panels`, `grid-template-columns: repeat(3, 1fr)`).
* **Panels:**
  * **Panel 01 (`.rs-accent`, Teal `#6E9EA4`):** *"Sovereign Intelligence: Inside Saudi Arabia's Bid to Wire AI Into the State."* Monospace index `01.`, radial pulse pixel icon.
  * **Panel 02 (`.rs-dark`, Petrol `#112228`):** *"Digital Twins in Saudi Arabia: The Opportunity You Cannot Afford to Miss."* Monospace index `02.`, horizontal sweep pixel icon.
  * **Panel 03 (`.rs-light`, Stone `#e6e6e3`):** *"The Warehouse Behind the Shop Window: Saudi Arabia's Technical Frontier in Government Digital Transformation."* Monospace index `03.`, vertical scan pixel icon.

---

## 3.2 CONTACT PAGE (`/contact`)

* **Hero & Layout:** Single-column centered container (`max-width: 840px`), clean ivory background `#f4f4f4`, light navbar (`.navbar.on-light`).
* **Header Hierarchy:**
  * Eyebrow: `Contact` (monospace uppercase).
  * Headline: *"Start a conversation."* (`Articulat CF`, 700 bold, `clamp(2.2rem, 5vw, 3.8rem)`).
  * Lede: *"Tell us what you're working on and we'll come back with how we'd approach it — not a sales pitch."*
* **Information Strip (`.ct-info`):**
  * 3-column metadata bar bounded by 1px hairlines:
    1. Location: `Riyadh · across the Gulf`
    2. Email: `info@oxigen.sa`
    3. SLA: `Usually within 2 working days`
* **Form Architecture (`.ct-form`):**
  * 2-column grid (`Name`, `Email`) with full-width fields below (`Company`, `How can we help?`).
  * Input styling: Pure white background `#fff`, crisp 1px border `rgba(20,32,31,0.20)`, 0px border-radius.
  * Focus state: Border transitions to Sovereign Teal `#6E9EA4`.
  * Submit Action: Solid petroleum button (`background: #112228; color: #efeae1; font-weight: 600; padding: 1.05rem 1.9rem;`) with animated arrow on hover.
  * Microcopy: Monospace note: *"Opens your email to info@oxigen.sa with the details filled in."*

---

## 3.3 RESEARCH ARTICLES (3 DEEP DIVE ESSAYS)
1. `/article-sovereign-intelligence`
2. `/article-digital-twins`
3. `/article-digital-transformation`

* **Top Progress Indicator:** 3px Sovereign Teal line pinned to viewport ceiling (`.read-progress`), width dynamically bound to `scrollY / (scrollHeight - innerHeight)`.
* **Cinematic Photographic Hero (`.article-hero`):**
  * Height: `clamp(460px, 78vh, 820px)` with flex bottom-alignment.
  * 5-stop atmospheric vertical vignette over full-bleed photography.
  * Monospace Eyebrow: `Research & Articles`.
  * Title: Massive display headline (`clamp(2.05rem, 4.6vw, 3.7rem)`).
  * Metadata Bar: `Field note · June 2026 · 12 min read` in monospace slate.
* **Reading Body (`.article-body`):**
  * Canvas: Light paper `#f4f4f4`.
  * Measure: Strict optimal line length (`max-width: 700px`, ~68 characters per line).
  * Lead Paragraph: Enhanced scale serif (`1.36rem`, line-height `1.64`, dark charcoal `#1b1b18`).
  * Body Prose: British literary serif (`1.16rem`, line-height `1.78`, graphite `#2b2b27`).
  * Headings: Clean sans-serif (`Articulat CF`, 700 bold, tight line-height `1.16`).
  * Unordered Lists: Custom monospace diagonal arrow bullets (`content: '\2197'; color: #6E9EA4;`).
  * Section Dividers: 1px hairlines (`border-top: 1px solid rgba(20,32,31,0.16)`).

---

# 4. EFFECTS & ANIMATIONS CATALOG (FORENSIC DETAIL)

### 4.1 Real-Time 3D WebGL Palm Tree Simulation
* **Trigger:** Continuous requestAnimationFrame + scroll position interpolation.
* **Engine:** Three.js 0.170.0 + Post-Processing Pipeline (`GTAOPass` Ambient Occlusion, `UnrealBloomPass`, `OutputPass`).
* **Geometry:** Procedural voxel lattice constructed from `RoundedBoxGeometry`.
* **Choreography Matrix:**
  | Waypoint | Scroll Target | Camera Position $(X, Y, Z)$ | Target Vector $(X, Y, Z)$ | Wireframe Mode | Glow Front Height |
  | :--- | :--- | :--- | :--- | :--- | :--- |
  | **0** | Chapter 0 (Hero) | `(0, 24, 100)` | `(0, 22, 0)` | Shaded (0) | 54 (Full Tree) |
  | **1** | Chapter 1 (Problem)| `(18, 29, 58)` | `(-3, 24, 0)` | Wireframe (1) | 54 (Wire Reveal)|
  | **2** | Chapter 2 (Belief) | `(-19, 19, 34)` | `(2, 24, 0)` | Shaded (0) | 5 (Roots Only) |
  | **3** | Step 01 (Diagnose) | `(-15, 6, 27)` | `(0, 4, 0)` | Wireframe (1) | 5 (Roots Wire) |
  | **4** | Step 02 (Decide) | `(-15, 15, 31)` | `(0, 14, 0)` | Wireframe (1) | 10 (Lower Trunk) |
  | **5** | Step 03 (Apply) | `(-14, 25, 40)` | `(0, 27, 0)` | Wireframe (1) | 30 (Upper Trunk) |
  | **6** | Step 04 (Transfer)| `(-4, 23, 92)` | `(0, 22, 0)` | Wireframe (1) | 54 (Full Canopy) |
* **Post-Processing Configuration:**
  * `GTAOPass`: Screen-space ambient occlusion generating photorealistic soft contact shadows between voxel blocks.
  * `UnrealBloomPass`: `strength: 0.85`, `radius: 0.5`, `threshold: 0.82`. Produces a crisp, controlled cybernetic glow without overexposing the scene.

---

### 4.2 Smooth Momentum Scrolling (Lenis)
* **Trigger:** Continuous wheel / touch momentum gestures.
* **Library:** `lenis.min.js` by Studio Freight.
* **Physics:** Smooth inertia dampening (`lerp: 0.1`, `smoothTouch: false`). Eliminates browser scroll stutter and synchronizes Three.js camera position with DOM chapter scroll heights.

---

### 4.3 Typewriter Cursor Effect
* **Trigger:** Scroll entrance into Chapter 1 (`The Problem`).
* **Implementation:** JavaScript character injection loop into `.hero-copy .tag`.
* **Caret Interaction:**
  * Idle: `@keyframes ox-blink { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }` (1000ms loop).
  * While typing: `.ox-caret.tw-typing { animation: none; opacity: 1; }` (steady solid cursor prevents eye strain).

---

### 4.4 Horizontal Service Accordion Expansion
* **Trigger:** Mouse hover over `.sv-card`.
* **Mechanism:** CSS Flexbox expansion transition.
  ```css
  .sv-card {
    flex: 1 1 0;
    transition: flex-grow 0.55s cubic-bezier(0.4, 0, 0.12, 1);
  }
  .sv-card:hover {
    flex-grow: 2.7;
  }
  ```
* **Physics:** As the hovered card smoothly expands to nearly 3x its original width, adjacent cards compress proportionally. Text and icons smoothly re-flow without layout flicker.

---

### 4.5 Pixel-Grammar Canvas Shader Icons (`.sv-canvas`)
* **Trigger:** Scroll into view (governed by `IntersectionObserver` with `rootMargin: '140px'`).
* **Matrix Resolution:** 15x15 dot grid (`N = 15`), rendered on a 160x160 backing canvas.
* **Shader Algorithms:**
  * **Icon 1 (Applied AI - `f01`):** Stochastic target core with probabilistic pixel flickering (`hash(x, y)`). A central $5\times 5$ diamond pulses between ink `#112228` and teal `#6E9EA4` on a 3.4s loop.
  * **Icon 2 (Digital Twin - `f02`):** Sinusoidal standing wave. Center vertical column acts as a rhythmic oscillator (`sin(t*3 + y*0.5)`), propagating wave ripples outward.
  * **Icon 3 (Digital Transformation - `f03`):** Diagonal planar sweep. On a 4.4s period, an illuminated teal wavefront traverses from top-left to bottom-right, converting scattered random noise pixels into an orderly Cartesian grid.
  * **Icon 4 (Autonomous Systems - `f04`):** Stepped digital reservoir gauge. Vertically fills 9 levels of pixels with a glowing teal wavefront, holds at peak capacity, then executes a sharp digital drain.

---

### 4.6 Interactive Dithered Dot Repelling Field (`.su-tile`)
* **Trigger:** Pointer move / hover across startup canvases.
* **Physics Equation:**
  ```javascript
  const dx = d.hx - mx, dy = d.hy - my;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < R && dist > 1e-4) {
    const t = dist / R;
    const fall = (1 - t) * (1 - t); // Quadratic soft falloff
    const mag = STR * fall;         // STR = 0.15
    const ang = Math.atan2(dy, dx) + SWIRL * fall + T; // SWIRL = 0.8
    tx = d.hx + Math.cos(ang) * mag;
    ty = d.hy + Math.sin(ang) * mag;
  }
  d.x += (tx - d.x) * EASE; // EASE = 0.16
  d.y += (ty - d.y) * EASE;
  ```
* **Visual Effect:** Individual dots repel outward in a graceful swirling vortex around the cursor, returning elastically to their home grid anchors when the cursor exits. Canvas is oversized to 170% so repelled dots never clip at card edges.

---

### 4.7 Scroll-Developed Dithered Portrait (`#px-cv`)
* **Trigger:** Scroll progress across pinned 320vh container (`.px-scene`).
* **Algorithm:** Ordered Bayer Dithering (8x8 index matrix `BAY`).
* **Development Physics:**
  * Base photograph is converted into luminance values $L = 0.299R + 0.587G + 0.114B$.
  * Threshold values are assigned to each coordinate based on the Bayer matrix + spatial hash noise.
  * As the user scrolls, `progress` increases from `0.0` to `1.0`.
  * Each pixel's opacity is computed via `alpha = clamp((progress - threshold) / 0.06)`. Pixels materialize organically like a Polaroid developing in real time.

---

### 4.8 Research Card Pixel Ripple Hover
* **Trigger:** Pointer enter on `.rs-panel`.
* **Mechanisms (3 Distinct Modes):**
  * **Panel 01:** Radial ripple pulse from center coordinate $(40, 40)$ (`phase = t * 4.5 - dist * 0.22`).
  * **Panel 02:** Horizontal traveling wave sweep (`phase = t * 4.5 - x * 0.13`).
  * **Panel 03:** Vertical scanning wave sweep (`phase = t * 4.5 - y * 0.13`).
* **Visual Feedback:** Individual vector dots inside the SVG scale down to 0.6x and dip to 35% opacity in a traveling ripple wave.

---

### 4.9 Footer Particle Dispersion Wordmark (`#ft-vox`)
* **Trigger:** Pointer move across the footer canvas.
* **Canvas Resolution:** 224x58 grid of square particle cells (`base = cell * 0.84`).
* **Atmospheric Physics:**
  ```javascript
  const env = Math.max(0, 1 - d / R), ev = env * env;
  const fl = ev * LW * 0.018; // Micro-turbulence
  const driftX = fl * Math.sin(t * 0.9 + (c.x / GW) * 28 + p);
  const driftY = fl * Math.cos(t * 0.8 + (c.y / GH) * 6.4 + p);
  const push = ev * LW * 0.045; // Radial repulsion
  let tx = (vx / d) * push + driftX;
  let ty = (vy / d) * push + driftY - ev * LW * 0.016; // Upward air buoyancy
  c.dx += (tx - c.dx) * 0.07;
  c.dy += (ty - c.dy) * 0.07; // Float dampening
  ```
* **Visual Effect:** Particles disperse like smoke or pressurized air rising into the atmosphere, thinning out and drifting upward near the cursor, then slowly drifting back into the solid "Oxigen" wordmark.

---

# 5. COMPONENT LIBRARY (REUSABLE SPECIFICATIONS)

### 5.1 Button Variants

#### Variant A: Monospace Ghost Nav Capsule (`.nav-btn`, `.nav-cta`)
```css
display: inline-flex;
align-items: center;
font-family: 'Roboto Mono', monospace;
font-size: 13px;
letter-spacing: 0.08em;
text-transform: uppercase;
color: #ECEEEE;
background: transparent;
border: 1px solid rgba(236, 238, 238, 0.28);
padding: 13px 20px;
border-radius: 0;
white-space: nowrap;
transition: background 0.25s, color 0.25s, border-color 0.25s;
```
*Hover:* `background: #ECEEEE; color: #112228; border-color: #ECEEEE;`

#### Variant B: Warm Ivory Climax Button (`.ft-btn`)
```css
display: inline-flex;
align-items: center;
gap: 0.7rem;
background: #efeae1;
color: #112228;
font-family: 'Articulat CF', sans-serif;
font-weight: 600;
font-size: 0.95rem;
padding: 1.05rem 1.7rem;
border-radius: 0;
text-decoration: none;
transition: background 0.25s ease;
```
*Hover:* `background: #ffffff;` + Arrow translates: `transform: translateX(4px);`

#### Variant C: Dark Petroleum Action Button (`.ct-submit`)
```css
display: inline-flex;
align-items: center;
gap: 0.7rem;
background: #112228;
color: #efeae1;
font-family: 'Articulat CF', sans-serif;
font-weight: 600;
font-size: 0.95rem;
padding: 1.05rem 1.9rem;
border: 0;
border-radius: 0;
cursor: pointer;
transition: background 0.25s ease;
```
*Hover:* `background: #1c3a42;` + Arrow translates: `transform: translateX(4px);`

#### Variant D: Circular Arrow Badge (`.sv-cta .arw`)
```css
display: inline-flex;
align-items: center;
justify-content: center;
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid rgba(20, 20, 16, 0.22);
transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
```
*Hover:* `transform: translate(2px, -2px); background: #112228; color: #cfeef2; border-color: #112228;`

---

### 5.2 Card Archetypes

#### Archetype 1: Horizontal Expanding Service Card (`.sv-card`)
* **Container:** `flex: 1 1 0; min-width: 0; background: #ffffff; border-radius: 0; padding: 28px; height: clamp(420px, 31vw, 560px); display: flex; flex-direction: column; overflow: hidden;`
* **Top:** Monospace category label (`.sv-cat`, `font: 400 0.72rem/1 var(--mono); letter-spacing: 0.22em; text-transform: uppercase; color: #707068;`).
* **Middle:** Canvas animation stage (`.sv-stage`, centering 160x160 canvas).
* **Bottom:** Card Title (`font-size: clamp(1.3rem, 1.8vw, 1.65rem); font-weight: 700; color: #1b1b18;`) + 3-line concise scope summary.

#### Archetype 2: Full-Bleed Research Panel (`.rs-panel`)
* **Container:** `min-height: clamp(380px, 50vh, 540px); padding: clamp(26px, 2.6vw, 46px); display: flex; flex-direction: column;`
* **Top Bar:** Interactive SVG ripple icon + Monospace chapter number (`01.`, `02.`, `03.`).
* **Bottom Body:** Large bold title + 2-line lede + Monospace arrow link (`READ ARTICLE →`).
* **Hover Interaction:** Entire panel brightens (`filter: brightness(1.06)`), title translates up 10px, number slides left 6px.

---

### 5.3 Form Field System (`.ct-form`)
* **Field Wrapper:** `.ct-field { display: flex; flex-direction: column; gap: 0.55rem; }`
* **Label:** `font: 500 0.66rem/1 var(--mono); letter-spacing: 0.16em; text-transform: uppercase; color: #6a6961;`
* **Input / Textarea:**
  ```css
  font: 400 1rem/1.5 var(--sans);
  color: #1b1b18;
  background: #ffffff;
  border: 1px solid rgba(20, 32, 31, 0.20);
  border-radius: 0;
  padding: 14px 15px;
  width: 100%;
  outline: none;
  transition: border-color 0.2s ease;
  ```
* **Focus State:** `border-color: #6E9EA4;`
* **Textarea:** `min-height: 150px; resize: vertical;`

---

# 6. TECHNICAL OBSERVATIONS & STACK

* **Architecture:** Bespoke Handcrafted HTML5/CSS/JavaScript Architecture (No bloated Webflow, Elementor, or WordPress wrappers).
* **3D Graphics Engine:** **Three.js 0.170.0** loaded via native ES Module Importmaps (`unpkg.com/three@0.170.0`).
* **Post-Processing Stack:** Three.js JSM add-ons: `EffectComposer`, `RenderPass`, `GTAOPass`, `UnrealBloomPass`, `OutputPass`, `ShaderPass`.
* **Smooth Scrolling:** **Lenis 1.1** (`/lenis.min.js`) by Studio Freight.
* **Canvas Shaders:** 5 isolated native Canvas 2D IIFE modules executing procedural mathematical rendering (no external heavy libraries needed for 2D effects).
* **Typography Delivery:** Adobe Typekit (`use.typekit.net/mxs8gny.css`) for high-performance subpixel antialiased web fonts + Google Fonts for Roboto Mono.
* **Accessibility (a11y):**
  * Universal `:focus-visible { outline: 2px solid #6E9EA4; outline-offset: 3px; }`.
  * Comprehensive `(prefers-reduced-motion: reduce)` fallbacks across all 3D scenes, particle wordmarks, dithering shaders, and typewriter effects.
  * Semantic landmarks (`nav`, `main`, `section`, `header`, `footer`).

---

# 7. DESIGN DNA SUMMARY & ADAPTATION BLUEPRINT

### 7.1 Design Personality in 6 Keywords
> **"Sovereign, Petroleum-Deep, Architectural, Editorial, Cybernetic, Bioluminescent."**

---

### 7.2 Top 10 Techniques That Make This Site Feel Ultra-Premium
1. **The Cybernetic Palm Metaphor:** Grounding futuristic 3D WebGL technology in a deeply recognized cultural symbol (the Saudi date palm) gives the brand immense institutional gravitas.
2. **Dynamic Surface Inversion (`.navbar.on-light`):** Smoothly flipping global navigation elements from white-on-petrol to charcoal-on-white as the page transitions from dark 3D void to light editorial sheets.
3. **Canvas 2D Functional Shaders Over SVGs:** Replacing generic static vector icons with real-time procedural pixel animations (`f01`–`f04`) signals exceptional engineering craftsmanship.
4. **Ordered Bayer Dithering for Photography:** Dithering imagery allows high-tech digital aesthetic continuity while creating a stunning scroll-developed reveal effect.
5. **Atmospheric Particle Dispersion Wordmark:** Making the brand name literally disperse into air particles when the user's cursor approaches creates an unforgettable tactile micro-interaction.
6. **Zero-Radius Architectural Discipline:** Strict `border-radius: 0` paired with hairline borders conveys rigorous enterprise discipline.
7. **The 'g' Aperture Zoom Transition:** Seamlessly turning the geometry of a letterform in the brand logo into a physical camera portal into the 3D scene.
8. **Subtle Lenis Momentum Dampening:** Fluid inertia scrolling makes 3D camera waypoints feel weightless and cinematic.
9. **Two-Tone Typographic Headline Contrast:** Pairing solid dark charcoal ink with muted sand grey words within a single title to emphasize focal words.
10. **Multilayer Bi-Color Page Curtains:** Using dual-stage sliding panels (`#6E9EA4` cyan leading into `#112228` petroleum) for page transitions makes every navigation feel like a theater curtain opening.

---

### 7.3 Layout Rhythm & Whitespace Philosophy
* **Scale Modulation:** The site alternates rhythmically between **dark cinematic 3D voids** (atmospheric, low data density, high visual impact) and **crisp light editorial sheets** (high typographic density, analytical clarity).
* **Golden Ratio Line Lengths:** Article prose never exceeds `700px` (approx 68 characters per line), ensuring effortless reading comfort that mirrors prestige physical journals like The Economist or Architectural Digest.

---

### 7.4 15 Concrete "Steal-Worthy" UI Patterns to Adapt

| # | Pattern Name | Exact Implementation Blueprint |
| :--- | :--- | :--- |
| **01** | **Horizontal Expanding Accordion** | Flex container with `display: flex; gap: 14px;`. Children styled with `flex: 1 1 0; transition: flex-grow 0.55s cubic-bezier(0.4, 0, 0.12, 1);`. On `:hover`, expand to `flex-grow: 2.7;`. |
| **02** | **Bayer Matrix Scroll-Developed Image** | Sample image luminance into an offscreen canvas; compute 8x8 Bayer dithering thresholds. Bind vertical scroll position to a global threshold, activating pixels via `fillRect(x*s, y*s, s, s)`. |
| **03** | **Bi-Color Dual-Stage Page Curtain** | Overlay with two panels (`p1: #6E9EA4`, `p2: #112228`). On link click, animate `p1` translateY(100% $\rightarrow$ 0%) in 520ms, followed by `p2` with 90ms delay using `cubic-bezier(.76, 0, .24, 1)`. On page load, slide off to -100%. |
| **04** | **Particle Air Dispersion Wordmark** | Render vector logo into a 2D canvas particle grid. On pointer move, calculate distance from cursor; apply upward buoyant drift (`driftY - ev * LW * 0.016`) and elastic return damping (`0.07`). |
| **05** | **Steady Caret Typewriter Effect** | Inject characters one by one via JS interval. Keep `.ox-caret.tw-typing { animation: none; opacity: 1; }` steady while text is active; resume 1s blink keyframe only after typing finishes. |
| **06** | **Repelling Dithered Vector Field** | Parse SVG `<rect>` elements into array of coordinate points. On pointer move, calculate distance to cursor; apply quadratic falloff repulsion + vortex twist angle (`ang = atan2(dy, dx) + SWIRL*fall + T`). Return with ease `0.16`. |
| **07** | **Dynamic Navbar Surface Inversion** | Attach `IntersectionObserver` to light content sections. When light sections intersect viewport top, add `.on-light` to header, flipping text colors and logo fills from white to `#14201f`. |
| **08** | **Reading Progress Ceiling Bar** | Element styled with `position: fixed; top: 0; left: 0; height: 3px; background: #6E9EA4; z-index: 50;`. Bind `width` via scroll listener to `(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100%`. |
| **09** | **Procedural Canvas Pixel-Grammar Icons**| 15x15 dot grid canvas running mathematical wave equations (`f01`–`f04`), combining sine waves, hash noise, and scanline sweeps to visualize complex data engineering concepts. |
| **10** | **3D Waypoint Camera Interpolator** | Array of 3D camera waypoints `{ pos: Vector3, tgt: Vector3, wire: 0/1 }`. Map normalized scroll progress `p` between waypoints, linearly interpolating camera position and lookAt vectors. |
| **11** | **Monospace Diagonal Arrow List Bullets** | Replace standard bullet dots with custom unicode diagonal arrows: `li::before { content: '\2197'; position: absolute; left: 0; color: #6E9EA4; font: 0.8em var(--mono); }`. |
| **12** | **Dark Scrim Backdrop for Small Devices** | On mobile viewports ($\le 640\text{px}$), apply a soft dark linear gradient scrim behind hero text: `background: linear-gradient(180deg, rgba(17,34,40,0.85) 0%, transparent 100%);` to guarantee legibility over 3D scenes. |
| **13** | **Right-Rail Difference Navigation** | Fixed vertical navigation bar with `mix-blend-mode: difference;`. Features minimal 14px horizontal ticks that expand to 28px with text labels on hover. |
| **14** | **Logo Aperture Zoom Preloader** | Set SVG logo mask to linear gradient. On load, scale up logo by `scale(45)` anchored at the focal letter counter (`transform-origin: 52.3% 36.1%`), plunging user through the letterform into the site. |
| **15** | **Zero-Radius Monospace Pill Badges** | Sharp rectangular tag badges: `font-family: var(--mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; border: 1px solid var(--rule); padding: 6px 12px; border-radius: 0;`. |

---

### Verification Summary
* **Total Pages Analyzed:** **5 Production Pages** (Homepage `/`, Contact `/contact`, Article 1 `/article-sovereign-intelligence`, Article 2 `/article-digital-twins`, Article 3 `/article-digital-transformation`).
* **Total Interactive Effects & Shaders Documented:** **16 Distinct Motion Systems & Procedural Shaders** (3D WebGL Palm, GTAO & Bloom pipeline, Lenis momentum scroll, Typewriter steady caret, Horizontal service accordion, 4 Pixel-grammar procedural icons, Bayer dithering portrait shader, 3 Research ripple wave modes, Startups vortex repellent field, Footer particle dispersion air wordmark, Bi-color curtain transition, Logo aperture zoom preloader).
* **Report File Created:** `Reference-Website-2.md` at project root.
