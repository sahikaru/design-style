# Design System: GitHub — Primer + Primer Brand

GitHub ships **two design languages under one roof**, and knowing which one to use is half the job:

- **Primer** (this doc's original focus) — the **product UI** system: light canvas `#ffffff`, blue accent `#0969da`, **system font stack** (NOT Mona Sans — see correction in Section 1 / authoritative Section 12.5), dense information architecture. Used across all logged-in product surfaces — repos, issues, PRs, settings, dashboards.
- **Primer Brand** (marketing) — the **marketing/brand** system: **dark canvas `#000000` / `#0d1117`**, **neon mint accent `#5fed83`**, variable-weight Mona Sans at unusual weights (425/440/460). Used on github.com home, /features/*, /enterprise, /pricing, /copilot.

The product system optimizes for 8-hour reading sessions; the brand system optimizes for 30-second cinematic first impressions. Design tokens and motion curves differ on purpose — **don't mix**.

Sections 1–9 below describe Primer (product). Section 10 ("Primer Brand") describes the marketing variant. Section 11 covers page archetypes and cross-cutting HARD RULES (cursor, retina) that apply to both.

## 1. Visual Theme & Atmosphere

GitHub Primer is a design system built for developer tools — clean, functional, and information-dense. Where consumer products emphasize delight and emotion, Primer prioritizes **scanability, clarity, and efficient reading**. The interface feels like a well-organized code editor: every element earns its space, typography is optimized for long reading sessions, and color is used semantically rather than decoratively.

The foundation is a crisp white canvas (`#ffffff`) with a subtle cool-gray inset surface (`#f6f8fa`) for secondary areas. The overall tone is cool and neutral — blue-gray undertones throughout, with accent blue (`#0969da`) as the primary interactive color. This is the visual language of a tool you spend 8 hours a day in: zero visual fatigue, maximum information density, and a color system that communicates status (success, danger, warning) before anything decorative.

Primer uses a **system font stack** as its primary typeface for product UI, with a full monospace stack for code. There are no serifs anywhere. Typography is compact and utilitarian: tight line-heights for headings, comfortable reading heights for body, and a deliberate decision to establish hierarchy through **size and weight** rather than color or decoration.

> ⚠️ **Correction (per Section 12.5 — official Primer docs):** Mona Sans is **not** the product UI typeface. `--fontStack-sansSerif` and `--fontStack-sansSerifDisplay` both resolve to the platform-system stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif`). Mona Sans VF is reserved for **Primer Brand** (marketing surfaces — see Section 10) and the GitHub logotype. Earlier drafts of this doc conflated the two; trust Section 12.

**Key Characteristics:**
- Clean white canvas (`#ffffff`) with cool gray inset (`#f6f8fa`)
- Blue accent (`#0969da`) as primary interactive/link color
- System font stack for product UI; Mona Sans VF for marketing/brand only (Section 10)
- Semantic color system: green for success/open, red for danger/closed, yellow for attention, purple for done
- Compact, information-dense layouts optimized for developer workflows
- 4px grid alignment for all spacing and sizing
- Subtle, functional shadows — floating panels use layered translucent shadows
- Border-driven containment (`1px solid #d1d9e0`) rather than shadow-driven depth

## 2. Color Palette & Roles

### Core Surfaces
| Token | Hex | Role |
|-------|-----|------|
| `--bgColor-default` | `#ffffff` | Primary page background |
| `--bgColor-muted` | `#f6f8fa` | Secondary surface, code blocks, inset areas |
| `--bgColor-inset` | `#f6f8fa` | Recessed content areas |
| `--bgColor-emphasis` | `#25292e` | Dark emphasis backgrounds, tooltips |
| `--bgColor-inverse` | `#25292e` | Inverted surfaces |
| `--bgColor-disabled` | `#eff2f5` | Disabled element backgrounds |
| `--bgColor-transparent` | `#ffffff00` | Fully transparent |

### Foreground / Text
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-default` | `#1f2328` | Primary text — near-black with cool undertone |
| `--fgColor-muted` | `#59636e` | Secondary text, descriptions, metadata |
| `--fgColor-disabled` | `#818b98` | Disabled text |
| `--fgColor-onEmphasis` | `#ffffff` | Text on dark/emphasis backgrounds |
| `--fgColor-onInverse` | `#ffffff` | Text on inverse backgrounds |
| `--fgColor-white` | `#ffffff` | Pure white text |
| `--fgColor-black` | `#1f2328` | Alias for default foreground |
| `--fgColor-link` | `#0969da` | Hyperlink text |
| `--fgColor-accent` | `#0969da` | Accent text (same as link) |
| `--fgColor-neutral` | `#59636e` | Neutral informational text |
| `--fgColor-draft` | `#59636e` | Draft state text |

### Accent / Interactive Blue
| Token | Hex | Role |
|-------|-----|------|
| `--bgColor-accent-emphasis` | `#0969da` | Solid blue background (selected tabs, badges) |
| `--bgColor-accent-muted` | `#ddf4ff` | Light blue tint background |
| `--borderColor-accent-emphasis` | `#0969da` | Blue border emphasis |
| `--borderColor-accent-muted` | `#54aeff66` | Subtle blue border |
| `--focus-outlineColor` | `#0969da` | Focus ring color |

### Semantic: Success / Open
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-success` | `#1a7f37` | Success text, open state text |
| `--fgColor-open` | `#1a7f37` | Open PR/issue text |
| `--bgColor-success-emphasis` | `#1f883d` | Solid green background (merge button) |
| `--bgColor-success-muted` | `#dafbe1` | Light green tint |
| `--bgColor-open-emphasis` | `#1f883d` | Open state solid background |
| `--bgColor-open-muted` | `#dafbe1` | Open state tint |
| `--borderColor-success-emphasis` | `#1a7f37` | Green border emphasis |
| `--borderColor-success-muted` | `#4ac26b66` | Subtle green border |

### Semantic: Danger / Closed
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-danger` | `#d1242f` | Error/danger text |
| `--fgColor-closed` | `#d1242f` | Closed PR/issue text |
| `--bgColor-danger-emphasis` | `#cf222e` | Solid red background (delete button) |
| `--bgColor-danger-muted` | `#ffebe9` | Light red tint |
| `--bgColor-closed-emphasis` | `#cf222e` | Closed state solid background |
| `--bgColor-closed-muted` | `#ffebe9` | Closed state tint |
| `--borderColor-danger-emphasis` | `#cf222e` | Red border emphasis |
| `--borderColor-danger-muted` | `#ff818266` | Subtle red border |

### Semantic: Attention / Warning
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-attention` | `#9a6700` | Warning text |
| `--bgColor-attention-emphasis` | `#9a6700` | Solid yellow-brown background |
| `--bgColor-attention-muted` | `#fff8c5` | Light yellow tint |
| `--borderColor-attention-emphasis` | `#9a6700` | Warning border emphasis |
| `--borderColor-attention-muted` | `#d4a72c66` | Subtle warning border |

### Semantic: Severe
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-severe` | `#bc4c00` | Severe/orange text |
| `--bgColor-severe-emphasis` | `#bc4c00` | Solid orange background |
| `--bgColor-severe-muted` | `#fff1e5` | Light orange tint |
| `--borderColor-severe-emphasis` | `#bc4c00` | Orange border emphasis |
| `--borderColor-severe-muted` | `#fb8f4466` | Subtle orange border |

### Semantic: Done / Purple
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-done` | `#8250df` | Done/completed text |
| `--fgColor-upsell` | `#8250df` | Upsell/premium text |
| `--bgColor-done-emphasis` | `#8250df` | Solid purple background |
| `--bgColor-done-muted` | `#fbefff` | Light purple tint |
| `--bgColor-upsell-emphasis` | `#8250df` | Upsell solid background |
| `--bgColor-upsell-muted` | `#fbefff` | Upsell tint |
| `--borderColor-done-emphasis` | `#8250df` | Purple border emphasis |
| `--borderColor-done-muted` | `#c297ff66` | Subtle purple border |

### Semantic: Sponsors / Pink
| Token | Hex | Role |
|-------|-----|------|
| `--fgColor-sponsors` | `#bf3989` | Sponsors heart text |
| `--bgColor-sponsors-emphasis` | `#bf3989` | Solid pink background |
| `--bgColor-sponsors-muted` | `#ffeff7` | Light pink tint |
| `--borderColor-sponsors-emphasis` | `#bf3989` | Pink border emphasis |
| `--borderColor-sponsors-muted` | `#ff80c866` | Subtle pink border |

### Borders
| Token | Hex | Role |
|-------|-----|------|
| `--borderColor-default` | `#d1d9e0` | Standard border — the workhorse divider |
| `--borderColor-muted` | `#d1d9e0b3` | Subtle border with transparency |
| `--borderColor-emphasis` | `#818b98` | High-contrast border |
| `--borderColor-disabled` | `#818b981a` | Disabled border (very transparent) |
| `--borderColor-translucent` | `#1f232826` | Translucent dark border |
| `--borderColor-transparent` | `#ffffff00` | Invisible border (layout placeholder) |

### Button Pattern Colors
| Token | Hex | Role |
|-------|-----|------|
| `--button-primary-bgColor-rest` | `#1f883d` | Primary (green) button bg |
| `--button-primary-bgColor-hover` | `#1c8139` | Primary button hover bg |
| `--button-primary-bgColor-active` | `#197935` | Primary button active bg |
| `--button-primary-fgColor-rest` | `#ffffff` | Primary button text |
| `--button-danger-bgColor-rest` | `#f6f8fa` | Danger button bg (rest = subtle) |
| `--button-danger-fgColor-rest` | `#d1242f` | Danger button text |
| `--button-outline-fgColor-rest` | `#0969da` | Outline button text |
| `--button-invisible-fgColor-rest` | `#25292e` | Invisible button text |

### Overlay / Popup
| Token | Hex | Role |
|-------|-----|------|
| `--overlay-bgColor` | `#ffffff` | Overlay background |
| `--overlay-borderColor` | `#d1d9e080` | Overlay border (translucent) |
| `--overlay-backdrop-bgColor` | `#c8d1da66` | Modal backdrop |

### Data Visualization Palette
| Name | Emphasis Hex | Muted Hex |
|------|-------------|-----------|
| Auburn | `#9d615c` | `#f2e9e9` |
| Blue | `#006edb` | `#d1f0ff` |
| Green | `#30a147` | `#caf7ca` |
| Orange | `#eb670f` | `#ffe7d1` |
| Red | `#df0c24` | `#ffe2e0` |
| Purple | `#894ceb` | `#f1e5ff` |

## 3. Typography Rules

### Font Stacks
| Role | CSS Value |
|------|-----------|
| **Sans-serif (primary)** | `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` |
| **Monospace** | `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace` |
| **System** | Same as sans-serif |
| **Display** | Same as sans-serif |

*Note (per Section 12.5): the product UI uses a pure system font stack — Mona Sans is **not** part of `--fontStack-sansSerif`. Mona Sans VF is reserved for the marketing/brand variant (Section 10) and the GitHub logotype.*

### Base Text Size Scale
| Token | rem | px (at 16px base) |
|-------|-----|--------------------|
| `--base-text-size-xs` | 0.75rem | 12px |
| `--base-text-size-sm` | 0.875rem | 14px |
| `--base-text-size-md` | 1rem | 16px |
| `--base-text-size-lg` | 1.25rem | 20px |
| `--base-text-size-xl` | 2rem | 32px |
| `--base-text-size-2xl` | 2.5rem | 40px |

### Font Weights
| Token | Value | Usage |
|-------|-------|-------|
| `--base-text-weight-light` | 300 | Rarely used |
| `--base-text-weight-normal` | 400 | Body text, descriptions |
| `--base-text-weight-medium` | 500 | Display text |
| `--base-text-weight-semibold` | 600 | Headings, titles, emphasis |

### Line Heights
| Token | Value | Usage |
|-------|-------|-------|
| `--base-text-lineHeight-tight` | 1.25 | Compact headings |
| `--base-text-lineHeight-snug` | 1.375 | Display text |
| `--base-text-lineHeight-normal` | 1.5 | Body text, titles |
| `--base-text-lineHeight-relaxed` | 1.625 | Subtitles, small body text |
| `--base-text-lineHeight-loose` | 1.75 | Maximum readability |

### Semantic Typography Tokens

**Display**
| Property | Value |
|----------|-------|
| Size | 2.5rem (40px) |
| Weight | 500 (medium) |
| Line-height | 1.375 (snug) |

**Title Large**
| Property | Value |
|----------|-------|
| Size | 2rem (32px) |
| Weight | 600 (semibold) |
| Line-height | 1.5 (normal) |

**Title Medium**
| Property | Value |
|----------|-------|
| Size | 1.25rem (20px) |
| Weight | 600 (semibold) |
| Line-height | 1.625 (relaxed) |

**Title Small**
| Property | Value |
|----------|-------|
| Size | 1rem (16px) |
| Weight | 600 (semibold) |
| Line-height | 1.5 (normal) |

**Subtitle**
| Property | Value |
|----------|-------|
| Size | 1.25rem (20px) |
| Weight | 400 (normal) |
| Line-height | 1.625 (relaxed) |

**Body Large**
| Property | Value |
|----------|-------|
| Size | 1rem (16px) |
| Weight | 400 (normal) |
| Line-height | 1.5 (normal) |

**Body Medium (default)**
| Property | Value |
|----------|-------|
| Size | 0.875rem (14px) |
| Weight | 400 (normal) |
| Line-height | 1.5 (normal) |

**Body Small**
| Property | Value |
|----------|-------|
| Size | 0.75rem (12px) |
| Weight | 400 (normal) |
| Line-height | 1.625 (relaxed) |

**Caption**
| Property | Value |
|----------|-------|
| Size | 0.75rem (12px) |
| Weight | 400 (normal) |
| Line-height | 1.25 (tight) |

**Code Block**
| Property | Value |
|----------|-------|
| Size | 0.8125rem (13px) |
| Weight | 400 (normal) |
| Line-height | 1.5 (normal) |

**Inline Code**
| Property | Value |
|----------|-------|
| Size | 0.9285em (relative) |
| Weight | 400 (normal) |

### Heading Utility Classes (Primer CSS v20)
| Class | Desktop Size | Mobile Size | Weight | Line-height |
|-------|-------------|-------------|--------|-------------|
| `.h1` | 32px | 26px | 600 | 1.25 |
| `.h2` | 24px | 22px | 600 | 1.25 |
| `.h3` | 20px | 18px | 600 | 1.25 |
| `.h4` | 16px | 16px | 600 | 1.25 |
| `.h5` | 14px | 14px | 600 | 1.25 |
| `.h6` | 12px | 12px | 600 | 1.25 |

### Markdown Body Headings
| Element | Size | Additional |
|---------|------|------------|
| `h1` | 2em (32px) | `border-bottom: 1px solid`, `padding-bottom: 0.3em` |
| `h2` | 1.5em (24px) | `border-bottom: 1px solid`, `padding-bottom: 0.3em` |
| `h3` | 1.25em (20px) | No border |
| `h4` | 1em (16px) | No border |
| `h5` | 0.875em (14px) | No border |
| `h6` | 0.85em (13.6px) | Color: `--fgColor-muted` |
| All h1-h6 | — | `margin-top: 24px`, `margin-bottom: 16px`, weight 600, line-height 1.25 |

### Typography Principles
- **14px is the default body size** — not 16px. GitHub optimizes for information density, so the standard body text is `--base-text-size-sm` (14px).
- **Hierarchy through size + weight only** — no decorative colors or styles for text hierarchy. Size and semibold (600) weight create all differentiation.
- **Line-height varies by context** — headings use tight (1.25), body uses normal (1.5), small text uses relaxed (1.625) to compensate for reduced size.
- **rem units throughout** — all typography tokens use rem for WCAG-compliant text resizing.
- **Line length: ~80 characters** — recommended maximum for readable line lengths.
- **Left-aligned, ragged right** — standard text alignment. Centering and justification are atypical.

## 4. Component Stylings

### Buttons

**Default Button**
- Background: `var(--color-btn-bg)` (white/light gray)
- Text color: `var(--color-btn-text)` (dark text)
- Font size: 14px
- Font weight: 500 (medium)
- Line height: 20px
- Padding: 5px 16px
- Border: 1px solid `var(--color-btn-border)`
- Border radius: 6px
- Transition: 80ms `cubic-bezier(0.33, 1, 0.68, 1)` on color, background-color, box-shadow, border-color

**Small Button (`.btn-sm`)**
- Font size: 12px
- Padding: 3px 12px
- Line height: 20px

**Primary Button**
- Background: `#1f883d` (green) — rest
- Background hover: `#1c8139`
- Background active: `#197935`
- Text: `#ffffff`
- Border radius: 6px

**Danger Button**
- Background: `#f6f8fa` (subtle gray) — rest
- Text: `#d1242f` (red)
- On hover: background shifts to red, text to white

**Outline Button**
- Background: transparent
- Text: `#0969da` (blue)

**Invisible Button**
- Background: transparent
- Text: `#25292e` (dark)
- No visible border

### Cards & Containers
- Background: `#ffffff` (default) or `#f6f8fa` (muted)
- Border: `1px solid #d1d9e0` (default border)
- Border radius: 6px (standard)
- No shadow by default — containment is border-driven
- Internal padding: 16px (standard) or 24px (spacious)

### Overlays / Popups
- Background: `#ffffff`
- Border: `1px solid #d1d9e080` (translucent)
- Border radius: 6px (`--overlay-borderRadius: 0.375rem`)
- Offset from trigger: 4px (`--overlay-offset: 0.25rem`)
- Padding condensed: 8px / Padding normal: 16px

**Overlay Size Scale:**
| Size | Width | Height |
|------|-------|--------|
| xsmall | 192px (12rem) | — |
| small | 320px (20rem) | 256px (16rem) |
| medium | 480px (30rem) | 320px (20rem) |
| large | 640px (40rem) | 432px (27rem) |
| xlarge | 960px (60rem) | 600px (37.5rem) |

### Form Controls

**Control Size Scale:**
| Size | Height | Padding Block | Padding Inline | Gap |
|------|--------|---------------|----------------|-----|
| xsmall | 24px (1.5rem) | 2px (0.125rem) | 8px/12px | 4px |
| small | 28px (1.75rem) | 4px (0.25rem) | 8px/12px/16px | 4px |
| medium | 32px (2rem) | 6px (0.375rem) | 8px/12px/16px | 8px |
| large | 40px (2.5rem) | 10px (0.625rem) | 8px/12px/16px | 8px |
| xlarge | 48px (3rem) | 14px (0.875rem) | 8px/12px/16px | 8px |

**Control Inline Padding Variants:**
| Variant | Value |
|---------|-------|
| condensed | 8px (0.5rem) |
| normal | 12px (0.75rem) |
| spacious | 16px (1rem) |

**Control Touch Target Minimums:**
| Input Type | Minimum Size |
|------------|-------------|
| Coarse (touch) | 44px (2.75rem) |
| Fine (mouse) | 16px (1rem) |

**Form Input Styling:**
- Font size: 16px on mobile, 14px on desktop (768px+)
- Padding: 5px 12px
- Border: `1px solid var(--color-border-default)`
- Border radius: 6px
- Focus: `box-shadow: inset 0 0 0 1px var(--color-accent-fg)`, border-color: `--color-accent-fg` (`#0969da`)

### Navigation
- Sticky top navigation
- Background: white with bottom border
- Tab navigation: `border-bottom: 2px solid` on active tab
- Side navigation: `border-left: 3px solid` on active item
- Action list items: padding 8-14px, border-radius 6px, hover background

### Labels / Badges
- Font size: 12px
- Font weight: 600
- Border radius: 100px (pill shape) or 6px (standard)
- Color-coded using semantic emphasis colors

### Markdown Body
- Font size: 16px
- Line height: 1.5
- `h1`, `h2` have `border-bottom: 1px solid var(--color-border-muted)` with `padding-bottom: 0.3em`
- Code blocks: `background: var(--bgColor-muted)`, padding 16px, border-radius 6px
- Inline code: 0.9285em relative size

## 5. Layout Principles

### Base Spacing Scale (4px grid)
| Token | rem | px |
|-------|-----|----|
| `--base-size-2` | 0.125rem | 2px |
| `--base-size-4` | 0.25rem | 4px |
| `--base-size-6` | 0.375rem | 6px |
| `--base-size-8` | 0.5rem | 8px |
| `--base-size-12` | 0.75rem | 12px |
| `--base-size-16` | 1rem | 16px |
| `--base-size-20` | 1.25rem | 20px |
| `--base-size-24` | 1.5rem | 24px |
| `--base-size-28` | 1.75rem | 28px |
| `--base-size-32` | 2rem | 32px |
| `--base-size-36` | 2.25rem | 36px |
| `--base-size-40` | 2.5rem | 40px |
| `--base-size-44` | 2.75rem | 44px |
| `--base-size-48` | 3rem | 48px |
| `--base-size-64` | 4rem | 64px |
| `--base-size-80` | 5rem | 80px |
| `--base-size-96` | 6rem | 96px |
| `--base-size-112` | 7rem | 112px |
| `--base-size-128` | 8rem | 128px |

### Utility Spacing Classes
| Level | Margin/Padding | Value |
|-------|---------------|-------|
| 0 | `.m-0` / `.p-0` | 0 |
| 1 | `.m-1` / `.p-1` | 4px |
| 2 | `.m-2` / `.p-2` | 8px |
| 3 | `.m-3` / `.p-3` | 16px |
| 4 | `.m-4` / `.p-4` | 24px |
| 5 | `.m-5` / `.p-5` | 32px |
| 6 | `.m-6` / `.p-6` | 40px |
| 7 | `.pt-7` | 48px |

*Directional variants: `.mt-`, `.mb-`, `.ml-`, `.mr-` (individual sides), `.mx-` (horizontal), `.my-` (vertical)*

### Stack Spacing
| Token | Value |
|-------|-------|
| `--stack-gap-condensed` | 8px (0.5rem) |
| `--stack-gap-normal` | 16px (1rem) |
| `--stack-gap-spacious` | 24px (1.5rem) |
| `--stack-padding-condensed` | 8px (0.5rem) |
| `--stack-padding-normal` | 16px (1rem) |
| `--stack-padding-spacious` | 24px (1.5rem) |

### Breakpoints
| Name | Width | CSS Variable Fallback |
|------|-------|-----------------------|
| Small (sm) | 544px | `--primer-breakpoint-small` |
| Medium (md) | 768px | `--primer-breakpoint-medium` |
| Large (lg) | 1012px | `--primer-breakpoint-large` |
| X-Large (xl) | 1280px | `--primer-breakpoint-xlarge` |
| XX-Large | 1400px | — |

### Container Widths
| Class | Max-width |
|-------|-----------|
| `.container-sm` | 544px |
| `.container-md` | 768px |
| `.container-lg` | 1012px |
| `.container-xl` | 1280px |

### Layout Component
- Sidebar width: 220px (default, configurable via `--Layout-pane-width`)
- Gutter: configurable via `--Layout-gutter`
- Flow switches to single column (`grid-auto-flow: row`) below medium breakpoint (768px)

### Spinner Sizes
| Size | Value |
|------|-------|
| small | 16px (1rem) |
| medium | 32px (2rem) |
| large | 64px (4rem) |
| strokeWidth | 2px (0.125rem) |

## 6. Depth & Elevation

### Border Widths
| Token | Value | Usage |
|-------|-------|-------|
| `--borderWidth-thin` | 1px (0.0625rem) | Standard borders, dividers — used for most UI elements |
| `--borderWidth-thick` | 2px (0.125rem) | Emphasis borders, selected states, focus indicators |
| `--borderWidth-thicker` | 4px (0.25rem) | Maximum emphasis — high-contrast focus, critical separators |
| `--borderWidth-default` | 1px (alias of thin) | Default for all borders |

### Border Shorthand
All borders follow the pattern: `0.0625rem solid <color>`. Example:
```css
border: var(--borderWidth-thin) solid var(--borderColor-default);
/* Resolves to: 1px solid #d1d9e0 */
```

### Border Radius Scale
| Token / Class | Value | Usage |
|---------------|-------|-------|
| `.rounded-0` | 0px | No rounding |
| `--primer-borderRadius-small` / `.rounded-1` | 4px | Small elements, inline badges |
| `--primer-borderRadius-medium` / `.rounded-2` / `.rounded` | 6px | **Default** — buttons, cards, inputs, containers |
| `--primer-borderRadius-large` / `.rounded-3` | 8px | Larger containers |
| `--primer-borderRadius-full` | 100vh (pill) | Full-round pills, avatars, labels |
| Circle | 50% | Circular avatars, status dots |

*Note: 6px is the dominant border-radius throughout GitHub's UI. It appears on buttons, cards, dropdowns, inputs, action list items, markdown code blocks, toasts, and most containers.*

### Focus Ring
| Token | Value |
|-------|-------|
| `--outline-focus-width` | 2px (0.125rem) |
| `--outline-focus-offset` | -2px (-0.125rem) |
| Focus color | `#0969da` (accent blue) |

Standard focus style: `outline: 2px solid var(--color-accent-fg); outline-offset: -2px;`

### Box Shadow as Border
Primer uses `inset box-shadow` as an alternative to borders to avoid layout shifts:
| Token | Value |
|-------|-------|
| `--boxShadow-thin` | `inset 0 0 0 1px` (1px inset) |
| `--boxShadow-thick` | `inset 0 0 0 2px` (2px inset) |
| `--boxShadow-thicker` | `inset 0 0 0 4px` (4px inset) |

### Shadow Elevation Scale
| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-inset` | `inset 0 1px 0 0 #1f23280a` | Subtle top inset (tables, headers) |
| `--shadow-resting-xsmall` | `0 1px 1px 0 #1f23280d` | Minimal lift |
| `--shadow-resting-small` | `0 1px 1px 0 #1f23280a, 0 1px 2px 0 #1f232808` | Small resting shadow |
| `--shadow-resting-medium` | `0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f` | Medium resting shadow |
| `--shadow-floating-small` | `0 0 0 1px #d1d9e080, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f` | Small floating panel |
| `--shadow-floating-medium` | `0 0 0 1px #d1d9e000, 0 8px 16px -4px #25292e14, 0 4px 32px -4px #25292e14, 0 24px 48px -12px #25292e14, 0 48px 96px -24px #25292e14` | Dropdown menus, popovers |
| `--shadow-floating-large` | `0 0 0 1px #d1d9e000, 0 40px 80px 0 #25292e3d` | Large floating panels |
| `--shadow-floating-xlarge` | `0 0 0 1px #d1d9e000, 0 56px 112px 0 #25292e52` | Modals, dialogs |

### Shadow Philosophy
- **Borders first, shadows second**: Most containment uses `1px solid #d1d9e0` borders, not shadows. Shadows appear only on floating/elevated elements.
- **Layered translucent shadows**: Floating shadows use multiple shadow layers with very low opacity (`0a`-`1f` hex opacity = 4%-12%), creating a soft, natural light feel.
- **Border-ring in shadows**: The `0 0 0 1px` component in floating shadows acts as a subtle border, ensuring the element has definition even when the shadow is barely visible.
- **Inset shadow for borders**: When borders would cause layout shifts (e.g., on hover states), inset box-shadows replicate the border appearance without changing element dimensions.

## 7. Do's and Don'ts

### Do
- Use `#ffffff` as the primary background and `#f6f8fa` for secondary/inset areas
- Use 14px as the default body text size — GitHub is information-dense by design
- Use 6px border-radius as the default for all interactive elements
- Use `1px solid #d1d9e0` as the standard border — border-driven containment, not shadow
- Use semantic colors for status: green (#1a7f37) for success/open, red (#d1242f) for danger/closed, yellow (#9a6700) for attention
- Use weight 600 (semibold) for headings and emphasis — never bold (700+)
- Use the system font stack for product UI — no serifs (reserve Mona Sans VF for marketing/brand surfaces only, see Section 10)
- Use the `--shadow-floating-*` scale for overlays — layered, translucent, subtle
- Use the 4px-based spacing scale: 4, 8, 16, 24, 32, 40, 48px
- Apply `2px solid #0969da` focus outlines for keyboard accessibility

### Don't
- Don't use pure black (`#000000`) for text — use `#1f2328` (near-black with cool-blue tint)
- Don't use decorative colors for text hierarchy — size and weight are the only tools
- Don't use border-radius larger than 8px for standard UI (reserve pill/100vh for labels only)
- Don't use heavy drop shadows — Primer uses extremely subtle, layered translucent shadows
- Don't use custom colors outside the token system — every color has a semantic token
- Don't use serif fonts anywhere in the product UI
- Don't use spacing values outside the 4px grid system
- Don't use gradients or decorative backgrounds — surfaces are flat solid colors
- Don't mix emphasis and muted border colors on the same component
- Don't use weight 500 (medium) for headings — use 600 (semibold); 500 is for display text only

## 8. Responsive Behavior

### Breakpoint Ranges
| Name | Range | Key Changes |
|------|-------|-------------|
| Narrow | < 544px | Single column, stacked layout, compact spacing |
| Regular | 544px - 767px | Two-column begins for some layouts |
| Medium | 768px - 1011px | Standard two-column, sidebar appears |
| Wide | 1012px - 1279px | Full layout, all columns active |
| X-Wide | 1280px+ | Maximum width, most spacious layout |

### Responsive Typography
- Form inputs: 16px on mobile (prevents iOS zoom), 14px on desktop (768px+)
- Headings: `.h1` drops from 32px to 26px on mobile; `.h2` from 24px to 22px; `.h3` from 20px to 18px

### Visibility Utilities
- `.hide-sm` / `.show-whenNarrow`: Control mobile visibility
- `.hide-lg` / `.show-whenRegular`: Control desktop visibility
- `.hide-xl` / `.show-whenWide`: Control wide-screen visibility

### Stack Behavior
- Stacks switch between `flex-flow: row` (inline) and `flex-flow: column` (block) at breakpoints
- Gap tokens adjust per breakpoint: condensed (8px), normal (16px), spacious variants

## 9. Agent Prompt Guide

### Minimal CSS Reset for Primer-styled Pages
```css
:root {
  /* Core colors */
  --color-fg-default: #1f2328;
  --color-fg-muted: #59636e;
  --color-fg-accent: #0969da;
  --color-canvas-default: #ffffff;
  --color-canvas-subtle: #f6f8fa;
  --color-border-default: #d1d9e0;
  --color-border-muted: #d1d9e0b3;

  /* Semantic */
  --color-success-fg: #1a7f37;
  --color-success-emphasis: #1f883d;
  --color-danger-fg: #d1242f;
  --color-danger-emphasis: #cf222e;
  --color-attention-fg: #9a6700;
  --color-accent-fg: #0969da;
  --color-accent-emphasis: #0969da;
  --color-done-fg: #8250df;

  /* Typography */
  --fontStack-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  --fontStack-mono: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;

  /* Sizing */
  --border-radius: 6px;
  --border-width: 1px;
}

body {
  font-family: var(--fontStack-sans);
  font-size: 14px;
  line-height: 1.5;
  color: var(--color-fg-default);
  background-color: var(--color-canvas-default);
}

h1 { font-size: 32px; font-weight: 600; line-height: 1.25; }
h2 { font-size: 24px; font-weight: 600; line-height: 1.25; }
h3 { font-size: 20px; font-weight: 600; line-height: 1.25; }
h4 { font-size: 16px; font-weight: 600; line-height: 1.25; }
h5 { font-size: 14px; font-weight: 600; line-height: 1.25; }
h6 { font-size: 12px; font-weight: 600; line-height: 1.25; color: var(--color-fg-muted); }

code, pre {
  font-family: var(--fontStack-mono);
  font-size: 13px;
}

a { color: var(--color-accent-fg); text-decoration: none; }
a:hover { text-decoration: underline; }
```

### Example Component Prompts
- "Create a GitHub-style page header with a 32px semibold (600) heading in #1f2328 on white (#ffffff). Add a subtitle in muted gray (#59636e) at 14px. Border-bottom: 1px solid #d1d9e0."
- "Build a card with white background, 1px solid #d1d9e0 border, 6px border-radius. Title at 20px weight 600, body at 14px weight 400 in #59636e. Padding: 16px."
- "Design a primary action button: background #1f883d, text white, padding 5px 16px, font-size 14px weight 500, border-radius 6px, hover #1c8139."
- "Create a danger alert: background #ffebe9, border 1px solid #ff818266, text #d1242f at 14px, padding 16px, border-radius 6px."
- "Build a status label pill: font-size 12px weight 600, border-radius 100vh, padding 2px 8px, background #1f883d, text white."
- "Create a code block: background #f6f8fa, font-family monospace, font-size 13px, padding 16px, border-radius 6px, border 1px solid #d1d9e0."
- "Design a floating dropdown: white background, border 1px solid #d1d9e080, border-radius 6px, box-shadow 0 8px 16px -4px #25292e14 with multiple layers."

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

## 12. Primer Authoritative Reference

Section 12 captures rules from primer.style — GitHub's official Primer documentation — that are NOT directly observable from the live site. These are the *intent* and *constraints* behind the tokens used in Sections 1–11.

Anything in Section 12 supersedes inferences in Sections 1–11 if they conflict. Primer's published docs are the source of truth for the product UI variant. Section 12 content was ingested from primer.style and paraphrased; token names and raw values are copied verbatim as factual API surface. Each subsection cites its source URL.

### 12.1 Color Usage

Primer separates color tokens into three tiers so theming stays consistent across nine themes and two color modes. Base tokens are raw values that must never be used directly in UI; functional tokens (foreground, background, border, shadow) are the primary surface for product UI; component/pattern tokens are scoped to specific behaviors (buttons, controls, focus). Color modes swap functional tokens automatically — design should never reference a base scale in a theme-aware context.

**Key rules from Primer**:
- Do not use base scale tokens (e.g. `color-scale-pink-5`) directly in code or design — they are inputs for building functional tokens.
- Neutral scales run 0–13 in both light and dark; the two scales are inverted so the same functional tokens work across modes without overrides.
- Steps 0–6 of the neutral scale are backgrounds, 7–8 are borders/dividers, 9–10 are text/icons. `bgColor-default` and `bgColor-muted` are the two default backgrounds, and all contrast ratios are calculated against `bgColor-muted` so both defaults work safely.
- High contrast themes shift the scale: backgrounds 2–7, borders 10, text 11–13. Target 7:1 contrast for text and interactive elements in high contrast themes.
- Semantic colors (accent, success, attention, danger, open, closed, done, sponsors, severe, upsell) each carry a role meaning; Muted pairs `bg-*-muted` with semantic foreground for subtle emphasis, Emphasis pairs `bg-*-emphasis` with `fgColor-onEmphasis` for strong emphasis.
- When used for background emphasis, always pair with `fgColor-onEmphasis` — never with a semantic foreground.
- Border step 8 is the minimum contrast floor for interactive control borders against `bgColor-muted`.

**Semantic role assignments**:

| Role | Intended usage |
|------|----------------|
| `accent` | Links, selected/active/focus states, neutral information |
| `success` | Primary buttons, positive messaging, successful states |
| `attention` | Warnings, active processes (queued PRs, tests in progress) |
| `danger` | Destructive buttons, errors |
| `open` | Open issues, PRs, workflows |
| `closed` | Closed (not merged) issues, PRs, workflows |
| `done` | Completed and merged work |
| `sponsors` | GitHub Sponsors surface |
| `severe` | Non-blocking elevated severity (above attention, below danger) |
| `upsell` | Paid/plan upgrade surfaces |

**Source**: [primer.style/product/getting-started/foundations/color-usage](https://primer.style/product/getting-started/foundations/color-usage/)

### 12.2 Color Primitives — Foundational Tokens

This is the complete foundational color token list for the default light theme, copied as factual API surface. For dark mode values see the Primer Storybook — the token names are identical, only the resolved values differ.

**Foreground** (`--fgColor-*`):

| Token | Value |
|-------|-------|
| `--fgColor-accent` | `#0969da` |
| `--fgColor-attention` | `#9a6700` |
| `--fgColor-black` | `#1f2328` |
| `--fgColor-closed` | `#d1242f` |
| `--fgColor-danger` | `#d1242f` |
| `--fgColor-default` | `#1f2328` |
| `--fgColor-disabled` | `#818b98` |
| `--fgColor-done` | `#8250df` |
| `--fgColor-draft` | `#59636e` |
| `--fgColor-link` | `#0969da` |
| `--fgColor-muted` | `#59636e` |
| `--fgColor-neutral` | `#59636e` |
| `--fgColor-onEmphasis` | `#ffffff` |
| `--fgColor-onInverse` | `#ffffff` |
| `--fgColor-open` | `#1a7f37` |
| `--fgColor-severe` | `#bc4c00` |
| `--fgColor-sponsors` | `#bf3989` |
| `--fgColor-success` | `#1a7f37` |
| `--fgColor-upsell` | `#8250df` |
| `--fgColor-white` | `#ffffff` |

**Background** (`--bgColor-*`):

| Token | Value |
|-------|-------|
| `--bgColor-accent-emphasis` | `#0969da` |
| `--bgColor-accent-muted` | `#ddf4ff` |
| `--bgColor-attention-emphasis` | `#9a6700` |
| `--bgColor-attention-muted` | `#fff8c5` |
| `--bgColor-closed-emphasis` | `#cf222e` |
| `--bgColor-closed-muted` | `#ffebe9` |
| `--bgColor-danger-emphasis` | `#cf222e` |
| `--bgColor-danger-muted` | `#ffebe9` |
| `--bgColor-default` | `#ffffff` |
| `--bgColor-disabled` | `#eff2f5` |
| `--bgColor-done-emphasis` | `#8250df` |
| `--bgColor-done-muted` | `#fbefff` |
| `--bgColor-draft-emphasis` | `#59636e` |
| `--bgColor-draft-muted` | `#818b981f` |
| `--bgColor-emphasis` | `#25292e` |
| `--bgColor-inset` | `#f6f8fa` |
| `--bgColor-inverse` | `#25292e` |
| `--bgColor-muted` | `#f6f8fa` |
| `--bgColor-neutral-emphasis` | `#59636e` |
| `--bgColor-neutral-muted` | `#818b981f` |
| `--bgColor-open-emphasis` | `#1f883d` |
| `--bgColor-open-muted` | `#dafbe1` |
| `--bgColor-severe-emphasis` | `#bc4c00` |
| `--bgColor-severe-muted` | `#fff1e5` |
| `--bgColor-sponsors-emphasis` | `#bf3989` |
| `--bgColor-sponsors-muted` | `#ffeff7` |
| `--bgColor-success-emphasis` | `#1f883d` |
| `--bgColor-success-muted` | `#dafbe1` |
| `--bgColor-transparent` | `#ffffff00` |
| `--bgColor-upsell-emphasis` | `#8250df` |
| `--bgColor-upsell-muted` | `#fbefff` |

**Border** (`--borderColor-*`):

| Token | Value |
|-------|-------|
| `--borderColor-accent-emphasis` | `#0969da` |
| `--borderColor-accent-muted` | `#54aeff66` |
| `--borderColor-attention-emphasis` | `#9a6700` |
| `--borderColor-attention-muted` | `#d4a72c66` |
| `--borderColor-closed-emphasis` | `#cf222e` |
| `--borderColor-closed-muted` | `#ff818266` |
| `--borderColor-danger-emphasis` | `#cf222e` |
| `--borderColor-danger-muted` | `#ff818266` |
| `--borderColor-default` | `#d1d9e0` |
| `--borderColor-disabled` | `#818b981a` |
| `--borderColor-done-emphasis` | `#8250df` |
| `--borderColor-done-muted` | `#c297ff66` |
| `--borderColor-draft-emphasis` | `#59636e` |
| `--borderColor-draft-muted` | `#d1d9e0b3` |
| `--borderColor-emphasis` | `#818b98` |
| `--borderColor-muted` | `#d1d9e0b3` |
| `--borderColor-neutral-emphasis` | `#59636e` |
| `--borderColor-neutral-muted` | `#d1d9e0b3` |
| `--borderColor-open-emphasis` | `#1a7f37` |
| `--borderColor-open-muted` | `#4ac26b66` |
| `--borderColor-severe-emphasis` | `#bc4c00` |
| `--borderColor-severe-muted` | `#fb8f4466` |
| `--borderColor-sponsors-emphasis` | `#bf3989` |
| `--borderColor-sponsors-muted` | `#ff80c866` |
| `--borderColor-success-emphasis` | `#1a7f37` |
| `--borderColor-success-muted` | `#4ac26b66` |
| `--borderColor-translucent` | `#1f232826` |
| `--borderColor-transparent` | `#ffffff00` |
| `--borderColor-upsell-emphasis` | `#8250df` |
| `--borderColor-upsell-muted` | `#c297ff66` |

**Shadow** (`--shadow-*`):

| Token | Value |
|-------|-------|
| `--shadow-resting-xsmall` | `0 1px 1px 0 #1f23280d` |
| `--shadow-resting-small` | `0 1px 1px 0 #1f23280a, 0 1px 2px 0 #1f232808` |
| `--shadow-resting-medium` | `0 1px 1px 0 #25292e1a, 0 3px 6px 0 #25292e1f` |
| `--shadow-floating-small` | `0 0 0 1px #d1d9e080, 0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f` |
| `--shadow-floating-medium` | multi-layer 4-drop shadow (see Storybook) |
| `--shadow-floating-large` | `0 0 0 1px #d1d9e000, 0 40px 80px 0 #25292e3d` |
| `--shadow-floating-xlarge` | `0 0 0 1px #d1d9e000, 0 56px 112px 0 #25292e52` |
| `--shadow-floating-legacy` | `0 6px 12px -3px #25292e0a, 0 6px 18px 0 #25292e1f` |
| `--shadow-inset` | `inset 0 1px 0 0 #1f23280a` |

**Focus & Overlay**:

| Token | Value |
|-------|-------|
| `--focus-outlineColor` | `#0969da` |
| `--overlay-backdrop-bgColor` | `#c8d1da66` |
| `--overlay-bgColor` | `#ffffff` |
| `--overlay-borderColor` | `#d1d9e080` |

**Source**: [primer.style/product/primitives/color](https://primer.style/product/primitives/color/)

### 12.3 Color Primitives — Data Visualization

Data viz colors are a separate palette from interactive UI colors. They come in 15 hue families, each with `emphasis` (saturated) and `muted` (pale) variants. These are NOT the same as the semantic roles in §12.1 — they are specifically tuned for adjacent color differentiation in charts.

| Token | Value | Token | Value |
|-------|-------|-------|-------|
| `--data-auburn-color-emphasis` | `#9d615c` | `--data-auburn-color-muted` | `#f2e9e9` |
| `--data-blue-color-emphasis` | `#006edb` | `--data-blue-color-muted` | `#d1f0ff` |
| `--data-brown-color-emphasis` | `#856d4c` | `--data-brown-color-muted` | `#eeeae2` |
| `--data-coral-color-emphasis` | `#d43511` | `--data-coral-color-muted` | `#ffe5db` |
| `--data-gray-color-emphasis` | `#808fa3` | `--data-gray-color-muted` | `#e8ecf2` |
| `--data-green-color-emphasis` | `#30a147` | `--data-green-color-muted` | `#caf7ca` |
| `--data-lemon-color-emphasis` | `#866e04` | `--data-lemon-color-muted` | `#f7eea1` |
| `--data-lime-color-emphasis` | `#527a29` | `--data-lime-color-muted` | `#e3f2b5` |
| `--data-olive-color-emphasis` | `#64762d` | `--data-olive-color-muted` | `#f0f0ad` |
| `--data-orange-color-emphasis` | `#eb670f` | `--data-orange-color-muted` | `#ffe7d1` |
| `--data-pine-color-emphasis` | `#167e53` | `--data-pine-color-muted` | `#bff8db` |
| `--data-pink-color-emphasis` | `#ce2c85` | `--data-pink-color-muted` | `#ffe5f1` |
| `--data-plum-color-emphasis` | `#a830e8` | `--data-plum-color-muted` | `#f8e5ff` |
| `--data-purple-color-emphasis` | `#894ceb` | `--data-purple-color-muted` | `#f1e5ff` |
| `--data-red-color-emphasis` | `#df0c24` | `--data-red-color-muted` | `#ffe2e0` |
| `--data-teal-color-emphasis` | `#179b9b` | `--data-teal-color-muted` | `#c7f5ef` |
| `--data-yellow-color-emphasis` | `#b88700` | `--data-yellow-color-muted` | `#ffec9e` |

**Source**: [primer.style/product/primitives/color](https://primer.style/product/primitives/color/)

### 12.4 Typography Foundation

Primer's typography philosophy is built around readable, scannable long-form product UI — not marketing display. The scale is declared via opinionated shorthand tokens that set `font-weight`, `font-size`, `font-family`, and `line-height` in a single CSS declaration. All sizes use `rem` so browser zoom and user font-size preferences work correctly. Line heights are unitless and chosen so the resulting box height snaps to the 4px grid.

**Key rules from Primer**:
- Hierarchy should be driven by size/weight/structure, not color — color should not be the primary method of emphasis in GitHub product UI.
- Keep line length around 80 characters or less for readable prose.
- Default to left-aligned ragged-right text; justifying, centering, or right-aligning is atypical for GitHub product surfaces.
- Use the weight CSS variables (`--base-text-weight-*`) for font-weight; never use arbitrary numeric weight values.
- Use semantic heading tags (`<h1>`…`<h6>`) in correct document order; never reorder heading levels just to hit a visual target — use style classes on top of correct semantics instead.
- Prefer the shorthand tokens (e.g. `--text-body-shorthand-medium`) over composing font declarations from individual weight/size/lineHeight tokens.

**Source**: [primer.style/product/getting-started/foundations/typography](https://primer.style/product/getting-started/foundations/typography/)

### 12.5 Typography Primitives

Primer's product UI stack does NOT reference Mona Sans or the brand marketing typefaces — product UI uses `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` as the system sans stack. This is a deliberate choice: product UI prioritizes native rendering performance and platform consistency over custom-font branding.

**Font stacks**:

| Token | Stack |
|-------|-------|
| `--fontStack-system` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'` |
| `--fontStack-sansSerif` | same as system |
| `--fontStack-sansSerifDisplay` | same as system (display role is handled via weight/size, not a separate face in product UI) |
| `--fontStack-monospace` | `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace` |

**Complete text role scale**:

| Role | Size | Weight | Line height | Shorthand token |
|------|------|--------|-------------|-----------------|
| Display | 2.5rem (40px) | 500 | 1.375 | `--text-display-shorthand` |
| Title large | 2rem (32px) | 600 | 1.5 | `--text-title-shorthand-large` |
| Title medium | 1.25rem (20px) | 600 | 1.625 | `--text-title-shorthand-medium` |
| Title small | 1rem (16px) | 600 | 1.5 | `--text-title-shorthand-small` |
| Subtitle | 1.25rem (20px) | 400 | 1.625 | `--text-subtitle-shorthand` |
| Body large | 1rem (16px) | 400 | 1.5 | `--text-body-shorthand-large` |
| Body medium | 0.875rem (14px) | 400 | 1.5 | `--text-body-shorthand-medium` |
| Body small | 0.75rem (12px) | 400 | 1.625 | `--text-body-shorthand-small` |
| Caption | 0.75rem (12px) | 400 | 1.25 | `--text-caption-shorthand` |
| Code block | 0.8125rem (13px) | 400 | 1.5 | `--text-codeBlock-shorthand` |
| Inline code | 0.9285em | 400 | inherit | `--text-codeInline-shorthand` |

**Base primitives**:

| Weight token | Value | Size token | Value | Line height token | Value |
|-------|-------|-------|-------|-------|-------|
| `--base-text-weight-light` | 300 | `--base-text-size-xs` | 0.75rem | `--base-text-lineHeight-tight` | 1.25 |
| `--base-text-weight-normal` | 400 | `--base-text-size-sm` | 0.875rem | `--base-text-lineHeight-snug` | 1.375 |
| `--base-text-weight-medium` | 500 | `--base-text-size-md` | 1rem | `--base-text-lineHeight-normal` | 1.5 |
| `--base-text-weight-semibold` | 600 | `--base-text-size-lg` | 1.25rem | `--base-text-lineHeight-relaxed` | 1.625 |
| | | `--base-text-size-xl` | 2rem | `--base-text-lineHeight-loose` | 1.75 |
| | | `--base-text-size-2xl` | 2.5rem | | |

Note: Title small uses `fontStack-sansSerif` (not display), implying GitHub doesn't differentiate display vs text fonts at 16px. Mona Sans belongs to the Brand UI / marketing variant, not product UI.

**Source**: [primer.style/product/primitives/typography](https://primer.style/product/primitives/typography/)

### 12.6 Size Primitives

Primer's size system is organized around a 4px base grid. The `--base-size-*` tokens expose every multiple of 4 from 2 to 128 (with 2px and 6px filler for tight UI), plus negative mirrors for overlap/bleed. Semantic groupings layer on top: `--stack-*` for layout gaps and padding, `--controlStack-*` for form control spacing, `--control-*` for sizing individual controls, `--overlay-*` for popovers and dialogs.

**Base scale** (selected, positive half — negative mirrors exist for all):

| Token | Value (rem) | Value (px) |
|-------|-------------|------------|
| `--base-size-2` | 0.125 | 2 |
| `--base-size-4` | 0.25 | 4 |
| `--base-size-6` | 0.375 | 6 |
| `--base-size-8` | 0.5 | 8 |
| `--base-size-12` | 0.75 | 12 |
| `--base-size-16` | 1 | 16 |
| `--base-size-20` | 1.25 | 20 |
| `--base-size-24` | 1.5 | 24 |
| `--base-size-28` | 1.75 | 28 |
| `--base-size-32` | 2 | 32 |
| `--base-size-36` | 2.25 | 36 |
| `--base-size-40` | 2.5 | 40 |
| `--base-size-44` | 2.75 | 44 |
| `--base-size-48` | 3 | 48 |
| `--base-size-64` | 4 | 64 |
| `--base-size-80` | 5 | 80 |
| `--base-size-96` | 6 | 96 |
| `--base-size-112` | 7 | 112 |
| `--base-size-128` | 8 | 128 |

**Border width / outline / focus**:

| Token | Value | Role |
|-------|-------|------|
| `--borderWidth-thin` | 0.0625rem (1px) | Default stroke |
| `--borderWidth-default` | 0.0625rem (1px) | Alias for thin |
| `--borderWidth-thick` | 0.125rem (2px) | Emphasis border |
| `--borderWidth-thicker` | 0.25rem (4px) | Strong/indicator border |
| `--outline-focus-width` | 0.125rem (2px) | Focus ring thickness |
| `--outline-focus-offset` | -0.125rem (-2px) | Focus ring offset (inset) |

**Breakpoints**:

| Token | Value (rem) | Value (px) |
|-------|-------------|------------|
| `--breakpoint-xsmall` | 20rem | 320 |
| `--breakpoint-small` | 34rem | 544 |
| `--breakpoint-medium` | 48rem | 768 |
| `--breakpoint-large` | 63.25rem | 1012 |
| `--breakpoint-xlarge` | 80rem | 1280 |
| `--breakpoint-xxlarge` | 87.5rem | 1400 |

**Stack** (layout container gap and padding):

| Token | Value | Role |
|-------|-------|------|
| `--stack-gap-condensed` | 0.5rem (8px) | Tight vertical stacks |
| `--stack-gap-normal` | 1rem (16px) | Default vertical stacks |
| `--stack-gap-spacious` | 1.5rem (24px) | Loose vertical stacks |
| `--stack-padding-condensed` | 0.5rem (8px) | Tight container padding |
| `--stack-padding-normal` | 1rem (16px) | Default container padding |
| `--stack-padding-spacious` | 1.5rem (24px) | Loose container padding |

**Control stack** (spacing between form controls):

| Token | Value |
|-------|-------|
| `--controlStack-large-gap-auto` / `-condensed` | 0.5rem (8px) |
| `--controlStack-large-gap-spacious` | 0.75rem (12px) |
| `--controlStack-medium-gap-auto` / `-condensed` | 0.5rem (8px) |
| `--controlStack-medium-gap-spacious` | 0.75rem (12px) |
| `--controlStack-small-gap-auto` / `-condensed` | 0.5rem (8px) |
| `--controlStack-small-gap-spacious` | 1rem (16px) |

**Overlay** (popovers, dialogs, menus):

| Token | Value |
|-------|-------|
| `--overlay-borderRadius` | 0.375rem (6px) |
| `--overlay-offset` | 0.25rem (4px) |
| `--overlay-width-xsmall` | 12rem (192px) |
| `--overlay-width-small` | 20rem (320px) |
| `--overlay-width-medium` | 30rem (480px) |
| `--overlay-width-large` | 40rem (640px) |
| `--overlay-width-xlarge` | 60rem (960px) |
| `--overlay-height-small` | 16rem (256px) |
| `--overlay-height-medium` | 20rem (320px) |
| `--overlay-height-large` | 27rem (432px) |
| `--overlay-height-xlarge` | 37.5rem (600px) |
| `--overlay-padding-condensed` | 0.5rem (8px) |
| `--overlay-padding-normal` | 1rem (16px) |
| `--overlay-paddingBlock-condensed` | 0.25rem (4px) |
| `--overlay-paddingBlock-normal` | 0.75rem (12px) |

**Source**: [primer.style/product/primitives/size](https://primer.style/product/primitives/size/)

### 12.7 Layout System

Primer layouts are organized around a small set of page types and a two-level responsive abstraction. High-level structure uses "viewport ranges" (narrow / regular / wide), which map to common column-count scenarios; fine-grained tuning uses the breakpoint tokens from §12.6 directly. The goal is a focused, uncluttered reading experience — layout is a transparent frame around content, never a decorative object.

**Key rules from Primer**:
- A page should enable the user to focus on content. Respect attention — keep the frame quiet.
- Multi-column layouts must degrade cleanly to single-column at narrow viewports, without loss of functionality.
- Leverage existing GitHub and web conventions rather than inventing novel patterns.
- App header is NEVER fixed to the top of the viewport — it scrolls with the page.
- Context region shows hierarchical position (`:owner` or `:owner / :repository`) but is NOT a full breadcrumb. Never include interactive controls (dropdowns, menus) inside it.
- Full page layouts cap content width at xlarge (1280px) so text lines don't become too long.
- Split page layouts (list + detail) ALWAYS flush the pane to the left — right-flushed panes conflict with the page scrollbar.
- Interstitial pages (sign-in, verification, loading) cap at xsmall (320px) max width.
- App footer belongs on all core pages except data-heavy interactive experiences, which may opt out.

**Viewport ranges**:

| Range | Width | Columns | Role |
|-------|-------|---------|------|
| narrow | < 768px | 1 | Single-column mobile |
| regular | ≥ 768px | up to 2 | All desktop patterns start here |
| wide | ≥ 1400px | up to 3 | Optional third column |

**Content/pane padding per breakpoint**:

| Breakpoint | Content padding | Pane padding |
|-----------|-----------------|--------------|
| xsmall / small / medium / large | 16px | 16px |
| xlarge / xxlarge | 24px | 16px |

Padding is applied inside the content/pane element, so at xlarge the effective readable content width is 1280 − 48 = 1232px.

**Responsive adaptations for narrow viewports**:
- Split list-detail views into separate pages with drill-in and back navigation.
- Convert auxiliary panes to bottom sheets when they carry metadata/details/actions.
- Stack content pane vertically only when the pane is an overview — do NOT stack a nav-heavy pane above main content (it pushes the content far down the page).

**Source**: [primer.style/product/getting-started/foundations/layout](https://primer.style/product/getting-started/foundations/layout/)

### 12.8 Responsive Behavior

Being responsive at GitHub means more than adapting column layout — it means adapting to form factor, device capability, and user preference simultaneously. Primer treats responsive design as an accessibility requirement, not an aesthetic preference.

**Key rules from Primer**:
- Minimum supported viewport: 320px wide × 256px tall. This is the contract for users who zoom browsers to 400% on 1280px screens (a WCAG 1.4.4 / 1.4.10 requirement).
- Performance is part of responsiveness — a page is not shipped until it is fast on low-power devices and slow connections.
- Don't rely on pointing-device media queries (`pointer: coarse` / `fine`). Many devices mix input modes and browsers misreport them.
- Minimum interactive target at AA is 24px (WCAG 2.5.8 minimum). Aim for AAA's 44px on mobile where possible. A 32px medium button passes AA but not AAA — use the large size on mobile rather than padding a too-small visible button.
- Never override user preferences by default: `prefers-color-scheme`, `prefers-contrast`, `prefers-reduced-motion`, `forced-colors`, and `inverted-colors` should all flow through.
- Features that rely on hover (tooltips, hovercards) must have a non-hover equivalent path to the same information.
- Use `rem` units for all text sizing so browser font-size preference scales the UI correctly.

**User preference media features Primer respects**:

| Feature | Behavior |
|---------|----------|
| `prefers-color-scheme` | Sets default light/dark theme for logged-out users |
| `prefers-contrast` | Signals need for high-contrast variant |
| `prefers-reduced-motion` | Disable or tone down animation |
| `forced-colors` | OS-driven color substitution — don't override |
| `inverted-colors` | Inverted OS mode |

**Source**: [primer.style/product/getting-started/foundations/responsive](https://primer.style/product/getting-started/foundations/responsive/)

### 12.9 Icons — Octicons Foundations

Octicons are implemented as inline `<svg>` elements. The default assumption is that an icon is decorative and must be hidden from assistive tech; contentful icons require explicit ARIA wiring. This "decorative by default" posture reduces the risk that redundant icons pollute screen reader output.

**Key rules from Primer**:
- Every decorative `<svg>` MUST set `aria-hidden="true"` and `focusable="false"`.
- Contentful standalone icons use `role="img"`, `focusable="false"`, and a `<title>` child element that names the icon.
- When an icon is the sole child of an interactive element (a button), put the accessible name in a nested `<title>` — this puts the name in the actual DOM text tree, so keyboard and AT text navigation work.
- Icon components must accept a `size` prop (`small` / `medium` / `large`), a naming prop (`name` or `label`), and any valid `<svg>` attribute. They must NOT accept `tabIndex`.
- Default fill is `currentColor` — icons inherit foreground color via CSS cascade.

**Decorative SVG markup pattern**:
```html
<svg aria-hidden="true" focusable="false"><!-- ... --></svg>
```

**Contentful SVG markup pattern**:
```html
<svg role="img" focusable="false">
  <title>Short concise description</title>
  <path d="..." />
</svg>
```

**Source**: [primer.style/product/getting-started/foundations/icons](https://primer.style/product/getting-started/foundations/icons/)

### 12.10 Accessibility — Color Considerations

GitHub commits to WCAG 2.2 AA compliance (Success Criterion levels A and AA). High-contrast themes aim higher, and the system explicitly rejects APCA as a substitute for WCAG until APCA is incorporated into WCAG 3.0. The default Day and Night themes MUST independently pass WCAG color criteria because logged-out users can't change them.

**Key rules from Primer**:
- Normative compliance is measured on the actual computed color values, not the design intent. A dark-purple background is a non-normative choice; its contrast against text is normative.
- Use WebAIM's Contrast Checker as the canonical tool. APCA results are informational only.
- Never encode state with color alone. Color must be accompanied by text, an icon, a shape, or a pattern.
- Chart series must be distinguishable by pattern, marker, or stroke style — not just hue.
- Default Day and Night themes are the accessibility baseline. Sub-themes (e.g. Dark Dimmed, Light High Contrast) may diverge: intentionally low-contrast themes don't have to meet WCAG because users opted in.
- High contrast themes aim for 7:1 text contrast (§12.1). Light High Contrast and Dark High Contrast are GitHub-provided; OS high-contrast mode and forced-colors mode are separate signals GitHub does not auto-map to its themes.
- Forced-colors mode (`@media (forced-colors: active)`) overrides the site palette — do not counteract it with custom color overrides for aesthetic reasons.

**WCAG thresholds used by Primer**:

| Target | Minimum contrast | Source |
|--------|------------------|--------|
| Body text (AA) | 4.5:1 | WCAG SC 1.4.3 |
| Large text (AA, ≥18pt or 14pt bold) | 3:1 | WCAG SC 1.4.3 |
| UI component boundaries + graphical objects (AA) | 3:1 | WCAG SC 1.4.11 |
| High-contrast themes target | 7:1 | GitHub internal |
| Icon against its background | ≥ 3:1 | §12.12 |

**Source**: [primer.style/accessibility/design-guidance/color-considerations](https://primer.style/accessibility/design-guidance/color-considerations/)

### 12.11 Accessibility — Focus Management

Focus is how keyboard and screen reader users orient themselves. Every interactive element must show a visible focus indicator, tab order must follow reading order, and custom components must replicate the browser-default focus behavior programmatically.

**Key rules from Primer**:
- Every interactive element (button, link, form control) MUST be reachable with `Tab` and `Shift+Tab` and show a visible focus indicator.
- Tab order MUST follow logical document order. No skipping forward/backward based on visual position.
- When a dynamic event happens (item deleted, item added, page refresh, modal open, modal close) focus must be managed programmatically — it should never be "lost" on the page.
- Modals MUST trap focus until dismissed. Closing a modal returns focus to the element that opened it.
- Never remove `:focus` outline without replacing it with another visible indicator. Use `:focus-visible` if the goal is to hide the outline for mouse users only.
- The focus indicator itself must meet color contrast against both the background and the focused element. Check high-contrast mode, dark mode, and light mode.
- Designers must annotate focus behavior for every state transition in their designs.

**Focus token summary** (ties to §12.6):

| Token | Value | Role |
|-------|-------|------|
| `--focus-outlineColor` | `#0969da` | Focus ring color |
| `--outline-focus-width` | 2px | Focus ring thickness |
| `--outline-focus-offset` | -2px | Offset from element edge (inset) |

**Source**: [primer.style/accessibility/design-guidance/focus-management](https://primer.style/accessibility/design-guidance/focus-management/)

### 12.12 Forms

Form patterns exist to minimize effort and cognitive load. A FormControl has five parts: Label (required), Required indicator, Input (required), Caption, Validation message. Primer is opinionated about label and placeholder usage, field ordering, and validation copy.

**Key rules from Primer**:
- Label is required on every FormControl. Write labels in sentence case, aim for ≤3 words (e.g. "Repository name", "Payment method").
- Placeholder text is NEVER a substitute for a label — it vanishes on input, its color is typically too light for AA contrast, and screen readers don't announce it as a label.
- Required fields must be visually marked AND set as required in code (parity across sighted and AT users). Exception: forms where every field is implicitly required (login forms) may omit the marker.
- Individual checkboxes or radios cannot be marked as required individually. Required status applies to the group.
- Individual checkboxes or radios do NOT get their own validation message — show one group-level validation message.
- Caption provides supplementary help; if the caption only repeats info present elsewhere, remove it.
- Captions may be hidden when a validation message is shown (if they'd be redundant). Never show both a repetitive caption and a validation message.
- Never repeat caption text inside error message copy.
- Default to vertically stacked fields. Only use multi-column layouts when the data itself is inherently parallel — NEVER collapse into columns just to reduce vertical height.
- Order fields by importance; keep related fields adjacent; cluster keyboard-input fields together so mouse users don't have to switch modes repeatedly.
- Size inputs to hint at the length of their expected value (e.g. ZIP code inputs should be narrow, not full-width).
- Autocomplete should be used when the input accepts a finite or bounded set of values.
- Use a finite selectable-options control (Select, RadioGroup, CheckboxGroup) whenever there's a known list of possible values.

**Source**: [primer.style/product/ui-patterns/forms](https://primer.style/product/ui-patterns/forms/)

### 12.13 Data Visualization

Charts must be readable without relying on color alone and must meet WCAG contrast thresholds that are explicitly codified in the Primer guidelines.

**Key rules from Primer**:
- Every chart has a required Header, Marks, Axis, Axis Labels, Graph Lines, and Tooltip. Subheader and Legend are conditional.
- Legend is required whenever a chart shows more than one data series, unless the series are directly labeled inline.
- Axis labels must hit 4.5:1 contrast against the background.
- Axes themselves must hit 3:1 contrast against the background — use `--borderColor-default`.
- Graph lines (reference grid lines) are exempt from graphical contrast requirements.
- Mark lines (line charts, stacked area) must be 2px wide.
- The first line in a chart is always solid; subsequent lines MUST use different stroke styles so they remain distinguishable without color. If markers are used, they must differ per series, starting with a circle.
- Currently supported chart types: bar, line, area, progress bars. Donut charts and sparklines are NOT currently supported as new patterns.
- Axis labels must be understandable in isolation (a screen-reader user should not need to remember the chart title to parse the axis).

See §12.3 for the data viz color palette tokens — they are separate from the semantic interactive palette and are paired (emphasis + muted) per hue for legend and stack use.

**Source**: [primer.style/product/ui-patterns/data-visualization](https://primer.style/product/ui-patterns/data-visualization/)

### 12.14 Octicons — Design and Usage Rules

Octicons are handcrafted at fixed grids; they are not a vector font and should not be resized freely. Two size variants (16px, 24px) are always hand-tuned; a 12px variant exists for specific condensed contexts only.

**Design rules** (for creators of new icons):
- Always draw two grids: 16×16 and 24×24. 12×12 exists only when 16 is impossible.
- Stroke width is a fixed 1.5px at both 16 and 24 grids.
- Use round caps and round joins.
- Corner radius: 1px default; 0.25px for small filled details (e.g. arrowheads); larger only when it makes the icon recognizable (e.g. repo).
- Separate overlapping objects with a 1px gap; place modifier elements (slashes, arrows) with a 1.5px gap to the main shape.
- 2D perspective only — don't add depth unless depth is what makes the icon recognizable.
- Align outer edges of shapes to pixel boundaries. Do not align inner edges instead.
- Use line arrowheads by default; use filled arrowheads only when line arrowheads don't fit.

**Usage rules** (for designers consuming icons):
- Prefer icons as supplements to text rather than replacements.
- Maintain original size — never rescale an Octicon. Pick from 12 / 16 / 24.
- Use functional foreground tokens for icon color. Context colors are pre-wired in many components (Banners auto-color their icon to match the role).
- Emoji are the user-selectable icon set; Octicons must NOT be used for user-selectable labels (a user labeling something "In progress" with `issue-closed` would mislead).
- Every icon must meet 3:1 contrast against its background.
- Use predefined stateful pairs rather than inventing new ones.

**Predefined icon → color assignments**:

| Icon | Color token | Meaning |
|------|-------------|---------|
| `info` | `fg.accent` | Neutral/important information |
| `check` | `fg.success` | Success/passing |
| `x` | `fg.danger` | Error/failure |
| `alert` | `fg.attention` | Warning |
| `git-commit` | `fg.muted` | Commits |
| `issue-opened` | `fg.success` | New opened issue |
| `issue-closed` | `fg.done` | Closed/completed issue |
| `issue-reopened` | `fg.success` | Reopened issue |
| `issue-draft` | `fg.muted` | Draft issue |
| `git-pull-request` | `fg.success` | Open PR awaiting review |
| `git-pull-request-closed` | `fg.danger` | Closed (unmerged) PR |
| `git-pull-request-draft` | `fg.muted` | Draft PR |
| `git-merge` | `fg.done` | Merged PR |
| `repo` | `fg.muted` | Public repo |
| `repo-locked` | `fg.attention` | Private repo |
| `mark-github` / `logo-github` | `fg.default` | Branding |

**12px icon whitelist** (only use these at 12px):

| Icon | Role |
|------|------|
| `alert-fill` | Caution/attention required |
| `check-circle-fill` | Positive success |
| `no-entry-fill` | Blocked / cannot continue |
| `x-circle-fill` | Error / unavailable action |
| `chevron-down` | Open collapsible |
| `chevron-right` | Closed collapsible |

**Predefined state pairs**:

| On | Off | Usage |
|----|-----|-------|
| `heart-fill` | `heart` | Sponsoring / Sponsor |
| `star-fill` | `star` | Unstar / Star |
| `check-circle` | `x-circle-fill` | Pass / Fail |
| `file-directory-open-fill` | `file-directory-fill` | Open / Closed directory |
| `bell` | `bell-slash` | Subscribe / Unsubscribe |
| `bookmark` | `bookmark-slash` | Save / Unsave |
| `eye` | `eye-closed` | Watch / Unwatch |
| `cloud` | `cloud-offline` | Online / Offline |

**Source**: [primer.style/octicons](https://primer.style/octicons/) · [design-guidelines](https://primer.style/octicons/design-guidelines/) · [usage-guidelines](https://primer.style/octicons/usage-guidelines/)

---

## 13. §12 落地状态 — Preview 强制执行清单

Section 12 的权威规则不是文档摆设 —— 已编译进三个 GitHub preview 文件的 CSS。下表记录哪条规则被哪个文件强制执行，方便 reviewer 验证。

| 规则 | 来源 | preview.html | preview-copilot.html | preview-enterprise.html |
|------|------|:---:|:---:|:---:|
| §12.5 系统字体栈（产品 UI）| primer.style/typography | n/a* | n/a* | n/a* |
| §12.8 24px 最小目标尺寸 | foundations/responsive | ✅ | ✅ | ✅ |
| §12.10 WCAG 2.2 AA 对比度 | accessibility/color | ✅ | ✅ | ✅ |
| §12.10 forced-colors 模式支持 | accessibility/color | ✅ | ✅ | ✅ |
| §12.11 焦点指示器（2px solid + 2-3px offset）| accessibility/focus | ✅ | ✅ | ✅ |
| §12.11 `:focus / :focus-visible` 分离 | accessibility/focus | ✅ | ✅ | ✅ |
| `prefers-reduced-motion` 降级 | §11.4 + §10.4 | ✅ | ✅ | ✅ |
| `cursor: pointer` 全可点击元素 | §11.2 | ✅ | ✅ | ✅ |
| `srcset` 1x/2x retina 图 | §11.3 | ✅ | ✅ | ✅ |

\* §12.5 规定**产品 UI** 用系统字体栈；这三个 preview 都是 **Primer Brand 营销页**，按 §10.2 用 Mona Sans VF 是正确的。如果未来加产品 UI demo（dashboard/repo 视图）的 preview，需要强制系统栈。

### 验收命令

```bash
# §12.8 audit — list standalone clickables below 24px (target: 0)
rtk proxy npx agent-browser goto "file://$PWD/github/preview.html"
rtk proxy npx agent-browser eval "
Array.from(document.querySelectorAll('nav a, header a, footer a, .btn, button[type], [role=button]'))
  .filter(e => { const r=e.getBoundingClientRect(); return r.height>0 && r.height<24; }).length
"

# §12.11 audit — verify visible focus on first .btn
rtk proxy npx agent-browser eval "
document.querySelector('.btn').focus();
getComputedStyle(document.querySelector('.btn')).outline
"
# expected: 'rgb(95, 237, 131) solid 2px' or similar non-empty

# §11.2 audit — clickable surfaces with default cursor (target: 0)
rtk proxy npx agent-browser eval "
Array.from(document.querySelectorAll('.pillar-card, .price-card, .feature-card, .accordion-trigger, .faq-trigger'))
  .filter(e => getComputedStyle(e).cursor !== 'pointer').length
"
```

### 编译时注入的 CSS 块

每个 preview 的 `<style>` 末尾附有一段 `/* PRIMER §12 COMPLIANCE */` 注释块，集中实现：

- `:focus-visible` 全局焦点环（霓虹绿，2px solid，2-3px offset）
- 独立可点击元素 `min-height: 24px`（段落内 inline 链接按 WCAG 2.5.5 豁免）
- 卡片类 clickables 提升到 `min-height: 44px`（AAA 级）
- `@media (forced-colors: active)` 系统色覆盖（卡片用 `CanvasText` 边框、focus 用 `Highlight`）

修改对应 `:root` token 时这些规则自动跟随；不需要手工同步。
