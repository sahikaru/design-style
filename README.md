# design-style

一个"设计风格规范库"，为 AI agent 和开发者提供**可直接复用的前端设计语言约束**。

灵感来自 `design.md` 的实践：与其让 AI 每次"自由发挥"生成千篇一律的 AI slop 界面，不如把一套成熟产品的设计系统拆成结构化文档，在生成代码前喂给 agent，让输出具备稳定、专业、有辨识度的视觉质感。

## 设计哲学

每种风格都围绕同一个结构展开，覆盖从**色彩/字体/空间**到**代码高亮/SVG 图案/完整 HTML 模板**的全链路规范。复制一份进你的项目，agent 就拥有了一个"设计总监"。

## 已收录风格

### `claude-code/` — Claude / Anthropic 风格

温暖、克制、略带文学气息的"数字羊皮纸"美学。

- 羊皮纸画布 `#f5f4ed`，陶土红点缀 `#c96442`
- Anthropic Serif 衬线标题 + 全暖色调中性色
- 适合：内容型产品、文档站、AI 产品落地页、阅读类应用

### `github/` — GitHub Primer + Primer Brand 双风格

GitHub 实际上运营两套并行的设计语言：

**Primer（产品 UI）** —— 冷静、密集、为开发者而生的工具型界面：
- 纯白画布 `#ffffff` + 冷灰 `#f6f8fa`，蓝色主交互 `#0969da`
- **System 字体栈**（非 Mona Sans —— Mona Sans 只在 Brand 营销用）+ 语义化状态色（成功/危险/警告/完成）
- Token 前缀 `--gh-product-*`，亮/暗双主题：`previews/primer-product-light.html` / `primer-product-dark.html`
- 适合：登录后产品界面、repo/issue/PR、dashboard、管理后台

**Primer Brand（营销门面）** —— 深色戏剧化画布 + 霓虹薄荷：
- 纯黑画布 `#000000` / `#0d1117`，**霓虹薄荷 `#5fed83`** 作为唯一强调色
- Mona Sans VF **可变字重 425 / 440 / 460**（"just-past-regular"——静态字体达不到的微妙字重）
- 签名手法：玻璃卡 `backdrop-filter: blur(40px) saturate(180%)` + 径向薄荷光晕 + shadow-border + neon bloom
- 动效：`cubic-bezier(0.33, 1, 0.68, 1)` ease-out quad，比 Apple 更干脆；metrics count-up 动画
- Token 前缀 `--gh-brand-*`
- **三个页面范式（对应 Apple 的 iPhone/Mac/Vision Pro）**：
  - `previews/brand-homepage.html` → github.com 首页 —— 品牌 landing（64px/425/-2.24px 压缩 hero + autoplay 视频 + 手风琴）
  - `previews/brand-copilot.html` → github.com/features/copilot —— 旗舰产品（玻璃卡 + 光晕 + scroll-play 视频）
  - `previews/brand-enterprise.html` → github.com/enterprise —— B2B 权威（20 行功能对比表 + metrics 滚数 + FAQ）
- 适合：开发者工具营销、SaaS 落地页、AI 产品高端叙事、企业级信息架构

> ⚠️ GitHub 目录结构与其他风格不同（多一层 `previews/` 子目录 + `DESIGN.md` 入口 + `assets/` 真实资产）。Agent 接入前请先读 `github/DESIGN.md`。

### `apple/` — Apple 风格

电影化、克制到极致的"消费电子美学"——产品即主角，UI 退隐至不可见。

- 二元节奏：纯黑 `#000000` 与浅灰 `#f5f5f7` 交替，唯一点缀色 Apple Blue `#0071e3`
- SF Pro Display/Text 光学尺寸切换，负字距贯穿所有字号（-1.2px → -0.12px）；**分类 eyebrow 24px/700 用 +0.216px 正字距**（Apple 排版中唯一的正字距用法）
- Apple Intelligence 四色渐变（108deg 蓝→紫→红→橙 + `background-clip: text`）
- 双层导航：透明 globalnav 44px + 玻璃 localnav `rgba(18,18,18,0.8) blur(20px)`
- 动效 DNA：`cubic-bezier(0.4, 0, 0.6, 1)` + `IntersectionObserver` 分层 fade-up + sticky-pinned 场景 + scroll-triggered video
- **Apple 页面范式全集（四页 preview 覆盖三种原型）**：
  - `preview.html` → apple.com/iphone — **Archetype A 品类 landing**（80px 巨字 + chapter-nav 选机器）
  - `preview-mac.html` → apple.com/mac — **Archetype A 变体**（浅色极简 hero + 2-up 黑色 banner card）
  - `preview-iphone-17-pro.html` → apple.com/iphone-17-pro — **Archetype B 旗舰详情页**（sticky-pinned 相机/显示场景 + 颜色切换 + 芯片跑分条动画）
  - `preview-vision-pro.html` → apple.com/apple-vision-pro — **Archetype C 体验型页面**（34px 低调 hero + scroll-triggered 视频自动播放，14 个 Apple CDN 视频）
- **硬规则**：所有图片 `srcset` 带 `_2x` 变体（否则视网膜屏下失清）；所有可点击元素显式 `cursor: pointer`（浏览器只对 `<a>/<button>` 默认加手型）
- 适合：产品发布页、影视化营销站、奢品/硬件、单色高端品牌

### `vercel/` — Vercel Geist 风格

开发者基础设施的"工程化极简"——留白即设计，阴影即边框。

- 近纯白 `#ffffff` + `#171717` 文本，单色系 + 工作流三色（Ship 红/Preview 粉/Develop 蓝）
- Geist Sans 极端负字距（-2.4px ~ -2.88px），Geist Mono 用于技术标签
- 签名手法：`box-shadow: 0 0 0 1px rgba(0,0,0,0.08)` 替代 CSS border，多层阴影堆叠
- 适合：开发者工具站、SaaS 落地页、控制台/dashboard、技术品牌官网

## 每种风格的目录结构

```
<style-name>/
├── design-system.md     # 核心设计系统文档（色彩/字体/间距/组件）
├── html-template.md     # 可直接套用的完整 HTML 模板
├── svg-patterns.md      # 配套 SVG 图案/装饰元素
├── code-highlighting.md # 代码块高亮配色方案（可选）
├── preview.html         # 亮色模式预览页
└── preview-dark.html    # 暗色模式预览页
```

> 先打开 `preview.html` 肉眼确认风格是否匹配你的产品调性，再决定是否引入。

## 如何使用

**两步接入，无需任何依赖。**

### 1. 复制风格文件到目标仓库

把选中的风格文件（通常是 `design-system.md` + `html-template.md`）复制到目标仓库的 `docs/` 目录下：

```bash
cp -r ~/tools/github/design-style/claude-code/design-system.md \
      <your-repo>/docs/design-system.md
```

### 2. 在 AGENT.md（或 CLAUDE.md）中引用

在项目根目录的 `AGENT.md` / `CLAUDE.md` 中加入引用，让 agent 在每次生成前端代码前读取规范：

```markdown
## Design System

本项目遵循以下设计规范，生成任何 UI 代码前必须先阅读：

@docs/design-system.md
@docs/html-template.md
```

之后 agent 生成的组件、页面、SVG 都会自动遵循这套色彩、字体、间距和组件规范。

## 新增一种风格

1. 新建子目录，例如 `linear/`、`stripe/`、`vercel/`
2. 按上述"每种风格的目录结构"补齐文件
3. 在本 README 的"已收录风格"里补一条简介

保持结构一致，agent 才能稳定地在不同风格之间切换。
