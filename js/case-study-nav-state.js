export function selectActiveChapter(chapterTops, readingLine) {
  let activeIndex = 0;

  for (let index = 0; index < chapterTops.length; index += 1) {
    if (chapterTops[index] > readingLine) break;
    activeIndex = index;
  }

  return activeIndex;
}

export function selectActiveSubsection(subsections, activeChapterIndex, readingLine) {
  let activeIndex = -1;

  subsections.forEach((subsection, index) => {
    if (subsection.chapterIndex === activeChapterIndex && subsection.top <= readingLine) {
      activeIndex = index;
    }
  });

  return activeIndex;
}
