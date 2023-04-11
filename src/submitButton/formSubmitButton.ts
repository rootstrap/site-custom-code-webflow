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
import { displaySocialCheckboxError, hideSocialsCheckboxError, isSocialsCheckboxErrorDisplayed, socialsCheckboxGroup } from "../formInputs/socialCheckboxGroup";
import { displayCaptchaRequiredError, hideCaptchaRequiredError, isCaptchaErrorDisplayed } from "../formInputs/captcha";

const captchaWrapper: HTMLElement = document.querySelector('.c-captcha-wrapper')
const script = document.createElement('script');
script.src = 'https://www.google.com/recaptcha/api.js';
script.async = true;
script.defer = true;
document.body.appendChild(script);


const submitButton: HTMLFormElement = document.querySelector('#submit-button')
const checkboxes: HTMLInputElement[] = [
    document.querySelector('#checkbox-pill-social'),
    document.querySelector('#checkbox-pill-google'),
    document.querySelector('#checkbox-pill-friend'),
    document.querySelector('#checkbox-pill-referral'),
    document.querySelector('#checkbox-pill-other-social'),
]

submitButton.addEventListener('click', (event: Event) => {
    const headerOffset = 150

    //@ts-ignore
    if (!window.grecaptcha.getResponse()) {
        displayCaptchaRequiredError()
        setTimeout(() => {
            hideCaptchaRequiredError()
        }, 4000)
    }

    if (emailInput.value === "") {
        displayEmailRequiredError()
    } else if (!isEmail(emailInput.value)) {
        displayEmailFormatError()
    }

    if (nameInput.value === "") displayNameRequiredError()
    if (projectInput.value === "") displayProjectRequiredError()

    if (checkboxes.every(ch => !ch.checked)) {
        displaySocialCheckboxError()
    } else {
        hideSocialsCheckboxError()
    }

    if (isProjectErrorDisplayed) {
        const projectInputPosition = projectInput.getBoundingClientRect().top
        const offsetPosition = projectInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isNameErrorDisplayed) {
        const nameInputPosition = nameInput.getBoundingClientRect().top
        const offsetPosition = nameInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isEmailFormatErrorDisplayed || isEmailRequiredErrorDisplayed) {
        const emailInputPosition = nameInput.getBoundingClientRect().top
        const offsetPosition = emailInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isSocialsCheckboxErrorDisplayed) {
        const socialsCheckboxPosition = socialsCheckboxGroup.getBoundingClientRect().top
        const offsetPosition = socialsCheckboxPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }

    if (isCaptchaErrorDisplayed) {
        const captchaPosition = captchaWrapper.getBoundingClientRect().top
        const offsetPosition = captchaPosition + window.pageYOffset - headerOffset
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return false;
    }
})