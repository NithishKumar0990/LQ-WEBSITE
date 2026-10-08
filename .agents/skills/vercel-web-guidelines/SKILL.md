---
name: vercel-web-guidelines
description: Apply Vercel's web interface guidelines when writing or reviewing frontend code. Use before finishing any UI task to catch bad decisions early.
---
# Vercel Web Interface Guidelines (Condensed)

## Accessibility
- Semantic HTML first (button not div, nav/main/footer landmarks)
- Visible :focus-visible states, skip-to-content link
- Labels tied to inputs, aria-labels for icon-only buttons
- Respect prefers-reduced-motion

## Typography & Layout
- Fluid type with clamp(), body line-height 1.5+, headings 1.1-1.3
- Max line length 65-75ch for readability
- Reserve space for media/images (no layout shift/CLS)

## Interaction
- Min 44px touch targets
- Loading + error + optimistic states for all async actions
- Debounce search inputs, 150-200ms transitions ease-out

## Visual
- Dark mode first-class, not an afterthought
- tabular-nums for numbers in tables/stats
- Consistent radius + shadow tokens, no one-off values
