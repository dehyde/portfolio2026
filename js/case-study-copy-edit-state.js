export function buildCopyKey({ sectionId, index }) {
  return `${sectionId}:${index}`;
}

export function collectCopyChanges(records) {
  return records
    .filter(({ original, value }) => original !== value)
    .map(({ key, original, value }) => ({ key, original, value }));
}

export function serializeCopyChanges(changes) {
  if (!changes.length) return 'No copy changes yet.';

  return changes.map(({ key, original, value }) => [
    `# ${key}`,
    'Original',
    original,
    'Revision',
    value,
  ].join('\n')).join('\n\n');
}
