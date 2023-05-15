export const requestRadioGroup: HTMLElement | null = document.querySelector(
  '.cc-request-radio-group'
);
export let isRequestRequiredErrorDisplayed: boolean = false;
const lightPills: HTMLDivElement[] = Array.from(
  document.querySelectorAll('.cc-request-radio-group > .c-pill-m__light')
);
const darkPills: HTMLDivElement[] = Array.from(
  document.querySelectorAll('.cc-request-radio-group > .c-pill-m__dark')
);

const requestRequiredErrorMessage: HTMLElement | null = document.querySelector(
  '.cc-request-required-error'
);

export const displayRequestRequiredError = () => {

  if (!requestRequiredErrorMessage) return;
  requestRequiredErrorMessage.style.display = 'block';
  for (let i = 0; i < lightPills.length; i++) {
    lightPills[i].classList.add('cc-pill-m--error__light');
  }
  for (let i = 0; i < darkPills.length; i++) {
    darkPills[i].classList.add('cc-pill-m--error__dark');
  }
  isRequestRequiredErrorDisplayed = true;
};

export const hideRequestRequiredError = () => {
  if (!requestRequiredErrorMessage) return;
  isRequestRequiredErrorDisplayed = false;
  requestRequiredErrorMessage.style.display = 'none';
  for (let i = 0; i < lightPills.length; i++) {
    lightPills[i].classList.remove('cc-pill-m--error__light');
  }
  for (let i = 0; i <   darkPills.length; i++) {
    darkPills[i].classList.remove('cc-pill-m--error__dark');
  }
};
