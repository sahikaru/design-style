# HTML Template Reference

> ⚠️ **2026-04-26 状态提醒**：本文件是早期 DeepWiki-style 文档站模板，**仅服务于 GitHub Primer 产品 UI 一种特定子场景**（文档站页面）。
>
> 它**不是** 营销页 / 仓库页 / 产品页 / Brand 系统的 HTML 模板。如果你要做：
> - **Primer Brand 营销页** → 参考 `previews/brand-homepage.html` / `brand-copilot.html` / `brand-enterprise.html`
> - **Primer 产品 UI 通用 token 展示** → 参考 `previews/primer-product-light.html` / `primer-product-dark.html`
> - **完整规范 / 决策树** → `DESIGN.md` + `design-system/00-overview.md`
>
> 本文件早期色值（如 `#0550ae`）跟权威 Primer token（`#0969da` 等）有出入，使用前请用 `design-system/01-primer-product.md` 的 token 表校准。
>
> ⏳ **PR 5 计划**：把本文件升级为完整的 `templates/` 目录（DeepWiki 模板 + repo 页模板 + issue/PR 模板 + brand 营销模板各一份），同时全部对齐新 token 命名。

---

This file contains the exact CSS values, HTML patterns, and component markup for generating DeepWiki-style documentation pages.

## Complete CSS

```css
html { scroll-behavior: smooth; scroll-padding-top: 60px; }
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
  background: #ffffff;
  color: #1f2328;
  font-size: 14px;
  line-height: 1.5;
}

/* System font stacks — no Google Fonts import needed */

/* ===== Top Bar ===== */
.top-bar {
  height: 48px;
  border-bottom: 1px solid #d1d9e0;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  top: 0; left: 0; right: 0;
  background: #fff;
  z-index: 100;
}
.top-bar-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 600;
  color: #0550ae;
  text-decoration: none;
}
.top-bar-logo svg { width: 24px; height: 24px; }
.top-bar-right { margin-left: auto; display: flex; align-items: center; gap: 12px; }
.top-bar-right a { color: #59636e; text-decoration: none; font-size: 13px; }
.ask-btn {
  background: #1f883d;
  color: #fff !important;
  padding: 5px 14px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
}

/* ===== Layout ===== */
.layout { display: flex; margin-top: 48px; }

/* ===== Left Sidebar ===== */
.sidebar {
  width: 288px;
  min-width: 288px;
  height: calc(100vh - 48px);
  overflow-y: auto;
  border-right: 1px solid #d1d9e0;
  padding: 12px 8px;
  position: fixed;
  top: 48px; left: 0;
  background: #fff;
}
.sidebar::-webkit-scrollbar { width: 4px; }
.sidebar::-webkit-scrollbar-thumb { background: #d1d9e0; border-radius: 6px; }

.sidebar-header {
  display: flex; align-items: center; gap: 8px;
  padding: 8px; margin-bottom: 4px;
}
.sidebar-header .repo-icon {
  width: 20px; height: 20px;
  background: #0969da;
  border-radius: 6px;
  display: flex; align-items: center; justify-content: center;
}
.sidebar-header .repo-icon svg { width: 12px; height: 12px; fill: #fff; }
.sidebar-header .repo-name { font-size: 14px; font-weight: 600; color: #1f2328; }

.nav-item {
  display: block;
  padding: 6px 8px;
  border-radius: 6px;
  font-size: 14px;
  color: #59636e;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;
  line-height: 1.5;
}
.nav-item:hover { background: #f6f8fa; }
.nav-item.active {
  background: #ddf4ff;
  color: #0550ae;
  font-weight: 500;
}
.nav-sub { padding-left: 16px; }
.nav-sub .nav-item { font-size: 14px; color: #59636e; padding: 4px 8px; }
.nav-group-label {
  padding: 6px 8px;
  font-size: 14px;
  font-weight: 600;
  color: #0550ae;
  margin-top: 4px;
}

/* ===== Main Content ===== */
.main {
  margin-left: 288px;
  flex: 1;
  max-width: 850px;
  padding: 32px 40px 80px 40px;
}

h1 { font-size: 22px; font-weight: 600; color: #0550ae; margin-bottom: 16px; line-height: 1.25; }
h2 { font-size: 20px; font-weight: 600; color: #0550ae; margin-top: 32px; margin-bottom: 16px; line-height: 1.25; }
h3 { font-size: 17px; font-weight: 600; color: #0550ae; margin-top: 24px; margin-bottom: 12px; line-height: 1.25; }
p { font-size: 14px; line-height: 1.5; color: #1f2328; margin-bottom: 16px; }

/* Inline code */
code {
  background: #eff1f3;
  padding: 3px 6px;
  border-radius: 6px;
  font-size: 11px;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
}

/* ===== Source Pills ===== */
.source-pill {
  display: inline-flex;
  align-items: stretch;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 12px;
  text-decoration: none;
  margin-bottom: 4px;
  margin-right: 4px;
  transition: opacity 0.15s;
  vertical-align: middle;
}
.source-pill:hover { opacity: 0.75; }
.source-pill .pill-left {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #ddf4ff;
  color: #0550ae;
  padding: 4px 8px;
  border-radius: 6px 0 0 6px;
  word-break: break-all;
}
.source-pill .pill-left svg { width: 14px; height: 14px; flex-shrink: 0; }
.source-pill .pill-right {
  background: #b6e3ff;
  color: #0550ae;
  padding: 4px 8px;
  border-radius: 0 6px 6px 0;
  white-space: nowrap;
}

/* ===== Collapsible Details ===== */
details {
  border: 1px solid #d1d9e0;
  border-radius: 6px;
  padding: 0;
  margin-bottom: 16px;
}
details summary {
  font-size: 14px;
  color: #1f2328;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 500;
  list-style: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
details summary::-webkit-details-marker { display: none; }
details summary::before {
  content: '▶';
  font-size: 10px;
  transition: transform 0.2s;
  color: #999;
}
details[open] summary::before { transform: rotate(90deg); }
details .details-content { padding: 0 12px 12px 12px; }

/* ===== Tables ===== */
table { width: 100%; border-collapse: collapse; font-size: 12.95px; margin-bottom: 16px; }
th { font-weight: 600; text-align: left; padding: 8px 12px; border-bottom: 1px solid #d1d9e0; color: #1f2328; }
td { padding: 8px 12px; border-bottom: 1px solid #d1d9e0; color: #1f2328; }
tr:last-child td { border-bottom: none; }

/* ===== Lists ===== */
ul, ol { padding-left: 24px; margin-bottom: 16px; }
li { margin-bottom: 6px; font-size: 14px; line-height: 1.5; color: #1f2328; }

/* ===== SVG Diagram Container ===== */
.mermaid-container {
  background: #ffffff;
  border: 1px solid #d1d9e0;
  border-radius: 6px;
  padding: 20px 16px;
  margin: 16px 0;
  overflow-x: auto;
  text-align: center;
}

/* ===== Code Blocks - GitHub Light ===== */
pre {
  background: #f6f8fa;
  color: #24292f;
  border: 1px solid #d1d9e0;
  border-radius: 6px;
  padding: 16px;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
  margin-bottom: 16px;
}
pre code { background: none; padding: 0; border-radius: 0; font-size: 13px; color: #24292f; }
pre .comment { color: #6e7781; }
pre .keyword { color: #cf222e; }
pre .string { color: #0a3069; }
pre .function { color: #8250df; }
pre .variable { color: #953800; }

/* ===== Links ===== */
a { color: #0969da; text-decoration: none; }
a:hover { text-decoration: underline; }

/* ===== Right TOC ===== */
.right-toc {
  position: fixed;
  top: 48px; right: 0;
  width: 220px;
  height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 24px 16px;
  font-size: 12px;
}
.right-toc-title {
  font-size: 11px;
  font-weight: 600;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}
.right-toc a { display: block; color: #59636e; text-decoration: none; padding: 3px 0; font-size: 12px; line-height: 1.5; }
.right-toc a:hover { color: #1f2328; }
.right-toc a.active { color: #0969da; font-weight: 500; }
```

## HTML Structure

### Document Skeleton

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{owner}/{repo} - DeepWiki</title>
  <!-- System font stacks — no external font imports needed -->
  <style>
    /* ... all CSS from above ... */
  </style>
</head>
<body>
  <!-- Top bar -->
  <!-- Layout: sidebar + main + right TOC -->
</body>
</html>
```

### Top Bar

```html
<div class="top-bar">
  <a class="top-bar-logo" href="#">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 12l2 2 4-4"/>
    </svg>
    DeepWiki
  </a>
  <span style="color:#59636e;font-size:14px;margin-left:4px;">{owner}/{repo}</span>
  <div class="top-bar-right">
    <a href="#" style="display:flex;align-items:center;gap:4px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
        <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
      </svg> Edit Wiki
    </a>
    <a class="ask-btn" href="#" style="background:#1f883d;">Share</a>
  </div>
</div>
```

### Sidebar Navigation

```html
<nav class="sidebar">
  <div style="font-size:12px;color:#999;padding:4px 8px 8px 8px;">
    Last indexed: {date} ({commit_hash_short})
  </div>

  <!-- Top-level items -->
  <a class="nav-item active" href="#overview">概述</a>
  <a class="nav-item" href="#core-concepts">核心概念</a>

  <!-- Grouped items -->
  <div class="nav-group-label">组名称</div>
  <div class="nav-sub">
    <a class="nav-item" href="#section-id">子项名称</a>
    <a class="nav-item" href="#section-id">子项名称</a>
  </div>
</nav>
```

### Source Pill (Standalone and Inline)

The GitHub octocat SVG is used inside every source pill:

```html
<div class="source-pill">
  <span class="pill-left">
    <svg viewBox="0 0 16 16" width="14" height="14">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/>
    </svg>
    path/to/file.ts
  </span>
  <span class="pill-right">1-100</span>
</div>
```

For pills without line numbers, omit `.pill-right` and give `.pill-left` full border-radius:
```html
<div class="source-pill">
  <span class="pill-left" style="border-radius:6px;">
    <svg>...</svg> path/to/file.ts
  </span>
</div>
```

### Section Content Pattern

```html
<section id="section-id">
  <h2>章节标题</h2>

  <!-- Collapsible sources at top -->
  <details open>
    <summary>Relevant source files</summary>
    <div class="details-content" style="display:flex;flex-wrap:wrap;gap:4px;padding-top:8px;">
      <!-- source pills here -->
    </div>
  </details>

  <!-- Introductory paragraph -->
  <p>这个模块负责...</p>

  <!-- SVG diagram -->
  <div class="mermaid-container">
    <svg viewBox="0 0 W H" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
      <!-- diagram content -->
    </svg>
  </div>

  <!-- Explanation paragraph with inline source pills -->
  <p>在 <div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg>...</svg> server/src/index.ts</span><span class="pill-right">69-100</span></div> 中定义了主要的启动逻辑。</p>

  <!-- Summary table -->
  <table>
    <thead><tr><th>名称</th><th>说明</th><th>位置</th></tr></thead>
    <tbody>
      <tr><td><code>name</code></td><td>说明文字</td><td><code>file.ts</code></td></tr>
    </tbody>
  </table>

  <!-- Sources block at bottom -->
  <p style="margin-bottom:8px;"><strong>Sources:</strong></p>
  <div style="margin-bottom:16px;">
    <!-- source pills -->
  </div>
</section>
```

### Code Block with Syntax Highlighting

```html
<pre><code><span class="comment">// 导入依赖</span>
<span class="keyword">import</span> { createApp } <span class="keyword">from</span> <span class="string">'./app'</span>;
<span class="keyword">const</span> <span class="variable">server</span> = <span class="function">createApp</span>();
server.<span class="function">listen</span>(<span class="variable">PORT</span>);</code></pre>
```

### Right TOC

```html
<div class="right-toc">
  <div class="right-toc-title">On this page</div>
  <a href="#overview" class="active">概述</a>
  <a href="#core-concepts">核心概念</a>
  <a href="#section-id">章节标题</a>
  <!-- ... -->
</div>
```

## Enhanced Content Patterns (from Real DeepWiki Analysis)

The following patterns were extracted from analyzing multiple real DeepWiki pages (deer-flow, langgraph, next.js, react). These are CRITICAL for matching real DeepWiki content depth.

### Table with Source Pills in Cells

Real DeepWiki embeds source pills directly inside table cells. This is especially common for tables showing services, middleware, or component mappings:

```html
<table>
  <thead>
    <tr><th>Service</th><th>Port</th><th>Purpose</th><th>Main Entry Point</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Nginx</strong></td>
      <td>2026</td>
      <td>Unified reverse proxy, routing, and CORS</td>
      <td><div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor"/></svg> backend/CLAUDE.md</span><span class="pill-right">13</span></div></td>
    </tr>
    <tr>
      <td><strong>Gateway API</strong></td>
      <td>8001</td>
      <td>FastAPI REST endpoints for models, skills, memory</td>
      <td>
        <div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/CLAUDE.md</span><span class="pill-right">11</span></div>
        <div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/app/gateway/app.py</span><span class="pill-right">54</span></div>
      </td>
    </tr>
  </tbody>
</table>
```

### Middleware/Component Table Pattern

For listing middleware pipelines, components, or configurations:

```html
<table>
  <thead>
    <tr><th>Middleware</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>ThreadDataMiddleware</code></td><td>Creates per-thread isolated directories (workspace, uploads, outputs)</td></tr>
    <tr><td><code>UploadsMiddleware</code></td><td>Injects newly uploaded files into conversation context</td></tr>
    <tr><td><code>SandboxMiddleware</code></td><td>Acquires sandbox environment for code execution</td></tr>
    <tr><td><code>SummarizationMiddleware</code></td><td>Reduces context when approaching token limits</td></tr>
  </tbody>
</table>
```

### Section Separator

Between every H2 section, use a horizontal rule:

```html
<hr style="border:none;border-top:1px solid #d1d9e0;margin:32px 0;">
```

### Cross-Reference Navigation Pattern

Overview pages should include navigation to child sections:

```html
<p>For full API details on each subsystem, see the child pages:</p>
<ul>
  <li>State schemas, <code>add_node</code>, <code>compile()</code> → <a href="#stategraph-api"><strong>StateGraph API</strong></a></li>
  <li><code>@task</code> and <code>@entrypoint</code> → <a href="#functional-api"><strong>Functional API</strong></a></li>
  <li>Superstep cycle internals → <a href="#pregel-engine"><strong>Pregel Execution Engine</strong></a></li>
</ul>
```

### Complete Section Example (matching real DeepWiki density)

This shows a complete H2 section with all required elements:

```html
<h2 id="lead-agent">Lead Agent and Middleware</h2>

<p>The runtime entry point is the <code>lead_agent</code>, created via <code>make_lead_agent(config)</code>
<div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/langgraph.json</span><span class="pill-right">9</span></div>
. It processes messages through a sequential middleware chain
<div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/CLAUDE.md</span><span class="pill-right">31</span></div>
:</p>

<table>
  <thead><tr><th>Middleware</th><th>Purpose</th></tr></thead>
  <tbody>
    <tr><td><code>ThreadDataMiddleware</code></td><td>Creates per-thread isolated directories</td></tr>
    <tr><td><code>UploadsMiddleware</code></td><td>Injects uploaded files into context</td></tr>
    <tr><td><code>SandboxMiddleware</code></td><td>Acquires sandbox for code execution</td></tr>
    <tr><td><code>MemoryMiddleware</code></td><td>Queues conversations for async memory extraction</td></tr>
  </tbody>
</table>

<p style="margin-bottom:8px;"><strong>Sources:</strong>
  <div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/CLAUDE.md</span><span class="pill-right">31</span></div>
  <div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/CLAUDE.md</span><span class="pill-right">135-143</span></div>
  <div class="source-pill" style="display:inline-flex;"><span class="pill-left"><svg viewBox="0 0 16 16" width="14" height="14"><path d="M8 0C3.58..." fill="currentColor"/></svg> backend/langgraph.json</span><span class="pill-right">9</span></div>
</p>

<hr style="border:none;border-top:1px solid #d1d9e0;margin:32px 0;">
```

### Deep Sidebar Pattern (30-60 items)

The sidebar must have deep nesting. Each group should have 5-15 sub-items:

```html
<nav class="sidebar">
  <div style="font-size:12px;color:#999;padding:4px 8px 8px 8px;">
    Last indexed: 24 March 2026 (48a197)
  </div>

  <a class="nav-item active" href="#overview">Overview</a>

  <a class="nav-item" href="#getting-started">Getting Started</a>
  <div class="nav-sub">
    <a class="nav-item" href="#prerequisites">Prerequisites and Installation</a>
    <a class="nav-item" href="#config-quickstart">Configuration Quickstart</a>
  </div>

  <div class="nav-group-label">Architecture</div>
  <div class="nav-sub">
    <a class="nav-item" href="#service-topology">Service Topology</a>
    <a class="nav-item" href="#harness-vs-app">Harness vs App Layer</a>
  </div>

  <div class="nav-group-label">Frontend Application</div>
  <div class="nav-sub">
    <a class="nav-item" href="#app-layout">Application Layout and Routing</a>
    <a class="nav-item" href="#chat-interface">Chat Interface and Thread Management</a>
    <a class="nav-item" href="#input-system">Input System and Mode Selection</a>
    <a class="nav-item" href="#message-rendering">Message Rendering System</a>
    <a class="nav-item" href="#subtasks">Subtasks and Subagent Tracking</a>
    <a class="nav-item" href="#artifacts">Artifacts and File Display</a>
    <a class="nav-item" href="#settings-ui">Settings and Configuration UI</a>
    <a class="nav-item" href="#state-mgmt">State Management and Hooks</a>
    <a class="nav-item" href="#styling">Styling System and UI Components</a>
    <a class="nav-item" href="#i18n">Internationalization</a>
  </div>

  <div class="nav-group-label">Backend System</div>
  <div class="nav-sub">
    <a class="nav-item" href="#api-gateway">API Gateway</a>
    <a class="nav-item" href="#langgraph-server">LangGraph Agent Server</a>
    <a class="nav-item" href="#lead-agent">Lead Agent and System Prompt</a>
    <a class="nav-item" href="#middleware">Middleware Pipeline</a>
    <a class="nav-item" href="#subagent">Subagent System and Task Delegation</a>
    <a class="nav-item" href="#tools">Tool System</a>
    <a class="nav-item" href="#skills">Skills System</a>
    <a class="nav-item" href="#memory">Memory System</a>
    <a class="nav-item" href="#thread-state">Thread State and Data Management</a>
    <a class="nav-item" href="#sandbox">Sandbox Architecture and Providers</a>
  </div>

  <div class="nav-group-label">Configuration System</div>
  <div class="nav-sub">
    <a class="nav-item" href="#config-loading">Configuration Loading and Structure</a>
    <a class="nav-item" href="#model-config">Model Configuration</a>
    <a class="nav-item" href="#tool-config">Tool Configuration</a>
    <a class="nav-item" href="#mcp-config">MCP Server Configuration</a>
    <a class="nav-item" href="#skills-config">Skills Configuration</a>
  </div>
</nav>
```

### Anchor Navigation JavaScript (REQUIRED)

Add this script before `</body>` to enable smooth anchor navigation and scroll spy:

```html
<script>
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, null, a.getAttribute('href'));
    }
  });
});

// Scroll spy for sidebar and TOC active state
const sections = document.querySelectorAll('section[id], h2[id], h3[id]');
const navItems = document.querySelectorAll('.sidebar .nav-item');
const tocLinks = document.querySelectorAll('.right-toc a');

function updateActive() {
  let current = '';
  sections.forEach(s => {
    if (s.getBoundingClientRect().top <= 100) current = s.id;
  });
  navItems.forEach(item => {
    item.classList.toggle('active', item.getAttribute('href') === '#' + current);
  });
  tocLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}
window.addEventListener('scroll', updateActive);

// Handle initial hash on page load
if (location.hash) {
  setTimeout(() => {
    const t = document.querySelector(location.hash);
    if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}
</script>
```
