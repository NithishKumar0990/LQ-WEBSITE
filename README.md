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

## 🎨 Design System & Brand Colors

The UI strictly adheres to the LQSIPL brand guidelines defined in [COLOR-SYSTEM.md](COLOR-SYSTEM.md). Below is the core color palette used throughout the application:

| Color Name | Token | Hex Code | Role / Usage |
| :--- | :--- | :--- | :--- |
| **Earth 600** *(Primary)* | `brand.earth.600` | `#986B14` | Nav, header, banners, primary buttons, icons |
| **Earth 900** *(Deep Canvas)*| `brand.earth.900` | `#3E2A08` | Footer bg, top bar, dark sections, hero gradient start |
| **Earth 500** | `brand.earth.500` | `#B1831F` | Gradient ends, secondary accents |
| **Pollen 400** *(Attention)* | `brand.pollen.400` | `#FFC91B` | CTA buttons, highlights, icons, underlines, active nav |
| **Pollen 300** *(Highlight)* | `brand.pollen.300` | `#FFDC4F` | Headings/text on dark brown, badge highlights |
| **Pollen 200** | `brand.pollen.200` | `#FFE684` | Light highlight badge |
| **Black** | — | `#000000` | Primary heading text on light backgrounds |
| **White** | — | `#FFFFFF` | Main page background, card surfaces, body text on dark |
| **Neutral 600** *(Body Text)*| `brand.neutral.600`| `#5A4D3D` | Primary readable body prose |
| **Neutral 50** *(Soft Bg)* | `brand.neutral.50` | `#FAF8F5` | Alternating section backgrounds |
| **Neutral 200** *(Borders)* | `brand.neutral.200`| `#E2DACC` | Borders, subtle dividers, cards |
| **Neutral 500** *(Muted)* | `brand.neutral.500`| `#7C6B55` | Captions, metadata, secondary text |
| **WhatsApp Green** | — | `#25D366` | Floating WhatsApp widget (Official brand color) |

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
│   ├── Header.jsx            # Top bar, sticky navbar & mobile drawer
│   ├── Footer.jsx            # 4-column footer with contact & map
│   ├── WhatsAppWidget.jsx    # Floating bottom-right WhatsApp widget
│   ├── ScrollToTop.jsx       # Automatic window scroll on route changes
│   ├── SEO.jsx               # react-helmet-async meta tags & title
│   ├── Counter.jsx           # Animated scroll count-up numbers
│   ├── SectionHeading.jsx    # Uniform section title & gold accent line
│   ├── PageBanner.jsx        # Reusable gradient banner for inner pages
│   ├── CTABanner.jsx         # Reusable bottom conversion banner
│   ├── Lightbox.jsx          # Gallery modal with arrow & keyboard controls
│   └── job/
│       └── JobModal.jsx      # Application form modal with resume validation
│
├── data/                     # Content data arrays (Decoupled from UI)
│   ├── services.js           # 10 core service items & deliverables
│   ├── digitalMarketing.js   # 4 digital marketing subpage datasets
│   ├── jobs.js               # Job listings (Full Stack & AWS Architect)
│   └── blogPosts.js          # 7 technology thought-leadership articles
│
└── pages/                    # 12 isolated page components (listed above)
