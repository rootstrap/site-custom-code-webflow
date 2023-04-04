function isDarkThemeSelected() {
  return document.cookie.match(/theme=__dark/i) != null;
}

function wrapWithUnderlineSpan(children: string) {
  return isDarkThemeSelected()
    ? `<span class="c-underlined-text__dark">${children}</span>`
    : `<span class="c-underlined-text__light">${children}</span>`;
}

function wrapWithHighlightSpan(children: string) {
  return isDarkThemeSelected()
    ? `<span class="c-highlighted-text__dark">${children}</span>`
    : `<span class="c-highlighted-text__light">${children}</span>`;
}

export function replaceHeadingMarkers() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5');

  headings.forEach((heading) => {
    const headingContent = heading.innerHTML;

    // Replace the markers (e.g., '__' or '%%') with a span with the appropriate class:
    const wrappedContent = headingContent
      .replace(/__(.*?)__/gi, (_, match) => wrapWithUnderlineSpan(match))
      .replace(/%%(.*?)%%/gi, (_, match) => wrapWithHighlightSpan(match))
      .replace(/&lt;br&gt;/gi, () => `<br >`);

    heading.innerHTML = wrappedContent;
  });
}
