# GitHub · Brand Asset Spec

> 采集日期：2026-04-26
> 来源：[brand.github.com](https://brand.github.com/) 官方 brand kit + github.com 主页 inline SVG
> 资产完整度：✅ 完整（核心 logo + 字体 + 真实页面截图全部到位）

任何 agent 在生成 GitHub 风格内容时，**必须引用本 spec 列出的资产路径**——禁止用 emoji / SVG 重画 / hot-link CDN 代替。

---

## 🎯 一等公民资产

### Logo · Octocat Mark（必备）

GitHub 最核心的视觉标识。任何 GitHub 相关页面都应在 navbar 左上角放它。

| 文件 | 大小 | 颜色 | 使用场景 |
|---|---|---|---|
| `logo/octocat-mark.svg` | 946b | `currentColor`（自适应）| **首选** · navbar / header / footer |
| `logo/octocat-mark-black.svg` | 1559b | 固定黑 | Light bg 强制黑色场景 |
| `logo/octocat-mark-white.svg` | 1559b | 固定白 | Dark bg 强制白色场景 |

**首选用法**（用 `currentColor` 自适应）：

```html
<!-- 在 Primer 产品 UI 浅底，会自动是 #1f2328 -->
<a href="/" class="navbar-logo" style="color: #1f2328;">
  <img src="assets/logo/octocat-mark.svg" alt="GitHub" width="32" height="32">
</a>

<!-- 在 Primer Brand 暗底，自动变白 -->
<a href="/" class="navbar-logo" style="color: #ffffff;">
  <img src="assets/logo/octocat-mark.svg" alt="GitHub" width="32" height="32">
</a>
```

**禁用变形**：
- ❌ 不要拉伸宽高比（始终 1:1 正方形）
- ❌ 不要改色为霓虹绿/蓝色（永远只是 black / white / currentColor）
- ❌ 不要加描边
- ❌ 不要用 emoji 🐙 替代
- ❌ 不要用 AI 自己画的猫头近似图

### Logo · GitHub Wordmark（"GitHub" 文字标）

mark + GitHub 文字组合，常用在 hero / 大尺寸品牌展示。

| 文件 | 大小 | 用途 |
|---|---|---|
| `logo/github-lockup-black.svg` | 3946b | Light bg |
| `logo/github-lockup-white.svg` | 3946b | Dark bg（包括 Primer Brand 营销页）|
| `logo/github-logo-wordmark.svg` | 3946b | 别名 = github-lockup-black（向后兼容路径）|

```html
<!-- Primer Brand homepage hero -->
<img src="assets/logo/github-lockup-white.svg" alt="GitHub" height="48">
```

### Logo · Copilot（GitHub Copilot 专用）

| 文件 | 大小 | 用途 |
|---|---|---|
| `logo/copilot-icon-black.svg` | 3211b | Light bg copilot icon |
| `logo/copilot-icon-white.svg` | 3211b | Dark bg copilot icon |
| `logo/copilot-lockup-black.svg` | 7372b | Light bg copilot 完整 lockup |
| `logo/copilot-lockup-white.svg` | 7372b | Dark bg copilot 完整 lockup |

仅在做 Copilot 相关产品页用，普通 GitHub 页面不用。

### Font · Mona Sans VF（Primer Brand 唯一字体）

| 文件 | 大小 | 范围 |
|---|---|---|
| `fonts/mona-sans-vf.woff2` | 219KB | 字重 100-900 全可变 + 字宽 75%-125% 全可变 |

**正确引用**（替代之前所有 hot-link CDN）：

```css
@font-face {
  font-family: "Mona Sans VF";
  src: url("../assets/fonts/mona-sans-vf.woff2") format("woff2-variations"),
       url("../assets/fonts/mona-sans-vf.woff2") format("woff2");
  font-weight: 100 900;
  font-stretch: 75% 125%;
  font-display: swap;
  font-style: normal;
}
```

**仅用于 Primer Brand**。Primer 产品 UI 必须用 system stack（不要在产品页加载 Mona Sans，浪费带宽）。

**Mona Sans VF 的签名用法**：用 GitHub 官方 marketing 上常见的「正常字重之外的微妙字重」来制造高级感：

| 字重 | 名称 | 使用场景 |
|---|---|---|
| `425` | "just past Regular" | Hero mega title (64px) — 比 normal 略重，有质感不显笨 |
| `440` | "just past Regular+" | Hero large (48-56px) |
| `460` | "almost Medium" | Section title (40px) |
| 正常 600 | Semibold | Body 强调（h3 24px）|

这些「碎数字字重」是静态字体永远做不到的——也是 GitHub 营销页的视觉签名。

---

## 📸 真实参考截图（设计基线）

| 文件 | 来源 | 用途 |
|---|---|---|
| `reference-screenshots/homepage.png` | github.com 真实首页 | 复刻 Primer Brand 营销 hero 时的对照 |
| `reference-screenshots/copilot.png` | github.com/features/copilot | 复刻 Copilot 落地页时的对照 |
| `reference-screenshots/enterprise.png` | github.com/enterprise | 复刻 Enterprise 页面的对照 |
| `reference-screenshots/primer-product-repo.png` | github.com/primer/react | Primer 产品 UI（repo 主页）的对照 |

每次做大改动后，跑：

```bash
# 截当前页面
npx playwright screenshot file:///path/to/your-page.html out.png \
  --viewport-size=1280,900

# 跟 reference 并排开浏览器对比
open out.png assets/reference-screenshots/homepage.png
```

---

## 🎨 色板（完整版见 `design-system.md`）

### Primer 产品 UI（亮色）

| 角色 | Hex | 变量名 |
|---|---|---|
| Canvas | `#ffffff` | `--gh-product-canvas-default` |
| Inset | `#f6f8fa` | `--gh-product-canvas-subtle` |
| 主文本 | `#1f2328` | `--gh-product-fg-default` |
| 次文本 | `#59636e` | `--gh-product-fg-muted` |
| Accent 蓝 | `#0969da` | `--gh-product-fg-accent` |
| Success 绿 | `#1a7f37` / `#1f883d`(emphasis) | `--gh-product-success-*` |
| Danger 红 | `#d1242f` / `#cf222e`(emphasis) | `--gh-product-danger-*` |
| Border | `#d1d9e0` | `--gh-product-border-default` |

### Primer 产品 UI（暗色）

| 角色 | Hex | 变量名 |
|---|---|---|
| Canvas | `#141413` | `--gh-product-canvas-default` |
| Inset | `#1c1c1b` | `--gh-product-canvas-subtle` |
| 主文本 | `#e6edf3` | `--gh-product-fg-default` |
| Accent 蓝 | `#58a6ff` / `#1f6feb`(emphasis) | `--gh-product-fg-accent` |
| Border | `#30363d` | `--gh-product-border-default` |

### Primer Brand 营销

| 角色 | Hex | 变量名 |
|---|---|---|
| Canvas | `#000000` | `--gh-brand-canvas` |
| Subtle | `#0d1117` | `--gh-brand-canvas-subtle` |
| Raised/Inset | `#151b23` | `--gh-brand-canvas-raised` |
| 主文本 | `#ffffff` | `--gh-brand-fg` |
| 次文本 | `#9198a1` | `--gh-brand-fg-muted` |
| **Accent 霓虹绿**（唯一强调色）| **`#5fed83`** | `--gh-brand-accent` |
| Border | `#3d444d` 或 `rgba(255,255,255,0.08)` | `--gh-brand-border` |

---

## ✍️ 字体栈

| 系统 | 字体 | CSS |
|---|---|---|
| **Primer 产品 UI** | System stack | `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"` |
| **Primer Brand 营销** | Mona Sans VF | `"Mona Sans VF", "Mona Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif` |
| **Mono（两套都用）** | System mono | `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace` |

---

## ✨ 签名细节（只在合适的地方做到 120%）

按 huashu-design 哲学「一个细节做到 120%，其他做到 80%」，GitHub 的签名细节是：

| 系统 | 签名细节 | 例子 |
|---|---|---|
| **Primer 产品** | 状态色的语义一致性（绿=open，红=closed，紫=done，粉=sponsors）| issue/PR 状态 badge |
| **Primer Brand** | Mona Sans VF 的「碎数字字重」（425/440/460）| Hero 巨字 + 字重精到非整数 |
| **Primer Brand** | 玻璃卡 + 径向霓虹光晕 | Copilot 落地页的 hero 卡 |
| **Primer Brand** | Box-shadow 替代 border：`0 0 0 1px rgba(255,255,255,0.08)` | 所有 Brand 卡片的边界 |

---

## 🚫 禁区（绝对不能做的）

- ❌ 用 emoji 🐙 / 🐈 / GitHub 表情代替 octocat-mark.svg
- ❌ 用 AI 自己画的圆形 logo / 八爪鱼图代替 Octocat
- ❌ 在 Primer Brand 营销页用 `#0969da` 蓝色（那是产品色）
- ❌ 在 Primer 产品页用 `#5fed83` 霓虹绿（那是营销色）
- ❌ Primer Brand 用任何不在「Brand 色板」里的颜色
- ❌ Hot-link CDN 字体（必须引用本目录的 `mona-sans-vf.woff2`）
- ❌ 拉伸 octocat 宽高比（始终 1:1）
- ❌ 在 octocat 上加描边、阴影、滤镜

---

## 🌬 气质关键词

GitHub 的视觉气质（agent 自检用）：

- **Primer 产品 UI**：克制、密集、专业、零视觉疲劳、8 小时阅读不累
- **Primer Brand 营销**：戏剧化、夜色、霓虹、玻璃感、cinematic 30 秒第一印象

如果你做的页面读起来不像这两组关键词中的一个——**停下，重新走 DESIGN.md 的决策流程**。

---

## 📋 资产质量自评（按 huashu-design 8/10 标准）

| 资产 | 分辨率/质量 | 版权清晰度 | 气质契合 | 总分 | 备注 |
|---|---|---|---|---|---|
| octocat-mark.svg | SVG 矢量无损 | 官方 brand kit | 100% | **10/10** | 一等品 |
| github-lockup-black/white.svg | SVG 矢量无损 | 官方 brand kit | 100% | **10/10** | 一等品 |
| copilot-*.svg | SVG 矢量无损 | 官方 brand kit | 100% | **10/10** | 一等品 |
| mona-sans-vf.woff2 | 字体二进制 | GitHub CDN 公开 | 100% | **10/10** | 一等品 |
| reference-screenshots/*.png | 1280×900 真实截图 | 我自己截的 | 100% | **9/10** | viewport-only，未滚动到 fold 以下 |

**全部资产 ≥ 8/10**，符合花叔哲学「宁缺毋滥」。
