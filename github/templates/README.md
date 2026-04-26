# Templates · GitHub Design System

> **Fork-and-edit starting skeletons** for new GitHub-style pages.
> 都是 self-contained 单文件 HTML，无 build 依赖，双击即开。

---

## 选模板

| 你要做的页面 | 模板 | 说明 |
|---|---|---|
| **登录后产品页** (repo / issue / PR / settings / dashboard) | [`primer-product-page.html`](primer-product-page.html) | Primer 产品 UI · `--gh-product-*` token · system font stack · 含 light + dark mode auto-switch |
| **营销/落地/未登录访客页** (homepage / features / pricing) | [`brand-marketing-page.html`](brand-marketing-page.html) | Primer Brand · `--gh-brand-*` token · Mona Sans VF · 黑底霓虹绿 · 玻璃卡 |

不确定？回 [`../DESIGN.md`](../DESIGN.md) 走 30 秒决策树。

---

## 用法

```bash
# 1. 复制模板到你的项目
cp templates/primer-product-page.html my-project/index.html

# 2. 编辑文本 / 内容 / 路由
# 3. 验证（lint）
node ../scripts/lint-design.js my-project/index.html
# 应输出 0 errors

# 4. 浏览器开
open my-project/index.html
```

---

## 模板包含的最小骨架

### `primer-product-page.html` (~150 行)

- 顶部黑底 navbar（Octocat logo 用本地 `assets/logo/octocat-mark-white.svg`）
- 240px 左侧 sidebar（item / item--active 状态）
- 主内容区（h1 + p + state badges + code block + 按钮组）
- 4 种 state badge（open / closed / merged / draft）—— Primer 的核心识别
- 按钮（默认 + primary 绿）
- Code block（用 code-highlighting.md 的 `.pl-*` token class）
- Light + dark via `prefers-color-scheme: dark` 自动切换

### `brand-marketing-page.html` (~180 行)

- Sticky globalnav（透明 → scroll 后玻璃化）
- Hero（eyebrow + 64px Mona Sans 425 字重 + lede + CTA 组）
- 玻璃卡 section（backdrop-filter blur + shadow-border + neon bloom）
- 按钮组（pill shape · primary 霓虹绿 · secondary 描边）
- 径向霓虹绿光晕背景（hero 上方）
- 引用本地 Mona Sans VF（`../assets/fonts/mona-sans-vf.woff2`）

---

## 不在这里的模板（按需另建）

| 缺什么 | 哪里有参考 |
|---|---|
| GitHub repo 主页（file tree + readme + commit list）| [`../previews/primer-product-light.html`](../previews/primer-product-light.html) 是 token 展示页，repo 页骨架待 PR 6 |
| Copilot 旗舰落地页 | [`../previews/brand-copilot.html`](../previews/brand-copilot.html) 全页参考 |
| Enterprise B2B 信息密集页 | [`../previews/brand-enterprise.html`](../previews/brand-enterprise.html) 全页参考 |
| DeepWiki-style 文档站 | [`../html-template.md`](../html-template.md) 旧模板（带 deprecation 注意事项）|

---

## 编辑模板时的硬规则

1. **永远不要混用** `--gh-product-*` 和 `--gh-brand-*` —— lint 会报 ERROR
2. **不要 hot-link CDN** —— 引用 `../assets/` 本地路径（Mona Sans 已就位）
3. **任何可点击元素**显式 `cursor: pointer`（lint 不强制但是硬规则）
4. **改 token 值**只能从 `../assets/brand-spec.md` 列出的色板里取，不要发明新色

修改后 lint 自检：

```bash
node ../scripts/lint-design.js your-edited-file.html
```
