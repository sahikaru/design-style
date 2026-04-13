# SVG Patterns for Apple Style

> For full design system tokens (colors, typography, spacing), see `design-system.md`.

Signature inline SVG patterns for the Apple-style pages. Every mark here is drawn to match Apple's web presence directly — kept geometric, monochrome, and reserved. Color inherits from the parent text color wherever possible so marks invert correctly on black and `#f5f5f7` sections.

---

## Palette Reference

| Context | Stroke / Fill |
|---|---|
| Light section text/icons | `#1d1d1f` |
| Dark section text/icons | `#ffffff` |
| Interactive accent (light bg) | `#0066cc` |
| Interactive accent (dark bg) | `#2997ff` |
| Focus ring | `#0071e3` |
| Media control scrim | `rgba(210, 210, 215, 0.64)` |

Always set `fill="currentColor"` for monochrome marks so icons inherit their containing text color.

---

## Pattern 1: Apple Logomark

**Purpose**: Brand mark, placed left of navigation or centered in hero modules. Standard silhouette path — never modify the geometry.

**Usage**: Nav bar at 17×18 viewport; hero at 40×48.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18" width="17" height="18" aria-label="Apple" role="img">
  <path fill="currentColor" d="M15.5752 6.04002C15.4612 6.12802 13.4512 7.26002 13.4512 9.77802C13.4512 12.6908 16.0084 13.7208 16.0848 13.7464C16.073 13.8096 15.6786 15.1578 14.7372 16.5314C13.8976 17.7402 13.0204 18.9472 11.6864 18.9472C10.3524 18.9472 10.0092 18.1708 8.46936 18.1708C6.96876 18.1708 6.43476 18.9728 5.21436 18.9728C3.99396 18.9728 3.14236 17.8544 2.16396 16.4808C1.03036 14.8664 0.114562 12.3552 0.114562 9.97002C0.114562 6.14402 2.60136 4.11402 5.04916 4.11402C6.34996 4.11402 7.43396 4.96762 8.25016 4.96762C9.02716 4.96762 10.2396 4.06282 11.7196 4.06282C12.2812 4.06282 14.2912 4.11402 15.5752 6.04002ZM11.0176 2.44922C11.6296 1.72282 12.0628 0.71522 12.0628 -0.29238C12.0628 -0.43238 12.0512 -0.57418 12.0258 -0.68698C11.0294 -0.64958 9.84436 0.02682 9.12956 0.91282C8.56796 1.55062 8.04416 2.55822 8.04416 3.58402C8.04416 3.73762 8.06956 3.89122 8.08076 3.94062C8.14356 3.95322 8.24596 3.96742 8.34816 3.96742C9.24156 3.96742 10.3748 3.32082 11.0176 2.44922Z" transform="translate(0 -0.68698)"/>
</svg>
```

---

## Pattern 2: Chevron-Right (Learn More Arrow)

**Purpose**: Appended after "Learn more" and "Buy" pill links. The chevron is the single most repeated interactive glyph on Apple's site.

**Usage**: Inline with 14–17px link text; inherits link color (`#0066cc` on light, `#2997ff` on dark).

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 12" width="7" height="12" aria-hidden="true" focusable="false">
  <path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M1 1 L6 6 L1 11"/>
</svg>
```

Usage example:

```html
<a href="#" class="link-learn">
  Learn more
  <svg viewBox="0 0 7 12" width="7" height="12" aria-hidden="true">
    <path fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" d="M1 1 L6 6 L1 11"/>
  </svg>
</a>
```

---

## Pattern 3: Play Button (Media Control)

**Purpose**: Pause/play circular control for product autoplay videos on the homepage. Sits on top of hero video, uses semi-transparent scrim so it reads on any frame.

**Usage**: 44×44 touch target; place inside `.media-ctrl` button.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" aria-label="Play" role="img">
  <circle cx="22" cy="22" r="22" fill="rgba(210, 210, 215, 0.64)"/>
  <path fill="rgba(0, 0, 0, 0.48)" d="M17.5 14.5 L17.5 29.5 L30 22 Z"/>
</svg>
```

Pause variant (swap the triangle for two bars):

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44" height="44" aria-label="Pause" role="img">
  <circle cx="22" cy="22" r="22" fill="rgba(210, 210, 215, 0.64)"/>
  <rect x="17" y="15" width="3.5" height="14" rx="0.5" fill="rgba(0,0,0,0.48)"/>
  <rect x="23.5" y="15" width="3.5" height="14" rx="0.5" fill="rgba(0,0,0,0.48)"/>
</svg>
```

---

## Pattern 4: Focus Ring Overlay

**Purpose**: The 2px Apple Blue focus outline drawn around interactive elements for keyboard navigation. Illustrated here as a standalone overlay (it is usually produced by the `:focus-visible` CSS outline — this mark is for documentation/illustrative use).

**Usage**: Overlay on button bounds; offset 2px from element edge.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 60" width="200" height="60" aria-hidden="true">
  <!-- Button surface (illustrative only) -->
  <rect x="6" y="6" width="188" height="48" rx="8" fill="#0071e3"/>
  <text x="100" y="36" text-anchor="middle" font-family="SF Pro Text, Helvetica Neue, sans-serif" font-size="17" fill="#ffffff">Buy</text>
  <!-- The focus ring -->
  <rect x="2" y="2" width="196" height="56" rx="12" fill="none" stroke="#0071e3" stroke-width="2"/>
</svg>
```

---

## Pattern 5: Product Silhouette Placeholder

**Purpose**: A minimal phone-shaped silhouette used inside `.tile__image` as a placeholder before the high-res product photograph loads. Mirrors Apple's "product on solid field" treatment — no context, no shadow, just the object.

**Usage**: Drop into a `.tile__image` div; inherits text color so it reads on light or dark tiles.

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 240" width="120" height="240" aria-hidden="true">
  <!-- Device body -->
  <rect x="6" y="6" width="108" height="228" rx="22" fill="none" stroke="currentColor" stroke-width="2" opacity="0.88"/>
  <!-- Inner screen -->
  <rect x="14" y="18" width="92" height="204" rx="14" fill="currentColor" opacity="0.06"/>
  <!-- Top speaker / camera slot -->
  <rect x="46" y="12" width="28" height="5" rx="2.5" fill="currentColor" opacity="0.5"/>
  <!-- Side buttons -->
  <rect x="3" y="54" width="3" height="18" rx="1.5" fill="currentColor" opacity="0.5"/>
  <rect x="114" y="66" width="3" height="30" rx="1.5" fill="currentColor" opacity="0.5"/>
</svg>
```

---

## General Guidelines

1. **Monochrome first**: Use `fill="currentColor"` or `stroke="currentColor"` so marks inherit from the containing section's text color.
2. **No gradients, no filters, no textures**: Apple's SVG language is pure geometry.
3. **Stroke width**: 1.6–2px for line icons at 14–24px display size. Never thicker.
4. **Line caps**: Always `stroke-linecap="round"` and `stroke-linejoin="round"` for chevrons and arrows.
5. **Focus ring**: Use the CSS `:focus-visible { outline: 2px solid #0071e3; outline-offset: 2px; }` rule in production. The SVG pattern above is for documentation only.
6. **Viewbox conventions**: keep integer coordinates where possible; anchor glyphs to `0 0` origin.
7. **Accessibility**: decorative marks get `aria-hidden="true"`; semantic marks (logo, play button) get `role="img"` with an `aria-label`.
8. **No color variables inside SVG**: hex values only — SVG doesn't reliably support CSS custom properties across all render contexts.
