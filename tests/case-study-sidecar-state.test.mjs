import test from 'node:test';
import assert from 'node:assert/strict';

let sidecarState;
await assert.doesNotReject(async () => {
  sidecarState = await import('../js/case-study-sidecar-state.js');
}, 'the sidecar interaction module should exist');

test('moves the panel continuously with a horizontal gesture', () => {
  assert.equal(typeof sidecarState.getRevealProgress, 'function');
  assert.equal(sidecarState.getRevealProgress({ progress: 0, movementX: -300, width: 1000 }), .3);
  assert.equal(sidecarState.getRevealProgress({ progress: 1, movementX: 250, width: 1000 }), .75);
});

test('clamps reveal progress at the closed and open positions', () => {
  assert.equal(sidecarState.getRevealProgress({ progress: .9, movementX: -400, width: 1000 }), 1);
  assert.equal(sidecarState.getRevealProgress({ progress: .1, movementX: 400, width: 1000 }), 0);
});

test('commits based on openness at release', () => {
  assert.equal(typeof sidecarState.getSnapTarget, 'function');
  assert.equal(sidecarState.getSnapTarget({ progress: .049, startProgress: 0 }), 0);
  assert.equal(sidecarState.getSnapTarget({ progress: .05, startProgress: 0 }), 0);
  assert.equal(sidecarState.getSnapTarget({ progress: .051, startProgress: 0 }), 1);
  assert.equal(sidecarState.getSnapTarget({ progress: .95, startProgress: 1 }), 1);
  assert.equal(sidecarState.getSnapTarget({ progress: .9, startProgress: 1 }), 1);
  assert.equal(sidecarState.getSnapTarget({ progress: .89, startProgress: 1 }), 0);
});

test('leaves predominantly vertical gestures to normal page scrolling', () => {
  assert.equal(typeof sidecarState.isHorizontalIntent, 'function');
  assert.equal(sidecarState.isHorizontalIntent({ movementX: 52, movementY: 9 }), true);
  assert.equal(sidecarState.isHorizontalIntent({ movementX: 26, movementY: 60 }), false);
  assert.equal(sidecarState.isHorizontalIntent({ movementX: 3, movementY: 1 }), false);
});

test('waits for native scrollend before settling a trackpad gesture', () => {
  let progress = 0;
  const settled = [];
  const controller = sidecarState.createTrackpadScrollController({
    getProgress: () => progress,
    onSettle: (target) => settled.push(target)
  });

  assert.equal(controller.handleWheel({ movementX: -80, movementY: 2 }), true);
  progress = .08;
  assert.equal(controller.handleWheel({ movementX: -45, movementY: 1 }), true);
  progress = .23;
  assert.deepEqual(settled, []);

  assert.equal(controller.handleScrollEnd(), 1);
  assert.deepEqual(settled, [1]);
});

test('ignores vertical trackpad scrolling instead of creating a settle session', () => {
  const settled = [];
  const controller = sidecarState.createTrackpadScrollController({
    getProgress: () => 0,
    onSettle: (target) => settled.push(target)
  });

  assert.equal(controller.handleWheel({ movementX: 4, movementY: 42 }), false);
  assert.equal(controller.handleScrollEnd(), null);
  assert.deepEqual(settled, []);
});

test('does not start a trackpad session when swiping beyond an end stop', () => {
  let progress = 0;
  const controller = sidecarState.createTrackpadScrollController({
    getProgress: () => progress,
    onSettle: () => assert.fail('a boundary gesture must not settle')
  });

  assert.equal(controller.handleWheel({ movementX: 40, movementY: 0 }), false);
  progress = 1;
  assert.equal(controller.handleWheel({ movementX: -40, movementY: 0 }), false);
  assert.equal(controller.handleScrollEnd(), null);
});

test('keeps native scroll at the release position until the settle animation ends', () => {
  const events = [];
  let finishAnimation;

  const timer = sidecarState.runSettleTransition({
    target: 1,
    duration: 520,
    schedule: (callback, delay) => {
      assert.equal(delay, 520);
      finishAnimation = callback;
      return 42;
    },
    onVisualTarget: (target) => events.push(`visual:${target}`),
    onAnimationEnd: (target) => events.push(`native:${target}`)
  });

  assert.equal(timer, 42);
  assert.deepEqual(events, ['visual:1']);

  finishAnimation();
  assert.deepEqual(events, ['visual:1', 'native:1']);
});
