import test from 'node:test';
import assert from 'node:assert/strict';

import * as navigationState from '../js/case-study-nav-state.js';

const { selectActiveChapter } = navigationState;

test('selects the chapter immediately above the reading line while scrolling in either direction', () => {
  assert.equal(selectActiveChapter([-640, 220, 980], 180), 0);
  assert.equal(selectActiveChapter([-820, 120, 860], 180), 1);
});

test('keeps the first chapter active before the document reaches the reading line', () => {
  assert.equal(selectActiveChapter([420, 1180, 1900], 180), 0);
});

test('selects the final chapter after all chapter starts have passed the reading line', () => {
  assert.equal(selectActiveChapter([-2100, -1200, -80], 180), 2);
});

test('keeps the active subsection within the active chapter', () => {
  assert.equal(typeof navigationState.selectActiveSubsection, 'function');
  assert.equal(
    navigationState.selectActiveSubsection([
      { chapterIndex: 1, top: -420 },
      { chapterIndex: 1, top: 130 },
      { chapterIndex: 2, top: -80 },
    ], 1, 180),
    1,
  );
  assert.equal(
    navigationState.selectActiveSubsection([
      { chapterIndex: 1, top: 420 },
      { chapterIndex: 2, top: -80 },
    ], 1, 180),
    -1,
  );
});

test('selects an active decision from a later goal without crossing chapter boundaries', () => {
  assert.equal(
    navigationState.selectActiveSubsection([
      { chapterIndex: 3, top: -560 },
      { chapterIndex: 3, top: -40 },
      { chapterIndex: 4, top: -160 },
    ], 3, 180),
    1,
  );
});
