# GitHub Design System · Overview

> 这是 GitHub 设计系统的总入口文档，详细规范在同目录的 `01-04` 文件。
> Agent 需要快速决策时，请先读 `../DESIGN.md`（30 秒决策树）。

## 系统全貌

GitHub 同时运营 **两套** 设计语言。两者**绝不混用**——token 不同、字体不同、视觉气质不同。

| 系统 | 适用范围 | 文件 |
|---|---|---|
| **Primer 产品 UI** | 登录后 / repo / issue / PR / dashboard / settings | `01-primer-product.md` |
| **Primer Brand 营销** | 未登录访客 / 营销页 / github.com 首页 / /features / /enterprise | `02-primer-brand.md` |
| **跨系统硬规则** | 应用于两套系统的不可破规则（cursor, retina, accessibility）| `03-hard-rules.md` |
| **官方权威参考** | 完整 token 表、组件 spec、Primer 官方文档摘要 | `04-authoritative-reference.md` |

---

## 30 秒选系统

```
你的页面是给谁看的？
│
├── 已登录开发者 / 工具型界面
│   └── ► Primer 产品 UI → 读 01-primer-product.md
│       Token：--gh-product-*
│       字体：system stack
│       预览：previews/primer-product-light.html / -dark.html
│
├── 未登录访客 / 营销 / 落地页
│   └── ► Primer Brand → 读 02-primer-brand.md
│       Token：--gh-brand-*
│       字体：Mona Sans VF
│       预览：previews/brand-homepage.html / brand-copilot.html / brand-enterprise.html
│
└── 拿不准？默认 Primer 产品 UI（GitHub 99% surface 都是它）
```

---

## 命名规范摘要

所有 CSS 变量遵循统一前缀，agent 看一眼就能知道归属：

| 前缀 | 含义 | 例子 |
|---|---|---|
| `--gh-product-*` | Primer 产品 UI 专用 | `--gh-product-canvas-default`, `--gh-product-fg-accent` |
| `--gh-brand-*` | Primer Brand 营销专用 | `--gh-brand-canvas`, `--gh-brand-accent` |
| `--gh-*`（无 product/brand 中段）| 跨系统通用 | `--gh-ease`, `--gh-dur-fast`, `--gh-font-mono`, `--gh-radius`, `--gh-blue` |

**铁律**：不要把 `--gh-product-*` 和 `--gh-brand-*` 写在同一个 `:root` 块里。

---

## 资产路径

实际 logo / 字体 / 真实截图位置见 `../assets/brand-spec.md`。所有引用必须用本地 `assets/` 路径，禁止 hot-link CDN。

---

## 历史

本目录的 4 个文件原本是单文件 `../design-system.md`（1603 行 / 36K tokens，单次 Read 超限）。2026-04-26 拆分。

原文件 `../design-system.md` 仍保留作为 archive 和 single-file fallback——但 agent **优先读本目录的 4 个分文件**。
