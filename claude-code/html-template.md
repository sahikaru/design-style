# CC-Wiki HTML Template Reference

> Aligned with Claude (Anthropic) design system -- see design-system.md

This file contains the unified CSS, HTML patterns, and component markup for the CC-Wiki documentation generator. The design uses **one page with light/dark section alternation** -- no separate themes.

---

## Font Import

```html
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
```

System fonts handle headlines (Georgia) and body (-apple-system stack). Only JetBrains Mono needs a web import.

---

## Unified CSS

```css
/* ═══════════════════════════════════════════════
   Claude (Anthropic) Design System
   Single page, light/dark section alternation
   ═══════════════════════════════════════════════ */

:root {
  /* ── Surfaces ── */
  --parchment: #f5f4ed;
  --ivory: #faf9f5;
  --near-black: #141413;
  --dark-surface: #30302e;

  /* ── Brand ── */
  --terracotta: #c96442;
  --coral: #d97757;

  /* ── Text ── */
  --text-primary: #141413;
  --text-secondary: #5e5d59;
  --text-tertiary: #87867f;
  --text-button: #4d4c48;
  --text-on-dark: #b0aea5;

  /* ── Borders ── */
  --border-cream: #f0eee6;
  --border-warm: #e8e6dc;
  --border-dark: #30302e;

  /* ── Utility ── */
  --warm-sand: #e8e6dc;
  --error: #b53333;

  /* ── Shadows ── */
  --shadow-ring: 0px 0px 0px 1px rgba(176, 174, 165, 0.25);
  --shadow-whisper: rgba(0, 0, 0, 0.05) 0px 4px 24px;

  /* ── Typography ── */
  --font-headline: Georgia, 'Times New Roman', serif;
  --font-body: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif;
  --font-code: 'JetBrains Mono', 'SF Mono', monospace;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: var(--font-body);
  background: var(--parchment);
  color: var(--text-primary);
  line-height: 1.60;
  font-size: 17px;
  -webkit-font-smoothing: antialiased;
}

/* ═══ HERO ═══
   Coral (#d97757) full-bleed background.
   Dark text, bottom-left aligned (Anthropic PDF cover style).
   No canvas animation in hero -- clean, editorial. */
.hero {
  background: var(--coral);
  min-height: 80vh;
  display: flex;
  align-items: flex-end;
  position: relative;
  overflow: hidden;
}
.hero-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 32px 60px;
  position: relative;
  z-index: 1;
  width: 100%;
}
.hero-tag {
  display: inline-block;
  font-family: var(--font-code);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--near-black);
  padding: 5px 14px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  margin-bottom: 22px;
}
.hero h1 {
  font-family: var(--font-headline);
  font-size: clamp(36px, 5.5vw, 56px);
  font-weight: 500;
  color: var(--near-black);
  line-height: 1.15;
  margin-bottom: 0;
  letter-spacing: -0.02em;
}
.hero-sub {
  font-size: 17px;
  color: rgba(20, 20, 19, 0.6);
  line-height: 1.60;
  max-width: 620px;
  margin-top: 24px;
}
.hero-sub code {
  background: rgba(0, 0, 0, 0.1);
  color: var(--near-black);
  padding: 2px 6px;
  border-radius: 4px;
  font-family: var(--font-code);
  font-size: 15px;
}
.hero-meta {
  margin-top: 32px;
  font-family: var(--font-code);
  font-size: 12px;
  color: rgba(20, 20, 19, 0.35);
  letter-spacing: 1px;
}

/* ═══ SECTIONS ═══
   Alternate between light (.section) and dark (.section.dark).
   Light: Parchment bg, dark text.
   Dark: Near Black bg, warm silver text. */
.section {
  background: var(--parchment);
  padding: clamp(3rem, 8vw, 6rem) clamp(1.5rem, 5vw, 4rem);
  border-bottom: 1px solid var(--border-warm);
}
.section.dark {
  background: var(--near-black);
  color: var(--text-on-dark);
  border-bottom-color: var(--border-dark);
}
.inner {
  max-width: 960px;
  margin: 0 auto;
}

/* Section header elements */
.sec-num {
  font-family: var(--font-code);
  font-size: 0.8rem;
  color: var(--terracotta);
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
}
.dark .sec-num { color: var(--coral); }

.sec-title {
  font-family: var(--font-headline);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 500;
  margin-bottom: 0.4em;
  line-height: 1.20;
}
.dark .sec-title { color: var(--ivory); }

.sec-sub {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  margin-bottom: 2rem;
  font-weight: 400;
}

.sec-rule {
  width: 100%;
  height: 2px;
  background: var(--terracotta);
  margin-bottom: 2.5rem;
  opacity: 0.7;
}
.dark .sec-rule { opacity: 0.4; }

/* Subsection headings within sections */
h2 {
  font-family: var(--font-headline);
  font-size: 26px;
  font-weight: 500;
  margin: 52px 0 18px;
  line-height: 1.30;
}
h3 {
  font-family: var(--font-headline);
  font-size: 19px;
  font-weight: 500;
  margin: 32px 0 12px;
  line-height: 1.30;
}
p { margin-bottom: 18px; }

/* ═══ SKILL CARDS ═══ */
.skill-card {
  background: var(--ivory);
  border: 1px solid var(--border-cream);
  border-radius: 8px;
  padding: 1.5rem 1.8rem;
  margin-bottom: 20px;
  transition: border-color 0.2s;
  box-shadow: var(--shadow-ring);
}
.skill-card:hover { border-color: var(--terracotta); }
.dark .skill-card {
  background: var(--dark-surface);
  border-color: var(--border-dark);
  color: var(--text-on-dark);
}
.dark .skill-card:hover { border-color: var(--coral); }

.skill-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.8rem;
  flex-wrap: wrap;
}
.skill-cmd {
  font-family: var(--font-code);
  font-size: 0.9rem;
  font-weight: 700;
  color: var(--terracotta);
}
.dark .skill-cmd { color: var(--coral); }

.skill-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.75;
  margin-bottom: 1rem;
}
.dark .skill-desc { color: var(--text-on-dark); }

/* Phase list within skill cards */
.skill-phases {
  margin: 1rem 0;
  padding: 0;
  list-style: none;
}
.skill-phases li {
  font-size: 0.8rem;
  color: var(--text-secondary);
  padding: 4px 0 4px 1.5rem;
  position: relative;
  line-height: 1.60;
}
.dark .skill-phases li { color: var(--text-on-dark); }
.skill-phases li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 8px;
  height: 8px;
  border: 1.5px solid var(--terracotta);
  border-radius: 50%;
}
.dark .skill-phases li::before { border-color: var(--coral); }

/* ═══ INSIGHT BOX ═══ */
.insight-box {
  border: 1.5px solid var(--terracotta);
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
  background: var(--ivory);
  margin: 1.5rem 0;
}
.dark .insight-box {
  background: rgba(217, 119, 87, 0.06);
  border-color: var(--coral);
}
.insight-box .label {
  font-family: var(--font-code);
  font-size: 0.65rem;
  color: var(--terracotta);
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.dark .insight-box .label { color: var(--coral); }
.insight-box p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.75;
}
.dark .insight-box p { color: var(--text-on-dark); }

/* ═══ SURPRISE / HIGHLIGHT BOX ═══ */
.surprise {
  border: 1.5px solid var(--terracotta);
  border-radius: 8px;
  padding: 1rem 1.2rem;
  background: rgba(201, 100, 66, 0.04);
  margin-top: 1rem;
}
.dark .surprise {
  background: rgba(217, 119, 87, 0.08);
  border-color: var(--coral);
}
.surprise-label {
  font-family: var(--font-code);
  font-size: 0.6rem;
  color: var(--terracotta);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}
.dark .surprise-label { color: var(--coral); }
.surprise p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.70;
}
.dark .surprise p { color: var(--text-on-dark); }

/* ═══ CALLOUT ═══ */
.callout {
  border-radius: 0 8px 8px 0;
  padding: 1rem 1.2rem;
  margin: 1rem 0;
  display: flex;
  gap: 12px;
  align-items: flex-start;
}
.callout.info {
  background: rgba(94, 93, 89, 0.06);
  border-left: 3px solid var(--text-secondary);
}
.callout.warn {
  background: rgba(201, 100, 66, 0.06);
  border-left: 3px solid var(--terracotta);
}
.callout.insight {
  background: rgba(201, 100, 66, 0.04);
  border-left: 3px solid var(--coral);
}
.callout.error {
  background: rgba(181, 51, 51, 0.04);
  border-left: 3px solid var(--error);
}
.dark .callout.info { background: rgba(176, 174, 165, 0.08); }
.dark .callout.warn { background: rgba(217, 119, 87, 0.08); }
.dark .callout.insight { background: rgba(217, 119, 87, 0.06); }
.dark .callout.error { background: rgba(181, 51, 51, 0.08); }
.callout .icon { font-size: 1.2rem; flex-shrink: 0; }
.callout p {
  font-size: 0.82rem;
  line-height: 1.70;
  color: var(--text-secondary);
}
.dark .callout p { color: var(--text-on-dark); }

/* Alternate callout style (label-based) */
.callout-labeled {
  border-left: 4px solid var(--terracotta);
  background: rgba(201, 100, 66, 0.04);
  padding: 22px 26px;
  margin: 28px 0;
  border-radius: 0 12px 12px 0;
}
.dark .callout-labeled {
  background: rgba(217, 119, 87, 0.06);
  border-left-color: var(--coral);
}
.callout-labeled .callout-t {
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 8px;
}
.dark .callout-labeled .callout-t { color: var(--coral); }
.callout-labeled p { margin-bottom: 6px; }
.callout-labeled p:last-child { margin-bottom: 0; }

/* ═══ ANALOGY BOX ═══ */
.analogy-box {
  background: var(--ivory);
  border: 1px solid var(--border-warm);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
}
.dark .analogy-box {
  background: var(--dark-surface);
  border-color: var(--border-dark);
}
.analogy-icon { font-size: 2rem; flex-shrink: 0; }
.analogy-content h4 {
  font-family: var(--font-headline);
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
}
.analogy-content p {
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.70;
}
.dark .analogy-content h4 { color: var(--ivory); }
.dark .analogy-content p { color: var(--text-on-dark); }

/* ═══ FLOW DIAGRAM ═══ */
.flow {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
  margin: 1.5rem 0;
  justify-content: center;
}
.flow-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  background: var(--ivory);
  border: 1px solid var(--border-cream);
  border-radius: 8px;
  padding: 8px 14px;
  min-width: 80px;
}
.dark .flow-step {
  background: var(--dark-surface);
  border-color: var(--border-dark);
}
.flow-step .step-num {
  font-family: var(--font-code);
  font-size: 0.55rem;
  color: var(--terracotta);
  letter-spacing: 0.05em;
}
.dark .flow-step .step-num { color: var(--coral); }
.flow-step .step-label {
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--text-primary);
}
.dark .flow-step .step-label { color: var(--ivory); }
.flow-step .step-cmd {
  font-family: var(--font-code);
  font-size: 0.6rem;
  color: var(--text-tertiary);
}
.flow-arr {
  color: var(--terracotta);
  font-size: 1.2rem;
  font-weight: 300;
}
.dark .flow-arr { color: var(--coral); }

/* ═══ LIFECYCLE BAR ═══ */
.lifecycle {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin: 1.5rem 0;
  overflow-x: auto;
}
.lc-step {
  flex: 1;
  min-width: 100px;
  padding: 10px 12px;
  background: var(--ivory);
  border-right: 2px solid var(--parchment);
  text-align: center;
}
.dark .lc-step {
  background: var(--dark-surface);
  border-right-color: var(--near-black);
}
.lc-step:first-child { border-radius: 8px 0 0 8px; }
.lc-step:last-child { border-radius: 0 8px 8px 0; border-right: none; }
.lc-step .lc-num {
  font-family: var(--font-code);
  font-size: 0.55rem;
  color: var(--terracotta);
  display: block;
  margin-bottom: 2px;
}
.dark .lc-step .lc-num { color: var(--coral); }
.lc-step .lc-name {
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--text-primary);
}
.dark .lc-step .lc-name { color: var(--ivory); }
.lc-step .lc-tool {
  font-family: var(--font-code);
  font-size: 0.55rem;
  color: var(--text-tertiary);
  display: block;
  margin-top: 2px;
}

/* ═══ STAT CARDS ═══ */
.stat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin: 1.5rem 0;
}
.stat-card {
  background: var(--ivory);
  border: 1px solid var(--border-cream);
  border-radius: 8px;
  padding: 1.2rem;
  text-align: center;
  box-shadow: var(--shadow-ring);
}
.dark .stat-card {
  background: var(--dark-surface);
  border-color: var(--border-dark);
}
.stat-card .stat-num {
  font-family: var(--font-code);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--terracotta);
  display: block;
}
.dark .stat-card .stat-num { color: var(--coral); }
.stat-card .stat-label {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  margin-top: 0.3rem;
  display: block;
}

/* ═══ BADGES ═══ */
.badge {
  display: inline-block;
  font-family: var(--font-code);
  font-size: 0.6rem;
  padding: 2px 8px;
  border-radius: 4px;
  flex-shrink: 0;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-weight: 700;
}
.badge.terra { background: var(--terracotta); color: var(--ivory); }
.badge.coral { background: var(--coral); color: var(--near-black); }
.badge.dark { background: var(--dark-surface); color: var(--text-on-dark); }
.badge.sand { background: var(--warm-sand); color: var(--text-button); }
.badge.error { background: var(--error); color: #fff; }
.badge.outline {
  background: transparent;
  border: 1px solid var(--border-warm);
  color: var(--text-tertiary);
}
.dark .badge.outline {
  border-color: var(--border-dark);
  color: var(--text-on-dark);
}

/* ═══ CODE BLOCKS ═══ */
/* See code-highlighting.md for syntax highlight colors */
.code-block {
  background: var(--near-black);
  border-radius: 12px;
  margin: 1rem 0;
  overflow: hidden;
}
.code-header {
  background: var(--dark-surface);
  padding: 9px 18px;
  font-family: var(--font-code);
  font-size: 13px;
  font-weight: 600;
  color: var(--text-tertiary);
  border-bottom: 1px solid rgba(176, 174, 165, 0.15);
  display: flex;
  justify-content: space-between;
}
.code-block pre {
  padding: 18px;
  overflow-x: auto;
  font-family: var(--font-code);
  font-size: 13px;
  line-height: 1.70;
  color: var(--text-on-dark);
}
.code-block code {
  font-family: var(--font-code);
  font-size: 0.75rem;
  color: var(--text-on-dark);
  white-space: pre;
  line-height: 1.60;
}

/* Inline code */
code {
  font-family: var(--font-code);
  font-size: 0.78rem;
  background: rgba(201, 100, 66, 0.08);
  padding: 1px 6px;
  border-radius: 4px;
  color: var(--terracotta);
}
.dark code {
  background: rgba(217, 119, 87, 0.12);
  color: var(--coral);
}

/* ═══ TABLES ═══ */
.tbl {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.8rem;
}
.tbl th {
  text-align: left;
  padding: 8px 12px;
  border-bottom: 2px solid var(--terracotta);
  font-family: var(--font-code);
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  color: var(--terracotta);
  text-transform: uppercase;
}
.dark .tbl th {
  color: var(--coral);
  border-color: var(--coral);
}
.tbl td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border-warm);
  vertical-align: top;
}
.dark .tbl td {
  border-color: var(--border-dark);
  color: var(--text-on-dark);
}

/* Compare table (full header row) */
.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.78rem;
  margin: 1rem 0;
  border-radius: 8px;
  overflow: hidden;
}
.compare-table th {
  background: var(--terracotta);
  color: var(--ivory);
  padding: 8px 12px;
  text-align: left;
  font-family: var(--font-code);
  font-size: 0.7rem;
}
.dark .compare-table th {
  background: var(--coral);
  color: var(--near-black);
}
.compare-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--border-warm);
  vertical-align: top;
}
.compare-table tr:nth-child(even) td { background: var(--ivory); }
.dark .compare-table td { border-color: var(--border-dark); }
.dark .compare-table tr:nth-child(even) td { background: rgba(48, 48, 46, 0.5); }

/* Wrapped table (with border container) */
.table-w {
  overflow-x: auto;
  margin: 1.5rem 0;
  border-radius: 12px;
  border: 1px solid var(--border-cream);
}
.dark .table-w { border-color: var(--border-dark); }

/* ═══ TREE DIAGRAM ═══ */
.tree {
  font-family: var(--font-code);
  font-size: 0.75rem;
  line-height: 1.80;
  background: var(--near-black);
  color: var(--text-on-dark);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  margin: 1rem 0;
  overflow-x: auto;
  white-space: pre;
}
.tree .dir { color: var(--coral); font-weight: 700; }
.tree .file { color: #9CDCFE; }
.tree .ann { color: #6A9955; }
.tree .desc { color: var(--text-tertiary); }

/* ═══ CARDS ═══ */
.card {
  background: var(--ivory);
  border: 1px solid var(--border-cream);
  border-radius: 12px;
  padding: 26px;
  margin: 24px 0;
  box-shadow: var(--shadow-whisper);
  transition: box-shadow 0.2s;
}
.card:hover { box-shadow: rgba(0, 0, 0, 0.08) 0px 6px 24px; }
.dark .card {
  background: var(--dark-surface);
  border-color: var(--border-dark);
}
.card h4 {
  font-family: var(--font-headline);
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 10px;
}
.card p {
  color: var(--text-secondary);
  font-size: 15.5px;
}
.dark .card h4 { color: var(--ivory); }
.dark .card p { color: var(--text-on-dark); }

/* ═══ NUMBERED LIST ═══ */
.numbered { counter-reset: sec; }
.num-item {
  counter-increment: sec;
  position: relative;
  padding-left: 46px;
  margin-bottom: 32px;
}
.num-item::before {
  content: counter(sec);
  position: absolute;
  left: 0;
  top: 0;
  width: 30px;
  height: 30px;
  background: var(--terracotta);
  color: var(--ivory);
  font-weight: 700;
  font-size: 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark .num-item::before {
  background: var(--coral);
  color: var(--near-black);
}

/* ═══ CHECKLIST ═══ */
.checklist { margin: 20px 0; }
.check-item {
  display: flex;
  gap: 10px;
  padding: 8px 0;
  align-items: flex-start;
  font-size: 15.5px;
}
.check-icon {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
  margin-top: 3px;
}
.check-must { background: rgba(181, 51, 51, 0.12); color: var(--error); }
.check-rec { background: rgba(201, 100, 66, 0.12); color: var(--terracotta); }
.check-opt { background: var(--warm-sand); color: var(--text-tertiary); }

/* ═══ BLOCKQUOTE ═══ */
blockquote {
  border-left: 3px solid var(--terracotta);
  padding: 14px 22px;
  margin: 24px 0;
  background: rgba(201, 100, 66, 0.04);
  border-radius: 0 8px 8px 0;
  font-style: italic;
  color: var(--text-secondary);
}
.dark blockquote {
  background: rgba(217, 119, 87, 0.06);
  border-left-color: var(--coral);
  color: var(--text-on-dark);
}

/* ═══ DIVIDER ═══ */
.divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-warm), transparent);
  margin: 48px 0;
}
.dark .divider {
  background: linear-gradient(90deg, transparent, var(--border-dark), transparent);
}

/* ═══ FOOTER ═══ */
.footer {
  background: var(--near-black);
  padding: 3rem 2rem;
  text-align: center;
}
.footer p {
  font-size: 0.75rem;
  color: var(--text-tertiary);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.80;
}
.footer .sig {
  font-family: var(--font-code);
  font-size: 0.6rem;
  color: rgba(176, 174, 165, 0.25);
  margin-top: 2rem;
}

/* ═══ LINKS ═══ */
a {
  color: var(--terracotta);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;
}
a:hover { border-bottom-color: var(--terracotta); }
.dark a { color: var(--coral); }
.dark a:hover { border-bottom-color: var(--coral); }

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .hero { min-height: 60vh; }
  .hero-inner { padding: 0 20px 40px; }
  .flow { flex-direction: column; }
  .flow-arr { transform: rotate(90deg); }
  .lifecycle { flex-direction: column; }
  .lc-step {
    border-right: none;
    border-bottom: 2px solid var(--parchment);
  }
  .dark .lc-step { border-bottom-color: var(--near-black); }
  .skill-header { flex-direction: column; align-items: flex-start; }
  .stat-grid { grid-template-columns: 1fr; }
  .analogy-box { flex-direction: column; }
}

@media (max-width: 479px) {
  .hero h1 { font-size: 28px; }
  .section { padding: 2rem 1rem; }
  .inner { padding: 0; }
}
```

---

## HTML Structure

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{Document Title}</title>
  <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
  <style>/* ... all unified CSS above ... */</style>
</head>
<body>

<!-- Hero: Coral bg, dark text, bottom-left aligned -->
<section class="hero">
  <div class="hero-inner">
    <span class="hero-tag">{Tag Label}</span>
    <h1>{Title}<br>{Optional Subtitle}</h1>
    <p class="hero-sub">{Description paragraph}</p>
    <div class="hero-meta">{META LINE} &middot; {Date}</div>
  </div>
</section>

<!-- Light section (odd) -->
<section class="section">
  <div class="inner">
    <div class="sec-num">01 &mdash; {SECTION TAG}</div>
    <h2 class="sec-title">{Section Title}</h2>
    <p class="sec-sub">{One-line subtitle}</p>
    <div class="sec-rule"></div>
    <!-- content: skill-cards, tables, code-blocks, callouts, etc. -->
  </div>
</section>

<!-- Dark section (even) -->
<section class="section dark">
  <div class="inner">
    <div class="sec-num">02 &mdash; {SECTION TAG}</div>
    <h2 class="sec-title">{Section Title}</h2>
    <p class="sec-sub">{One-line subtitle}</p>
    <div class="sec-rule"></div>
    <!-- content -->
  </div>
</section>

<!-- Continue alternating light/dark for remaining sections -->

<footer class="footer">
  <p>{Footer text}</p>
  <p class="sig">{Signature line}</p>
</footer>

<!-- Optional: canvas animation overlay -->
<script>/* See Canvas Animation section below */</script>
</body>
</html>
```

---

## Component Quick Reference

### Skill Card
```html
<div class="skill-card">
  <div class="skill-header">
    <span class="skill-cmd">{Card Title}</span>
    <span class="badge terra">{Badge}</span>
    <span class="badge outline">{Badge}</span>
  </div>
  <div class="skill-desc">{Description paragraph}</div>
  <ul class="skill-phases">
    <li>{Phase item}</li>
    <li>{Phase item}</li>
  </ul>
  <div class="surprise">
    <div class="surprise-label">{Label}</div>
    <p>{Content}</p>
  </div>
</div>
```

### Card
```html
<div class="card">
  <span class="badge terra">{Badge}</span>
  <h4>{Title}</h4>
  <p>{Description}</p>
</div>
```

### Callout (icon style)
```html
<div class="callout info">
  <div class="icon">{Emoji}</div>
  <p>{Content}</p>
</div>
```

### Callout (label style)
```html
<div class="callout-labeled">
  <div class="callout-t">{Label}</div>
  <p>{Content}</p>
</div>
```

### Insight Box
```html
<div class="insight-box">
  <div class="label">{LABEL TEXT}</div>
  <p>{Content}</p>
</div>
```

### Analogy Box
```html
<div class="analogy-box">
  <div class="analogy-icon">{Emoji}</div>
  <div class="analogy-content">
    <h4>{Title}</h4>
    <p>{Content}</p>
  </div>
</div>
```

### Stat Grid
```html
<div class="stat-grid">
  <div class="stat-card">
    <span class="stat-num">{Number}</span>
    <span class="stat-label">{Label}</span>
  </div>
  <!-- more stat-cards -->
</div>
```

### Flow Diagram
```html
<div class="flow">
  <div class="flow-step">
    <span class="step-num">01</span>
    <span class="step-label">{Step Name}</span>
    <span class="step-cmd">{Detail}</span>
  </div>
  <span class="flow-arr">&rarr;</span>
  <!-- more steps -->
</div>
```

### Lifecycle Bar
```html
<div class="lifecycle">
  <div class="lc-step">
    <span class="lc-num">01</span>
    <span class="lc-name">{Phase Name}</span>
    <span class="lc-tool">{Detail}</span>
  </div>
  <!-- more steps -->
</div>
```

### Code Block
```html
<div class="code-block">
  <div class="code-header"><span>{filename.ext}</span></div>
  <pre><code>{code content}</code></pre>
</div>
```

### Tree Diagram
```html
<div class="tree"><span class="dir">{dir}/</span>
  <span class="file">{file.ext}</span>  <span class="ann"># {annotation}</span>
  <span class="dir">{subdir}/</span>
    <span class="file">{file.ext}</span>
</div>
```

### Table
```html
<table class="tbl">
  <thead>
    <tr><th>{Header}</th><th>{Header}</th></tr>
  </thead>
  <tbody>
    <tr><td>{Cell}</td><td>{Cell}</td></tr>
  </tbody>
</table>
```

### Compare Table
```html
<table class="compare-table">
  <thead>
    <tr><th>{Header}</th><th>{Option A}</th><th>{Option B}</th></tr>
  </thead>
  <tbody>
    <tr><td>{Dimension}</td><td>{Value}</td><td>{Value}</td></tr>
  </tbody>
</table>
```

### Numbered Steps
```html
<div class="numbered">
  <div class="num-item">
    <h3>{Step Title}</h3>
    <p>{Step description}</p>
  </div>
  <!-- more num-items -->
</div>
```

### Checklist
```html
<div class="checklist">
  <div class="check-item">
    <div class="check-icon check-must">!</div>
    <div>{Required item}</div>
  </div>
  <div class="check-item">
    <div class="check-icon check-rec">~</div>
    <div>{Recommended item}</div>
  </div>
  <div class="check-item">
    <div class="check-icon check-opt">?</div>
    <div>{Optional item}</div>
  </div>
</div>
```

### Badges
```html
<span class="badge terra">{Label}</span>
<span class="badge coral">{Label}</span>
<span class="badge dark">{Label}</span>
<span class="badge sand">{Label}</span>
<span class="badge error">{Label}</span>
<span class="badge outline">{Label}</span>
```

---

## Canvas Animation (Optional)

This can be added to any page for a subtle ambient effect. Place the `<canvas>` inside a container (e.g., a dark section or a dedicated animated area). The hero itself uses a solid Coral background with no animation.

```javascript
(function() {
  const c = document.getElementById('ambientCanvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let w, h;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = c.parentElement.getBoundingClientRect();
    w = rect.width; h = rect.height;
    c.width = w * dpr; c.height = h * dpr;
    c.style.width = w + 'px';
    c.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const dots = [];
  for (let i = 0; i < 50; i++) {
    dots.push({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    dots.forEach(d => {
      d.x += d.vx; d.y += d.vy;
      if (d.x < 0) d.x = w;
      if (d.x > w) d.x = 0;
      if (d.y < 0) d.y = h;
      if (d.y > h) d.y = 0;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(201, 100, 66, 0.20)';
      ctx.fill();
    });
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(201, 100, 66, ${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
```

Usage: Place `<canvas id="ambientCanvas"></canvas>` inside any container with `position: relative; overflow: hidden;` and give the canvas `position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;`.

---

## Design System Quick Reference

| Token | Value | Role |
|-------|-------|------|
| `--parchment` | `#f5f4ed` | Primary light bg |
| `--ivory` | `#faf9f5` | Card surfaces |
| `--terracotta` | `#c96442` | Brand accent |
| `--coral` | `#d97757` | Hero bg, text accent on dark |
| `--near-black` | `#141413` | Primary text, dark sections |
| `--dark-surface` | `#30302e` | Dark containers |
| `--text-secondary` | `#5e5d59` | Olive Gray, secondary text |
| `--text-tertiary` | `#87867f` | Stone Gray, tertiary text |
| `--text-button` | `#4d4c48` | Charcoal Warm, button text |
| `--text-on-dark` | `#b0aea5` | Warm Silver, text on dark |
| `--border-cream` | `#f0eee6` | Light borders |
| `--border-warm` | `#e8e6dc` | Prominent borders |
| `--warm-sand` | `#e8e6dc` | Button backgrounds |
| `--error` | `#b53333` | Error Crimson |
| Headlines | Georgia, serif | weight 500, lh 1.10-1.30 |
| Body | system sans-serif | lh 1.60 |
| Code | JetBrains Mono | only web font import |
| Radius | 8 / 12 / 16 / 32px | standard / primary / featured / hero |
| Ring shadow | `0px 0px 0px 1px` | warm grays |
| Whisper shadow | `rgba(0,0,0,0.05) 0px 4px 24px` | elevated cards |
