import test from 'node:test';
import assert from 'node:assert/strict';

let annotationState;
await assert.doesNotReject(async () => {
  annotationState = await import('../js/case-study-rough-annotation-state.js');
}, 'the scroll annotation controller should exist');

test('reveals each annotation once after the preceding draw completes', () => {
  const first = { id: 'teams' };
  const second = { id: 'product' };
  const observed = [];
  const unobserved = [];
  const queued = [];
  const revealed = [];
  let time = 0;

  const controller = annotationState.createOneShotScrollAnnotations({
    elements: [first, second],
    createAnnotation: (element) => ({ show: () => revealed.push(element.id) }),
    observe: (element) => observed.push(element.id),
    unobserve: (element) => unobserved.push(element.id),
    schedule: (callback, delay) => queued.push({ callback, delay }),
    now: () => time,
    animationDuration: 560,
    sequenceGap: 80
  });

  assert.deepEqual(observed, ['teams', 'product']);
  controller.handleEntries([
    { target: first, isIntersecting: true },
    { target: second, isIntersecting: true }
  ]);
  controller.handleEntries([{ target: second, isIntersecting: true }]);

  assert.deepEqual(unobserved, ['teams', 'product']);
  assert.deepEqual(queued.map(({ delay }) => delay), [0, 640]);
  queued.forEach(({ callback }) => callback());
  assert.deepEqual(revealed, ['teams', 'product']);
});

test('starts a later scroll-triggered annotation without an additional delay', () => {
  const first = { id: 'teams' };
  const second = { id: 'product' };
  const queued = [];
  let time = 0;

  const controller = annotationState.createOneShotScrollAnnotations({
    elements: [first, second],
    createAnnotation: () => ({ show: () => {} }),
    observe: () => {},
    unobserve: () => {},
    schedule: (callback, delay) => queued.push({ callback, delay }),
    now: () => time,
    animationDuration: 560,
    sequenceGap: 80
  });

  controller.handleEntries([{ target: first, isIntersecting: true }]);
  time = 700;
  controller.handleEntries([{ target: second, isIntersecting: true }]);

  assert.deepEqual(queued.map(({ delay }) => delay), [0, 0]);
});

test('keeps a four-part annotation sequence in reading order', () => {
  const elements = ['account-managers', 'consistency', 'project-personas', 'flexibility'].map((id) => ({ id }));
  const queued = [];

  const controller = annotationState.createOneShotScrollAnnotations({
    elements,
    createAnnotation: () => ({ show: () => {} }),
    observe: () => {},
    unobserve: () => {},
    schedule: (callback, delay) => queued.push({ callback, delay }),
    now: () => 0,
    animationDuration: 360,
    sequenceGap: 60
  });

  controller.handleEntries(elements.map((target) => ({ target, isIntersecting: true })));

  assert.deepEqual(queued.map(({ delay }) => delay), [0, 420, 840, 1260]);
});

test('shows annotations immediately when motion is reduced', () => {
  const first = { id: 'teams' };
  const second = { id: 'product' };
  const observed = [];
  const revealed = [];

  annotationState.createOneShotScrollAnnotations({
    elements: [first, second],
    createAnnotation: (element) => ({ show: () => revealed.push(element.id) }),
    observe: (element) => observed.push(element.id),
    unobserve: () => assert.fail('reduced-motion annotations should not be observed'),
    schedule: () => assert.fail('reduced-motion annotations should not be delayed'),
    now: () => 0,
    animationDuration: 560,
    sequenceGap: 80,
    prefersReducedMotion: true
  });

  assert.deepEqual(observed, []);
  assert.deepEqual(revealed, ['teams', 'product']);
});
