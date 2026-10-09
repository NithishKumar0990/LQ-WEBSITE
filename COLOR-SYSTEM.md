# 🎨 COLOR-SYSTEM.md — v3 4-TONE GLOBAL PALETTE (Single Source of Truth)

> ⚠️ **AGENT RULE — READ FIRST:**
> This file is the ONLY source of truth for ALL colors.
> Use ONLY design tokens (--color-bg, --color-surface, --color-ink, --color-muted) and mapped utility classes.
> Never introduce raw hex values outside this palette.

---

## 1. GLOBAL 4-TONE PALETTE

| Token | Hex Value | Role & Usage |
|---|---|---|
| `--color-bg` | `#F7F7F7` | Base page canvas, light section backgrounds, body background, dark-mode inverted text |
| `--color-surface` | `#EEEEEE` | Cards, elevated surfaces, input fills, light dividers, alternate sections |
| `--color-ink` | `#393E46` | Primary text, headings, dark buttons, dark strips, footer canvas, high-contrast borders |
| `--color-muted` | `#929AAB` | Secondary text, captions, metadata, inactive states, icons, subtle borders |

---

## 2. MONO RAMP ALIASES (Tailwind v4 theme mappings)

```
mono-50:  #F7F7F7   ← base page canvas, alt section bg
mono-100: #EEEEEE   ← light cards, hover fills on light
mono-200: #EEEEEE   ← borders / dividers / card surfaces
mono-300: #929AAB   ← muted borders / subtle dividers
mono-400: #929AAB   ← captions, metadata
mono-500: #929AAB   ← secondary text, inactive indicators
mono-600: #393E46   ← primary body text (WCAG AA compliant)
mono-700: #393E46   ← strong body text
mono-800: #393E46   ← dark surface fill
mono-900: #393E46   ← elevated dark surface
mono-950: #393E46   ← dark section canvas
black:    #393E46   ← dark ink tone / primary dark sections
white:    #F7F7F7   ← light background tone / inverted text
```

---

## 3. SEMANTIC TOKENS

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#F7F7F7` | Page background, light section canvas |
| `--color-surface` | `#EEEEEE` | Cards, elevated containers, input backgrounds |
| `--color-ink` | `#393E46` | Headings, primary text, dark buttons, footer |
| `--color-muted` | `#929AAB` | Secondary text, captions, borders, inactive states |
| `--whatsapp` | `#25D366` | WhatsApp widget floating button ONLY (locked third-party) |

---

## 4. CONTRAST RULES

✅ ALLOWED:
- white text on black / mono-950 / mono-900
- rgba(255,255,255,0.72) paragraphs on black
- black text on white / mono-50 / mono-100
- mono-600 body on white
- white pill CTA on dark; black pill CTA on light

❌ NEVER:
- grey text below mono-500 on dark (unreadable)
- mono-400 or lighter on white for body text
- any warm color (brown/gold/maroon) anywhere
- blue/purple/cyan anywhere
- colored glow shadows (use white glow: rgba(255,255,255,0.25))

---

## 5. GRADIENTS (only these)

```
ink-reveal-mask: linear-gradient(100deg, #000 calc(var(--ink)*1%), transparent calc((var(--ink)+10)*1%))
radial-fog:      radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03), transparent 70%)
grid-lines:      1px hairlines rgba(255,255,255,0.04) at 24px spacing (dark only)
edge-fade:       linear-gradient(90deg, #000 0%, transparent 15%, transparent 85%, #000 100%)
btn-glow:        box-shadow 0 0 20px rgba(255,255,255,0.25)
```

---

## 6. MIGRATION MAP (old warm palette → mono)

| Old (DELETE) | New |
|---|---|
| earth-600 #986B14 (primary) | white (on dark) / black (on light) |
| earth-900 #3E2A08 (dark section) | mono-950 #0A0A0A |
| earth-950 footer | black #000000 |
| maroon-900 #3F0200 (dark strip) | mono-950 #0A0A0A |
| pollen-400 #FFC91B (CTA) | white pill on dark / black pill on light |
| pollen-300 (headings on dark) | white #FFFFFF |
| pollen-200 highlights | mono-100 #F4F4F4 |
| bronze-500 (icons/badges) | white / rgba(255,255,255,0.85) |
| neutral warm grays | mono equivalents (same step number) |
| gold glow shadows | white glow rgba(255,255,255,0.25) |
| gold gradient text | solid white |
| gold border hover | rgba(255,255,255,0.35) |

---

## 7. TAILWIND CONFIG (apply exactly)

```js
colors: {
  mono: {
    50:'#FAFAFA',100:'#F4F4F4',200:'#E7E7E7',300:'#D4D4D4',
    400:'#A8A8A8',500:'#7E7E7E',600:'#5C5C5C',700:'#424242',
    800:'#2A2A2A',900:'#171717',950:'#0A0A0A',
    black:'#000000',white:'#FFFFFF'
  }
}
```

Classes: `bg-mono-950`, `text-white`, `border-white/10` etc. Never raw hex.

---

## 8. FINAL CHECKLIST (every UI task)

- [ ] Only mono tokens used; zero warm/colored hex
- [ ] WhatsApp green untouched
- [ ] Dark: white headings + rgba(255,255,255,0.72) body + white/10 borders
- [ ] Light: black headings + mono-600 body + mono-200 borders
- [ ] CTAs: white pill on dark / black pill on light
- [ ] Glows are white-based only