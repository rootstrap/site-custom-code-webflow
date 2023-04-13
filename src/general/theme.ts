enum Theme {
  LIGHT = "__light",
  DARK = "__dark",
}

function applyTheme(themeId: Theme) {
  console.log(`applying ${themeId} theme`);
  const oppositeThemeId = themeId === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  const themedElementsQuery = `*[class*='${oppositeThemeId}']`;
  const themedElements = [...document.querySelectorAll(themedElementsQuery)];
  themedElements.forEach(element => {
    element.className = element.className.replace(oppositeThemeId, themeId);
  });
}

function setThemeFromCookie() {
  const isDarkMode = isDarkThemeSelected();
  applyTheme(isDarkMode ? Theme.DARK : Theme.LIGHT);
}

function setThemeSwitchState() {
  const themeCheckbox = document.getElementById('toggleTheme') as HTMLInputElement;
  themeCheckbox.checked = isDarkThemeSelected();
}

function isDarkThemeSelected() {
 return document.cookie.match(/theme=__dark/i) != null;
}

function toggleTheme() {
  const isDarkMode = isDarkThemeSelected();
  applyTheme(isDarkMode ? Theme.LIGHT : Theme.DARK);
  document.cookie = `theme=${isDarkMode ? Theme.LIGHT : Theme.DARK}`;
}

(function() {
  setThemeFromCookie();
  setThemeSwitchState();
  const themeCheckbox = document.getElementById('toggleTheme') as HTMLInputElement;
  themeCheckbox.onchange=toggleTheme;
})();
  
// set transition properties AFTER page has loaded
window.onload = function () {
  const themeRootElement = document.getElementById("theme-root") as HTMLElement;
  themeRootElement.style.transitionProperty  = "color, background-color";
  themeRootElement.style.transitionDuration = "300ms";
  themeRootElement.style.transitionTimingFunction = "ease";
};
// setup intersection observer to update styles when theme switcher overlaps with color sections
const themeSwitcherElement = document.getElementById("themeSwitcher") as HTMLElement;
// keeps track of sections that have been intersected (LIFO).
const overlappingsStack: Array<string> = [];
const contrastType = {
  COLOR: "COLOR",
  HIGH_CONTRAST: "HIGH_CONTRAST",
  LOW_CONTRAST: "LOW_CONTRAST",
};

const updateThemeSwitcherColor = (currentContrastType) => {
  switch (currentContrastType) {
    case contrastType.COLOR:
      themeSwitcherElement.classList.add("cc-color-contrast");
      themeSwitcherElement.classList.remove("cc-high-contrast");
      themeSwitcherElement.classList.remove("cc-low-contrast");
      return;
    case contrastType.HIGH_CONTRAST:
      themeSwitcherElement.classList.remove("cc-color-contrast");
      themeSwitcherElement.classList.add("cc-high-contrast");
      themeSwitcherElement.classList.remove("cc-low-contrast");
      return;
    case contrastType.LOW_CONTRAST:
      themeSwitcherElement.classList.remove("cc-color-contrast");
      themeSwitcherElement.classList.remove("cc-high-contrast");
      themeSwitcherElement.classList.add("cc-low-contrast");
      return;
    default:
      themeSwitcherElement.classList.remove("cc-color-contrast");
      themeSwitcherElement.classList.remove("cc-high-contrast");
      themeSwitcherElement.classList.remove("cc-low-contrast");
      return;
  }
};

const onSectionIntersect = (entries) => {
  const overlappingsMap = entries.map(({ isIntersecting, target }) => {
    return {
      isIntersecting,
      sectionType: target.className.includes("cc-color-contrast")
        ? contrastType.COLOR
        : target.className.includes("cc-high-contrast")
          ? contrastType.HIGH_CONTRAST
          : target.className.includes("cc-low-contrast")
            ? contrastType.LOW_CONTRAST
            : null,
    };
  });

  // capture entering sections
  const intersectingEntries: Array<string> = overlappingsMap
    .filter(({ isIntersecting }) => isIntersecting)
    .map(({ sectionType }) => sectionType)
    .reverse();

  // capture exiting sections
  const nonIntersectingEntries = overlappingsMap
    .filter(({ isIntersecting }) => !isIntersecting)
    .map(({ sectionType }) => sectionType);

  // cleanup exiting sections from state
  nonIntersectingEntries.forEach((_sectionType) => {
    overlappingsStack.shift();
  });

  // add entering sections to state
  overlappingsStack.unshift(...intersectingEntries);

  console.table(overlappingsStack);
  updateThemeSwitcherColor(overlappingsStack[0]);
};

const observer = new IntersectionObserver(onSectionIntersect, {
  root: null,
  threshold: 0,
  rootMargin: `${window.innerHeight}px 0px -40px 0px`,
});

const sectionElementsQuery = [
  "*[class*='cc-color-contrast']",
  "*[class*='cc-high-contrast']",
  "*[class*='cc-low-contrast']",
].join(", ");

const sectionElements = [
  ...document.querySelectorAll(sectionElementsQuery),
];

sectionElements.forEach((section) => {
  observer.observe(section);
});
