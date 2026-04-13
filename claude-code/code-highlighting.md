# Code Highlighting Reference

> Aligned with Claude design system — Catppuccin Mocha for code blocks

This file contains the unified syntax highlighting color scheme and HTML patterns for code blocks and tree diagrams. All code blocks use Catppuccin Mocha regardless of the page's light/dark section context.

---

## Code Block System — Catppuccin Mocha Palette

Used in all `.code-block` elements across both light and dark page sections.

### Color Map

| Token | CSS Class | Color | Hex |
|-------|-----------|-------|-----|
| Default text | — | Lavender gray | `#CDD6F4` |
| Comment | `.cmt` | Gray (italic) | `#6C7086` |
| Keyword | `.kw` | Purple | `#CBA6F7` |
| String | `.str` | Green | `#A6E3A1` |
| Function | `.fn` | Blue | `#89B4FA` |
| Number | `.num` | Peach | `#FAB387` |
| Variable | `.var` | Pink | `#F38BA8` |
| Type | `.type` | Yellow | `#F9E2AF` |
| Operator | `.op` | Sky | `#89DCEB` |

### CSS Rules

```css
.code-block {
  background: #1E1E2E;      /* Catppuccin base */
  border-radius: 12px;
  margin: 24px 0;
  overflow: hidden;
}
.code-header {
  background: #181825;      /* Catppuccin mantle */
  padding: 9px 18px;
  font-size: 13px;
  font-weight: 600;
  color: #7F849C;           /* Catppuccin overlay0 */
  border-bottom: 1px solid #313244;  /* Catppuccin surface0 */
  display: flex;
  justify-content: space-between;
}
.code-block pre {
  padding: 18px;
  overflow-x: auto;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 13px;
  line-height: 1.7;
  color: #CDD6F4;           /* Catppuccin text */
}
.kw   { color: #CBA6F7; }   /* mauve */
.str  { color: #A6E3A1; }   /* green */
.cmt  { color: #6C7086; font-style: italic; }  /* overlay0 */
.fn   { color: #89B4FA; }   /* blue */
.num  { color: #FAB387; }   /* peach */
.var  { color: #F38BA8; }   /* red/pink */
.type { color: #F9E2AF; }   /* yellow */
.op   { color: #89DCEB; }   /* sky */
```

### HTML Pattern

```html
<div class="code-block">
  <div class="code-header">
    <span>config.ts</span>
    <span>TypeScript</span>
  </div>
  <pre><span class="cmt">// 配置文件</span>
<span class="kw">interface</span> <span class="type">Config</span> {
  <span class="var">port</span>: <span class="type">number</span>;
  <span class="var">name</span>: <span class="type">string</span>;
}

<span class="kw">export const</span> <span class="var">config</span>: <span class="type">Config</span> <span class="op">=</span> {
  <span class="var">port</span>: <span class="num">3000</span>,
  <span class="var">name</span>: <span class="str">"my-app"</span>
};</pre>
</div>
```

---

## Inline Code

### Light Sections

Inline code on light background sections inherits the body text color with a subtle tint:

```css
code {
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 0.9em;
  background: rgba(0, 0, 0, 0.04);
  padding: 2px 6px;
  border-radius: 4px;
  /* inherits body color — no explicit color override */
}
```

### Dark Sections (`.dark`)

Inline code on dark background sections uses terracotta tones:

```css
.dark code {
  background: rgba(201, 100, 66, 0.12);
  color: #d97757;
}
```

---

## Tree Diagrams — Catppuccin Mocha

Unified tree diagram style using Catppuccin Mocha colors on `#1E1E2E` background.

### CSS Rules

```css
.tree {
  background: #1E1E2E;
  border-radius: 12px;
  padding: 24px 28px;
  margin: 24px 0;
  font-family: 'JetBrains Mono', 'SF Mono', monospace;
  font-size: 13.5px;
  line-height: 1.8;
  color: #BAC2DE;
  white-space: pre;
  overflow-x: auto;
}
.tree .dir      { color: #89B4FA; font-weight: 600; }
.tree .file     { color: #A6E3A1; }
.tree .desc     { color: #6C7086; }
.tree .critical { color: #F38BA8; font-weight: 600; }
```

### HTML Pattern

```html
<div class="tree"><span class="dir">project/</span>
├── <span class="critical">CLAUDE.md</span>             <span class="desc">← Agent 认知锚点</span>
├── <span class="dir">.claude/</span>
│   ├── <span class="file">settings.json</span>       <span class="desc">项目级配置</span>
│   └── <span class="dir">skills/</span>
│       └── <span class="file">SKILL.md</span>        <span class="desc">技能定义</span>
├── <span class="dir">src/</span>
│   ├── <span class="file">index.ts</span>            <span class="desc">入口</span>
│   └── <span class="dir">utils/</span>
└── <span class="file">package.json</span></div>
```

---

## Important Rules

1. **ALWAYS** wrap code in `<pre>` inside `.code-block` with Catppuccin Mocha styling
2. **ALWAYS** escape HTML entities: `<` → `&lt;`, `>` → `&gt;`, `&` → `&amp;`
3. **NEVER** put raw unescaped HTML tags inside code blocks
4. **ALWAYS** use `white-space: pre` for code and tree diagrams
5. **ALWAYS** use monospace font (`JetBrains Mono`)
6. Keep code blocks concise (5-20 lines) — long blocks lose visual impact
7. Include a `.code-header` when showing filenames
8. Use Catppuccin class names only: `.kw`, `.str`, `.cmt`, `.fn`, `.num`, `.var`, `.type`, `.op`
