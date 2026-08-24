export function createOneShotScrollAnnotations({
  elements,
  createAnnotation,
  observe,
  unobserve,
  schedule,
  animationDuration = 0,
  sequenceGap = 0,
  now = () => Date.now(),
  prefersReducedMotion = false
}) {
  const annotations = new Map(elements.map((element) => [element, createAnnotation(element)]));
  const shown = new Set();
  let nextAvailableAt = 0;

  const reveal = (element, index) => {
    if (!annotations.has(element) || shown.has(element)) return;

    shown.add(element);
    const show = () => annotations.get(element).show();

    if (prefersReducedMotion) {
      show();
      return;
    }

    unobserve(element);
    const currentTime = now();
    const startAt = Math.max(currentTime, nextAvailableAt);
    nextAvailableAt = startAt + animationDuration + sequenceGap;
    schedule(show, startAt - currentTime);
  };

  if (prefersReducedMotion) {
    elements.forEach((element, index) => reveal(element, index));
  } else {
    elements.forEach(observe);
  }

  return {
    handleEntries(entries) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target, elements.indexOf(entry.target));
      });
    }
  };
}
