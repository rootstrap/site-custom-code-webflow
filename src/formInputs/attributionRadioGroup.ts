export const attributionRadioGroup: HTMLElement | null = document.querySelector(
  '.cc-attribution-radio-group'
);
export let isAttributionRequiredErrorDisplayed: boolean = false;
const pills: HTMLDivElement[] = Array.from(
  document.querySelectorAll('.cc-attribution-radio-group > .c-pill-m__light')
);

const attributionRequiredErrorMessage: HTMLElement | null =
  document.querySelector('.cc-attribution-required-error');

const calculateStyles = () => {
  if (!attributionRequiredErrorMessage || !attributionRadioGroup) return {};
  const attributionRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(
    attributionRequiredErrorMessage
  );
  const attributionRadioGroupsStyles: CSSStyleDeclaration = getComputedStyle(
    attributionRadioGroup
  );
  return {
    attributionRadioGroupMarginTop:
      attributionRadioGroupsStyles.marginTop.substring(
        0,
        attributionRadioGroupsStyles.marginTop.length - 2
      ),
    attributionRequiredErrorLineHeight:
      attributionRequiredErrorStyles.lineHeight.substring(
        0,
        attributionRequiredErrorStyles.lineHeight.length - 2
      ),
  };
};

const { attributionRadioGroupMarginTop, attributionRequiredErrorLineHeight } =
  calculateStyles();

export const displayAttributionRequiredError = () => {
  if (!attributionRadioGroup) return;
  if (!attributionRequiredErrorMessage) return;
  attributionRadioGroup.style.marginTop = `${
    Number(attributionRadioGroupMarginTop) -
    Number(attributionRequiredErrorLineHeight)
  }px`;
  attributionRequiredErrorMessage.style.display = 'block';
  for (let i = 0; i < pills.length; i++) {
    pills[i].style.border = '1px solid #cb0b0b';
  }
  isAttributionRequiredErrorDisplayed = true;
};

export const hideAttributionRequiredError = () => {
  if (!attributionRadioGroup) return;
  if (!attributionRequiredErrorMessage) return;
  isAttributionRequiredErrorDisplayed = false;
  attributionRequiredErrorMessage.style.display = 'none';
  for (let i = 0; i < pills.length; i++) {
    pills[i].style.border = '1px solid #9e9e9e';
  }
  attributionRadioGroup.style.marginTop = `${attributionRadioGroupMarginTop}px`;
};
