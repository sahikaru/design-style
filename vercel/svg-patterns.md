# SVG Pattern Reference

> Aligned with Vercel / Geist design system — see `design-system.md` for authoritative tokens.

Inline SVG patterns characteristic of the Vercel design language. All patterns are monochrome by default and use the shadow-as-border philosophy (no heavy strokes, no decorative fills). Workflow accent colors (`#0a72ef` / `#de1d8d` / `#ff5b4f`) appear only in the pipeline connector.

---

## Pattern 1 — Vercel Triangle Logomark

**Purpose:** The brand anchor. Equilateral triangle pointing upward, solid fill. Appears in the sticky nav, footer, favicon, and every brand moment.

**Usage:** Always 24×20 viewBox, always `fill="#000000"` on light backgrounds. On dark backgrounds, use `fill="#ffffff"`. Never rotate, never outline, never tint.

```xml
<svg viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg"
     width="24" height="20" aria-label="Vercel" role="img">
  <path d="M12 0L24 20H0L12 0Z" fill="#000000"/>
</svg>
```

**Dark variant:**

```xml
<svg viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg"
     width="24" height="20" aria-label="Vercel" role="img">
  <path d="M12 0L24 20H0L12 0Z" fill="#ffffff"/>
</svg>
```

---

## Pattern 2 — Workflow Pipeline Connector Arrow

**Purpose:** Joins the three workflow steps (Develop → Preview → Ship) in the pipeline section. Thin, geometric, monochrome — the arrow is a connector, not an accent. The steps themselves carry the color.

**Usage:** Place between steps in a `.workflow-connector` slot. 32×12 viewBox keeps it compact. Stroke `#808080` (gray-400) on light, `rgba(255,255,255,0.4)` on dark.

```xml
<svg viewBox="0 0 32 12" xmlns="http://www.w3.org/2000/svg"
     width="32" height="12" aria-hidden="true">
  <line x1="0" y1="6" x2="26" y2="6"
        stroke="#808080" stroke-width="1" stroke-linecap="square"/>
  <path d="M22 2 L28 6 L22 10"
        stroke="#808080" stroke-width="1" fill="none"
        stroke-linecap="square" stroke-linejoin="miter"/>
</svg>
```

**Variant with workflow accent** (optional — only when connecting a single-color segment):

```xml
<svg viewBox="0 0 32 12" xmlns="http://www.w3.org/2000/svg" width="32" height="12">
  <line x1="0" y1="6" x2="26" y2="6" stroke="#0a72ef" stroke-width="1"/>
  <path d="M22 2 L28 6 L22 10" stroke="#0a72ef" stroke-width="1" fill="none"/>
</svg>
```

---

## Pattern 3 — Focus Ring Overlay Illustration

**Purpose:** Documents the 2px focus ring (`#0072f5`) Vercel applies to every interactive element via `:focus-visible`. Useful inside accessibility docs or design-system pages to illustrate the treatment.

**Usage:** Overlay on top of a button/input screenshot or abstract rounded rect. The outer rounded rect is the focus ring; the inner one is the element being focused.

```xml
<svg viewBox="0 0 200 72" xmlns="http://www.w3.org/2000/svg"
     width="200" height="72" aria-label="Focus ring" role="img">
  <!-- Focus ring: 2px offset outward, #0072f5 -->
  <rect x="4" y="4" width="192" height="64" rx="10"
        fill="none" stroke="#0072f5" stroke-width="2"/>
  <!-- Element (shadow-bordered button) -->
  <rect x="10" y="10" width="180" height="52" rx="6"
        fill="#ffffff" stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
  <!-- Label -->
  <text x="100" y="42" text-anchor="middle"
        font-family="Geist, ui-sans-serif, Arial" font-size="14"
        font-weight="500" fill="#171717"
        letter-spacing="0">Focused</text>
</svg>
```

---

## Pattern 4 — Pill Badge With Dot Indicator

**Purpose:** Status / feature pills. Used inline in hero eyebrows ("New — Fluid Compute"), announcement banners, and changelog markers. The leading dot telegraphs "live/new" without text.

**Usage:** 9999px radius (implied by height/2). Default tint is `#ebf5ff` bg / `#0068d6` fg / `#0068d6` dot. Swap to workflow accents for pipeline-context pills only.

```xml
<svg viewBox="0 0 160 28" xmlns="http://www.w3.org/2000/svg"
     width="160" height="28" aria-label="New — Fluid Compute" role="img">
  <!-- Pill background -->
  <rect x="0" y="0" width="160" height="28" rx="14"
        fill="#ebf5ff"/>
  <!-- Dot indicator -->
  <circle cx="14" cy="14" r="3" fill="#0068d6"/>
  <!-- Label (replace text in markup, or leave for illustration) -->
  <text x="26" y="18"
        font-family="Geist, ui-sans-serif, Arial" font-size="12"
        font-weight="500" fill="#0068d6">New — Fluid Compute</text>
</svg>
```

**Workflow variant (Develop):**

```xml
<svg viewBox="0 0 90 24" xmlns="http://www.w3.org/2000/svg" width="90" height="24">
  <rect x="0" y="0" width="90" height="24" rx="12" fill="#e8f1fe"/>
  <circle cx="12" cy="12" r="3" fill="#0a72ef"/>
  <text x="22" y="16" font-family="Geist Mono, ui-monospace, monospace"
        font-size="11" font-weight="500" fill="#0a72ef"
        letter-spacing="0.5">DEVELOP</text>
</svg>
```

---

## Pattern 5 — Geometric Dot-Grid Hero Background

**Purpose:** Subtle atmospheric texture behind the hero. Monochrome dot grid — never colorful, never heavy. Adds depth without competing with the 64px compressed headline.

**Usage:** Absolutely positioned behind hero content with low opacity. Use as a `<pattern>` reference so the grid scales with the container.

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
     viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice"
     aria-hidden="true" style="position:absolute;inset:0;z-index:0;pointer-events:none;">
  <defs>
    <pattern id="vercel-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="1" cy="1" r="1" fill="#171717" fill-opacity="0.06"/>
    </pattern>
    <!-- Radial mask so the grid fades outward -->
    <radialGradient id="dot-fade" cx="50%" cy="50%" r="50%">
      <stop offset="0%"   stop-color="#fff" stop-opacity="1"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="dot-mask">
      <rect width="100%" height="100%" fill="url(#dot-fade)"/>
    </mask>
  </defs>
  <rect width="100%" height="100%" fill="url(#vercel-dot-grid)" mask="url(#dot-mask)"/>
</svg>
```

**Solid-line grid variant** (for docs / spec pages):

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="240"
     aria-hidden="true">
  <defs>
    <pattern id="vercel-line-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 L0 0 0 40" fill="none"
            stroke="#171717" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#vercel-line-grid)"/>
</svg>
```

---

## Pattern 6 — Workflow Step Marker (Triangle + Line)

**Purpose:** A vertical rail marker used next to each workflow step title in docs/changelog layouts. Triangle bullet ties back to the Vercel logomark; the line implies the pipeline continues.

**Usage:** Place at the left of a step block. Triangle gets the step's workflow accent color.

```xml
<svg viewBox="0 0 14 120" xmlns="http://www.w3.org/2000/svg"
     width="14" height="120" aria-hidden="true">
  <!-- Accent triangle — swap fill per step: #0a72ef / #de1d8d / #ff5b4f -->
  <path d="M7 0 L14 10 H0 Z" fill="#0a72ef"/>
  <!-- Thin rail -->
  <line x1="7" y1="14" x2="7" y2="120"
        stroke="rgba(0,0,0,0.08)" stroke-width="1"/>
</svg>
```

---

## General Guidelines

1. **Monochrome first.** The only colors allowed outside logos are the three workflow accents — and only in workflow context.
2. **No heavy strokes.** 1px is the default; 2px is reserved for focus rings. Never exceed 2px.
3. **Prefer `fill` over `stroke`** for filled shapes (triangle logo, dot indicators). Use `stroke` only for connectors, arrows, and focus rings.
4. **`aria-hidden="true"`** on decorative SVG; `aria-label` + `role="img"` on semantic ones (logos, pill badges).
5. **Inline, not linked.** Every SVG ships inside the HTML so that single-file previews work offline.
6. **No drop shadows inside SVG.** Depth comes from the surrounding `box-shadow` stack on the parent element, not from SVG filters.
7. **Match Geist tracking.** SVG `<text>` must use Geist with matching letter-spacing (negative at display sizes, zero at caption sizes). Without it the SVG text will visually drift from surrounding Geist HTML text.
