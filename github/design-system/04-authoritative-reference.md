# 04 · Authoritative Reference

> Sections 12-13 from the legacy `design-system.md`.
> 这是 Primer 官方文档摘要 + token 完整列表 + 落地执行清单。
> 用作日常开发的查询字典——不必从头读，按需 search。
>
> ⚠️ 本文件 38K，超 25K Read 限制。**用 Read offset/limit 跳读**，或用 Bash grep 直接搜需要的 token / section。

## 目录（按行号）

| Section | 主题 | 行号 |
|---|---|---|
| 12.1 | Color Usage | ~L40 |
| 12.2 | Color Primitives — Foundational Tokens | ~L70 |
| 12.3 | Color Primitives — Data Visualization | ~L195 |
| 12.4 | Typography Foundation | ~L221 |
| 12.5 | Typography Primitives（含 Mona Sans 权威说明）| ~L235 |
| 12.6 | Size Primitives | ~L279 |
| 12.7 | Layout System | ~L373 |
| 12.8 | Responsive Behavior | ~L412 |
| 12.9 | Icons — Octicons Foundations | ~L437 |
| 12.10 | Accessibility — Color | ~L463 |
| 12.11 | Accessibility — Focus | ~L488 |
| 12.12 | Forms | ~L511 |
| 12.13 | Data Visualization | ~L532 |
| 12.14 | Octicons — Design Rules | ~L551 |
| 13 | §12 落地状态 — Preview 强制执行清单 | ~L622 |

跳读示例：要查 12.5 typography → `Read offset=235 limit=45`。
（行号是「约」，因 TOC 本身占了行数；用 Bash grep `^### 12\.5` 拿确切行号。）

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
