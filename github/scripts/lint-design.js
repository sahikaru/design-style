#!/usr/bin/env node
/**
 * lint-design.js — GitHub Design System guardrail linter
 *
 * Scans HTML/CSS files for violations of the project's hard rules:
 *   1. system-mixing      (ERROR)  Same file uses --gh-product-* AND --gh-brand-*
 *   2. legacy-var-naming  (ERROR)  Old --brand-* / --color-* / bare --gh-canvas detected
 *   3. hot-link-cdn       (WARN)   References external GitHub CDN instead of assets/
 *   4. unknown-hex        (WARN)   Hex color not in the approved Primer palette  [--strict only]
 *
 * Usage:
 *   node scripts/lint-design.js previews/*.html
 *   node scripts/lint-design.js --strict previews/*.html
 *
 * Exit code: 0 = clean, 1 = errors found, 2 = invocation error.
 *
 * Zero dependencies — uses Node.js stdlib only.
 */

'use strict';
const fs = require('fs');

const C = {
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m',
  bold: '\x1b[1m',
  reset: '\x1b[0m',
};

// ---------------------------------------------------------------------------
// Approved hex palette (Primer Light + Dark + Brand + syntax themes + diagrams)
// Sourced from design-system.md, brand-spec.md, code-highlighting.md, svg-patterns.md
// ---------------------------------------------------------------------------
const ALLOWED_HEXES = new Set([
  // Primer Light
  '#ffffff', '#f6f8fa', '#1f2328', '#59636e', '#818b98', '#0969da', '#0550ae',
  '#1a7f37', '#1f883d', '#dafbe1', '#d1242f', '#cf222e', '#ffebe9',
  '#9a6700', '#fff8c5', '#8250df', '#fbefff', '#bf3989', '#ffeff7',
  '#d1d9e0', '#ddf4ff', '#25292e',
  // Primer Dark
  '#141413', '#1c1c1b', '#161615', '#0d1117', '#161b22',
  '#e6edf3', '#8b949e', '#484f58', '#58a6ff', '#1f6feb', '#121d2f',
  '#3fb950', '#238636', '#12261e', '#f85149', '#da3633', '#2d1214',
  '#d29922', '#9e6a03', '#272115', '#a371f7', '#8957e5', '#211e34',
  '#db61a2', '#bf4b8a', '#2d1524', '#21262d', '#30363d', '#6e7681',
  // Primer Brand
  '#000000', '#5fed83', '#7cffa0', '#9198a1', '#3d444d', '#151b23', '#656d76',
  // Syntax themes
  '#6e7781', '#0a3069', '#116329', '#953800', '#82071e',
  '#79c0ff', '#a5d6ff', '#d2a8ff', '#7ee787', '#ffa657', '#ff7b72',
  '#aff5b4', '#033a16', '#ffdcd7', '#67060c',
  // SVG diagram palette (svg-patterns.md)
  '#dbeafe', '#3b82f6', '#1e3a5f', '#fef3c7', '#f59e0b', '#b45309', '#78350f',
  '#dcfce7', '#22c55e', '#15803d', '#14532d', '#fce7f3', '#ec4899',
  '#be185d', '#831843', '#e0e7ff', '#6366f1', '#3730a3', '#93c5fd',
  '#fcd34d', '#64748b',
  // Common shorthand
  '#fff', '#000',
]);

const HOT_LINK_DOMAINS = [
  'github.githubassets.com',
  'images.ctfassets.net',
  'videos.ctfassets.net',
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function lineOf(content, pos) {
  return content.slice(0, pos).split('\n').length;
}

function expandShortHex(hex) {
  // #abc → #aabbcc
  if (hex.length === 4) {
    return '#' + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }
  return hex.toLowerCase();
}

// ---------------------------------------------------------------------------
// Rules
// ---------------------------------------------------------------------------
const RULES = [
  {
    name: 'system-mixing',
    severity: 'error',
    description:
      'Same file uses --gh-product-* AND --gh-brand-* (forbidden, see DESIGN.md §1.1)',
    test(content) {
      const hasProduct = /--gh-product-/.test(content);
      const hasBrand = /--gh-brand-/.test(content);
      if (!(hasProduct && hasBrand)) return [];
      return [
        {
          line: 1,
          message:
            `File mixes ${C.cyan}--gh-product-*${C.reset} and ` +
            `${C.cyan}--gh-brand-*${C.reset} — pick ONE system per page`,
        },
      ];
    },
  },

  {
    name: 'legacy-var-naming',
    severity: 'error',
    description:
      'Old CSS variable naming detected (use --gh-product-* / --gh-brand-* / --gh-*)',
    test(content) {
      const violations = [];

      // --brand-XXX (without --gh- prefix) — pre-PR1 naming
      for (const m of content.matchAll(/var\(\s*(--brand-[a-z-]+)/g)) {
        violations.push({
          line: lineOf(content, m.index),
          token: m[1],
          fix: `--gh-brand-${m[1].replace('--brand-', '').replace('bg', 'canvas')}`,
        });
      }

      // --color-XXX (Primer pre-token-rename naming)
      for (const m of content.matchAll(/var\(\s*(--color-[a-z-]+)/g)) {
        violations.push({
          line: lineOf(content, m.index),
          token: m[1],
          fix: `--gh-product-${m[1].replace('--color-', '')}`,
        });
      }

      // Bare --gh-canvas / --gh-fg / --gh-text / etc. (no -product- or -brand- middle)
      // Excludes utility vars: --gh-ease, --gh-dur-*, --gh-font-mono, --gh-blue, --gh-radius, --gh-max-width
      const utilityWhitelist = /^--gh-(ease|dur-|font-mono|blue|radius|max-width)/;
      for (const m of content.matchAll(/var\(\s*(--gh-[a-z-]+)/g)) {
        const tok = m[1];
        if (tok.includes('-product-') || tok.includes('-brand-')) continue;
        if (utilityWhitelist.test(tok)) continue;
        violations.push({
          line: lineOf(content, m.index),
          token: tok,
          fix: 'add -product- or -brand- middle segment',
        });
      }

      return violations.map((v) => ({
        line: v.line,
        message:
          `Legacy var ${C.yellow}${v.token}${C.reset} → ${C.cyan}${v.fix}${C.reset}`,
      }));
    },
  },

  {
    name: 'hot-link-cdn',
    severity: 'warning',
    description:
      'External GitHub/Contentful CDN reference (use assets/ local path instead)',
    test(content) {
      const re = new RegExp(
        `https?://(?:${HOT_LINK_DOMAINS.map((d) => d.replace(/\./g, '\\.')).join('|')})/[^"'\\s)]+`,
        'g'
      );
      const seen = new Set();
      const out = [];
      for (const m of content.matchAll(re)) {
        if (seen.has(m[0])) continue;
        seen.add(m[0]);
        out.push({
          line: lineOf(content, m.index),
          message: `Hot-link CDN ${C.dim}${m[0].slice(0, 80)}${m[0].length > 80 ? '...' : ''}${C.reset} → reference assets/`,
        });
      }
      return out;
    },
  },

  {
    name: 'unknown-hex',
    severity: 'warning',
    strictOnly: true,
    description: 'Hex color not in approved Primer palette (run with --strict)',
    test(content) {
      const matches = [...content.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b/g)];
      const seen = new Set();
      const out = [];
      for (const m of matches) {
        const expanded = expandShortHex('#' + m[1]);
        if (ALLOWED_HEXES.has(expanded)) continue;
        if (seen.has(expanded)) continue;
        seen.add(expanded);
        out.push({
          line: lineOf(content, m.index),
          message:
            `Unknown hex ${C.yellow}${expanded}${C.reset} — not in Primer palette ` +
            `(see assets/brand-spec.md §色板)`,
        });
      }
      return out;
    },
  },
];

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------
function lintFile(file, opts) {
  const content = fs.readFileSync(file, 'utf8');
  const issues = [];
  for (const rule of RULES) {
    if (rule.strictOnly && !opts.strict) continue;
    const violations = rule.test(content);
    for (const v of violations) {
      issues.push({ rule: rule.name, severity: rule.severity, ...v });
    }
  }
  return issues;
}

function formatReport(file, issues) {
  if (issues.length === 0) return `${C.green}✓${C.reset} ${file}`;
  const lines = [`${C.red}✗${C.reset} ${C.bold}${file}${C.reset} — ${issues.length} issues`];
  for (const i of issues) {
    const sev =
      i.severity === 'error'
        ? `${C.red}ERROR${C.reset}`
        : `${C.yellow}WARN${C.reset} `;
    lines.push(`  ${sev} L${i.line} [${i.rule}] ${i.message}`);
  }
  return lines.join('\n');
}

function main() {
  const args = process.argv.slice(2);
  const opts = { strict: false };
  const targets = [];

  for (const a of args) {
    if (a === '--strict') opts.strict = true;
    else if (a === '--help' || a === '-h') {
      console.log(`Usage: lint-design.js [--strict] <file1.html> [file2.html] ...

Lints HTML/CSS files for GitHub design system rule violations.

Default rules (always run):
  system-mixing       ERROR  same file uses --gh-product-* AND --gh-brand-*
  legacy-var-naming   ERROR  old --brand-* / --color-* / bare --gh-* tokens
  hot-link-cdn        WARN   references external CDN instead of assets/

--strict adds:
  unknown-hex         WARN   hex color outside the approved Primer palette

Exit code: 0 = clean, 1 = errors, 2 = invocation error.`);
      process.exit(0);
    } else if (a.startsWith('--')) {
      console.error(`Unknown flag: ${a}`);
      process.exit(2);
    } else {
      targets.push(a);
    }
  }

  if (targets.length === 0) {
    console.error('Usage: lint-design.js [--strict] <file1.html> [file2.html] ...');
    process.exit(2);
  }

  let totalErrors = 0;
  let totalWarnings = 0;
  for (const t of targets) {
    if (!fs.existsSync(t)) {
      console.error(`${C.red}✗${C.reset} ${t} — file not found`);
      process.exit(2);
    }
    const issues = lintFile(t, opts);
    console.log(formatReport(t, issues));
    totalErrors += issues.filter((i) => i.severity === 'error').length;
    totalWarnings += issues.filter((i) => i.severity === 'warning').length;
  }

  console.log(
    `\n${C.cyan}Summary:${C.reset} ${C.red}${totalErrors} errors${C.reset}, ` +
      `${C.yellow}${totalWarnings} warnings${C.reset}` +
      (opts.strict ? ` ${C.dim}(strict mode)${C.reset}` : '')
  );
  process.exit(totalErrors > 0 ? 1 : 0);
}

main();
