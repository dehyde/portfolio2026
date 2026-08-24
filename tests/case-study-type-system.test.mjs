import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(
  'index.html',
  'utf8',
);

function cssBlock(selector) {
  const match = source.match(new RegExp(`${selector.replace('.', '\\.') }\\s*\\{([^}]*)\\}`));
  assert.ok(match, `Missing ${selector} role`);
  return match[1];
}

function token(name) {
  const match = source.match(new RegExp(`--${name}:\\s*(#[a-fA-F0-9]{6})`));
  assert.ok(match, `Missing --${name} token`);
  return match[1];
}

function contrast(first, second) {
  const luminance = (hex) => {
    const channels = hex.match(/[a-f\d]{2}/gi).map((channel) => Number.parseInt(channel, 16) / 255);
    const linear = channels.map((channel) => (
      channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    ));
    return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
  };

  const [light, dark] = [luminance(first), luminance(second)].sort((a, b) => b - a);
  return (light + 0.05) / (dark + 0.05);
}

test('body roles maintain a readable, differentiated hierarchy on the dark canvas', () => {
  const reading = cssBlock('.type-body-reading');
  const support = cssBlock('.type-body-support');
  const canvas = token('surface-canvas');
  const primary = token('text-primary');
  const readingColor = token('text-reading');
  const supportColor = token('text-support');

  assert.match(reading, /max-width:\s*32em/);
  assert.match(reading, /color:\s*var\(--text-reading\)/);
  assert.match(reading, /font:\s*340 var\(--type-reading-size\)\/1\.72 var\(--font-editorial\)/);
  assert.match(reading, /letter-spacing:\s*\.009em/);

  assert.match(support, /max-width:\s*33em/);
  assert.match(support, /color:\s*var\(--text-support\)/);
  assert.match(support, /font:\s*440 var\(--type-support-size\)\/1\.58 var\(--font-system\)/);
  assert.match(support, /letter-spacing:\s*\.002em/);

  const headingContrast = contrast(primary, canvas);
  const readingContrast = contrast(readingColor, canvas);
  const supportContrast = contrast(supportColor, canvas);

  assert.ok(readingContrast >= 10, `Reading contrast is ${readingContrast.toFixed(2)}:1; expected at least 10:1`);
  assert.ok(supportContrast >= 7, `Support contrast is ${supportContrast.toFixed(2)}:1; expected at least 7:1`);
  assert.ok(headingContrast > readingContrast && readingContrast > supportContrast);
});

test('subsection titles lead into one right-column narrative stack', () => {
  const title = cssBlock('.subsection-title');
  const content = cssBlock('.subsection-content');
  const summary = cssBlock('.subsection-summary');

  assert.match(title, /grid-column:\s*1\s*\/\s*span\s*3/);
  assert.match(title, /grid-row:\s*1/);
  assert.match(content, /grid-column:\s*5\s*\/\s*-1/);
  assert.match(content, /grid-row:\s*1/);
  assert.match(content, /display:\s*grid/);
  assert.match(content, /gap:\s*clamp\(78px,\s*7\.5vw,\s*132px\)/);
  assert.match(summary, /max-width:\s*26ch/);
  assert.match(summary, /font:\s*400 var\(--type-subsection-summary-size\)\/1\.2 var\(--font-editorial\)/);
  assert.match(summary, /color:\s*var\(--text-summary\)/);
  assert.match(summary, /letter-spacing:\s*-\.004em/);
  assert.match(source, /<h3[^>]*>Personas<\/h3>\s*<div class="subsection-content">\s*<p class="subsection-summary[^>]*>[\s\S]*?<\/p>\s*<div class="subsection-evidence">/);
});

test('subsection lead and evidence return to a vertical reading sequence on narrow screens', () => {
  assert.match(
    source,
    /\.subsection-title, \.subsection-content\s*\{\s*grid-column:\s*1;\s*grid-row:\s*auto;/,
  );
});

test('chapter openers use one shared vertical proposition rule', () => {
  const summary = cssBlock('.chapter-summary');

  assert.match(summary, /max-width:\s*29ch/);
  assert.match(summary, /margin-top:\s*clamp\(34px,\s*5vw,\s*72px\)/);
  assert.doesNotMatch(source, /\.context > \.chapter-opener \.chapter-summary/);
  assert.doesNotMatch(source, /\.decision-chapter \.chapter-summary/);
  assert.doesNotMatch(source, /\.learning \.chapter-summary/);
});
