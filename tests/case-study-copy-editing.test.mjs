import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  buildCopyKey,
  collectCopyChanges,
  serializeCopyChanges,
} from '../js/case-study-copy-edit-state.js';

const source = readFileSync('index.html', 'utf8');

test('creates stable keys for editable text in a section', () => {
  assert.equal(buildCopyKey({ sectionId: 'collaboration', index: 2 }), 'collaboration:2');
});

test('retains only changed copy in a local draft', () => {
  const changes = collectCopyChanges([
    { key: 'collaboration:0', original: 'Original title', value: 'Original title' },
    { key: 'collaboration:1', original: 'Original summary', value: 'Revised summary' },
  ]);

  assert.deepEqual(changes, [{
    key: 'collaboration:1',
    original: 'Original summary',
    value: 'Revised summary',
  }]);
});

test('exports edited copy with both the original and revision', () => {
  const exported = serializeCopyChanges([{
    key: 'collaboration:1',
    original: 'Original summary',
    value: 'Revised summary',
  }]);

  assert.match(exported, /collaboration:1/);
  assert.match(exported, /Original summary/);
  assert.match(exported, /Revised summary/);
});

test('provides a local-only edit mode for approved content blocks', () => {
  assert.match(source, /import \{ buildCopyKey, collectCopyChanges, serializeCopyChanges \} from '\.\/js\/case-study-copy-edit-state\.js';/);
  assert.match(source, /<div class="copy-edit-panel[^"]*" data-copy-edit-panel data-editing="false">/);
  assert.match(source, /setAttribute\('contenteditable', 'plaintext-only'\)/);
  assert.match(source, /localStorage\.setItem\(copyDraftStorageKey/);
  assert.match(source, /data-copy-editable/);
});
