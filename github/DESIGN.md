# GitHub Design System · Agent Brief

> **任何 agent 在生成 GitHub 风格的页面之前，必须先读完本文件。**
> 这是入口，详细规范在 `design-system.md` / `html-template.md` / `svg-patterns.md`。

GitHub 同时运营 **两套** 设计语言。用错就是 bug。

| 系统 | 适用范围 | 画布 | 主色 | 字体 |
|------|---------|------|------|------|
| **Primer 产品 UI** | 登录后的 repo / issue / PR / settings / dashboard | 白 `#ffffff` | 蓝 `#0969da` | system stack |
| **Primer Brand 营销** | 未登录访客 / 落地页 / github.com 首页 / /features /enterprise | 黑 `#000000` | 霓虹绿 `#5fed83` | Mona Sans VF |

---

## 0 · 30 秒决策：用哪一套？

```
你的页面是给谁看的？
│
├── 已登录的开发者 / 工具型界面
│   ├── repo 主页 / issue / PR / commit
│   ├── settings / profile / dashboard
│   └── ► Primer 产品 UI
│       · 模板：previews/primer-product-light.html (亮色)
│              previews/primer-product-dark.html  (暗色)
│       · token 前缀：--gh-product-*
│       · 字体：var(--gh-product-font-sans) — system stack
│
├── 未登录的访客 / 营销宣传 / 产品落地
│   ├── github.com 首页 (品牌 hero)
│   ├── /features/copilot (旗舰产品)
│   └── /enterprise (B2B 落地)
│   └── ► Primer Brand
│       · 模板：previews/brand-homepage.html (基础首页)
│              previews/brand-copilot.html   (旗舰产品页)
│              previews/brand-enterprise.html(B2B 信息密集)
│       · token 前缀：--gh-brand-*
│       · 字体：var(--gh-brand-font-sans) — Mona Sans VF
│
└── 拿不准？
    └── 默认走 Primer 产品 UI
        (GitHub 99% 的 surface 都是它，且犯错代价最小)
```

---

## 1 · 三条不可破的硬规则

### 1.1 不要混 token

| ❌ 致命错误 | ✅ 正确 |
|---|---|
| Primer 产品页用 `#5fed83` 霓虹绿做按钮 | 产品页用 `#1f883d` (Primary green) 或 `#0969da` (accent blue) |
| Primer Brand 营销页用 `#0969da` 蓝做 link | 营销页 link 用 `#5fed83` 或白色 + hover 变 mint |
| 同一页混用 `--gh-product-*` 和 `--gh-brand-*` | 任何页面只挑其中一套 |
| 在产品页加 `backdrop-filter: blur()` 玻璃 | 玻璃效果是 Primer Brand 专属 |

### 1.2 不要自己造色

所有色值必须来自下表，**禁止发明新颜色**。如果你需要的色不在表里，先问用户，不要凭直觉补。

完整色板见 `design-system.md` Section 2 (Primer Product) 和 Section 10 (Primer Brand)。

### 1.3 任何可点击元素必须显式 `cursor: pointer`

浏览器只对 `<a href="...">` 和 `<button>` 默认加手型。其他可点击元素（`<div onclick>`、自定义组件）必须显式：

```css
.clickable-card { cursor: pointer; }
```

---

## 2 · 核心资产位置

| 资产 | 路径 | 使用场景 | 状态 |
|---|---|---|---|
| Octocat 主 logo | `assets/logo/octocat-mark.svg` | navbar 左上角 | ⏳ 待补 (PR 3) |
| GitHub 文字标 | `assets/logo/github-logo-wordmark.svg` | 营销页 hero | ⏳ 待补 (PR 3) |
| 白色版 logo | `assets/logo/github-logo-white.svg` | Primer Brand 暗底 | ⏳ 待补 (PR 3) |
| Mona Sans VF | `assets/fonts/mona-sans-vf.woff2` | Primer Brand 唯一字体 | ⏳ 待补 (PR 3，目前 hot-link CDN) |
| 真实截图参考 | `assets/reference-screenshots/*.png` | 复刻时的对照基线 | ⏳ 待补 (PR 3) |

**当前临时方案**：所有 logo / 字体仍 hot-link `github.githubassets.com` CDN。PR 3 完成后切换为本地引用。

---

## 3 · 反 AI slop · 速查

| ❌ 不要 | ✅ 要 |
|---|---|
| 紫色渐变（不存在于 Primer） | 只用 token 表里的色 |
| Inter / Roboto / Arial 作为产品 UI 字体 | system stack (`--gh-product-font-sans`) |
| 圆角卡 + 左 border accent（烂大街组合）| Primer 用 1px `#d1d9e0` border，Brand 用 `box-shadow: 0 0 0 1px rgba(255,255,255,0.08)` |
| Logo 用 emoji 🐙 代替 | 必须用真实 octocat-mark.svg |
| 在产品页加 backdrop-filter | 玻璃只在 Primer Brand 用 |
| 在营销页用蓝色按钮 | 营销页所有 CTA 用霓虹绿 + 黑底白字 |
| SVG 手画 GitHub Octocat | 用 assets/logo/octocat-mark.svg 真品 |

---

## 4 · 开工前的自检清单

- [ ] 我已经决定走 Primer 产品 UI / Primer Brand（其中一套，不混）
- [ ] 我读了 `design-system.md` 对应的 section（Section 1-9 = Primer，Section 10 = Brand）
- [ ] 我用 `previews/` 里同类页面作为视觉参考
- [ ] 我用 `html-template.md` 的 component 骨架，不从零写
- [ ] 我引用真实 logo / 字体路径，没用 emoji 或 SVG 重画
- [ ] 我对每个可点击元素加了 `cursor: pointer`
- [ ] 我所有 `--gh-product-*` 或 `--gh-brand-*` token 都来自 `:root` 已定义的，没自己造

---

## 5 · 交付前的双层验证

### 5.1 自动 Lint（必跑）

```bash
# 默认模式（3 类硬规则）
node scripts/lint-design.js your-page.html
# 应输出 0 errors

# 严格模式（额外检查未知 hex）
node scripts/lint-design.js --strict your-page.html
```

Lint 抓 4 类问题：

| 规则 | 严重性 | 抓什么 |
|---|---|---|
| `system-mixing` | ERROR | 同文件混用 `--gh-product-*` 和 `--gh-brand-*` |
| `legacy-var-naming` | ERROR | 旧的 `--brand-*` / `--color-*` / 裸 `--gh-canvas` |
| `hot-link-cdn` | WARN | hot-link 外部 CDN（字体必修，demo 媒体可保留）|
| `unknown-hex` (--strict) | WARN | 不在 brand-spec.md 色板内的 hex |

**0 errors 是交付硬门槛**。warnings 看情境处理（demo 资源 hot-link 可接受）。

### 5.2 Playwright 截图（视觉验证）

```bash
npx playwright screenshot file:///<absolute-path>/your-page.html out.png \
  --viewport-size=1280,900 \
  --wait-for-timeout=2000
```

### 5.3 对照基准

把你的截图和 `previews/` 或 `assets/reference-screenshots/` 里同类参考页并排对比：

| 你做的页面类型 | 对照参考 |
|---|---|
| 产品 UI 亮色任意页 | `previews/primer-product-light.html` 或 `templates/primer-product-page.html` |
| 产品 UI 暗色任意页 | `previews/primer-product-dark.html` |
| 营销首页 / hero | `previews/brand-homepage.html` 或 `templates/brand-marketing-page.html` |
| 旗舰产品落地页 | `previews/brand-copilot.html` |
| B2B 企业信息页 | `previews/brand-enterprise.html` |
| **真实 github.com** | `assets/reference-screenshots/*.png` |

应一致的维度：色调温度（冷暖）、字体观感、间距节奏、border / shadow 风格。

---

## 6 · 详细文档路由

| 我要... | 读 |
|---|---|
| 完整 Primer 产品色板 / 字号 / 间距 | `design-system.md` Section 1-9 |
| 完整 Primer Brand 规范 | `design-system.md` Section 10 |
| 跨系统硬规则全集 | `design-system.md` Section 11 |
| 复刻 GitHub 营销首页 | `previews/brand-homepage.html` |
| 复刻 Copilot 落地页 | `previews/brand-copilot.html` |
| 复刻 Enterprise 落地页 | `previews/brand-enterprise.html` |
| 复刻 repo / issue / PR 视觉 | `previews/primer-product-light.html` 或 `-dark.html` |
| 代码块该怎么配色 | `code-highlighting.md` ⏳ 待补 (PR 4) |
| 画架构图 / SVG 图表 | `svg-patterns.md` |
| HTML 模板骨架 | `html-template.md` |
| 资产引用规则 | `assets/brand-spec.md` ⏳ 待补 (PR 3) |

---

## 7 · CSS 变量命名规范

为了 agent 能稳定区分两套系统，所有 CSS 变量遵循统一前缀：

| 前缀 | 含义 | 示例 |
|------|------|------|
| `--gh-product-*` | Primer 产品 UI 专用 | `--gh-product-canvas-default`, `--gh-product-fg-default` |
| `--gh-brand-*` | Primer Brand 营销专用 | `--gh-brand-canvas`, `--gh-brand-accent` |
| `--gh-*` (无 product/brand 中段) | 跨系统通用 | `--gh-ease`, `--gh-dur-fast`, `--gh-font-mono`, `--gh-radius`, `--gh-blue` |

**铁律**：永远不要把 `--gh-product-*` 和 `--gh-brand-*` 写在同一个 `:root` 块里——这会让 agent 误以为它们可以混用。

---

## 8 · PR 路线图（项目演进）

本项目分阶段完善。当前进度：

- ✅ **PR 1** · 结构重构 + 重命名 + 变量统一（2026-04-26 完成）
- ✅ **PR 2** · DESIGN.md 入口（即本文，2026-04-26 完成）
- ✅ **PR 3** · 真实资产下载（9 个官方 logo SVG + 219KB Mona Sans VF + 4 张真实 github.com 截图）+ `assets/brand-spec.md`（2026-04-26 完成）
- ✅ **PR 4** · 拆分 design-system.md → `design-system/` 4 子文件 + 新增 `code-highlighting.md`（2026-04-26 完成）
- ✅ **PR 5** · 自动化 enforcement：`scripts/lint-design.js` 4 规则 lint 工具 + `templates/` 目录两个开箱即用模板（primer-product-page / brand-marketing-page）+ DESIGN.md 集成验证流程（2026-04-26 完成）

**当前状态**：5 个 PR 已落地。Agent 接手任何 GitHub 风格任务时：

1. 读本文（30 秒决策）
2. 读对应子系统文档（`design-system/01-` 或 `02-`）
3. 从 `templates/` fork 模板开干
4. 引用 `assets/` 真实资产（不 hot-link）
5. 交付前跑 `node scripts/lint-design.js your-page.html` 至 0 errors
6. Playwright 截图对照 `previews/` 或 `assets/reference-screenshots/` 验视觉

**未来可选 PR 6**（按需启动）：
- 复刻 GitHub repo 主页 / issue / PR 等具体产品页（当前 `previews/primer-product-*` 只是 token 展示页）
- Verification 自动化（`verification/compare.sh` 跑 playwright 截图 + imagemagick diff）
- CI 集成（lint 作为 PR check）
