
const mobileBreakpoint = "480px";
const tabletBreakpoint = "768px";
const desktopBreakpoint = "992px";
  
const isMobileMQ = window.matchMedia(`(max-width: ${mobileBreakpoint})`);
const isFlippedMobileOrBiggerMQ = window.matchMedia(`(min-width: ${mobileBreakpoint})`);
const isTabletOrBiggerMQ = window.matchMedia(`(min-width: ${tabletBreakpoint})`);
const isDesktopOrBiggerMQ = window.matchMedia(`(min-width: ${desktopBreakpoint})`);
   
function enableScroll() {
  const body = $(document.body);
  let scrollPosition = 0;
  if (body.css('overflow') != 'hidden') { scrollPosition = window.pageYOffset; }
  body.css('overflow', '');
  body.css('position', '');
  body.css('top', '');
  body.width('');
  $(window).scrollTop(scrollPosition);
}

function disableScroll() {
  const body = $(document.body);
  let scrollPosition = 0;
  const oldWidth = body.innerWidth();
  scrollPosition = window.pageYOffset;
  body.css('overflow', 'hidden');
  body.css('position', 'fixed');
  body.css('top', `-${scrollPosition}px`);
  body.width(oldWidth);
}
  
function handleBreakpoinChange() {
  enableScroll();
  setThemeSwitcherVisibility("auto");
}

function setThemeSwitcherVisibility(behavior) {
  const element = $(".c-theme-switcher-container__light , .c-theme-switcher-container__dark");
  if (behavior === "auto") {
    if (isDesktopOrBiggerMQ.matches) element.css("display", "block");
    else element.css("display", "none");
  }
  if (behavior === "visible") {
    element.css("display", "block");
  }
}

isMobileMQ.addEventListener("change", handleBreakpoinChange);
isFlippedMobileOrBiggerMQ.addEventListener("change", handleBreakpoinChange);
isTabletOrBiggerMQ.addEventListener("change", handleBreakpoinChange);
isDesktopOrBiggerMQ.addEventListener("change", handleBreakpoinChange);

$('[menu="open"]').on('click', function () {
  disableScroll();
  setThemeSwitcherVisibility("visible");
});
$('[menu="close"]').on('click', function () {
  enableScroll();
  setThemeSwitcherVisibility("auto");
});