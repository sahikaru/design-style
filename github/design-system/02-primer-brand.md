# 02 · Primer Brand · Marketing Variant

> Section 10 from the legacy `design-system.md`.
> System: **Primer Brand**（适用于营销页 / 落地页 / 未登录访客）
> Token prefix: `--gh-brand-*` · Font: Mona Sans VF · Preview: `../previews/brand-homepage.html` / `brand-copilot.html` / `brand-enterprise.html`
>
> 决策：先读 `00-overview.md`。硬规则：读 `03-hard-rules.md`。

---

## 10. Primer Brand (Marketing Variant)

Primer Brand is the design system powering github.com marketing surfaces — homepage, /features/*, /enterprise, /copilot, /pricing. It is **not** a dark-mode version of Primer; it is a separate brand expression with its own canvas, accent, font weights, and motion DNA.

### 10.1 Brand Canvas & Accent

| Token | Hex | Role |
|-------|-----|------|
| `--brand-bg` | `#000000` | Primary marketing canvas — pure black, cinematic |
| `--brand-bg-subtle` | `#0d1117` | Section alternation, muted panels |
| `--brand-bg-raised` | `#151b23` | Raised cards, glass card base |
| `--brand-fg` | `#ffffff` | Primary text on brand canvas |
| `--brand-fg-muted` | `#9198a1` | Secondary text, descriptions |
| `--brand-border` | `#3d444d` | Card borders, dividers |
| `--brand-accent-primary` | `#5fed83` | **Neon mint** — the new brand accent, reserved for key CTAs and eyebrows |
| `--brand-accent-muted` | `#1a7f37` | Deeper mint for hover/pressed states |

**Core rule**: neon mint `#5fed83` is the ONLY chromatic accent. All other color is black/white/gray. Workflow-specific colors (open-green, closed-red, merged-purple from Primer) do NOT cross over — those belong to the product UI.

### 10.2 Mona Sans VF — Variable Weight Axis

Primer Brand uses Mona Sans as a **variable font** and hits weights that static fonts can't reach:

| Role | Size | Weight | Tracking | Use |
|------|-----:|-------:|---------:|-----|
| Hero Mega | 64px | **425** | -2.24px | github.com homepage hero — the compressed billboard |
| Hero Large | 56px | **440** | normal | /copilot hero — flagship product page |
| Hero Enterprise | 48px | **440** | normal | /enterprise hero — authoritative, slightly smaller |
| Section H2 | 40px | **460** | normal | Feature section headings across all brand pages |
| Feature Title | 32px | **440** | normal | Card titles, callouts |
| Body Large | 20px | 400 | normal | Subtitle paragraphs below hero |
| Body | 16px | 400 | normal | Standard reading text |
| Eyebrow | 14px | 600 | `0.1em` uppercase | Small label above hero ("COPILOT", "ENTERPRISE") — often tinted neon mint |

**Weight 425/440/460 are not typos.** Mona Sans VF exposes arbitrary numeric weights along its axis. Static-font fallbacks (system-ui, Inter) will snap to 500 — that's acceptable degradation but loses the "just-past-regular" feel that gives GitHub marketing its signature tone.

```css
@font-face {
  font-family: "Mona Sans VF";
  src: url("https://github.githubassets.com/assets/mona-sans.woff2") format("woff2-variations");
  font-weight: 200 900;  /* variable axis */
  font-style: normal;
  font-display: swap;
}

.brand-hero { font-family: "Mona Sans VF", "Mona Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif; font-weight: 425; letter-spacing: -0.035em; }
```

### 10.3a Copilot Hero Pattern (Signature Composition)

The github.com/features/copilot hero is the most distinctive composition Primer Brand ships. Four layered elements together create the effect, and the formula below is observed verbatim from the live site:

**Layer stack (outermost → innermost)**:

1. **Hero visual** — positioning context; `overflow: visible` so the agent mascot can extend beyond the frame.
2. **Container** — 20px radius, `padding: 5px`, shadow-border `rgba(255,255,255,0.08) 0 0 0 1px`. The 5px padding creates the visible "gap" that reveals the glass bloom behind the video.
3. **Glass** — 16px radius, carries TWO stacked gradient systems:

   **Fill gradient** (main background, soft bloom behind the video):
   ```css
   background-image: radial-gradient(
     92.7% 88.72% at 50% -1.19%,
     #5fed83 0%,                      /* neon mint core, above top edge */
     rgba(131, 66, 250, 0.1) 28.6%,   /* muted purple falloff */
     rgba(0, 0, 0, 0) 100%            /* fade to canvas */
   );
   ```

   **Multi-color rim** (`::before` pseudo-element with gradient-border mask):
   ```css
   .hero__glass::before {
     content: ""; position: absolute; inset: 0;
     border: 6px solid transparent;  /* thick border — the colored band */
     border-radius: inherit;
     background-image:
       radial-gradient(at 50% 100%,
         #ffffff 1%, #5fed83 13%, #4bb1ff 51%,
         rgba(131, 66, 250, 0.1) 76%, rgba(255, 255, 255, 0.1) 96%),
       radial-gradient(at 45% 55%,
         #ffffff 1%, #5fed83 13%, #4bb1ff 51%,
         rgba(131, 66, 250, 0.1) 76%, rgba(255, 255, 255, 0.1) 96%);
     /* Gradient-border mask: render ONLY the border ring, punch out the fill. */
     -webkit-mask-image:
       linear-gradient(#000 0 0), linear-gradient(#000 0 0);
     -webkit-mask-clip: padding-box, border-box;
     -webkit-mask-composite: xor;     /* Safari keyword */
     mask-image:
       linear-gradient(#000 0 0), linear-gradient(#000 0 0);
     mask-clip: padding-box, border-box;
     mask-composite: exclude;          /* Standard keyword */
     pointer-events: none;
   }
   ```

   The rim's color stops read as a **rainbow band**: white core → mint → **sky-blue (`#4bb1ff`)** → faint purple → white haze. Two radials (one anchored at bottom-center, one at mid-left) overlap to distribute the band unevenly — the green settles on top-left, the blue on the right, the purple in corners. This rainbow rim + the green fill bloom together are what make the Copilot hero visually unmistakable.
4. **Media** — 12px radius, aspect-ratio 16/9, holds the autoplay video with a 44px circular play/pause button bottom-right (`rgba(13,17,23,0.72)` + `backdrop-filter: blur(12px)`).

**Agent character** — a 400×400 element absolute-positioned to peek from the top-right corner:
```css
.hero__agent {
  position: absolute;
  top: -190px; right: -170px;
  width: 400px; height: 400px;
}
@media (prefers-reduced-motion: reduce) { .hero__agent { display: none; } }
```
On the live site this is a `<canvas>` that draws a procedural character with blinking eyes (class `.lp-Hero-head` + `.lp-Hero-headBlink`, hidden under `.hide-reduced-motion`). Reproductions MUST:
- Use **original illustration** for the character — do not clone GitHub's mascot; it is trademarked.
- Preserve the **400×400 / top:-190px / right:-170px** positioning — the overflow peek is the compositional point.
- Preserve the **blink loop** (CSS keyframes `transform: scaleY(1) ↔ scaleY(0.05)` at ~6s cadence).
- Respect `prefers-reduced-motion` — hide the animated character, never replace with a static image (the live site follows the same rule via `.hide-reduced-motion`).

A working non-infringing reference implementation ships in `github/preview-copilot.html`. The character there is a generic capsule-shape AI agent with antenna — same composition, different identity.

### 10.3 Glass & Ambient Glow

Flagship product pages (especially /copilot) use two compositing techniques rarely seen in Primer product UI:

- **Glass cards**: `background: rgba(21, 27, 35, 0.6); backdrop-filter: blur(40px) saturate(180%);` — heavier blur than Apple's 20px. Feels like frosted glass over a dark canvas.
- **Ambient gradient halo**: `::before { background: radial-gradient(circle at 50% 0%, rgba(95, 237, 131, 0.15), transparent 55%); pointer-events: none; }` — a mint bloom behind hero/feature sections. Never directly animated; it lives in the background layer.
- **Shadow-border + bloom**: `box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08), 0 0 80px rgba(95, 237, 131, 0.1);` — combines Vercel's shadow-as-border with a soft neon outer glow.

### 10.4 Motion DNA

| Property | Value |
|----------|-------|
| Easing | `cubic-bezier(0.33, 1, 0.68, 1)` — ease-out quad, punchier than Apple's `0.4, 0, 0.6, 1` |
| Hover duration | `0.2s` |
| Reveal duration | `0.4s` |
| Reveal pattern | `translateY(16px) → 0` + `opacity 0 → 1`, `IntersectionObserver` threshold `0.2` |

```css
:root {
  --gh-ease: cubic-bezier(0.33, 1, 0.68, 1);
  --gh-dur-fast: 0.2s;
  --gh-dur-medium: 0.4s;
}

[data-reveal] { opacity: 0; transform: translateY(16px); transition: opacity 0.4s var(--gh-ease), transform 0.4s var(--gh-ease); }
[data-reveal].is-in { opacity: 1; transform: none; }
```

Unlike Apple, GitHub Brand does **not** use scroll-pinned scenes or scroll-scrubbed video. Motion is reveal-on-enter and hover-only. Metrics count-up animations (big numbers rolling from 0 to target) are the one signature enterprise-marketing move.

### 10.5 Primer Brand Component Stylings

**Primary CTA (neon)**
- Background: `#5fed83`, text: `#000`, padding: `12px 24px`, radius: `6px`
- Font: Mona Sans VF 16px/500
- Hover: background `#7fff9c` (slight brighten), scale(1.01)
- Active: scale(0.98), background `#1a7f37`
- `cursor: pointer` (always)

**Ghost CTA (outline)**
- Background: `transparent`, text: `#ffffff`, border: `1px solid #3d444d`, padding: `12px 24px`, radius: `6px`
- Hover: border `#ffffff`, background `rgba(255,255,255,0.04)`

**Glass feature card**
- Background: `rgba(21,27,35,0.6)` + `backdrop-filter: blur(40px) saturate(180%)`
- Radius: `16px`
- Shadow-border: `0 0 0 1px rgba(255,255,255,0.08)`
- Hover: `translateY(-4px)` + bloom `0 0 80px rgba(95,237,131,0.15)`
- `cursor: pointer`

**Comparison table (enterprise)**
- Header row: `background: #151b23`, `font-weight: 600`, sticky on scroll
- Data row hover: `background: rgba(95,237,131,0.05)`
- Dividers: `border-bottom: 1px solid #3d444d`
- Check marks: ✓ in neon mint; em-dash — in `#3d444d` for absent features

---

