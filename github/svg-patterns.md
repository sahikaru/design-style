> Aligned with GitHub Primer design system — see `design-system.md` for authoritative color tokens.

# SVG Diagram Patterns

This reference contains patterns for creating hand-drawn SVG architecture diagrams in the DeepWiki style.

## Color Palette for Diagram Layers

Each architectural layer gets a distinct color group:

| Layer | Fill | Stroke | Label Color | Inner Text |
|-------|------|--------|-------------|------------|
| Client/Frontend (Blue) | #dbeafe | #3b82f6 | #3b82f6 | #1e3a5f |
| Server/Backend (Yellow) | #fef3c7 | #f59e0b | #b45309 | #78350f |
| Data/Storage (Green) | #dcfce7 | #22c55e | #15803d | #14532d |
| Adapters/Plugins (Pink) | #fce7f3 | #ec4899 | #be185d | #831843 |
| Shared/Utility (Indigo) | #e0e7ff | #6366f1 | #3730a3 | #3730a3 |

Inner boxes (components within a layer) use:
- Fill: #fff (white)
- Stroke: the layer's lighter shade (e.g., #93c5fd for blue, #fcd34d for yellow)

## Arrow Marker Definition

Every SVG needs an arrow marker. Place in `<defs>`:

```xml
<defs>
  <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6" fill="#59636e"/>
  </marker>
</defs>
```

Use with: `marker-end="url(#arrow)"`

If using multiple arrow IDs (e.g., for different sections), give each a unique ID like `arr1`, `arr2`, etc.

## Diagram Type 1: Layered Architecture

Shows system layers stacked vertically with components inside:

```xml
<svg viewBox="0 0 750 420" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#59636e"/>
    </marker>
  </defs>

  <!-- Layer group rectangle -->
  <rect x="20" y="10" width="340" height="90" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="190" y="30" text-anchor="middle" font-size="11" fill="#3b82f6" font-weight="600">层名称</text>

  <!-- Component box inside layer -->
  <rect x="35" y="42" width="145" height="48" rx="6" fill="#fff" stroke="#93c5fd"/>
  <text x="107" y="62" text-anchor="middle" font-size="11" fill="#1e3a5f" font-weight="500">组件名</text>
  <text x="107" y="78" text-anchor="middle" font-size="9" fill="#64748b">技术说明</text>

  <!-- Arrow between layers -->
  <line x1="107" y1="90" x2="95" y2="162" stroke="#59636e" stroke-width="1.2" marker-end="url(#arrow)"/>
</svg>
```

Key patterns:
- Group rectangles: `rx="8"`, `stroke-width="1.5"`
- Component boxes: `rx="6"`, white fill, colored stroke
- Title text: `font-size="11"`, `font-weight="600"`, layer stroke color
- Component name: `font-size="11"` or `"10"`, `font-weight="500"`
- Subtitle text: `font-size="9"`, `fill="#64748b"` (or layer's inner text color)
- Arrows: `stroke="#59636e"`, `stroke-width="1.2"`
- Dashed arrows (optional relationships): add `stroke-dasharray="4"`

## Diagram Type 2: Entity Relationship

Shows domain entities and their relationships:

```xml
<svg viewBox="0 0 650 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#59636e"/>
    </marker>
  </defs>

  <!-- Primary entity (blue) -->
  <rect x="250" y="10" width="130" height="40" rx="6" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="315" y="35" text-anchor="middle" font-size="12" fill="#1e3a5f" font-weight="600">Entity</text>

  <!-- Secondary entities (yellow) -->
  <rect x="30" y="80" width="100" height="36" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="80" y="103" text-anchor="middle" font-size="11" fill="#78350f" font-weight="500">Child</text>

  <!-- Relationship arrow -->
  <line x1="280" y1="50" x2="80" y2="80" stroke="#59636e" stroke-width="1" marker-end="url(#arr2)"/>
</svg>
```

## Diagram Type 3: Directory/Tree Structure

Shows package/folder organization:

```xml
<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <!-- Group: Applications -->
  <rect x="20" y="10" width="200" height="110" rx="8" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="120" y="30" text-anchor="middle" font-size="11" fill="#3b82f6" font-weight="600">应用程序</text>

  <!-- Small item boxes -->
  <rect x="35" y="40" width="80" height="28" rx="4" fill="#fff" stroke="#93c5fd"/>
  <text x="75" y="59" text-anchor="middle" font-size="10" fill="#1e3a5f">cli/</text>

  <!-- Group: Packages -->
  <rect x="250" y="10" width="210" height="110" rx="8" fill="#dcfce7" stroke="#22c55e" stroke-width="1.5"/>
  <text x="355" y="30" text-anchor="middle" font-size="11" fill="#15803d" font-weight="600">内部包</text>

  <!-- Dependency arrows between groups -->
  <line x1="165" y1="120" x2="307" y2="40" stroke="#59636e" stroke-width="1" marker-end="url(#arr)"/>
</svg>
```

## Diagram Type 4: Sequence / Flow

Shows step-by-step processes:

```xml
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#59636e"/>
    </marker>
  </defs>

  <!-- Step boxes -->
  <rect x="20" y="60" width="120" height="50" rx="6" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="80" y="82" text-anchor="middle" font-size="10" fill="#1e3a5f" font-weight="500">步骤 1</text>
  <text x="80" y="98" text-anchor="middle" font-size="9" fill="#64748b">说明</text>

  <rect x="180" y="60" width="120" height="50" rx="6" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="240" y="82" text-anchor="middle" font-size="10" fill="#78350f" font-weight="500">步骤 2</text>

  <!-- Flow arrows -->
  <line x1="140" y1="85" x2="180" y2="85" stroke="#59636e" stroke-width="1.2" marker-end="url(#arr4)"/>
</svg>
```

## Diagram Type 5: State Machine

Shows state transitions:

```xml
<svg viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <!-- States as rounded boxes -->
  <rect x="20" y="55" width="100" height="40" rx="20" fill="#dbeafe" stroke="#3b82f6"/>
  <text x="70" y="80" text-anchor="middle" font-size="10" fill="#1e3a5f" font-weight="500">初始</text>

  <rect x="160" y="55" width="100" height="40" rx="20" fill="#fef3c7" stroke="#f59e0b"/>
  <text x="210" y="80" text-anchor="middle" font-size="10" fill="#78350f" font-weight="500">处理中</text>

  <!-- Transition arrows with labels -->
  <line x1="120" y1="75" x2="160" y2="75" stroke="#59636e" stroke-width="1.2" marker-end="url(#arrow)"/>
  <text x="140" y="68" text-anchor="middle" font-size="8" fill="#59636e">触发</text>
</svg>
```

## General Guidelines

1. **viewBox sizing**: Choose width 600-750, height based on content (usually 150-420)
2. **Always add** `style="max-width:100%;height:auto;"` to the SVG element
3. **Text sizing**: Group titles 11px, component names 10-11px, subtitles 8-9px
4. **Spacing**: Leave 20px padding inside group rectangles, 10-15px between component boxes
5. **Arrow colors**: Always use #59636e (Primer fgColor-muted) for connection lines
6. **Use Chinese labels** for all diagram text (layer names, component descriptions)
7. **Wrap SVGs** in a `<div class="mermaid-container">` with Primer border tokens: `border: 1px solid #d1d9e0; border-radius: 6px;` and consistent padding
8. **Unique marker IDs**: If the page has multiple diagrams, use unique marker IDs (arr1, arr2, arr3...) to avoid conflicts
9. **Diagram layer colors**: SVG diagram layer colors are intentionally outside the Primer semantic token system — they use Tailwind-compatible pastel fills for visual differentiation of architectural layers.
