# COLOR SYSTEM — LEANQUALITY SOLUTIONS (LQSIPL)

> **Single Source of Truth for all colors in this project.**  
> Never invent hex values. Never hardcode random colors inside components.

---

## 1. BRAND COLOR TOKENS

### Earth (Primary Warm Workhorse)
| Step | Hex | Role / Context |
|---|---|---|
| `earth-50` | `#FCF6E7` | Lightest warm tint |
| `earth-100` | `#F7E8C4` | Subtle surface warm |
| `earth-200` | `#EFD28D` | Card border warm tint |
| `earth-300` | `#E5BA55` | Soft brown accent |
| `earth-400` | `#CD9E30` | Mid-warm earth |
| `earth-500` | `#B1831F` | Secondary accent / gradient ends |
| `earth-600` | `#986B14` | **Workhorse Primary:** Nav, banners, primary buttons, icons |
| `earth-700` | `#795410` | Dark brown active state |
| `earth-800` | `#5A3F0C` | Deep rich brown |
| `earth-900` | `#3E2A08` | **Deep Canvas:** Dark sections, footer bg, hero gradient start |
| `earth-950` | `#2A1C05` | Near-black earth shadow |

### Maroon (Luxury Depth)
| Step | Hex | Role / Context |
|---|---|---|
| `maroon-50` | `#FDECEA` | Subtle rose tint |
| `maroon-100` | `#FBD2CF` | Light accent blush |
| `maroon-200` | `#F6A29D` | Soft coral |
| `maroon-300` | `#EF6F68` | Muted berry |
| `maroon-400` | `#E23A31` | Vivid ruby |
| `maroon-500` | `#C11A10` | Crimson accent |
| `maroon-600` | `#9C0C05` | Deep red |
| `maroon-700` | `#7F0400` | Text emphasis on white surfaces |
| `maroon-800` | `#5D0300` | Dark luxury accent |
| `maroon-900` | `#3F0200` | Luxury hero gradient partner |
| `maroon-950` | `#2B0100` | Midnight maroon shadow |

### Bronze (Richness & Detail)
| Step | Hex | Role / Context |
|---|---|---|
| `bronze-50` | `#FDF8E6` | Pale cream |
| `bronze-100` | `#FAEFC2` | Warm bronze tint |
| `bronze-200` | `#F4DF89` | Soft metallic |
| `bronze-300` | `#ECCF50` | Light bronze shimmer |
| `bronze-400` | `#DFBA2E` | Golden bronze badge |
| `bronze-500` | `#CA9D17` | Metallic detail / gradient partner |
| `bronze-600` | `#A57D10` | Dark bronze detail |
| `bronze-700` | `#7C5D0C` | Deep bronze tone |
| `bronze-800` | `#523E08` | Rich dark metallic |
| `bronze-900` | `#2B1F04` | Charcoal bronze |
| `bronze-950` | `#1D1502` | Bronze ink shadow |

### Pollen (Attention & Luminance)
| Step | Hex | Role / Context |
|---|---|---|
| `pollen-50` | `#FFF9E1` | Pale yellow glow |
| `pollen-100` | `#FFF0B6` | Soft highlight |
| `pollen-200` | `#FFE684` | Light highlight badge |
| `pollen-300` | `#FFDC4F` | **Text on Dark:** Headings/labels on dark brown bg |
| `pollen-400` | `#FFC91B` | **Attention Accent:** CTA buttons, counters, active nav, underlines |
| `pollen-500` | `#EBB70D` | Warm amber pollen |
| `pollen-600` | `#C09108` | Deep honey accent |
| `pollen-700` | `#8F6C06` | Dark honey border |
| `pollen-800` | `#5F4804` | Muted honey shadow |
| `pollen-900` | `#302502` | Deep pollen shade |
| `pollen-950` | `#221A01` | Pollen black |

### Neutral (Warm Ergonomic Surfaces)
| Step | Hex | Role / Context |
|---|---|---|
| `neutral-50` | `#FAF8F5` | Alternating section background |
| `neutral-100` | `#F1EDE6` | Soft warm card surface |
| `neutral-200` | `#E2DACC` | Card borders / section dividers |
| `neutral-300` | `#CDBFA9` | Muted border lines |
| `neutral-400` | `#A6957C` | Inactive icon / subtle rule |
| `neutral-500` | `#7C6B55` | Secondary / caption text |
| `neutral-600` | `#5A4D3D` | **Body Text:** Primary readable prose |
| `neutral-700` | `#42382C` | Deep body text |
| `neutral-800` | `#2C251D` | Subtitle text |
| `neutral-900` | `#191410` | Near-black text |
| `neutral-950` | `#0F0C0A` | True deep charcoal |

---

## 2. FUNCTIONAL COLORS (UNTOUCHED)

- **WhatsApp:** `#25D366` (Official WhatsApp brand color — never modify)
- **Form Error:** `#DC2626` (Red-600)
- **Form Success:** `#16A34A` (Green-600)

---

## 3. COLOR ROLES & HIERARCHY

- **earth-600 (`#986B14`):** Primary workhorse (nav, banners, primary buttons) — max ~30% of any viewport
- **earth-900 (`#3E2A08`):** Deep canvas (dark sections, footer, hero gradient start)
- **pollen-400 (`#FFC91B`):** Attention only (CTA buttons, counters, active nav underlines) — never large bg areas
- **pollen-300 (`#FFDC4F`):** Readable yellow text strictly on dark backgrounds
- **maroon-900 (`#3F0200`):** Luxury depth in hero gradients
- **maroon-700 (`#7F0400`):** Emphasis text on white backgrounds
- **neutral-50 (`#FAF8F5`):** Soft section backgrounds
- **neutral-200 (`#E2DACC`):** Card borders and dividers
- **neutral-600 (`#5A4D3D`):** Primary body prose
- **white (`#FFFFFF`):** Main page background, card surfaces, and body text on dark brown

---

## 4. CONTRAST RULES

> Never invent hex values. Never hardcode random colors inside components.
- white body text on any dark brown
- maroon-700 text on white (emphasis text)

❌ NEVER:
- white text on pollen-400 (yellow bg)
- pollen/yellow text on white bg
- black text on earth-600/700/800/900 (dark brown bg)
- maroon text on earth backgrounds (muddy)
- blue, purple, cyan anywhere in UI

---

## 5. GRADIENT RECIPES (only these)

```
hero-dark:      linear-gradient(135deg, earth-900, earth-600)
hero-luxury:    linear-gradient(135deg, maroon-900, earth-900)
gold-button:    linear-gradient(180deg, pollen-300, pollen-400)
gold-text:      linear-gradient(90deg, pollen-300, bronze-500)
spotlight-glow: radial-gradient(pollen-400 at 12% opacity, earth-900)
underline-bar:  linear-gradient(90deg, pollen-400, bronze-500)
```

---

## 6. MIGRATION MAP (old palette → new palette)

| Old (remove) | New (use) |
|---|---|
| #5A3A1E | earth-600 `#986B14` |
| #3E2712 | earth-900 `#3E2A08` |
| #7B5533 | earth-500 `#B1831F` |
| #F4C542 | pollen-400 `#FFC91B` |
| #FFD966 | pollen-200 `#FFE684` (light highlight) / pollen-300 `#FFDC4F` (text on dark) |
| #FAF6F0 | neutral-50 `#FAF8F5` |
| #EFE7DB | neutral-200 `#E2DACC` |
| #4A4034 | neutral-600 `#5A4D3D` |
| #8A7B6C | neutral-500 `#7C6B55` |

Old values must NOT exist anywhere in the codebase after migration.

---

## 7. USAGE PHILOSOPHY

- **earth-600** = workhorse (nav, banners, primary buttons) — max ~30% of any viewport
- **pollen-400** = attention only (CTA, counters, active nav) — never large bg areas
- **maroon** = luxury depth (footer, dark strips, hovers) — never body-area bg on light pages
- **bronze** = richness detail (icons, badges, gradient partner)
- **White space** dominates — colors frame content, never flood it
- Yellow text rule: on dark bg use pollen-300; highlights/underlines use pollen-400/bronze

---

## 8. TAILWIND CONFIG (apply exactly)

```js
// tailwind.config.js
colors: {
  brand: {
    earth:  { 50:'#FCF6E7',100:'#F7E8C4',200:'#EFD28D',300:'#E5BA55',400:'#CD9E30',500:'#B1831F',600:'#986B14',700:'#795410',800:'#5A3F0C',900:'#3E2A08',950:'#2A1C05' },
    maroon: { 50:'#FDECEA',100:'#FBD2CF',200:'#F6A29D',300:'#EF6F68',400:'#E23A31',500:'#C11A10',600:'#9C0C05',700:'#7F0400',800:'#5D0300',900:'#3F0200',950:'#2B0100' },
    bronze: { 50:'#FDF8E6',100:'#FAEFC2',200:'#F4DF89',300:'#ECCF50',400:'#DFBA2E',500:'#CA9D17',600:'#A57D10',700:'#7C5D0C',800:'#523E08',900:'#2B1F04',950:'#1D1502' },
    pollen: { 50:'#FFF9E1',100:'#FFF0B6',200:'#FFE684',300:'#FFDC4F',400:'#FFC91B',500:'#EBB70D',600:'#C09108',700:'#8F6C06',800:'#5F4804',900:'#302502',950:'#221A01' },
    neutral:{ 50:'#FAF8F5',100:'#F1EDE6',200:'#E2DACC',300:'#CDBFA9',400:'#A6957C',500:'#7C6B55',600:'#5A4D3D',700:'#42382C',800:'#2C251D',900:'#191410',950:'#0F0C0A' },
  }
}
```

Components must use classes like `bg-brand-earth-600`, `text-brand-pollen-300` — never raw hex.

---

## 9. FINAL COLOR CHECKLIST (every UI task)

- [ ] Only colors from this file used (grep for stray hex)
- [ ] Old palette fully removed
- [ ] Contrast rules (Section 4) respected
- [ ] WhatsApp green untouched
- [ ] Dark bg → pollen-300 headings, white body text
- [ ] Light bg → black headings, neutral-600 body
