# Design System Inspired by Apple

## 1. Visual Theme & Atmosphere

Apple's website is a masterclass in controlled drama — vast expanses of
pure black and near-white serve as cinematic backdrops for products that
are photographed as if they were sculptures in a gallery. The design
philosophy is reductive to its core: every pixel exists in service of
the product, and the interface itself retreats until it becomes
invisible. This is not minimalism as aesthetic preference; it is
minimalism as reverence for the object.

The typography anchors everything. San Francisco (SF Pro Display for
large sizes, SF Pro Text for body) is Apple's proprietary typeface,
engineered with optical sizing that automatically adjusts letterforms
depending on point size. At display sizes (56px), weight 600 with a
tight line-height of 1.07 and subtle negative letter-spacing (-0.28px)
creates headlines that feel machined rather than typeset — precise,
confident, and unapologetically direct. At body sizes (17px), the
tracking loosens slightly (-0.374px) and line-height opens to 1.47,
creating a reading rhythm that is comfortable without ever feeling
slack.

The color story is starkly binary. Product sections alternate between
pure black (`#000000`) backgrounds with white text and light gray
(`#f5f5f7`) backgrounds with near-black text (`#1d1d1f`). This creates a
cinematic pacing — dark sections feel immersive and premium, light
sections feel open and informational. The only chromatic accent is Apple
Blue (`#0071e3`), reserved exclusively for interactive elements: links,
buttons, and focus states. This singular accent color in a sea of
neutrals gives every clickable element unmistakable visibility.

**Key Characteristics:**

- SF Pro Display/Text with optical sizing — letterforms adapt
  automatically to size context
- Binary light/dark section rhythm: black (`#000000`) alternating with
  light gray (`#f5f5f7`)
- Single accent color: Apple Blue (`#0071e3`) reserved exclusively for
  interactive elements
- Product-as-hero photography on solid color fields — no gradients, no
  textures, no distractions
- Extremely tight headline line-heights (1.07-1.14) creating compressed,
  billboard-like impact
- Full-width section layout with centered content — the viewport IS the
  canvas
- Pill-shaped CTAs (980px radius) creating soft, approachable action
  buttons
- Generous whitespace between sections allowing each product moment to
  breathe
- Scroll as cinematography — sticky-pinned sections, parallax product
  reveals, autoplay muted video loops, and gentle opacity/transform
  fades on enter (`IntersectionObserver`-driven)
- Universal easing curve `cubic-bezier(0.4, 0, 0.6, 1)` at ~0.32s for
  color/opacity transitions — Apple's signature motion DNA
- Apple Intelligence four-stop gradient reserved for AI/on-device
  intelligence brand moments, applied via `background-clip: text`

## 2. Color Palette & Roles

### Primary

- **Pure Black** (`#000000`): Hero section backgrounds, immersive
  product showcases. The darkest canvas for the brightest products.
- **Light Gray** (`#f5f5f7`): Alternate section backgrounds,
  informational areas. Not white — the slight blue-gray tint prevents
  sterility.
- **Near Black** (`#1d1d1f`): Primary text on light backgrounds, dark
  button fills. Slightly warmer than pure black for comfortable reading.

### Interactive

- **Apple Blue** (`#0071e3`): `--sk-focus-color`, primary CTA
  backgrounds, focus rings. The ONLY chromatic color in the interface.
- **Link Blue** (`#0066cc`): `--sk-body-link-color`, inline text links.
  Slightly darker than Apple Blue for text-level readability.
- **Bright Blue** (`#2997ff`): Links on dark backgrounds. Higher
  luminance for contrast on black sections.

### Apple Intelligence Gradient (AI Brand Moment)

A four-stop diagonal gradient reserved for Apple Intelligence /
AI-branded text and surfaces — never for general UI. Applied to text via
`background-clip: text; -webkit-text-fill-color: transparent;`.

- **Gradient**:
  `linear-gradient(108deg, #0894ff 0%, #c959dd 34%, #ff2e54 68%, #ff9004 100%)`
- **Stops**: Blue `#0894ff` → Purple `#c959dd` → Red `#ff2e54` →
  Orange `#ff9004`
- **Use**: "Apple Intelligence" wordmark, Genmoji/Image Playground
  brand moments, section titles that specifically introduce AI features
- **Never**: for body copy, buttons, icons, or decorative text unrelated
  to AI

### Text

- **White** (`#ffffff`): Text on dark backgrounds, button text on
  blue/dark CTAs.
- **Near Black** (`#1d1d1f`): Primary body text on light backgrounds.
- **Black 80%** (`rgba(0, 0, 0, 0.8)`): Secondary text, nav items on
  light backgrounds. Slightly softened.
- **Black 48%** (`rgba(0, 0, 0, 0.48)`): Tertiary text, disabled states,
  carousel controls.

### Surface & Dark Variants

- **Dark Surface 1** (`#272729`): Card backgrounds in dark sections.
- **Dark Surface 2** (`#262628`): Subtle surface variation in dark
  contexts.
- **Dark Surface 3** (`#28282a`): Elevated cards on dark backgrounds.
- **Dark Surface 4** (`#2a2a2d`): Highest dark surface elevation.
- **Dark Surface 5** (`#242426`): Deepest dark surface tone.

### Button States

- **Button Active** (`#ededf2`): Active/pressed state for light buttons.
- **Button Default Light** (`#fafafc`): Search/filter button
  backgrounds.
- **Overlay** (`rgba(210, 210, 215, 0.64)`): Media control scrims,
  overlays.
- **White 32%** (`rgba(255, 255, 255, 0.32)`): Hover state on dark modal
  close buttons.

### Shadows

- **Card Shadow** (`rgba(0, 0, 0, 0.22) 3px 5px 30px 0px`): Soft,
  diffused elevation for product cards. Offset and wide blur create a
  natural, photographic shadow.

## 3. Typography Rules

### Font Family

- **Display**: `SF Pro Display`, with fallbacks:
  `SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`
- **Body**: `SF Pro Text`, with fallbacks:
  `SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif`
- SF Pro Display is used at 20px and above; SF Pro Text is optimized for
  19px and below.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|----|----|----|----|----|----|----|
| Display Mega | SF Pro Display | 80px (5.00rem) | 600 | 1.05 (tight) | -1.2px | Flagship product reveal headlines (iPhone 17 Pro, Mac landing) — the billboard |
| Display Hero | SF Pro Display | 56px (3.50rem) | 600 | 1.07 (tight) | -0.28px | Standard product section headings ("Take a closer look.") |
| Display Large | SF Pro Display | 48px (3.00rem) | 600 | 1.08 (tight) | -0.4px | Feature reveals within long-form product pages |
| Category Section | SF Pro Display | 48px (3.00rem) | 600 | 1.10 (tight) | -0.144px | Mac-landing-style section titles ("Explore the lineup.") |
| Product Hero Small | SF Pro Display | 34px (2.13rem) | 600 | 1.14 (tight) | -0.374px | Deliberately understated hero (Apple Vision Pro) — lets product photography lead |
| Section Heading | SF Pro Display | 40px (2.50rem) | 600 | 1.10 (tight) | normal | Feature section titles |
| **Category Eyebrow** | SF Pro Display | 24px (1.50rem) | 700 | 1.17 (tight) | **+0.216px** | Uppercase category labels ("ENTERTAINMENT", "TECHNOLOGY", "APPS") — the ONE place Apple uses positive tracking |
| Tile Heading | SF Pro Display | 28px (1.75rem) | 400 | 1.14 (tight) | 0.196px | Product tile headlines |
| Card Title | SF Pro Display | 21px (1.31rem) | 700 | 1.19 (tight) | 0.231px | Bold card headings |
| Sub-heading | SF Pro Display | 21px (1.31rem) | 400 | 1.19 (tight) | 0.231px | Regular card headings |
| Nav Heading | SF Pro Text | 34px (2.13rem) | 600 | 1.47 | -0.374px | Large navigation headings |
| Sub-nav | SF Pro Text | 24px (1.50rem) | 300 | 1.50 | normal | Light sub-navigation text |
| Body | SF Pro Text | 17px (1.06rem) | 400 | 1.47 | -0.374px | Standard reading text |
| Body Emphasis | SF Pro Text | 17px (1.06rem) | 600 | 1.24 (tight) | -0.374px | Emphasized body text, labels |
| Button Large | SF Pro Text | 18px (1.13rem) | 300 | 1.00 (tight) | normal | Large button text, light weight |
| Button | SF Pro Text | 17px (1.06rem) | 400 | 2.41 (relaxed) | normal | Standard button text |
| Link | SF Pro Text | 14px (0.88rem) | 400 | 1.43 | -0.224px | Body links, "Learn more" |
| Caption | SF Pro Text | 14px (0.88rem) | 400 | 1.29 (tight) | -0.224px | Secondary text, descriptions |
| Caption Bold | SF Pro Text | 14px (0.88rem) | 600 | 1.29 (tight) | -0.224px | Emphasized captions |
| Micro | SF Pro Text | 12px (0.75rem) | 400 | 1.33 | -0.12px | Fine print, footnotes |
| Micro Bold | SF Pro Text | 12px (0.75rem) | 600 | 1.33 | -0.12px | Bold fine print |
| Nano | SF Pro Text | 10px (0.63rem) | 400 | 1.47 | -0.08px | Legal text, smallest size |

### Principles

- **Optical sizing as philosophy**: SF Pro automatically switches
  between Display and Text optical sizes. Display versions have wider
  letter spacing and thinner strokes optimized for large sizes; Text
  versions are tighter and sturdier for small sizes. This means the font
  literally changes its DNA based on context.
- **Weight restraint**: The scale spans 300 (light) to 700 (bold) but
  most text lives at 400 (regular) and 600 (semibold). Weight 300
  appears only on large decorative text. Weight 700 is rare, used only
  for bold card titles.
- **Negative tracking at all sizes** — **except category eyebrows**:
  Apple applies subtle negative letter-spacing at almost every size
  (-0.374px at 17px, -0.224px at 14px, -0.12px at 12px). The single
  deliberate exception is the **24px/700 category eyebrow**
  (`ENTERTAINMENT`, `PRODUCTIVITY`, `TECHNOLOGY`, `APPS` on Vision Pro;
  similar on AirPods/Mac Pro pages) which uses **positive +0.216px
  tracking** to read as uppercase-ish section dividers. Learn to
  recognize this — it's the signpost move that says "new chapter."
- **Extreme line-height range**: Headlines compress to 1.07 while body
  text opens to 1.47, and some button contexts stretch to 2.41. This
  dramatic range creates clear visual hierarchy through rhythm alone.

## 4. Component Stylings

### Buttons

**Primary Blue (CTA)**

- Background: `#0071e3` (Apple Blue)
- Text: `#ffffff`
- Padding: 8px 15px
- Radius: 8px
- Border: 1px solid transparent
- Font: SF Pro Text, 17px, weight 400
- Hover: background brightens slightly
- Active: `#ededf2` background shift
- Focus: `2px solid var(--sk-focus-color, #0071E3)` outline
- Use: Primary call-to-action ("Buy", "Shop iPhone")

**Primary Dark**

- Background: `#1d1d1f`
- Text: `#ffffff`
- Padding: 8px 15px
- Radius: 8px
- Font: SF Pro Text, 17px, weight 400
- Use: Secondary CTA, dark variant

**Pill Link (Learn More / Shop)**

- Background: transparent
- Text: `#0066cc` (light bg) or `#2997ff` (dark bg)
- Radius: 980px (full pill)
- Border: 1px solid `#0066cc`
- Font: SF Pro Text, 14px-17px
- Hover: underline decoration
- Use: "Learn more" and "Shop" links — the signature Apple inline CTA

**Filter / Search Button**

- Background: `#fafafc`
- Text: `rgba(0, 0, 0, 0.8)`
- Padding: 0px 14px
- Radius: 11px
- Border: 3px solid `rgba(0, 0, 0, 0.04)`
- Focus: `2px solid var(--sk-focus-color, #0071E3)` outline
- Use: Search bars, filter controls

**Media Control**

- Background: `rgba(210, 210, 215, 0.64)`
- Text: `rgba(0, 0, 0, 0.48)`
- Radius: 50% (circular)
- Active: scale(0.9), background shifts
- Focus: `2px solid var(--sk-focus-color, #0071e3)` outline, white bg,
  black text
- Use: Play/pause, carousel arrows

### Cards & Containers

- Background: `#f5f5f7` (light) or `#272729`-`#2a2a2d` (dark)
- Border: none (borders are rare in Apple's system)
- Radius: 5px-8px
- Shadow: `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` for elevated product
  cards
- Content: centered, generous padding
- Hover: no standard hover state — cards are static, links within them
  are interactive

### Navigation

Apple's current site uses a two-layer navigation: the **globalnav** (top
Apple-wide bar) and an optional **localnav** (product-specific subnav
that docks below).

**Globalnav (primary)**

- Height: **44px** (compact, tighter than legacy 48px)
- Background: transparent by default; menu-open state triggers a
  full-screen curtain `rgba(0, 0, 0, 0.4)` +
  `backdrop-filter: saturate(180%) blur(20px)`
- Text: `#1d1d1f` at 12px/400 on light pages, `#f5f5f7` on dark pages
- Color transitions: `color 0.32s cubic-bezier(0.4, 0, 0.6, 1)`
- Logo: Apple logomark 17×44px, centered inside link padding

**Localnav (product subnav)**

- Background: `rgba(18, 18, 18, 0.8)` +
  `backdrop-filter: saturate(180%) blur(20px)` — the canonical "frosted
  glass" used on product pages
- Height: 48–52px, sticky just below the globalnav
- Product name left (17px/600), anchor links + primary CTA right
- The localnav is what most people *think of* as the Apple nav — it
  docks, blurs, and scrolls with the page

### Image Treatment

- Products on solid-color fields (black or white) — no backgrounds, no
  context, just the object
- Full-bleed section images that span the entire viewport width
- Product photography at extremely high resolution with subtle shadows
- Lifestyle images confined to rounded-corner containers (12px+ radius)

### Retina Image Resolution (HARD RULE)

**Every product/lifestyle image MUST ship 1x and 2x variants via
`srcset`.** Apple serves crisp retina art via either:

- Path-level density: `/v/.../image__hash_large.jpg` (1x) +
  `/v/.../image__hash_large_2x.jpg` (2x) — `/v/` path tree,
  deterministic `_2x` suffix
- Hash-level density: `/assets-www/.../small/nav_mbn_1fa302e95.png`
  (1x) + `/assets-www/.../small/nav_mbn_fcdfdf35f_2x.png` (2x) —
  `/assets-www/` path tree, **different hash per density** (must scrape
  from live `<picture><source srcset>`)

```html
<img src="https://www.apple.com/.../hero__xyz_large.jpg"
     srcset="https://www.apple.com/.../hero__xyz_large.jpg 1x,
             https://www.apple.com/.../hero__xyz_large_2x.jpg 2x"
     width="800" height="480" alt="..." loading="lazy"/>
```

Without the `2x` entry, retina displays (Mac M-series, iPhone, iPad)
will render images soft — instantly breaking the "premium" feel Apple's
design rests on. **Blurry product photography is the single most
obvious way to fail an Apple-style execution.**

### Distinctive Components

**Product Hero Module**

- Full-viewport-width section with solid background (black or `#f5f5f7`)
- Product name as the primary headline (SF Pro Display, 56px, weight
  600)
- One-line descriptor below in lighter weight
- Two pill CTAs side by side: "Learn more" (outline) and "Buy" / "Shop"
  (filled)

**Product Grid Tile**

- Square or near-square card on contrasting background
- Product image dominating 60-70% of the tile
- Product name + one-line description below
- "Learn more" and "Shop" link pair at bottom

**Feature Comparison Strip**

- Horizontal scroll of product variants
- Each variant as a vertical card with image, name, and key specs
- Minimal chrome — the products speak for themselves

### Page Archetypes (Observed on apple.com)

Apple runs three distinct marketing page archetypes. Each has a
different hero philosophy and section rhythm — picking the right
archetype is half the design decision.

**Archetype A — Category Landing** (apple.com/iphone, apple.com/mac)

- Purpose: help visitors choose a model
- Hero: category name as a 80px Display Mega wordmark, no product
  photo ("Mac" alone, "iPhone" alone) — the word IS the hero
- Chapter Nav: horizontal scroll-snap strip of ~5–6 product tiles with
  chapternav PNGs immediately under the hero — the page's primary
  navigation tool
- Section cadence: `Explore the lineup` → `Why Apple is the best place
  to buy X` → `Get to know X` → `X essentials` → `Unlock the world of
  Apple` → `footer`
- Section heading size: **48px / 600 / -0.144px** (the "Mac landing
  heading" — smaller than product-page 56px)
- Dominant background: alternating `#ffffff` and `#f5f5f7`
- Motion: fade-up reveals only. NO scroll-linked video. NO parallax.

**Archetype B — Flagship Product Page** (iphone-17-pro, macbook-pro)

- Purpose: sell the specific product as cinema
- Hero: 80px Display Mega headline with a tagline ("iPhone 17 Pro. / A
  big zoom forward."), product photo or autoplay video
- Localnav docks immediately for in-page jumps
- Section cadence: design → display → chip → camera → battery → AI →
  connectivity → accessories → compare → buy
- Motion: heavy scroll-pinned scenes, horizontal-snap carousels,
  autoplay muted video loops, parallax product rotation
- Backgrounds: black sections alternate with `#f5f5f7` — the "cinematic
  reel"

**Archetype C — Experiential Product Page** (apple-vision-pro,
airpods-max)

- Purpose: communicate a NEW paradigm the visitor has never tried
- Hero: **deliberately SMALLER** 34px headline + massive product
  photograph. Apple knows the product is unfamiliar, so the headline
  shrinks and the photo does the talking.
- **Category Eyebrow** (24px/700/+0.216px) becomes the primary
  structural device — "ENTERTAINMENT", "PRODUCTIVITY", "TECHNOLOGY",
  "APPS" — chaptering the experience into themed acts
- Scroll-triggered video is SIGNATURE — each section reveals an
  auto-playing video when it enters the viewport (via
  `IntersectionObserver.play()/pause()`)
- Mixed themes: light → light → light → **dark technology section** →
  light again. The dark section is the "specs reveal" anchor.

## 5. Layout Principles

### Spacing System

- Base unit: 8px
- Scale: 2px, 4px, 5px, 6px, 7px, 8px, 9px, 10px, 11px, 14px, 15px,
  17px, 20px, 24px
- Notable characteristic: the scale is dense at small sizes (2-11px)
  with granular 1px increments, then jumps in larger steps. This allows
  precise micro-adjustments for typography and icon alignment.

### Grid & Container

- Max content width: approximately 980px (the recurring "980px radius"
  in pill buttons echoes this width)
- Hero: full-viewport-width sections with centered content block
- Product grids: 2-3 column layouts within centered container
- Single-column for hero moments — one product, one message, full
  attention
- No visible grid lines or gutters — spacing creates implied structure

### Whitespace Philosophy

- **Cinematic breathing room**: Each product section occupies a full
  viewport height (or close to it). The whitespace between products is
  not empty — it is the pause between scenes in a film.
- **Vertical rhythm through color blocks**: Rather than using spacing
  alone to separate sections, Apple uses alternating background colors
  (black, `#f5f5f7`, white). Each color change signals a new "scene."
- **Compression within, expansion between**: Text blocks are tightly set
  (negative letter-spacing, tight line-heights) while the space
  surrounding them is vast. This creates a tension between density and
  openness.

### Border Radius Scale

- Micro (5px): Small containers, link tags
- Standard (8px): Buttons, product cards, image containers
- Comfortable (11px): Search inputs, filter buttons
- Large (12px): Feature panels, lifestyle image containers
- Full Pill (980px): CTA links ("Learn more", "Shop"), navigation pills
- Circle (50%): Media controls (play/pause, arrows)

## 6. Depth & Elevation

| Level | Treatment | Use |
|----|----|----|
| Flat (Level 0) | No shadow, solid background | Standard content sections, text blocks |
| Globalnav (transparent) | No background by default; inherits section color | Apple-wide primary nav, 44px height |
| Localnav Glass | `rgba(18, 18, 18, 0.8)` + `backdrop-filter: saturate(180%) blur(20px)` | Sticky product subnav — the canonical "Apple glass" |
| Menu Curtain | `rgba(0, 0, 0, 0.4)` + `backdrop-filter: saturate(180%) blur(20px)` | Full-screen overlay when globalnav menus open |
| Subtle Lift (Level 1) | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px` | Product cards, floating elements |
| Media Control | `rgba(210, 210, 215, 0.64)` background with scale transforms | Play/pause buttons, carousel controls |
| Focus (Accessibility) | `2px solid #0071e3` outline | Keyboard focus on all interactive elements |

**Shadow Philosophy**: Apple uses shadow extremely sparingly. The
primary shadow (`3px 5px 30px` with 0.22 opacity) is soft, wide, and
offset — mimicking a diffused studio light casting a natural shadow
beneath a physical object. This reinforces the "product as physical
sculpture" metaphor. Most elements have NO shadow at all; elevation
comes from background color contrast (dark card on darker background, or
light card on slightly different gray).

### Decorative Depth

- Navigation glass: the translucent, blurred navigation bar is the most
  recognizable depth element, creating a sense of floating UI above
  scrolling content
- Section color transitions: depth is implied by the alternation between
  black and light gray sections rather than by shadows
- Product photography shadows: the products themselves cast shadows in
  their photography, so the UI doesn't need to add synthetic ones

## 7. Motion & Animation

Motion is not decoration in Apple's system — it's the narrative device
that sells products without exposition. A scrolling product page is a
silent film: the user scrolls, and the product performs. Three core
techniques dominate the current site (iPhone 17 Pro, Vision Pro, Mac,
AirPods product pages).

### Signature Easing

- **Curve**: `cubic-bezier(0.4, 0, 0.6, 1)` — a slightly-asymmetric
  ease-in-out, softer than material's standard. Present on every
  hover/color transition site-wide.
- **Duration**: 0.32s for color/opacity; 0.4–0.6s for transform/scale;
  0.8–1.2s for section reveals.
- **Rule of thumb**: never use the default `ease` keyword. Apple's curve
  is `0.4, 0, 0.6, 1`.

```css
:root {
  --apple-ease: cubic-bezier(0.4, 0, 0.6, 1);
  --apple-dur-fast: 0.32s;
  --apple-dur-medium: 0.5s;
  --apple-dur-slow: 1s;
}

a, button { transition: color var(--apple-dur-fast) var(--apple-ease), background-color var(--apple-dur-fast) var(--apple-ease); }
```

### Scroll-Linked Reveal (the "fade-up-on-enter")

The most common motion pattern: as a section scrolls into view, its
headline and supporting copy fade up from `opacity: 0; translateY(24px)`
to `opacity: 1; translateY(0)`. Driven by `IntersectionObserver`, not
scroll position math.

```js
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("is-in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });

document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
```

```css
[data-reveal] { opacity: 0; transform: translateY(24px); transition: opacity 0.8s var(--apple-ease), transform 0.8s var(--apple-ease); }
[data-reveal].is-in { opacity: 1; transform: none; }
[data-reveal][data-reveal-delay="1"] { transition-delay: 0.12s; }
[data-reveal][data-reveal-delay="2"] { transition-delay: 0.24s; }
```

### Sticky-Pinned Scroll Scenes

A product image pins to center-viewport while text beside it rotates
through multiple messages. Achieved with `position: sticky` on the
image column and natural scroll height on the text column. The modern
`animation-timeline: view()` enables this without JS in supported
browsers; fall back to JS-driven scroll progress otherwise.

```css
.scene {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  min-height: 300vh; /* three messages tall */
}
.scene__media {
  position: sticky;
  top: 15vh;
  height: 70vh;
  align-self: start;
}
```

### Parallax & Scale on Reveal

Hero product images gently scale from 1.05 → 1.0 and shift from
`translateY(40px) → 0` as they enter the viewport. Never exceed 1.08
scale — Apple parallax is subtle, not carnival.

### Autoplay Muted Video Loops

Product reveals favor muted, looping, auto-playing short videos over
static images. Always `playsinline muted loop` with
`preload="metadata"`. Provide a poster frame that matches the first
visible frame to eliminate pop-in.

### Scroll-Triggered Video (Vision Pro Signature)

On experiential product pages (Apple Vision Pro, AirPods Max), videos
**do not autoplay on page load** — they play only when scrolled into
view and pause when scrolled out. Saves bandwidth AND creates a
"perform on demand" cinematic feel. Pair with `preload="metadata"` so
only the poster and duration are fetched until the IntersectionObserver
triggers playback.

```js
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const v = entry.target;
    if (entry.isIntersecting) { v.play().catch(() => {}); }
    else { v.pause(); }
  });
}, { threshold: 0.35 });

document.querySelectorAll("video[data-scroll-play]").forEach((v) => videoObserver.observe(v));
```

```html
<video data-scroll-play playsinline muted loop preload="metadata" poster="/poster.jpg">
  <source src="/anim/scene.mp4" type="video/mp4" />
</video>
```

```html
<video class="reveal-media" playsinline muted autoplay loop preload="auto" poster="/hero-poster.jpg">
  <source src="/hero.mp4" type="video/mp4" />
</video>
```

### Hover & Press Feedback

- **CTA buttons**: 0.32s background brighten (approx +8% lightness) on
  hover; `transform: scale(0.96)` on `:active`
- **Media controls**: `transform: scale(0.9)` on `:active`, plus
  background opacity shift
- **Tiles**: on hover, image scales to 1.04 inside a clipped container,
  text remains still — "the product leans forward, the layout does not"

### Cursor (HARD RULE)

**Every element that triggers an action on click MUST set
`cursor: pointer`.** This is non-negotiable — if the user's mouse lands
on a clickable region and the cursor stays as the default arrow, the
element fails the first affordance test.

The native browser adds `cursor: pointer` automatically ONLY for `<a
href>`, `<button>`, `<input type="submit">`, and `<select>`. The moment
you attach click behavior to a `<div>`, `<li>`, or wrap a card in an
anchor whose child uses its own `cursor` rule, the pointer is your
responsibility.

**Apply to, at minimum:**

- Product tiles / chapter-nav tiles / lineup cards
- Color swatches, finish pickers
- Carousel items, compare cards
- Any hover-animated surface (`translateY`, `scale`) — hover animation
  implies clickability
- Tab-like toggles, accordion headers, filter chips
- Video play/pause overlay controls

```css
.tile,
.carousel__item,
.swatch,
.compare-card,
.chapter-nav__item,
[role="button"],
[data-clickable] {
  cursor: pointer;
}
```

**Exceptions** (keep default cursor):
- Pure decorative surfaces that animate but don't respond to click
- Disabled states — use `cursor: not-allowed`
- Loading states — use `cursor: wait`

**Anti-pattern**: don't rely solely on `<a href="#">` to carry pointer —
if the anchor's child has `cursor: default` or the anchor is wrapped in
something that overrides it, you lose the cursor. Always set it
explicitly on the interactive container.

### Horizontal Snap Carousels

Feature comparison strips and color pickers use native CSS scroll-snap:

```css
.carousel { scroll-snap-type: x mandatory; overflow-x: auto; scroll-behavior: smooth; }
.carousel > * { scroll-snap-align: center; }
```

### Reduced Motion

Every scroll-linked animation MUST collapse under
`@media (prefers-reduced-motion: reduce)`. Apple ships this correctly —
the content still reveals, just without the transform or duration.

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal] { opacity: 1; transform: none; transition: none; }
  .reveal-media { animation: none; }
}
```

### Motion Do's and Don'ts

- **Do** use the signature easing `cubic-bezier(0.4, 0, 0.6, 1)` for
  everything time-based.
- **Do** drive reveals with `IntersectionObserver`, not scroll math.
- **Do** autoplay muted, looping videos for product beauty shots.
- **Do** keep transforms subtle — scale ≤1.08, translate ≤48px.
- **Don't** parallax the whole page or use JS-driven scrolljacking.
- **Don't** animate more than opacity/transform — never animate layout
  properties (`width`, `height`, `margin`).
- **Don't** loop animations indefinitely except for background video.
- **Don't** skip `prefers-reduced-motion`.

## 8. Do's and Don'ts

### Do

- Use SF Pro Display at 20px+ and SF Pro Text below 20px — respect the
  optical sizing boundary
- Apply negative letter-spacing at all text sizes (not just headlines) —
  Apple tracks tight universally
- Use Apple Blue (`#0071e3`) ONLY for interactive elements — it must be
  the singular accent
- Alternate between black and light gray (`#f5f5f7`) section backgrounds
  for cinematic rhythm
- Use 980px pill radius for CTA links — the signature Apple link shape
- Keep product imagery on solid-color fields with no competing visual
  elements
- Use the translucent dark glass (`rgba(0,0,0,0.8)` + blur) for sticky
  navigation
- Compress headline line-heights to 1.07-1.14 — Apple headlines are
  famously tight

### Don't

- Don't introduce additional accent colors — the entire chromatic budget
  is spent on blue
- Don't use heavy shadows or multiple shadow layers — Apple's shadow
  system is one soft diffused shadow or nothing
- Don't use borders on cards or containers — Apple almost never uses
  visible borders (except on specific buttons)
- Don't apply wide letter-spacing to SF Pro — it is designed to run
  tight at every size
- Don't use weight 800 or 900 — the maximum is 700 (bold), and even that
  is rare
- Don't add textures, patterns, or gradients to backgrounds — solid
  colors only
- Don't make the navigation opaque — the glass blur effect is essential
  to the Apple UI identity
- Don't center-align body text — Apple body copy is left-aligned; only
  headlines center
- Don't use rounded corners larger than 12px on rectangular elements
  (980px is for pills only)

## 9. Responsive Behavior

### Breakpoints

| Name          | Width       | Key Changes                        |
|---------------|-------------|------------------------------------|
| Small Mobile  | \<360px     | Minimum supported, single column   |
| Mobile        | 360-480px   | Standard mobile layout             |
| Mobile Large  | 480-640px   | Wider single column, larger images |
| Tablet Small  | 640-834px   | 2-column product grids begin       |
| Tablet        | 834-1024px  | Full tablet layout, expanded nav   |
| Desktop Small | 1024-1070px | Standard desktop layout begins     |
| Desktop       | 1070-1440px | Full layout, max content width     |
| Large Desktop | \>1440px    | Centered with generous margins     |

### Touch Targets

- Primary CTAs: 8px 15px padding creating ~44px touch height
- Navigation links: 48px height with adequate spacing
- Media controls: 50% radius circular buttons, minimum 44x44px
- "Learn more" pills: generous padding for comfortable tapping

### Collapsing Strategy

- Hero headlines: 56px Display → 40px → 28px on mobile, maintaining
  tight line-height proportionally
- Product grids: 3-column → 2-column → single column stacked
- Navigation: full horizontal nav → compact mobile menu (hamburger)
- Product hero modules: full-bleed maintained at all sizes, text scales
  down
- Section backgrounds: maintain full-width color blocks at all
  breakpoints — the cinematic rhythm never breaks
- Image sizing: products scale proportionally, never crop — the product
  silhouette is sacred

### Image Behavior

- Product photography maintains aspect ratio at all breakpoints
- Hero product images scale down but stay centered
- Full-bleed section backgrounds persist at every size
- Lifestyle images may crop on mobile but maintain their rounded corners
- Lazy loading for below-fold product images

## 10. Agent Prompt Guide

### Quick Color Reference

- Primary CTA: Apple Blue (`#0071e3`)
- Page background (light): `#f5f5f7`
- Page background (dark): `#000000`
- Heading text (light): `#1d1d1f`
- Heading text (dark): `#ffffff`
- Body text: `rgba(0, 0, 0, 0.8)` on light, `#ffffff` on dark
- Link (light bg): `#0066cc`
- Link (dark bg): `#2997ff`
- Focus ring: `#0071e3`
- Card shadow: `rgba(0, 0, 0, 0.22) 3px 5px 30px 0px`
- Localnav glass: `rgba(18, 18, 18, 0.8)` +
  `backdrop-filter: saturate(180%) blur(20px)`
- Menu curtain: `rgba(0, 0, 0, 0.4)` +
  `backdrop-filter: saturate(180%) blur(20px)`

### Quick Motion Reference

- Easing: `cubic-bezier(0.4, 0, 0.6, 1)` (universal)
- Hover/color duration: `0.32s`
- Reveal duration: `0.8s` with `translateY(24px) → 0` +
  `opacity: 0 → 1`
- Section transform: `scale(1.05) → 1.0` on enter, never exceeds 1.08
- Trigger: `IntersectionObserver` with `threshold: 0.2` and
  `rootMargin: "0px 0px -10% 0px"`

### Apple Intelligence Gradient Snippet

```css
.ai-word {
  background: linear-gradient(108deg, #0894ff 0%, #c959dd 34%, #ff2e54 68%, #ff9004 100%);
  -webkit-background-clip: text;
          background-clip: text;
  -webkit-text-fill-color: transparent;
          color: transparent;
}
```

### Example Component Prompts

- "Create a hero section on black background. Headline at 56px SF Pro
  Display weight 600, line-height 1.07, letter-spacing -0.28px, color
  white. One-line subtitle at 21px SF Pro Display weight 400,
  line-height 1.19, color white. Two pill CTAs: 'Learn more'
  (transparent bg, white text, 1px solid white border, 980px radius) and
  'Buy' (Apple Blue \#0071e3 bg, white text, 8px radius, 8px 15px
  padding)."
- "Design a product card: \#f5f5f7 background, 8px border-radius, no
  border, no shadow. Product image top 60% of card on solid background.
  Title at 28px SF Pro Display weight 400, letter-spacing 0.196px,
  line-height 1.14. Description at 14px SF Pro Text weight 400, color
  rgba(0,0,0,0.8). 'Learn more' and 'Shop' links in \#0066cc at 14px."
- "Build the Apple navigation: sticky, 48px height, background
  rgba(0,0,0,0.8) with backdrop-filter: saturate(180%) blur(20px). Links
  at 12px SF Pro Text weight 400, white text. Apple logo left, links
  centered, search and bag icons right."
- "Create an alternating section layout: first section black bg with
  white text and centered product image, second section \#f5f5f7 bg with
  \#1d1d1f text. Each section near full-viewport height with 56px
  headline and two pill CTAs below."
- "Design a 'Learn more' link: text \#0066cc on light bg or \#2997ff on
  dark bg, 14px SF Pro Text, underline on hover. After the text, include
  a right-arrow chevron character (\>). Wrap in a container with 980px
  border-radius for pill shape when used as a standalone CTA."

### Iteration Guide

1.  Every interactive element gets Apple Blue (`#0071e3`) — no other
    accent colors
2.  Section backgrounds alternate: black for immersive moments,
    `#f5f5f7` for informational moments
3.  Typography optical sizing: SF Pro Display at 20px+, SF Pro Text
    below — never mix
4.  Negative letter-spacing at all sizes: -0.28px at 56px, -0.374px at
    17px, -0.224px at 14px, -0.12px at 12px
5.  The navigation glass effect (translucent dark + blur) is
    non-negotiable — it defines the Apple web experience
6.  Products always appear on solid color fields — never on gradients,
    textures, or lifestyle backgrounds in hero modules
7.  Shadow is rare and always soft: `3px 5px 30px 0.22 opacity` or
    nothing at all
8.  Pill CTAs use 980px radius — this creates the signature Apple
    rounded-rectangle-that-looks-like-a-capsule shape

