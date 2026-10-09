# 🚀 Leanquality Solutions India Pvt. Ltd. (LQSIPL) - Corporate Website

A production-ready, high-performance Single Page Application (SPA) built for **Leanquality Solutions India Pvt. Ltd.** This repository contains the complete source code for the corporate website, engineered with modern web standards to ensure blazing-fast load times, seamless routing, and a responsive, accessible user experience.

---

## 📑 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🎨 Design System & Brand Colors](#-design-system--brand-colors)
- [🗺️ Page & Route Architecture](#-page--route-architecture)
- [📂 Project Structure](#-project-structure)
- [⚙️ Configuration & Environment](#️-configuration--environment)
- [🏃 Getting Started](#-getting-started)
- [🚢 Deployment](#-deployment)

---

## ✨ Features

- **Modern SPA Architecture:** Built with React 18 and React Router v6 for seamless, zero-reload navigation.
- **Lightning Fast:** Powered by Vite for instant hot module replacement (HMR) and optimized production builds.
- **Responsive & Accessible:** Fully mobile-first design using Tailwind CSS utility classes.
- **Dynamic Content Management:** Decoupled data structures for Services, Digital Marketing, Jobs, and Blog posts.
- **Integrated Web3Forms:** Secure, serverless form handling for Contact and Career applications.
- **Interactive UI:** Custom animated counters, lightbox galleries, and smooth scroll behaviors.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React 18 |
| **Build Tool** | Vite |
| **Routing** | React Router v6 |
| **Styling** | Tailwind CSS |
| **Form Handling** | Web3Forms API |
| **SEO** | `react-helmet-async` |

---

## 🎨 Design System & Brand Colors (v2 MONOCHROME)

The UI strictly adheres to the architectural monochrome design guidelines defined in [COLOR-SYSTEM.md](COLOR-SYSTEM.md). Below is the core grayscale ramp used throughout the application:

| Color Name | Token | Hex Code | Role / Usage |
| :--- | :--- | :--- | :--- |
| **Black** | `mono.black` | `#000000` | True dark canvas, footer background, primary heading text on light |
| **Mono 950** | `mono.950` | `#0A0A0A` | Dark section surface, elevated dark cards, inputs |
| **Mono 900** | `mono.900` | `#171717` | Elevated dark surface, secondary dark cards |
| **Mono 800** | `mono.800` | `#2A2A2A` | Dark hover fills |
| **Mono 600** | `mono.600` | `#5C5C5C` | Body text on light backgrounds |
| **Mono 500** | `mono.500` | `#7E7E7E` | Captions, meta labels, secondary text |
| **Mono 400** | `mono.400` | `#A8A8A8` | Captions, phase numbers |
| **Mono 300** | `mono.300` | `#D4D4D4` | Accent hairline underlines, disabled states |
| **Mono 200** | `mono.200` | `#E7E7E7` | Borders & hairlines on light sections |
| **Mono 100** | `mono.100` | `#F4F4F4` | Light cards, hover fills on light |
| **Mono 50** | `mono.50` | `#FAFAFA` | Lightest surface, alternating section backgrounds |
| **White** | `mono.white` | `#FFFFFF` | Base light background, headings on dark, primary CTAs on dark |
| **WhatsApp Green** | `whatsapp` | `#25D366` | Floating WhatsApp widget (Official brand color) |

---

## 🗺️ Page & Route Architecture

Every page is strictly isolated in its own dedicated component file within `src/pages/`.

| File Name | Page | Route | Key Contents |
| :--- | :--- | :--- | :--- |
| `HomePage.jsx` | Home | `/` | Hero, About-preview, Focus Areas, Feature Cards, Tech Stacks, Core Values, Animated Counters |
| `AboutPage.jsx` | About Us | `/about` | Vision, Quality Policy/Objectives, 10 Corporate Values grid |
| `ServicesPage.jsx` | Services | `/services` | Overview, 10 Service Cards linking to detail routes, CTA |
| `ServiceDetailPage.jsx`| Service Detail| `/services/:slug`| Hero, Deliverables, Core Strengths, Sidebar, CTA *(Data: `services.js`)* |
| `DigitalMarketingPage.jsx`| DM Overview | `/digital-marketing`| Why Us, Stats, 4-step Approach, MarTech cards |
| `DigitalMarketingDetailPage.jsx`| DM Detail | `/digital-marketing/:slug`| Strategic Overview, Deliverables, Sidebar *(Data: `digitalMarketing.js`)* |
| `CareerPage.jsx` | Career | `/career` | Culture Highlights, Job Cards, `JobModal` application form |
| `ContactPage.jsx` | Contact Us | `/contact` | Info Cards, Social Links, Web3Forms validated form, Google Maps |
| `EventsPage.jsx` | Events | `/events` | Intro, Responsive Photo Gallery, Full-screen `Lightbox` Modal |
| `BlogPage.jsx` | Blog Overview | `/blog` | 7 Publication Cards, Categories, Excerpts *(Data: `blogPosts.js`)* |
| `BlogPostPage.jsx` | Blog Article | `/blog/:slug` | Breadcrumb, Article Stub, "Coming Soon" Notice, Related Articles |
| `NotFoundPage.jsx` | 404 Not Found | `*` | Friendly 404 message with navigation fallbacks |

---

## 📂 Project Structure

```text
src/
├── config.js                 # Web3Forms API key, contact info, social links
├── index.jsx                 # Main entry point mounting React root
├── index.css                 # Tailwind CSS imports & custom animations
├── App.jsx                   # Route declarations only (no page logic)
│
├── components/               # Shared components (used by 2+ pages)
│   ├── Header.jsx            # Morphing floating nav pill (P02)
│   ├── Footer.jsx            # Full-height climax footer with Baner coordinates (P09)
│   ├── WhatsAppWidget.jsx    # Floating bottom-right WhatsApp widget
│   ├── ScrollToTop.jsx       # Automatic window scroll on route changes
│   ├── SEO.jsx               # react-helmet-async meta tags & title
│   ├── Counter.jsx           # Animated scroll count-up numbers
│   ├── SectionHeading.jsx    # Uniform section title with ChapterAnchor support
│   ├── PageBanner.jsx        # Reusable dark banner with InkReveal & CAD grid
│   ├── CTABanner.jsx         # Reusable bottom conversion banner
│   ├── Lightbox.jsx          # Gallery modal with arrow & keyboard controls
│   ├── job/
│   │   └── JobModal.jsx      # Application form modal with resume validation
│   └── daq/                  # DAQ Engineering Design System Suite
│       ├── InkReveal.jsx     # P01: Liquid Ink stroke/fill text reveal for dark heroes
│       ├── ChapterAnchor.jsx # P03: Monospace chapter index & hairline rule (e.g. 01 / TITLE)
│       ├── TechPill.jsx      # P04: Monospace uppercase tech stack tag pills
│       ├── CounterStrip.jsx  # P05: Tabular-nums animated metric counter strip
│       ├── ReadingRows.jsx   # P06: Hairline-divided expandable editorial reading rows
│       ├── CapabilityTile.jsx# P08: Architectural bento capability tile with hover translate
│       ├── IntroCurtain.jsx  # P13: SessionStorage-gated SVG outline trace entrance curtain
│       ├── ManifestoStage.jsx# Section 2: Scrollytelling manifesto liquid-ink reveal & values
│       └── StepperRail.jsx   # Section 3: DAQ "Neural Core" 6-stage vertical left-rail stepper
│
├── data/                     # Content data arrays (Decoupled from UI)
│   ├── services.js           # 10 core service items & deliverables
│   ├── digitalMarketing.js   # 4 digital marketing subpage datasets
│   ├── jobs.js               # Job listings (Full Stack & AWS Architect)
│   └── blogPosts.js          # 7 technology thought-leadership articles
│
└── pages/                    # 12 isolated page components (listed above)
