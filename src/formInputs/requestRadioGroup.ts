export const requestRadioGroup: HTMLElement | null = document.querySelector(
  '.cc-request-radio-group'
);
export let isRequestRequiredErrorDisplayed: boolean = false;
const pills: HTMLDivElement[] = Array.from(
  document.querySelectorAll('.cc-request-radio-group > .c-pill-m__light')
);

const requestRequiredErrorMessage: HTMLElement | null = document.querySelector(
  '.cc-request-required-error'
);

const calculateStyles = () => {
  if (!requestRequiredErrorMessage || !requestRadioGroup) return {};
  const requestRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(
    requestRequiredErrorMessage
  );
  const requestRadioGroupsStyles: CSSStyleDeclaration =
    getComputedStyle(requestRadioGroup);
  return {
    requestRadioGroupMarginTop: requestRadioGroupsStyles.marginTop.substring(
      0,
      requestRadioGroupsStyles.marginTop.length - 2
    ),
    requestRequiredErrorLineHeight:
      requestRequiredErrorStyles.lineHeight.substring(
        0,
        requestRequiredErrorStyles.lineHeight.length - 2
      ),
  };
};

const { requestRadioGroupMarginTop, requestRequiredErrorLineHeight } =
  calculateStyles();

export const displayRequestRequiredError = () => {
  if (!requestRadioGroup) return;
  if (!requestRequiredErrorMessage) return;
  requestRadioGroup.style.marginTop = `${
    Number(requestRadioGroupMarginTop) - Number(requestRequiredErrorLineHeight)
  }px`;
  requestRequiredErrorMessage.style.display = 'block';
  for (let i = 0; i < pills.length; i++) {
    pills[i].style.border = '1px solid #cb0b0b';
  }
  isRequestRequiredErrorDisplayed = true;
};

export const hideRequestRequiredError = () => {
  if (!requestRadioGroup) return;
  if (!requestRequiredErrorMessage) return;
  isRequestRequiredErrorDisplayed = false;
  requestRequiredErrorMessage.style.display = 'none';
  for (let i = 0; i < pills.length; i++) {
    pills[i].style.border = '1px solid #9e9e9e';
  }
  requestRadioGroup.style.marginTop = `${requestRadioGroupMarginTop}px`;
};
