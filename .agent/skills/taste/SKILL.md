---
name: taste
description: Apply when designing or writing ANY UI code. Enforces premium, high-taste design and prevents generic AI-slop UI. Use for every new component, page, or visual change.
---
# Taste — Premium UI Rules

## NEVER (instant slop signals)
- Default purple/violet gradients (#7C3AED etc.) unless brand requires
- Emoji used as UI icons
- Random margins (13px/17px/22px mix) — always use 4/8px spacing scale
- Inconsistent border radius or randomly stacked shadows
- Decorative junk: floating blobs everywhere, glassmorphism abuse, neon glow overload
- Missing hover/focus/active states on any interactive element

## ALWAYS
- One clear type scale (display/h1/h2/body/caption), max 2 font families
- 4px spacing system, one consistent radius token (8/12/16)
- Deliberate color: 1 primary + 1 accent + neutral ramp (6-8 steps)
- Text contrast never below 4.5:1
- Motion: 150-250ms ease-out, only transform/opacity properties
- Whitespace is a feature — generous section padding (80-120px)
- Icons from ONE consistent set (Lucide/Phosphor), single stroke width
- Design empty, loading, and error states — never forget them

## FINAL CHECK before finishing any UI task
1. Would this look at home on Linear/Vercel/Stripe?
2. Squint test: is visual hierarchy instantly obvious?
3. Anything decorative but meaningless? Remove it.
