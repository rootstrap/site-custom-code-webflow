import { isNameErrorDisplayed, nameInput, displayNameRequiredError } from "../formInputs/nameInput";
import { isProjectErrorDisplayed, projectInput, displayProjectRequiredError } from "../formInputs/projectInput";
import {
    isEmailFormatErrorDisplayed,
    isEmailRequiredErrorDisplayed,
    emailInput,
    displayEmailRequiredError,
    displayEmailFormatError
} from "../formInputs/emailInput";
import { isEmail } from "class-validator";
import { 
    displayAttributionRequiredError, 
    hideAttributionRequiredError, 
    isAttributionRequiredErrorDisplayed, 
    attributionRadioGroup 
} from "../formInputs/attributionRadioGroup";
import { 
    displayRequestRequiredError, 
    hideRequestRequiredError, 
    isRequestRequiredErrorDisplayed, 
    requestRadioGroup
} from "../formInputs/requestRadioGroup";
import { displayCaptchaRequiredError, hideCaptchaRequiredError, isCaptchaErrorDisplayed } from "../formInputs/captcha";

const captchaWrapper: HTMLElement | null = document.querySelector('.c-captcha-wrapper');
const script = document.createElement('script');
script.src = 'https://www.google.com/recaptcha/api.js';
script.async = true;
script.defer = true;
document.body.appendChild(script);

const submitButton: HTMLFormElement | null = document.querySelector('#submit-button');
const requestRadios: HTMLInputElement[] = Array.from(document.querySelectorAll('.cc-request-radio-group input[type="radio"]'));
const attributionRadios: HTMLInputElement[] = Array.from(document.querySelectorAll('.cc-attribution-radio-group input[type="radio"]'));

requestRadios.forEach((radioInput) => {
    radioInput.addEventListener('change', hideRequestRequiredError);
});

attributionRadios.forEach((radioInput) => {
    radioInput.addEventListener('change', hideAttributionRequiredError);
});
    
submitButton?.addEventListener('click', (event: Event) => {
    const headerOffset = 150;

    //@ts-ignore
    if (!window.grecaptcha.getResponse()) {
        displayCaptchaRequiredError();
        setTimeout(() => {
            hideCaptchaRequiredError();
        }, 4000)
    }

    if (emailInput.value === "") {
        displayEmailRequiredError();
    } else if (!isEmail(emailInput.value)) {
        displayEmailFormatError();
    }

    if (!nameInput.value) displayNameRequiredError();
    if (!projectInput.value) displayProjectRequiredError();

    if (requestRadios.every(ch => !ch.checked)) {
        debugger
        displayRequestRequiredError();
    } else {
        hideRequestRequiredError();
    }

    if (attributionRadios.every(ch => !ch.checked)) {
        displayAttributionRequiredError();
    } else {
        hideAttributionRequiredError();
    }

    if (isRequestRequiredErrorDisplayed) {
        const requestRadioGroupPosition = requestRadioGroup?.getBoundingClientRect().top || 0;
        const offsetPosition = requestRadioGroupPosition + window.pageYOffset - headerOffset;
        event.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isProjectErrorDisplayed) {
        const projectInputPosition = projectInput.getBoundingClientRect().top;
        const offsetPosition = projectInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isNameErrorDisplayed) {
        const nameInputPosition = nameInput.getBoundingClientRect().top;
        const offsetPosition = nameInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isEmailFormatErrorDisplayed || isEmailRequiredErrorDisplayed) {
        const emailInputPosition = nameInput.getBoundingClientRect().top;
        const offsetPosition = emailInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isAttributionRequiredErrorDisplayed) {
        const attributionRadioGroupPosition = attributionRadioGroup?.getBoundingClientRect().top || 0;
        const offsetPosition = attributionRadioGroupPosition + window.pageYOffset - headerOffset;
        event.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isCaptchaErrorDisplayed) {
        const captchaPosition = captchaWrapper?.getBoundingClientRect().top || 0;
        const offsetPosition = captchaPosition + window.pageYOffset - headerOffset;
        event.preventDefault();
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }
});