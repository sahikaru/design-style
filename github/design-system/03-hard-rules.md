# 03 · Hard Rules · Cross-System

> Section 11 from the legacy `design-system.md`.
> Applies to **both** Primer Product UI **and** Primer Brand. Violating these is a bug.

---

## 11. Page Archetypes & HARD RULES

### 11.1 Page Archetypes (observed on github.com marketing)

GitHub runs three marketing archetypes that map cleanly to Apple's three:

**Archetype A — Brand Landing** (github.com homepage)
- Purpose: brand presence + funnel visitors to signup or specific products
- Hero: 64px/425/-2.24px compressed mega wordmark with a muted-green eyebrow, autoplay hero video below in a rounded container with mint bloom
- Section cadence: hero → logo trust bar → 3-pillar feature strip → accordion workflows → quote moment → pricing tease → footer
- Motion: fade-up reveals only. NO scroll-pinned scenes. Hero video auto-plays on load.

**Archetype B — Flagship Product** (github.com/copilot, github.com/features/*)
- Purpose: sell one specific product with cinematic intensity
- Hero: 56px/440 headline, full-viewport hero background image/video, glass-card wrapper around auto-playing demo
- Signature: glass cards + ambient gradient halos + mint bloom shadow-borders everywhere
- Section cadence: hero → integrations strip → feature cards (glass) → tailor-made feature grid → signature scroll showcase → customer case → pricing → bottom CTA
- Motion: `data-scroll-play` video playback (copied from Apple Vision Pro pattern, but without scroll-scrubbing), staggered reveals

**Archetype C — Enterprise/B2B** (github.com/enterprise, /pricing)
- Purpose: sell to procurement / IT buyers — authoritative, dense, tables-heavy
- Hero: 48px/440 headline (deliberately smaller than Copilot — more restrained), enterprise hero-bg image with dark gradient overlay for text legibility
- **Key structural element**: feature comparison table (Free / Team / Enterprise / Enterprise Cloud) — 10+ rows grouped by category, sticky header, row hover highlight
- Section cadence: hero → logo wall (90% of Fortune 100) → 3 pillar cards → **comparison table** → metrics strip (count-up numbers) → customer story → FAQ accordion → CTA rail
- Motion: restrained reveals, metrics count-up from 0 to target in 1.2s. NO glass excess — glass is for product pages.

### 11.2 Cursor (HARD RULE)

**Every element that triggers an action on click MUST set `cursor: pointer`.** This is non-negotiable.

The native browser adds `cursor: pointer` automatically ONLY for `<a href>`, `<button>`, `<input type="submit">`, and `<select>`. The moment you attach click behavior to a `<div>`, `<li>`, or wrap a card in an anchor whose child uses its own `cursor` rule, the pointer is your responsibility.

**Apply to, at minimum:**
- Feature cards, pillar cards, glass cards
- Accordion triggers / FAQ headers
- Pricing tier cards
- Table rows that are clickable
- Color / theme switchers
- Any hover-animated surface (`translateY`, `scale`, bloom) — hover animation implies clickability
- Tab-like toggles, filter chips

```css
.pillar-card, .glass-card, .pricing-card, .accordion-trigger,
.faq-item, [role="button"], [data-clickable] {
  cursor: pointer;
}

.pillar-card:active, .glass-card:active, .pricing-card:active {
  transform: scale(0.98);
  transition: transform 0.12s var(--gh-ease);
}
```

**Exceptions** (keep default cursor): decorative surfaces that animate but don't respond to click. Disabled → `cursor: not-allowed`. Loading → `cursor: wait`.

**Anti-pattern**: don't rely solely on `<a href="#">` to carry pointer — if the anchor's child has `cursor: default` or the anchor is wrapped in something that overrides it, you lose the cursor. Always set it explicitly on the interactive container.

### 11.3 Retina Image Resolution (HARD RULE)

**Every product/marketing image MUST ship 1x and 2x variants via `srcset`.** GitHub marketing uses two CDN conventions:

- **Contentful CDN** (`images.ctfassets.net`): append `?w=<width>&fm=webp&q=90`. Double `w` for 2x density. Example:
  ```html
  <img src="https://images.ctfassets.net/.../hero.webp?w=720&fm=webp&q=90"
       srcset="https://images.ctfassets.net/.../hero.webp?w=720&fm=webp&q=90 1x,
               https://images.ctfassets.net/.../hero.webp?w=1440&fm=webp&q=90 2x"
       width="720" height="420" loading="lazy" alt="..."/>
  ```
- **GitHub assets CDN** (`github.githubassets.com`): hashed filenames, no density variants — the file IS the asset. Use as-is. SVGs don't need srcset.

Without the `2x` entry, retina displays render images soft, instantly breaking the "premium brand" feel Primer Brand rests on. **Blurry marketing images = failed execution.**

### 11.4 Video Rules

| Context | Behavior |
|---------|----------|
| Hero demo | `playsinline muted loop preload="metadata"` + poster, `autoplay` on load (the hero video is the first thing seen — always plays immediately) |
| Decorative/section videos | `playsinline muted loop preload="metadata"` + poster + `data-scroll-play` — play only when scrolled into view (IntersectionObserver threshold 0.35) |
| `prefers-reduced-motion` | All videos pause; posters stay visible |

```js
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const v = entry.target;
    if (entry.isIntersecting) v.play().catch(() => {});
    else v.pause();
  });
}, { threshold: 0.35 });

document.querySelectorAll("video[data-scroll-play]").forEach((v) => videoObserver.observe(v));

if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video").forEach((v) => { v.autoplay = false; v.pause(); });
}
```


---

