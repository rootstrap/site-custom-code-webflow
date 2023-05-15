export const attributionRadioGroup: HTMLElement | null = document.querySelector(
  '.cc-attribution-radio-group'
);
export let isAttributionRequiredErrorDisplayed: boolean = false;
const lightPills: HTMLDivElement[] = Array.from(
  document.querySelectorAll('.cc-attribution-radio-group > .c-pill-m__light')
);
const darkPills: HTMLDivElement[] = Array.from(
  document.querySelectorAll('.cc-attribution-radio-group > .c-pill-m__dark')
);
const attributionRequiredErrorMessage: HTMLElement | null =
  document.querySelector('.cc-attribution-required-error');

export const displayAttributionRequiredError = () => {
  if (!attributionRequiredErrorMessage) return;
  attributionRequiredErrorMessage.style.display = 'block';
  for (let i = 0; i < lightPills.length; i++) {
    lightPills[i]?.classList.add('cc-pill-m--error__light');
  }
  for (let i = 0; i < darkPills.length; i++) {
    darkPills[i]?.classList.add('cc-pill-m--error__dark');
  }
  isAttributionRequiredErrorDisplayed = true;
};

export const hideAttributionRequiredError = () => {
  if (!attributionRequiredErrorMessage) return;
  isAttributionRequiredErrorDisplayed = false;
  attributionRequiredErrorMessage.style.display = 'none';
  for (let i = 0; i < lightPills.length; i++) {
    lightPills[i]?.classList.remove('cc-pill-m--error__light');
    lightPills[i]?.classList.remove('cc-pill-m--error__dark');
    darkPills[i]?.classList.remove('cc-pill-m--error__light');
    darkPills[i]?.classList.remove('cc-pill-m--error__dark');
  }
  for (let i = 0; i < darkPills.length; i++) {
    lightPills[i]?.classList.remove('cc-pill-m--error__light');
    lightPills[i]?.classList.remove('cc-pill-m--error__dark');
    darkPills[i]?.classList.remove('cc-pill-m--error__light');
    darkPills[i]?.classList.remove('cc-pill-m--error__dark');
  }
};
