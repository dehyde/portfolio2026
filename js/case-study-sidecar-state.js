const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

export function getRevealProgress({ progress, movementX, width }) {
  if (!Number.isFinite(width) || width <= 0) return clamp(progress, 0, 1);
  return clamp(progress - (movementX / width), 0, 1);
}

export function getSnapTarget(
  { progress, startProgress },
  { openThreshold = .05, closeOpenThreshold = .9 } = {}
) {
  if (startProgress >= .5) return progress < closeOpenThreshold ? 0 : 1;
  return progress > openThreshold ? 1 : 0;
}

export function isHorizontalIntent({ movementX, movementY }, minimumDistance = 8) {
  const horizontalDistance = Math.abs(movementX);
  return horizontalDistance >= minimumDistance && horizontalDistance > Math.abs(movementY) * 1.2;
}

export function createTrackpadScrollController({ getProgress, onSettle }) {
  let startProgress = null;

  return {
    handleWheel({ movementX, movementY }) {
      if (!isHorizontalIntent({ movementX, movementY })) return false;
      const progress = clamp(getProgress(), 0, 1);
      if ((progress === 0 && movementX > 0) || (progress === 1 && movementX < 0)) return false;
      if (startProgress === null) startProgress = progress;
      return true;
    },

    handleScrollEnd() {
      if (startProgress === null) return null;
      const gestureStart = startProgress;
      startProgress = null;
      const target = getSnapTarget({
        progress: clamp(getProgress(), 0, 1),
        startProgress: gestureStart
      });
      onSettle(target, { startProgress: gestureStart });
      return target;
    },

    reset() {
      startProgress = null;
    }
  };
}

export function runSettleTransition({
  target,
  duration,
  schedule,
  onVisualTarget,
  onAnimationEnd
}) {
  onVisualTarget(target);
  return schedule(() => onAnimationEnd(target), duration);
}
