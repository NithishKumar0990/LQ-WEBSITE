---
name: awesome-design
description: Curated design system guidance — color palettes, font pairings, design tokens. Use when choosing colors, fonts, or building any design system.
---
# Awesome Design — System Guide

## Color System
- Build neutral ramp FIRST (8 steps), then 1 primary + 1 accent
- Semantic tokens only: --bg, --surface, --text, --muted, --border, --primary, --accent
- NEVER hardcode hex values inside components — always use tokens

## Typography Pairings (premium combos)
- Display serif + neutral sans: Playfair/Fraunces + Inter
- Geometric + humanist: Sora + Inter
- Editorial: Space Grotesk + Newsreader
- Scale ratio 1.25: 12/14/16/20/25/31/39/49

## Component Patterns
- Buttons: primary/secondary/ghost variants, consistent padding
- Cards: surface bg + 1px border + subtle shadow, hover lift max 4px
- This project's brand palette: Reference COLOR-SYSTEM.md — Earth (Primary #986B14, Dark #3E2A08), 
  Pollen (CTA #FFC91B, Dark-bg text #FFDC4F), Neutral (#5A4D3D, #FAF8F5), Black #000000, White #FFFFFF — 
  all UI must use brand-* tokens — never raw hex values.
