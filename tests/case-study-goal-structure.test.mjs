import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync(
  'index.html',
  'utf8',
);

const goals = [
  {
    chapterId: 'collaboration',
    title: 'Managing challenges of cross-team collaboration',
    decisionIds: ['shared-brief', 'joint-research', 'working-overlap', 'logic-prototypes'],
  },
  {
    chapterId: 'project-flexibility',
    title: 'Creating cohesion across products',
    decisionIds: ['use-aec-data-components', 'adapt-cad-components', 'maintain-construction-patterns', 'keep-module-controls'],
  },
  {
    chapterId: 'reuse-before-creation',
    title: 'Data standardization',
    decisionIds: ['find-existing-definitions', 'create-when-needed'],
  },
  {
    chapterId: 'standards-governance',
    title: 'Balancing project autonomy with account standards',
    decisionIds: ['separate-governance-scope', 'preserve-applied-values', 'make-changes-visible'],
  },
];

function sectionSource(chapterId) {
  const nextSection = source.indexOf('<section class="chapter', source.indexOf(`id="${chapterId}"`) + 1);
  return source.slice(source.indexOf(`id="${chapterId}"`), nextSection === -1 ? source.length : nextSection);
}

test('keeps each goal as a summary until a decision opens its sidecar', () => {
  goals.forEach(({ chapterId, title, decisionIds }) => {
    const section = sectionSource(chapterId);

    assert.match(source, new RegExp(`<section[^>]*id="${chapterId}"[^>]*data-chapter`));
    assert.match(section, new RegExp(`<h2[^>]*>${title}</h2>`));
    assert.match(section, /<div class="goal-frame" data-goal-dive data-expanded="false">/);
    assert.match(section, /<ol class="goal-decision-overview"[\s\S]*?<\/ol>/);
    assert.match(section, /<article class="goal-takeover" data-goal-takeover aria-hidden="true">/);

    decisionIds.forEach((decisionId) => {
      assert.match(section, new RegExp(`data-goal-target="${decisionId}"`));
      assert.match(section, new RegExp(`<section class="subsection-grid goal-decision" id="${decisionId}"`));
    });
  });
});
test('opens a goal sidecar from either its overview or the persistent index', () => {
  assert.match(source, /const goalFrames = \[\.\.\.shell\.querySelectorAll\('\[data-goal-dive\]'\)\];/);
  assert.match(source, /const openGoalSidecar = \(frame, targetId\) => \{/);
  assert.match(source, /frame\.dataset\.expanded = 'true';/);
  assert.match(source, /link\.addEventListener\('click', \(event\) => \{/);
  assert.match(source, /target\.closest\('\[data-goal-dive\]'\)/);
});

test('reuses the gradual horizontal sidecar model for each goal and only exposes its rail detail when open', () => {
  assert.match(source, /\.goal-frame \{[\s\S]*?overflow-x: auto;[\s\S]*?touch-action: pan-y;/);
  assert.match(source, /<div class="goal-scroll-range" aria-hidden="true"><\/div>/);
  assert.match(source, /const createGoalSidecarController = \(frame\) => \{/);
  assert.match(source, /const goalTrackpadScroll = createTrackpadScrollController\(/);
  assert.match(source, /goalFrameControllers\.set\(frame, createGoalSidecarController\(frame\)\);/);
  assert.match(source, /rail\.classList\.toggle\('expanded', frame\.dataset\.expanded === 'true'\)/);
  assert.match(source, /\.nested-rail\.goal-nested \{ display: none; \}/);
});

test('keeps only real chapters in the reader navigation', () => {
  assert.doesNotMatch(source, /<a href="#decision">Decision<\/a>/);
  assert.doesNotMatch(source, /<a href="#learning">Learning<\/a>/);
  assert.match(source, /<section class="chapter decision-chapter" id="decision" data-chapter hidden aria-hidden="true">/);
  assert.match(source, /<section class="chapter learning" id="learning" data-chapter hidden aria-hidden="true">/);
  assert.match(source, /querySelectorAll\('\[data-chapter\]:not\(\[hidden\]\)'\)/);
  assert.match(source, /<section class="chapter" id="cross-product-reuse" data-chapter hidden aria-hidden="true">/);
  assert.match(source, /<section class="chapter" id="validation" data-chapter hidden aria-hidden="true">/);
});

test('separates collaboration from the design solutions goals', () => {
  const collaborationStart = source.indexOf('id="collaboration"');
  const cohesionStart = source.indexOf('id="project-flexibility"');
  const dividerStart = source.indexOf('id="design-solutions-title"');

  assert.ok(dividerStart > collaborationStart && dividerStart < cohesionStart);
  assert.match(source, /<header class="section-divider" aria-labelledby="design-solutions-title">/);
  assert.match(source, /<h2 class="type-section" id="design-solutions-title">Design solutions<\/h2>/);
});

test('preserves the approved opening and collaboration copy', () => {
  assert.match(source, /<h2 class="type-display">Custom data management UX across account and project levels\.<\/h2>/);
  assert.match(source, /<h2 class="chapter-title type-section">Managing challenges of cross-team collaboration<\/h2>/);
  assert.match(source, /<p class="chapter-summary type-summary">How we collaborated successfully and mitigated gaps<\/p>/);
});
