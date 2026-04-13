# HTML Template Reference

> Aligned with Vercel / Geist design system — see `design-system.md` for authoritative tokens.

This file contains the exact CSS values, HTML patterns, and component markup for producing Vercel-style marketing and documentation pages. The signature technique is **shadow-as-border** — there is no traditional CSS `border` on cards, nav, or CTAs; all 1px lines are rendered via `box-shadow: 0px 0px 0px 1px`.

---

## Complete CSS

```css
/* ===== Design Tokens ===== */
:root {
  /* --- Primary palette --- */
  --vercel-black:       #171717;   /* primary text, dark CTA */
  --true-black:         #000000;   /* logomark, console default */
  --pure-white:         #ffffff;   /* canvas, card surface */

  /* --- Neutral scale --- */
  --gray-900:           #171717;
  --gray-600:           #4d4d4d;   /* secondary body */
  --gray-500:           #666666;   /* tertiary */
  --gray-400:           #808080;   /* placeholder / disabled */
  --gray-100:           #ebebeb;   /* light ring border */
  --gray-50:            #fafafa;   /* inner-glow ring */

  /* --- Workflow accents (use ONLY in pipeline context) --- */
  --develop-text:       #0a72ef;
  --preview-text:       #de1d8d;
  --ship-text:          #ff5b4f;

  /* --- Console / code --- */
  --console-blue:       #0070f3;
  --console-purple:     #7928ca;
  --console-pink:       #eb367f;

  /* --- Interactive --- */
  --link-blue:          #0072f5;
  --focus-color:        hsla(212, 100%, 48%, 1);
  --ring-color:         rgba(147, 197, 253, 0.5);

  /* --- Badges / tinted surfaces --- */
  --badge-blue-bg:      #ebf5ff;
  --badge-blue-text:    #0068d6;

  /* --- Shadow tokens (the system) --- */
  --shadow-border:      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  --shadow-border-light:rgb(235, 235, 235) 0px 0px 0px 1px;
  --shadow-elevation:   rgba(0, 0, 0, 0.04) 0px 2px 2px;
  --shadow-ambient:     rgba(0, 0, 0, 0.04) 0px 8px 8px -8px;
  --shadow-inner-glow:  #fafafa 0px 0px 0px 1px;
  --shadow-card-full:
    rgba(0,0,0,0.08) 0px 0px 0px 1px,
    rgba(0,0,0,0.04) 0px 2px 2px,
    rgba(0,0,0,0.04) 0px 8px 8px -8px,
    #fafafa 0px 0px 0px 1px;

  /* --- Radii --- */
  --radius-micro:       2px;
  --radius-subtle:      4px;
  --radius-standard:    6px;
  --radius-card:        8px;
  --radius-image:       12px;
  --radius-pill:        9999px;
}

/* ===== Font loading =====
   Geist Sans + Geist Mono. Vercel ships Geist via assets.vercel.com.
   We try the variable font first; if remote fonts are fragile in your
   context, the fallback stack (ui-sans-serif, -apple-system, Inter, Arial)
   still preserves geometry but loses the signature -2.4px compression. */
@font-face {
  font-family: "Geist";
  src: url("https://assets.vercel.com/raw/upload/fonts/2/v9vaurrfg4l0y6hb2zyt.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Geist Mono";
  src: url("https://assets.vercel.com/raw/upload/fonts/2/kq7d2q8umc9jnyw8f3fm.woff2") format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* ===== Base ===== */
* { margin: 0; padding: 0; box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: "Geist", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Inter", Arial, sans-serif;
  font-feature-settings: "liga" 1;         /* ligatures are structural, not optional */
  background: var(--pure-white);
  color: var(--vercel-black);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code, pre, .mono {
  font-family: "Geist Mono", ui-monospace, SFMono-Regular, "Roboto Mono", Menlo, Monaco, "Liberation Mono", "DejaVu Sans Mono", "Courier New", monospace;
  font-feature-settings: "liga" 1, "tnum" 1;
}

/* ===== Typography utilities ===== */
/* Rule: letter-spacing scales with size. Only weights 400/500/600. */
.t-display {
  font-size: 48px;
  font-weight: 600;
  line-height: 1.00;
  letter-spacing: -2.4px;
  color: var(--vercel-black);
}
.t-display-xl {
  font-size: 64px;
  font-weight: 600;
  line-height: 1.00;
  letter-spacing: -2.88px;
  color: var(--vercel-black);
}
.t-section {
  font-size: 40px;
  font-weight: 600;
  line-height: 1.20;
  letter-spacing: -2.4px;
  color: var(--vercel-black);
}
.t-subheading {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -1.28px;
  color: var(--vercel-black);
}
.t-card-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.96px;
  color: var(--vercel-black);
}
.t-body-large {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.80;
  color: var(--gray-600);
}
.t-body {
  font-size: 18px;
  font-weight: 400;
  line-height: 1.56;
  color: var(--gray-600);
}
.t-body-small {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.50;
  color: var(--gray-600);
}
.t-body-medium {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.50;
  color: var(--vercel-black);
}
.t-button {
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0;
}
.t-caption {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  color: var(--gray-500);
}
.t-mono-label {
  font-family: "Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.00;
  text-transform: uppercase;
  letter-spacing: 0;
}

/* ===== Links ===== */
a { color: inherit; text-decoration: none; }
a.link-blue { color: var(--link-blue); text-decoration: underline; text-underline-offset: 2px; }

/* ===== Focus ring (accessibility) ===== */
:focus-visible {
  outline: 2px solid var(--focus-color);
  outline-offset: 2px;
  border-radius: var(--radius-standard);
}

/* ===== Navigation ===== */
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 32px;
  height: 64px;
  padding: 0 32px;
  background: var(--pure-white);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.08);   /* shadow-as-border bottom only */
}
.nav-logo {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  color: var(--vercel-black);
}
.nav-logo svg { width: 22px; height: 22px; display: block; }
.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: 16px;
}
.nav-links a {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-600);
  transition: color 0.15s ease;
}
.nav-links a:hover { color: var(--vercel-black); }
.nav-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }

/* ===== Buttons ===== */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  padding: 10px 16px;
  border-radius: var(--radius-standard);
  border: 0;                                /* NEVER use CSS border */
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
  text-decoration: none;
  white-space: nowrap;
}
.btn-dark {
  background: var(--vercel-black);
  color: var(--pure-white);
}
.btn-dark:hover { background: #2a2a2a; }
.btn-ghost {
  background: var(--pure-white);
  color: var(--vercel-black);
  box-shadow: var(--shadow-border-light);   /* ring-border instead of CSS border */
}
.btn-ghost:hover { box-shadow: var(--shadow-border); }

/* Dark pill nav CTA */
.btn-pill-dark {
  background: var(--vercel-black);
  color: var(--pure-white);
  border-radius: var(--radius-pill);
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
}
.btn-pill-dark:hover { background: #2a2a2a; }

/* ===== Pill badge ===== */
.pill-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--badge-blue-bg);
  color: var(--badge-blue-text);
  font-size: 12px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
}
.pill-badge .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--badge-blue-text);
}

/* ===== Cards (shadow-as-border, multi-layer stack) ===== */
.card {
  background: var(--pure-white);
  border-radius: var(--radius-card);
  padding: 32px;
  /* The full multi-layer stack: border + elevation + ambient + inner glow */
  box-shadow: var(--shadow-card-full);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.card:hover {
  box-shadow:
    rgba(0,0,0,0.12) 0px 0px 0px 1px,
    rgba(0,0,0,0.06) 0px 4px 4px,
    rgba(0,0,0,0.06) 0px 12px 12px -8px,
    #fafafa 0px 0px 0px 1px;
  transform: translateY(-1px);
}
.card-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.96px;
  color: var(--vercel-black);
  margin-bottom: 12px;
}
.card-body {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.56;
  color: var(--gray-600);
}

/* Subtle card variant (Level 2) */
.card-subtle {
  background: var(--pure-white);
  border-radius: var(--radius-card);
  padding: 24px;
  box-shadow: var(--shadow-border), var(--shadow-elevation);
}

/* ===== Hero ===== */
.hero {
  padding: 120px 32px 96px;
  text-align: center;
  max-width: 960px;
  margin: 0 auto;
}
.hero-eyebrow {
  margin-bottom: 24px;
  display: inline-flex;
}
.hero-title {
  font-size: 64px;
  font-weight: 600;
  line-height: 1.00;
  letter-spacing: -2.88px;
  color: var(--vercel-black);
  margin-bottom: 24px;
}
.hero-subtitle {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.60;
  color: var(--gray-600);
  max-width: 640px;
  margin: 0 auto 40px;
}
.hero-cta-row {
  display: inline-flex;
  gap: 12px;
}

/* ===== Workflow pipeline ===== */
.workflow {
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr;
  align-items: start;
  gap: 24px;
  max-width: 1040px;
  margin: 0 auto;
  padding: 80px 32px;
}
.workflow-step {
  text-align: left;
}
.workflow-step .t-mono-label { display: block; margin-bottom: 16px; }
.workflow-step .step-title {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  letter-spacing: -0.96px;
  color: var(--vercel-black);
  margin-bottom: 12px;
}
.workflow-step .step-desc {
  font-size: 16px;
  line-height: 1.56;
  color: var(--gray-600);
}
.workflow-connector {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  color: var(--gray-400);
}
.workflow-step.develop .t-mono-label { color: var(--develop-text); }
.workflow-step.preview .t-mono-label { color: var(--preview-text); }
.workflow-step.ship    .t-mono-label { color: var(--ship-text); }

/* ===== Card grid ===== */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px 96px;
}

/* ===== Trust bar ===== */
.trust-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
  padding: 48px 32px;
  max-width: 1200px;
  margin: 0 auto;
}
.trust-logo {
  font-family: "Geist", sans-serif;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.4px;
  color: var(--gray-400);
  filter: grayscale(1);
  opacity: 0.75;
  transition: opacity 0.2s ease;
}
.trust-logo:hover { opacity: 1; }

/* ===== Section divider (full dark line) ===== */
.section-divider {
  border: 0;
  border-bottom: 1px solid var(--vercel-black);
  margin: 0;
}

/* ===== Footer ===== */
.footer {
  padding: 48px 32px;
  color: var(--gray-500);
  font-size: 14px;
}
.footer-top { border-bottom: 1px solid var(--vercel-black); padding-bottom: 32px; margin-bottom: 32px; }

/* ===== Responsive ===== */
@media (max-width: 1024px) {
  .card-grid { grid-template-columns: repeat(2, 1fr); }
  .workflow  { grid-template-columns: 1fr; }
  .workflow-connector { display: none; }
}
@media (max-width: 600px) {
  .hero { padding: 64px 20px; }
  .hero-title { font-size: 40px; letter-spacing: -1.8px; }
  .t-display { font-size: 36px; letter-spacing: -1.6px; }
  .card-grid { grid-template-columns: 1fr; padding: 0 20px 64px; }
  .nav { padding: 0 16px; gap: 16px; }
  .nav-links { display: none; }
}
```

---

## HTML Structure

### Document skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Vercel — Build and deploy</title>
  <style>/* ...all CSS above... */</style>
</head>
<body>
  <!-- nav / hero / workflow / cards / trust / footer -->
</body>
</html>
```

### Sticky nav with Vercel triangle logo

```html
<nav class="nav">
  <a class="nav-logo" href="#">
    <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 0L24 20H0L12 0Z" fill="#000000"/>
    </svg>
    Vercel
  </a>
  <div class="nav-links">
    <a href="#">Products</a>
    <a href="#">Solutions</a>
    <a href="#">Resources</a>
    <a href="#">Pricing</a>
    <a href="#">Docs</a>
  </div>
  <div class="nav-right">
    <a href="#" class="t-button" style="color:var(--gray-600);">Log In</a>
    <a href="#" class="btn-pill-dark">Start Deploying</a>
  </div>
</nav>
```

### Hero with compressed headline

```html
<section class="hero">
  <span class="hero-eyebrow">
    <span class="pill-badge"><span class="dot"></span> New — Fluid Compute</span>
  </span>
  <h1 class="hero-title">Your complete platform for the web.</h1>
  <p class="hero-subtitle">
    Vercel provides the developer tools and cloud infrastructure to build, scale, and secure
    a faster, more personalized web.
  </p>
  <div class="hero-cta-row">
    <a href="#" class="btn btn-dark">Start Deploying</a>
    <a href="#" class="btn btn-ghost">Get a Demo</a>
  </div>
</section>
```

### Workflow pipeline: Develop → Preview → Ship

```html
<section class="workflow">
  <div class="workflow-step develop">
    <span class="t-mono-label">Develop</span>
    <div class="step-title">Start with code.</div>
    <p class="step-desc">Git-connected deploys from localhost to globally-available in seconds.</p>
  </div>
  <div class="workflow-connector">→</div>

  <div class="workflow-step preview">
    <span class="t-mono-label">Preview</span>
    <div class="step-title">Every push, previewed.</div>
    <p class="step-desc">Immutable preview URLs for every commit. Share, review, iterate.</p>
  </div>
  <div class="workflow-connector">→</div>

  <div class="workflow-step ship">
    <span class="t-mono-label">Ship</span>
    <div class="step-title">Deploy to production.</div>
    <p class="step-desc">Promote any preview to production. Roll back instantly.</p>
  </div>
</section>
```

### Shadow-bordered card grid

```html
<section class="card-grid">
  <article class="card">
    <h3 class="card-title">Instant rollbacks.</h3>
    <p class="card-body">Every deployment is immutable. One click restores any previous version.</p>
  </article>
  <article class="card">
    <h3 class="card-title">Edge everywhere.</h3>
    <p class="card-body">Your code runs close to users — automatically, on every region.</p>
  </article>
  <article class="card">
    <h3 class="card-title">Observability built in.</h3>
    <p class="card-body">Logs, traces, and analytics without instrumentation.</p>
  </article>
</section>
```

### Trust bar

```html
<section class="trust-bar">
  <span class="trust-logo">Perplexity</span>
  <span class="trust-logo">Notion</span>
  <span class="trust-logo">Cursor</span>
  <span class="trust-logo">Linear</span>
  <span class="trust-logo">Ramp</span>
</section>
```

### Footer with dark section break

```html
<hr class="section-divider" />
<footer class="footer">
  <div class="footer-top">
    <span class="t-mono-label" style="color:var(--gray-500);">Vercel</span>
  </div>
  <p>© 2026 Vercel Inc. All rights reserved.</p>
</footer>
```

---

## Quick Reference / Iteration Guide

**Shadow-as-border is non-negotiable.** If you catch yourself writing `border: 1px solid ...` on a card, nav, or button — stop. Use `box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.08)` instead. The only place traditional `border` is allowed: full-width dark section dividers (`border-bottom: 1px solid #171717`).

**Letter-spacing scales with size.** Never positive, never zero at display scale:

| Font size | Letter-spacing |
|---|---|
| 64px | -2.88px |
| 48px | -2.4px |
| 40px | -2.4px |
| 32px | -1.28px |
| 24px | -0.96px |
| 20px | normal |
| 18px | normal |
| 16px | normal (or -0.32px on semibold) |
| 14px | normal |

**Three weights only.** 400 (body/reading), 500 (UI/nav/buttons), 600 (headings/emphasis). No 700 on body copy — ever. The only exception is the 7px micro-badge.

**Workflow accents are contextual.** `#0a72ef` (Develop), `#de1d8d` (Preview), `#ff5b4f` (Ship) only appear in the pipeline context. Don't sprinkle them as decoration.

**Card shadow stack memorization** (four layers, each has a job):
1. `rgba(0,0,0,0.08) 0px 0px 0px 1px` — the border
2. `rgba(0,0,0,0.04) 0px 2px 2px` — close elevation
3. `rgba(0,0,0,0.04) 0px 8px 8px -8px` — ambient depth at distance
4. `#fafafa 0px 0px 0px 1px` — inner glow ring (what makes the card feel built)

**Font fallback tradeoff.** If Geist fails to load, `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Inter", Arial` preserves geometry — but Inter and the system stack do not support the extreme negative tracking as gracefully as Geist. Headlines will look slightly less "minified". Acceptable, but ship with Geist when possible.

**Spacing scale.** Base 8px. Notable jump: 16px → 32px with nothing between. Section vertical padding 80–120px on desktop, 48–64px on mobile. The whitespace IS the design.

**Radii cheat sheet.** 2px (inline code) · 4px (small containers) · 6px (buttons/links) · 8px (cards) · 12px (image cards) · 64–100px (nav tab pills) · 9999px (badges/tags).
