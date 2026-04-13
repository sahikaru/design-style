# Design System: GitHub Primer

## 1. Visual Theme & Atmosphere

GitHub Primer is a design system built for developer tools — clean, functional, and information-dense. Where consumer products emphasize delight and emotion, Primer prioritizes **scanability, clarity, and efficient reading**. The interface feels like a well-organized code editor: every element earns its space, typography is optimized for long reading sessions, and color is used semantically rather than decoratively.

The foundation is a crisp white canvas (`#ffffff`) with a subtle cool-gray inset surface (`#f6f8fa`) for secondary areas. The overall tone is cool and neutral — blue-gray undertones throughout, with accent blue (`#0969da`) as the primary interactive color. This is the visual language of a tool you spend 8 hours a day in: zero visual fatigue, maximum information density, and a color system that communicates status (success, danger, warning) before anything decorative.

Primer uses the "Mona Sans" variable font family — GitHub's custom sans-serif — as its primary typeface, with a full monospace stack for code. There are no serifs anywhere. Typography is compact and utilitarian: tight line-heights for headings, comfortable reading heights for body, and a deliberate decision to establish hierarchy through **size and weight** rather than color or decoration.

**Key Characteristics:**
- Clean white canvas (`#ffffff`) with cool gray inset (`#f6f8fa`)
- Blue accent (`#0969da`) as primary interactive/link color
- Mona Sans variable font family — GitHub's custom sans-serif
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
| **Sans-serif (primary)** | `"Mona Sans VF", -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` |
| **Monospace** | `ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace` |
| **System** | Same as sans-serif |
| **Display** | Same as sans-serif |

*Note: "Mona Sans VF" is GitHub's custom variable font. For external use, the system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI"`) provides the closest match.*

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
- Use the Mona Sans / system font stack — no serifs in the product UI
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
