# Code Highlighting Reference · GitHub Primer

> Aligned with the GitHub Primer design system — see `design-system.md` / `design-system/01-primer-product.md` for tokens.

GitHub ships **5 official syntax themes**, all driven by `primer/primitives`. This file documents the **two most-used** (Light default, Dark default) plus the rules for switching contexts. The other 3 (`dark_dimmed`, `light_high_contrast`, `dark_high_contrast`) follow the same token structure with darker/lighter variants — see Section 5 for switching cues.

GitHub 的 syntax theme 是**产品 UI 系统的一部分**（不是 Brand）—— `font-family: ui-monospace`，背景用 `--gh-product-canvas-subtle`（`#f6f8fa` / `#161b22`），不与 Primer Brand 的霓虹绿混用。

---

## 1 · Theme Selection · 何时用哪个

| 场景 | Theme | 何时切 |
|------|-------|-------|
| Primer 产品 UI 亮色页内的代码块 | **Light default** | 默认 |
| Primer 产品 UI 暗色页内的代码块 | **Dark default** | `prefers-color-scheme: dark` 或显式 dark |
| 暗色长阅读（眼睛疲劳）| Dark Dimmed | 用户在 settings 切换 |
| WCAG AAA 高对比 | Light/Dark High Contrast | accessibility 模式 |
| Primer Brand 营销页内的代码块（如 copilot landing 的代码示例）| **Dark default** | 营销页是黑底，永远用 dark theme，**绝不用 light** |

**铁律**：同一页内不要混用 light + dark theme（除非是「亮 / 暗对比展示」场景）。

---

## 2 · Color Map · Primer Light（Default）

### 完整 token 表

| Token | CSS Class | Hex | 角色 |
|-------|-----------|-----|------|
| Default text | — | `#1f2328` | 普通文本 |
| Comment | `.pl-c` | `#6e7781` | 注释（无 italic） |
| Constant / Number / Boolean | `.pl-c1` | `#0550ae` | 字面常量 |
| Keyword (control flow) | `.pl-k` | `#cf222e` | `if` `else` `return` `import` `class` |
| String (literal) | `.pl-s` | `#0a3069` | `"hello"` `'world'` |
| String embedded expression | `.pl-pse` | `#0a3069` | `${var}` |
| Function call name | `.pl-en` | `#8250df` | `foo()` `bar()` |
| Variable (parameter, special) | `.pl-smi` | `#1f2328` | `x` `arg` |
| Variable instance (this/self) | `.pl-v` | `#953800` | `self.x` `this.y` |
| Type / class name | `.pl-en .pl-e` | `#953800` | `MyClass` `Array` |
| Tag (HTML/JSX) | `.pl-ent` | `#116329` | `<div>` `<Component>` |
| Attribute name | `.pl-c1.pl-attr` | `#0550ae` | `class=` `href=` |
| Regex / character class | `.pl-sr` | `#116329` | `/abc/` |
| Heading (markdown) | `.pl-mh` | `#0550ae` | `# H1` |
| Bold (markdown) | `.pl-mb` | bold | `**bold**` |
| Italic (markdown) | `.pl-mi` | italic | `_italic_` |
| Diff Added | `.pl-mi1` | `#116329` on `#dafbe1` bg | `+ line` |
| Diff Removed | `.pl-md` | `#82071e` on `#ffebe9` bg | `- line` |

### CSS

```css
.code-block {
  background: var(--gh-product-canvas-subtle, #f6f8fa);
  border: 1px solid var(--gh-product-border-default, #d1d9e0);
  border-radius: var(--gh-radius, 6px);
  margin: 16px 0;
  overflow: hidden;
}
.code-header {
  background: var(--gh-product-canvas-subtle, #f6f8fa);
  padding: 8px 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--gh-product-fg-muted, #59636e);
  border-bottom: 1px solid var(--gh-product-border-default, #d1d9e0);
  display: flex;
  justify-content: space-between;
  font-family: var(--gh-product-font-sans);
}
.code-block pre {
  padding: 16px;
  overflow-x: auto;
  font-family: var(--gh-font-mono, ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace);
  font-size: 12px;
  line-height: 1.45;
  color: var(--gh-product-fg-default, #1f2328);
  background: var(--gh-product-canvas-default, #ffffff);
}

/* Primer Light syntax tokens — class names match GitHub's Linguist output */
.pl-c   { color: #6e7781; }                              /* comment */
.pl-c1  { color: #0550ae; }                              /* constant / number */
.pl-k   { color: #cf222e; }                              /* keyword */
.pl-s   { color: #0a3069; }                              /* string */
.pl-en  { color: #8250df; }                              /* entity (function) */
.pl-ent { color: #116329; }                              /* tag */
.pl-v   { color: #953800; }                              /* variable instance */
.pl-smi { color: #1f2328; }                              /* identifier */
.pl-sr  { color: #116329; }                              /* regex */
.pl-mh  { color: #0550ae; font-weight: 600; }            /* markdown heading */
.pl-mb  { font-weight: 600; }                            /* markdown bold */
.pl-mi  { font-style: italic; }                          /* markdown italic */
.pl-mi1 { color: #116329; background: #dafbe1; }         /* diff added */
.pl-md  { color: #82071e; background: #ffebe9; }         /* diff removed */
```

---

## 3 · Color Map · Primer Dark（Default）

### 完整 token 表

| Token | CSS Class | Hex | 角色 |
|-------|-----------|-----|------|
| Default text | — | `#e6edf3` | 普通文本 |
| Comment | `.pl-c` | `#8b949e` | 注释 |
| Constant / Number | `.pl-c1` | `#79c0ff` | 字面常量 |
| Keyword | `.pl-k` | `#ff7b72` | 控制流 |
| String | `.pl-s` | `#a5d6ff` | 字符串 |
| Function name | `.pl-en` | `#d2a8ff` | 函数调用 |
| Tag | `.pl-ent` | `#7ee787` | HTML 标签 |
| Variable instance | `.pl-v` | `#ffa657` | this / self |
| Type | `.pl-en .pl-e` | `#ffa657` | 类型名 |
| Diff Added | `.pl-mi1` | `#aff5b4` on `#033a16` bg | + line |
| Diff Removed | `.pl-md` | `#ffdcd7` on `#67060c` bg | - line |

### CSS

```css
/* Primer Dark — apply on .dark-mode wrapper or via prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  .code-block {
    background: var(--gh-product-canvas-subtle, #161b22);
    border-color: var(--gh-product-border-default, #30363d);
  }
  .code-block pre {
    color: var(--gh-product-fg-default, #e6edf3);
    background: var(--gh-product-canvas-default, #0d1117);
  }
  .pl-c   { color: #8b949e; }
  .pl-c1  { color: #79c0ff; }
  .pl-k   { color: #ff7b72; }
  .pl-s   { color: #a5d6ff; }
  .pl-en  { color: #d2a8ff; }
  .pl-ent { color: #7ee787; }
  .pl-v   { color: #ffa657; }
  .pl-smi { color: #e6edf3; }
  .pl-mh  { color: #79c0ff; }
  .pl-mi1 { color: #aff5b4; background: #033a16; }
  .pl-md  { color: #ffdcd7; background: #67060c; }
}
```

---

## 4 · HTML Pattern

```html
<div class="code-block">
  <div class="code-header">
    <span>auth.ts</span>
    <span>TypeScript</span>
  </div>
  <pre><span class="pl-c">// Verify the JWT token</span>
<span class="pl-k">import</span> { <span class="pl-smi">verify</span> } <span class="pl-k">from</span> <span class="pl-s">'jsonwebtoken'</span>;

<span class="pl-k">export function</span> <span class="pl-en">authenticate</span>(<span class="pl-smi">token</span>: <span class="pl-c1">string</span>) {
  <span class="pl-k">try</span> {
    <span class="pl-k">return</span> <span class="pl-en">verify</span>(<span class="pl-smi">token</span>, <span class="pl-v">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">JWT_SECRET</span>);
  } <span class="pl-k">catch</span> (<span class="pl-smi">err</span>) {
    <span class="pl-k">return</span> <span class="pl-c1">null</span>;
  }
}</pre>
</div>
```

---

## 5 · Other Themes（按需，token 结构同上）

| Theme | Background | Foreground | 触发场景 |
|-------|-----------|-----------|---------|
| **Dark Dimmed** | `#22272e` | `#adbac7` | 暗色但不刺眼，长阅读优选 |
| **Light High Contrast** | `#ffffff` | `#0e1116` | WCAG AAA accessibility |
| **Dark High Contrast** | `#0a0c10` | `#f0f3f6` | 高视力辅助暗色 |

实际配色 token 在 `primer/primitives` 的 `tokens/syntax/` 里——做这些 theme 时按需查询，本文不展开。

---

## 6 · Inline Code

### 在 Primer 产品 UI 里

```css
code {
  font-family: var(--gh-font-mono);
  font-size: 0.85em;
  background: var(--gh-product-canvas-subtle, #f6f8fa);
  padding: 2px 6px;
  border-radius: 6px;
  /* inherits body color */
}
```

### 在 Primer Brand 营销页里

```css
/* Brand 营销页极少用 inline code，但 Copilot landing 偶尔会出现 */
code {
  font-family: var(--gh-font-mono);
  font-size: 0.85em;
  background: rgba(255, 255, 255, 0.08);
  padding: 2px 6px;
  border-radius: 6px;
  color: var(--gh-brand-accent, #5fed83);  /* 唯一允许 inline code 用霓虹绿的场合 */
}
```

---

## 7 · Important Rules

1. **ALWAYS** wrap code in `<pre>` inside `.code-block` with the appropriate Primer theme
2. **ALWAYS** escape HTML entities: `<` → `&lt;`, `>` → `&gt;`, `&` → `&amp;`
3. **ALWAYS** use `var(--gh-font-mono)` —— 不要 hardcode `monospace` 或自定义 mono 字体
4. **NEVER** mix Primer Light theme on a Primer Brand dark page —— 永远用 Dark
5. **NEVER** invent new syntax token classes —— 用 GitHub Linguist 已有的 `.pl-*` 命名（c/c1/k/s/en/ent/v/smi/sr/mh/mb/mi/mi1/md）
6. Keep code blocks **5-30 lines** —— 长 block 失去视觉权重，建议拆开
7. Include `.code-header` 显示文件名 + 语言时
8. **Diff 高亮**用 `.pl-mi1` (added) / `.pl-md` (removed) —— 这是 Primer 官方惯例

---

## 8 · Reference

- 官方 syntax token JSON: [primer/primitives `tokens/functional/themes/light.ts`](https://github.com/primer/primitives)
- Linguist class 命名规范: [github/linguist](https://github.com/github/linguist)
- 实际渲染见 GitHub 任意 `.md` 文件的 README 渲染或 `.ts/.js/.py/.go` 的 blob view
