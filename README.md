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

### `github/` — GitHub Primer 风格

冷静、密集、为开发者而生的工具型界面。

- 纯白画布 `#ffffff` + 冷灰 `#f6f8fa`，蓝色主交互 `#0969da`
- Mona Sans 变量字体，语义化状态色（成功/危险/警告/完成）
- 适合：开发者工具、dashboard、管理后台、技术文档

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
