# Apple HTML Template Reference

> Aligned with the Apple design system — see `design-system.md` for all token origins.

This file contains the unified CSS, HTML patterns, and component markup for the Apple-style landing/doc generator. The design uses **alternating full-bleed sections** (pure black and light gray `#f5f5f7`) stacked vertically — no separate themes.

---

## Font Strategy

No Google Fonts import. SF Pro is Apple's proprietary typeface; when SF is unavailable the stack gracefully degrades through Helvetica Neue to the host system's sans-serif. Display is used at 20px and above, Text is used below 20px — never mix.

```css
--font-display: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
--font-text:    "SF Pro Text",    "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
```

---

## Unified CSS

```css
/* ═══════════════════════════════════════════════
   Apple Design System
   Alternating black / #f5f5f7 sections
   ═══════════════════════════════════════════════ */

:root {
  /* ── Surfaces ── */
  --black: #000000;
  --near-black: #1d1d1f;
  --light-gray: #f5f5f7;
  --white: #ffffff;

  /* ── Dark Surface Stack ── */
  --dark-surface-1: #272729;
  --dark-surface-2: #262628;
  --dark-surface-3: #28282a;
  --dark-surface-4: #2a2a2d;
  --dark-surface-5: #242426;

  /* ── Interactive (singular accent) ── */
  --apple-blue: #0071e3;
  --link-blue: #0066cc;
  --bright-blue: #2997ff;

  /* ── Text ── */
  --text-on-dark: #ffffff;
  --text-on-light: #1d1d1f;
  --text-secondary-light: rgba(0, 0, 0, 0.8);
  --text-tertiary-light: rgba(0, 0, 0, 0.48);

  /* ── Button States ── */
  --button-active: #ededf2;
  --button-default-light: #fafafc;
  --overlay-scrim: rgba(210, 210, 215, 0.64);
  --white-32: rgba(255, 255, 255, 0.32);

  /* ── Nav Glass ── */
  --nav-glass: rgba(0, 0, 0, 0.8);
  --nav-blur: saturate(180%) blur(20px);

  /* ── Shadow (the single shadow) ── */
  --card-shadow: rgba(0, 0, 0, 0.22) 3px 5px 30px 0px;

  /* ── Focus ── */
  --focus-ring: 2px solid #0071e3;

  /* ── Radii ── */
  --r-micro: 5px;
  --r-std: 8px;
  --r-comfort: 11px;
  --r-large: 12px;
  --r-pill: 980px;
  --r-circle: 50%;

  /* ── Typography ── */
  --font-display: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
  --font-text:    "SF Pro Text",    "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-text);
  background: var(--white);
  color: var(--text-on-light);
  font-size: 17px;
  line-height: 1.47;
  letter-spacing: -0.374px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:focus-visible { outline: var(--focus-ring); outline-offset: 2px; }

/* ═══ TYPOGRAPHY UTILITIES ═══ */

.t-display-hero {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: -0.28px;
}
.t-section-heading {
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 600;
  line-height: 1.10;
  letter-spacing: -0.24px;
}
.t-tile-heading {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 400;
  line-height: 1.14;
  letter-spacing: 0.196px;
}
.t-card-title {
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 700;
  line-height: 1.19;
  letter-spacing: 0.231px;
}
.t-sub-heading {
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: 0.231px;
}
.t-nav-heading {
  font-family: var(--font-text);
  font-size: 34px;
  font-weight: 600;
  line-height: 1.47;
  letter-spacing: -0.374px;
}
.t-sub-nav {
  font-family: var(--font-text);
  font-size: 24px;
  font-weight: 300;
  line-height: 1.50;
}
.t-body {
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.374px;
}
.t-body-emphasis {
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 600;
  line-height: 1.24;
  letter-spacing: -0.374px;
}
.t-button-large {
  font-family: var(--font-text);
  font-size: 18px;
  font-weight: 300;
  line-height: 1.00;
}
.t-button {
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 2.41;
}
.t-link {
  font-family: var(--font-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: -0.224px;
}
.t-caption {
  font-family: var(--font-text);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.29;
  letter-spacing: -0.224px;
}
.t-caption-bold {
  font-family: var(--font-text);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.224px;
}
.t-micro {
  font-family: var(--font-text);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.12px;
}
.t-micro-bold {
  font-family: var(--font-text);
  font-size: 12px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.12px;
}
.t-nano {
  font-family: var(--font-text);
  font-size: 10px;
  font-weight: 400;
  line-height: 1.47;
  letter-spacing: -0.08px;
}

/* ═══ NAVIGATION GLASS ═══
   Translucent dark bar floating above all sections.
   backdrop-filter blur(20px) saturate(180%) is the
   non-negotiable signature. */
.nav {
  position: sticky;
  top: 0;
  z-index: 9999;
  height: 48px;
  background: var(--nav-glass);
  -webkit-backdrop-filter: var(--nav-blur);
          backdrop-filter: var(--nav-blur);
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav__inner {
  width: 100%;
  max-width: 1024px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  gap: 40px;
}
.nav__logo {
  color: var(--white);
  display: inline-flex;
  align-items: center;
}
.nav__links {
  display: flex;
  gap: 32px;
  flex: 1;
  justify-content: center;
}
.nav a {
  font-family: var(--font-text);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.12px;
  color: var(--white);
  opacity: 0.8;
  text-decoration: none;
  transition: opacity 0.24s ease;
}
.nav a:hover { opacity: 1; }

/* ═══ SECTION RHYTHM ═══
   Full-bleed color block = one cinematic "scene".
   Alternate .section--dark with .section--light. */
.section {
  width: 100%;
  padding: 120px 22px;
  text-align: center;
}
.section--dark {
  background: var(--black);
  color: var(--white);
}
.section--light {
  background: var(--light-gray);
  color: var(--near-black);
}
.section__inner {
  max-width: 980px;
  margin: 0 auto;
}
.section__eyebrow {
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 600;
  line-height: 1.19;
  letter-spacing: 0.011em;
  margin-bottom: 8px;
}

/* ═══ CTA BUTTONS ═══ */

/* Pill link — the signature Apple inline CTA (980px radius) */
.btn-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1;
  padding: 12px 22px;
  border-radius: var(--r-pill);
  border: 1px solid var(--link-blue);
  color: var(--link-blue);
  background: transparent;
  text-decoration: none;
  transition: background 0.24s ease, color 0.24s ease;
  cursor: pointer;
}
.btn-pill:hover { background: var(--link-blue); color: var(--white); }
.section--dark .btn-pill { border-color: var(--bright-blue); color: var(--bright-blue); }
.section--dark .btn-pill:hover { background: var(--bright-blue); color: var(--black); }

/* Filled blue CTA — rectangular 8px radius */
.btn-filled {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-text);
  font-size: 17px;
  font-weight: 400;
  line-height: 1;
  padding: 12px 22px;
  border-radius: var(--r-std);
  border: 1px solid transparent;
  background: var(--apple-blue);
  color: var(--white);
  text-decoration: none;
  transition: background 0.24s ease;
  cursor: pointer;
}
.btn-filled:hover { background: #0077ed; }
.btn-filled:active { background: var(--button-active); color: var(--near-black); }

/* Primary dark (secondary CTA variant on light bg) */
.btn-dark {
  display: inline-flex;
  align-items: center;
  padding: 12px 22px;
  font-family: var(--font-text);
  font-size: 17px;
  border-radius: var(--r-std);
  background: var(--near-black);
  color: var(--white);
  text-decoration: none;
}

/* Small "Learn more >" inline link */
.link-learn {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: var(--font-text);
  font-size: 17px;
  line-height: 1.47;
  letter-spacing: -0.374px;
  color: var(--link-blue);
  text-decoration: none;
}
.link-learn:hover { text-decoration: underline; }
.section--dark .link-learn { color: var(--bright-blue); }

/* Filter / search button */
.btn-filter {
  display: inline-flex;
  align-items: center;
  height: 32px;
  padding: 0 14px;
  border-radius: var(--r-comfort);
  background: var(--button-default-light);
  color: var(--text-secondary-light);
  border: 3px solid rgba(0, 0, 0, 0.04);
  font-family: var(--font-text);
  font-size: 14px;
}

/* Media control circular button (play/pause/carousel) */
.media-ctrl {
  width: 44px;
  height: 44px;
  border-radius: var(--r-circle);
  background: var(--overlay-scrim);
  color: var(--text-tertiary-light);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.24s ease;
}
.media-ctrl:active { transform: scale(0.9); }
.media-ctrl:focus-visible {
  background: var(--white);
  color: var(--black);
  outline: var(--focus-ring);
}

/* ═══ PRODUCT HERO MODULE ═══
   Full-viewport stage for a single product moment.
   Headline → subtitle → two pill CTAs side by side. */
.hero-module {
  min-height: 82vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 56px 22px 48px;
}
.hero-module__title {
  font-family: var(--font-display);
  font-size: 56px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: -0.28px;
  margin-bottom: 8px;
}
.hero-module__subtitle {
  font-family: var(--font-display);
  font-size: 21px;
  font-weight: 400;
  line-height: 1.19;
  letter-spacing: 0.011em;
  margin-bottom: 24px;
}
.hero-module__ctas {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

/* ═══ PRODUCT GRID TILE ═══
   Square-ish card. Product image top 60%, text + links below.
   Shadow only appears on elevated tiles. */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
}
.tile {
  background: var(--white);
  border-radius: var(--r-std);
  padding: 48px 32px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: var(--card-shadow);
}
.section--dark .tile {
  background: var(--dark-surface-1);
  color: var(--white);
}
.tile__image {
  width: 100%;
  aspect-ratio: 1 / 1;
  background: var(--light-gray);
  border-radius: var(--r-std);
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.section--dark .tile__image { background: var(--dark-surface-3); }
.tile__title {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: 0.196px;
  margin-bottom: 6px;
}
.tile__desc {
  font-family: var(--font-text);
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.224px;
  color: var(--text-secondary-light);
  margin-bottom: 20px;
}
.section--dark .tile__desc { color: rgba(255, 255, 255, 0.72); }
.tile__links { display: flex; gap: 16px; }

/* ═══ FOOTER ═══ */
.footer {
  background: var(--light-gray);
  color: var(--text-secondary-light);
  padding: 32px 22px;
  font-family: var(--font-text);
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: -0.12px;
}
.footer__inner {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}
.footer a {
  color: var(--text-secondary-light);
  text-decoration: none;
  margin-right: 20px;
}
.footer a:hover { text-decoration: underline; }

/* ═══ RESPONSIVE ═══ */
@media (max-width: 834px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .hero-module__title { font-size: 40px; letter-spacing: -0.2px; }
  .section { padding: 80px 22px; }
}
@media (max-width: 640px) {
  .product-grid { grid-template-columns: 1fr; }
  .hero-module__title { font-size: 32px; letter-spacing: -0.16px; }
  .hero-module__subtitle { font-size: 19px; }
  .nav__links { gap: 18px; }
}
```

---

## Component Snippets

### Translucent Glass Navigation

```html
<nav class="nav">
  <div class="nav__inner">
    <a href="#" class="nav__logo" aria-label="Apple">
      <!-- logomark SVG here — see svg-patterns.md -->
    </a>
    <div class="nav__links">
      <a href="#">Store</a>
      <a href="#">Mac</a>
      <a href="#">iPad</a>
      <a href="#">iPhone</a>
      <a href="#">Watch</a>
      <a href="#">Support</a>
    </div>
  </div>
</nav>
```

### Product Hero Module (dark)

```html
<section class="section section--dark">
  <div class="hero-module">
    <h1 class="hero-module__title">Product Name</h1>
    <p class="hero-module__subtitle">One line. Say everything.</p>
    <div class="hero-module__ctas">
      <a href="#" class="btn-pill">Learn more</a>
      <a href="#" class="btn-filled">Buy</a>
    </div>
  </div>
</section>
```

### Alternating Light Section + Product Grid

```html
<section class="section section--light">
  <div class="section__inner">
    <h2 class="t-section-heading">Get to know the lineup.</h2>
    <div class="product-grid">
      <article class="tile">
        <div class="tile__image"><!-- product silhouette --></div>
        <h3 class="tile__title">Model A</h3>
        <p class="tile__desc">One-line descriptor of what it does.</p>
        <div class="tile__links">
          <a href="#" class="link-learn">Learn more &gt;</a>
          <a href="#" class="link-learn">Buy &gt;</a>
        </div>
      </article>
      <!-- repeat tile ×3 -->
    </div>
  </div>
</section>
```

### Pill CTA + Filled Blue CTA Pair

```html
<div class="hero-module__ctas">
  <a href="#" class="btn-pill">Learn more</a>
  <a href="#" class="btn-filled">Buy</a>
</div>
```

### Media Control Cluster

```html
<div style="display:flex; gap:12px;">
  <button class="media-ctrl" aria-label="Previous">
    <!-- chevron-left SVG -->
  </button>
  <button class="media-ctrl" aria-label="Play">
    <!-- play-triangle SVG -->
  </button>
  <button class="media-ctrl" aria-label="Next">
    <!-- chevron-right SVG -->
  </button>
</div>
```

### Card with Signature Shadow

```html
<article class="tile" style="max-width: 320px;">
  <div class="tile__image"></div>
  <h3 class="tile__title">Card Title</h3>
  <p class="tile__desc">Shadow is `rgba(0,0,0,0.22) 3px 5px 30px 0px`.</p>
</article>
```

---

## Iteration Guide

Quick reference — all canonical values live in `design-system.md`.

1. Every interactive element gets Apple Blue (`#0071e3`) — no other accent colors.
2. Section backgrounds alternate: `#000` for immersive moments, `#f5f5f7` for informational moments.
3. Typography optical sizing: SF Pro Display at 20px+, SF Pro Text below — never mix.
4. Negative letter-spacing at all sizes: `-0.28px` at 56px, `-0.374px` at 17px, `-0.224px` at 14px, `-0.12px` at 12px.
5. The navigation glass (`rgba(0,0,0,0.8)` + `backdrop-filter: saturate(180%) blur(20px)`) is non-negotiable.
6. Products always appear on solid color fields — never on gradients, textures, or lifestyle backgrounds in hero modules.
7. Shadow is rare and always soft: `rgba(0,0,0,0.22) 3px 5px 30px 0px` or nothing at all.
8. Pill CTAs use 980px radius; filled blue CTAs use 8px radius — do not confuse the two.
9. Max content width: 980px centered. Sections are full-bleed; content inside is constrained.
10. Headline line-heights compress to 1.07–1.14; body opens to 1.47. This dynamic range creates the rhythm.
