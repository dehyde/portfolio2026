import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const source = readFileSync('index.html', 'utf8');

const goals = [
  {
    chapterId: 'collaboration',
    title: 'Establish a shared way of working',
    decisionIds: ['shared-brief', 'joint-research', 'working-overlap', 'logic-prototypes'],
  },
  {
    chapterId: 'project-flexibility',
    title: 'Enable flexible custom data in project workflows',
    decisionIds: ['custom-data-in-submittals', 'module-specific-controls'],
  },
  {
    chapterId: 'reuse-before-creation',
    title: 'Make reuse easier than duplicate creation',
    decisionIds: ['find-existing-definitions', 'create-when-needed'],
  },
  {
    chapterId: 'standards-governance',
    title: 'Govern standards without making projects brittle',
    decisionIds: ['separate-governance-scope', 'preserve-applied-values', 'make-changes-visible'],
  },
  {
    chapterId: 'cross-product-reuse',
    title: 'Reuse the model while making it native to Construction Cloud',
    decisionIds: ['reuse-platform-logic', 'translate-cad-interactions', 'extend-construction-cloud-patterns'],
  },
];

function sectionSource(chapterId) {
  const nextSection = source.indexOf('<section class="chapter', source.indexOf(`id="${chapterId}"`) + 1);
  return source.slice(source.indexOf(`id="${chapterId}"`), nextSection === -1 ? source.length : nextSection);
}

test('adds every approved goal and exposes its decisions in a horizontal overview', () => {
  goals.forEach(({ chapterId, title, decisionIds }) => {
    const section = sectionSource(chapterId);

    assert.match(source, new RegExp(`<section[^>]*id="${chapterId}"[^>]*data-chapter`));
    assert.match(section, new RegExp(`<h2[^>]*>${title}</h2>`));
    assert.match(section, /<ol class="goal-decision-overview"[\s\S]*?<\/ol>/);

    decisionIds.forEach((decisionId) => {
      assert.match(section, new RegExp(`href="#${decisionId}"`));
      assert.match(section, new RegExp(`<section class="subsection-grid goal-decision" id="${decisionId}"`));
    });
  });
});

test('keeps only real chapters in the reader navigation', () => {
  assert.doesNotMatch(source, /<a href="#decision">Decision<\/a>/);
  assert.doesNotMatch(source, /<a href="#learning">Learning<\/a>/);
  assert.match(source, /<section class="chapter decision-chapter" id="decision" data-chapter hidden aria-hidden="true">/);
  assert.match(source, /<section class="chapter learning" id="learning" data-chapter hidden aria-hidden="true">/);
  assert.match(source, /querySelectorAll\('\[data-chapter\]:not\(\[hidden\]\)'\)/);
});
