# SVG Diagram Patterns for CC-Wiki

> For full design system tokens (colors, typography, spacing), see `design-system.md`.

This reference contains patterns for creating hand-drawn SVG architecture diagrams adapted for both CC-Wiki themes.

---

## Color Palettes

### Dark Theme SVG Colors

SVG diagrams in the dark theme should use muted, warm tones that harmonize with the charcoal + terracotta palette.

| Layer | Fill | Stroke | Label Color | Inner Text |
|-------|------|--------|-------------|------------|
| Primary (Terracotta) | `rgba(201,100,66,0.15)` | `#c96442` | `#d97757` | `#F0D0C0` |
| Secondary (Indigo) | `rgba(58,79,122,0.15)` | `#3A4F7A` | `#6B82A8` | `#B0C4E0` |
| Tertiary (Green) | `rgba(74,140,92,0.12)` | `#4A8C5C` | `#6AAF7C` | `#B0D8BC` |
| Quaternary (Yellow) | `rgba(184,134,11,0.12)` | `#B8860B` | `#D4A840` | `#E8D0A0` |
| Utility (Purple) | `rgba(123,94,167,0.12)` | `#7B5EA7` | `#9B80C0` | `#C8B8D8` |

Inner boxes (components within a layer):
- Fill: `#141413` (dark base, matching body bg)
- Stroke: layer's lighter shade
- Text: layer's inner text color

Background for the SVG container in dark sections:
```css
/* Use transparent bg to blend with section */
.mermaid-container {
  background: transparent;
  border: 1px solid #30302e;
  border-radius: 12px;
  padding: 20px 16px;
  margin: 1.5rem 0;
  overflow-x: auto;
  text-align: center;
}
```

### Light Theme SVG Colors

SVG diagrams in the light theme should use the same palette as the DeepWiki-style blue theme or the warm amber tones.

**Option A — Blue-toned (matches DeepWiki)**

| Layer | Fill | Stroke | Label Color | Inner Text |
|-------|------|--------|-------------|------------|
| Client/Frontend (Blue) | `#dbeafe` | `#3b82f6` | `#3b82f6` | `#1e3a5f` |
| Server/Backend (Yellow) | `#fef3c7` | `#f59e0b` | `#b45309` | `#78350f` |
| Data/Storage (Green) | `#dcfce7` | `#22c55e` | `#15803d` | `#14532d` |
| Adapters/Plugins (Pink) | `#fce7f3` | `#ec4899` | `#be185d` | `#831843` |
| Shared/Utility (Indigo) | `#e0e7ff` | `#6366f1` | `#3730a3` | `#3730a3` |

**Option B — Warm-toned (matches light theme amber palette)**

| Layer | Fill | Stroke | Label Color | Inner Text |
|-------|------|--------|-------------|------------|
| Primary (Amber) | `#FEF3C7` | `#D97706` | `#92400E` | `#78350f` |
| Secondary (Blue) | `#DBEAFE` | `#2563EB` | `#1E40AF` | `#1e3a5f` |
| Tertiary (Green) | `#D1FAE5` | `#059669` | `#065F46` | `#064e3b` |
| Quaternary (Purple) | `#EDE9FE` | `#7C3AED` | `#5B21B6` | `#4c1d95` |
| Alert (Red) | `#FEE2E2` | `#DC2626` | `#991B1B` | `#7f1d1d` |

Inner boxes:
- Fill: `#fff` (white)
- Stroke: layer's lighter shade

Background for the SVG container in light theme:
```css
.mermaid-container {
  background: #ffffff;
  border: 1px solid #f0eee6;
  border-radius: 12px;
  padding: 24px 20px;
  margin: 28px 0;
  overflow-x: auto;
  text-align: center;
}
```

---

## Arrow Marker Definitions

Every SVG needs arrow markers in `<defs>`. Use unique IDs when multiple diagrams exist on one page.

### Dark Theme Arrows
```xml
<defs>
  <marker id="arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6" fill="#8A8A8A"/>
  </marker>
</defs>
```

### Light Theme Arrows
```xml
<defs>
  <marker id="arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
    <path d="M0,0 L8,3 L0,6" fill="#6b7280"/>
  </marker>
</defs>
```

---

## Diagram Type 1: Layered Architecture

Shows system layers stacked vertically with components inside.

### Dark Theme Example

```xml
<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#8A8A8A"/>
    </marker>
  </defs>

  <!-- Layer group rectangle -->
  <rect x="20" y="10" width="710" height="80" rx="8"
        fill="rgba(201,100,66,0.15)" stroke="#c96442" stroke-width="1.5"/>
  <text x="375" y="30" text-anchor="middle"
        font-size="11" fill="#d97757" font-weight="600">层名称</text>

  <!-- Component box inside layer -->
  <rect x="35" y="40" width="140" height="40" rx="6"
        fill="#141413" stroke="rgba(217,119,87,0.4)"/>
  <text x="105" y="57" text-anchor="middle"
        font-size="10" fill="#F0D0C0" font-weight="500">组件名</text>
  <text x="105" y="71" text-anchor="middle"
        font-size="8" fill="#8A8A8A">描述文字</text>

  <!-- Arrow between layers -->
  <line x1="375" y1="90" x2="375" y2="110"
        stroke="#8A8A8A" stroke-width="1.2" marker-end="url(#arr1)"/>
</svg>
```

### Light Theme Example

```xml
<svg viewBox="0 0 750 300" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr1" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#6b7280"/>
    </marker>
  </defs>

  <!-- Layer group rectangle -->
  <rect x="20" y="10" width="710" height="80" rx="8"
        fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
  <text x="375" y="30" text-anchor="middle"
        font-size="11" fill="#92400E" font-weight="600">层名称</text>

  <!-- Component box inside layer -->
  <rect x="35" y="40" width="140" height="40" rx="6"
        fill="#fff" stroke="#FCD34D"/>
  <text x="105" y="57" text-anchor="middle"
        font-size="10" fill="#78350f" font-weight="500">组件名</text>
  <text x="105" y="71" text-anchor="middle"
        font-size="8" fill="#6b7280">描述文字</text>

  <!-- Arrow between layers -->
  <line x1="375" y1="90" x2="375" y2="110"
        stroke="#6b7280" stroke-width="1.2" marker-end="url(#arr1)"/>
</svg>
```

---

## Diagram Type 2: Flow / Sequence

Shows step-by-step processes horizontally.

### Dark Theme

```xml
<svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#8A8A8A"/>
    </marker>
  </defs>

  <rect x="20" y="30" width="120" height="50" rx="6"
        fill="rgba(201,100,66,0.15)" stroke="#c96442"/>
  <text x="80" y="52" text-anchor="middle"
        font-size="10" fill="#d97757" font-weight="500">步骤 1</text>
  <text x="80" y="68" text-anchor="middle"
        font-size="8" fill="#8A8A8A">说明</text>

  <line x1="140" y1="55" x2="170" y2="55"
        stroke="#8A8A8A" stroke-width="1.2" marker-end="url(#arr2)"/>

  <rect x="170" y="30" width="120" height="50" rx="6"
        fill="rgba(58,79,122,0.15)" stroke="#3A4F7A"/>
  <text x="230" y="52" text-anchor="middle"
        font-size="10" fill="#6B82A8" font-weight="500">步骤 2</text>
  <text x="230" y="68" text-anchor="middle"
        font-size="8" fill="#8A8A8A">说明</text>
</svg>
```

### Light Theme

```xml
<svg viewBox="0 0 700 120" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#6b7280"/>
    </marker>
  </defs>

  <rect x="20" y="30" width="120" height="50" rx="6"
        fill="#FEF3C7" stroke="#D97706"/>
  <text x="80" y="52" text-anchor="middle"
        font-size="10" fill="#92400E" font-weight="500">步骤 1</text>
  <text x="80" y="68" text-anchor="middle"
        font-size="8" fill="#6b7280">说明</text>

  <line x1="140" y1="55" x2="170" y2="55"
        stroke="#6b7280" stroke-width="1.2" marker-end="url(#arr2)"/>

  <rect x="170" y="30" width="120" height="50" rx="6"
        fill="#DBEAFE" stroke="#2563EB"/>
  <text x="230" y="52" text-anchor="middle"
        font-size="10" fill="#1E40AF" font-weight="500">步骤 2</text>
  <text x="230" y="68" text-anchor="middle"
        font-size="8" fill="#6b7280">说明</text>
</svg>
```

---

## Diagram Type 3: Entity Relationship

Shows domain entities and their relationships with connecting arrows.

```xml
<svg viewBox="0 0 650 200" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#8A8A8A"/>
    </marker>
  </defs>

  <!-- Central entity -->
  <rect x="250" y="10" width="130" height="40" rx="6"
        fill="rgba(201,100,66,0.15)" stroke="#c96442"/>
  <text x="315" y="35" text-anchor="middle"
        font-size="12" fill="#d97757" font-weight="600">核心实体</text>

  <!-- Related entities -->
  <rect x="30" y="80" width="100" height="36" rx="6"
        fill="rgba(58,79,122,0.15)" stroke="#3A4F7A"/>
  <text x="80" y="103" text-anchor="middle"
        font-size="11" fill="#6B82A8" font-weight="500">子实体 A</text>

  <rect x="500" y="80" width="100" height="36" rx="6"
        fill="rgba(74,140,92,0.12)" stroke="#4A8C5C"/>
  <text x="550" y="103" text-anchor="middle"
        font-size="11" fill="#6AAF7C" font-weight="500">子实体 B</text>

  <!-- Arrows -->
  <line x1="280" y1="50" x2="100" y2="80"
        stroke="#8A8A8A" stroke-width="1" marker-end="url(#arr3)"/>
  <line x1="350" y1="50" x2="530" y2="80"
        stroke="#8A8A8A" stroke-width="1" marker-end="url(#arr3)"/>
</svg>
```

---

## Diagram Type 4: State Machine

Shows states as rounded pill shapes with labeled transitions.

```xml
<svg viewBox="0 0 700 100" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <defs>
    <marker id="arr4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <path d="M0,0 L8,3 L0,6" fill="#8A8A8A"/>
    </marker>
  </defs>

  <!-- States -->
  <rect x="20" y="30" width="100" height="40" rx="20"
        fill="rgba(201,100,66,0.15)" stroke="#c96442"/>
  <text x="70" y="55" text-anchor="middle"
        font-size="10" fill="#d97757" font-weight="500">初始</text>

  <rect x="200" y="30" width="100" height="40" rx="20"
        fill="rgba(58,79,122,0.15)" stroke="#3A4F7A"/>
  <text x="250" y="55" text-anchor="middle"
        font-size="10" fill="#6B82A8" font-weight="500">处理中</text>

  <rect x="380" y="30" width="100" height="40" rx="20"
        fill="rgba(74,140,92,0.12)" stroke="#4A8C5C"/>
  <text x="430" y="55" text-anchor="middle"
        font-size="10" fill="#6AAF7C" font-weight="500">完成</text>

  <!-- Transition arrows with labels -->
  <line x1="120" y1="50" x2="200" y2="50"
        stroke="#8A8A8A" stroke-width="1.2" marker-end="url(#arr4)"/>
  <text x="160" y="43" text-anchor="middle"
        font-size="8" fill="#8A8A8A">触发</text>

  <line x1="300" y1="50" x2="380" y2="50"
        stroke="#8A8A8A" stroke-width="1.2" marker-end="url(#arr4)"/>
  <text x="340" y="43" text-anchor="middle"
        font-size="8" fill="#8A8A8A">完成</text>
</svg>
```

---

## Diagram Type 5: Directory/Package Structure

Shows folder hierarchy as grouped boxes.

```xml
<svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg" style="max-width:100%;height:auto;">
  <!-- Group: Applications -->
  <rect x="20" y="10" width="200" height="100" rx="8"
        fill="rgba(201,100,66,0.15)" stroke="#c96442" stroke-width="1.5"/>
  <text x="120" y="30" text-anchor="middle"
        font-size="11" fill="#d97757" font-weight="600">应用层</text>

  <rect x="35" y="40" width="80" height="28" rx="4"
        fill="#141413" stroke="rgba(217,119,87,0.3)"/>
  <text x="75" y="59" text-anchor="middle"
        font-size="10" fill="#F0D0C0">cli/</text>

  <rect x="125" y="40" width="80" height="28" rx="4"
        fill="#141413" stroke="rgba(217,119,87,0.3)"/>
  <text x="165" y="59" text-anchor="middle"
        font-size="10" fill="#F0D0C0">sdk/</text>

  <!-- Group: Core -->
  <rect x="260" y="10" width="200" height="100" rx="8"
        fill="rgba(58,79,122,0.15)" stroke="#3A4F7A" stroke-width="1.5"/>
  <text x="360" y="30" text-anchor="middle"
        font-size="11" fill="#6B82A8" font-weight="600">核心层</text>

  <rect x="275" y="40" width="80" height="28" rx="4"
        fill="#141413" stroke="rgba(107,130,168,0.3)"/>
  <text x="315" y="59" text-anchor="middle"
        font-size="10" fill="#B0C4E0">engine/</text>
</svg>
```

---

## General Guidelines

1. **viewBox sizing**: Width 600-750, height based on content (100-420)
2. **Always add** `style="max-width:100%;height:auto;"` to the SVG element
3. **Text sizing**: Group titles `11px`, component names `10-11px`, subtitles `8-9px`
4. **Spacing**: 20px padding inside group rectangles, 10-15px between component boxes
5. **Arrow colors**: Dark theme `#8A8A8A`, Light theme `#6b7280`
6. **Use Chinese labels** for all diagram text
7. **Wrap SVGs** in `<div class="mermaid-container">` for consistent borders and padding
8. **Unique marker IDs**: Use `arr1`, `arr2`, `arr3`... to avoid conflicts across multiple diagrams
9. **Dark theme specifics**: Use semi-transparent fills (`rgba`) for layer backgrounds, solid `#141413` for inner boxes
10. **Light theme specifics**: Use opaque pastel fills for layers, white `#fff` for inner boxes
