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
import { displaySocialCheckboxError, isSocialsCheckboxErrorDisplayed, socialsCheckboxGroup } from "../formInputs/socialCheckboxGroup";

const submitButton: HTMLFormElement = document.querySelector('#submit-button')
const checkboxes: HTMLInputElement[] = [
    document.querySelector('#checkbox-pill-social'),
    document.querySelector('#checkbox-pill-google'),
    document.querySelector('#checkbox-pill-friend'),
    document.querySelector('#checkbox-pill-referal'),
    document.querySelector('#checkbox-pill-other-social'),
]

submitButton.addEventListener('click', (event: Event) => {
    const headerOffset = 150

    if (emailInput.value === "") {
        displayEmailRequiredError()
    } else if (!isEmail(emailInput.value)) {
        displayEmailFormatError()
    }

    if (nameInput.value === "") displayNameRequiredError()
    if (projectInput.value === "") displayProjectRequiredError()

    if (checkboxes.every(ch => !ch.checked)) {
        displaySocialCheckboxError()
    }

    if (isProjectErrorDisplayed) {
        const projectInputPosition = projectInput.getBoundingClientRect().top
        const offsetPosition = projectInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return;
    }

    if (isNameErrorDisplayed) {
        const nameInputPosition = nameInput.getBoundingClientRect().top
        const offsetPosition = nameInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return;
    }

    if (isEmailFormatErrorDisplayed || isEmailRequiredErrorDisplayed) {
        const emailInputPosition = nameInput.getBoundingClientRect().top
        const offsetPosition = emailInputPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return;
    }

    if (isSocialsCheckboxErrorDisplayed) {
        const socialsCheckboxPosition = socialsCheckboxGroup.getBoundingClientRect().top
        const offsetPosition = socialsCheckboxPosition + window.pageYOffset - headerOffset;
        event.preventDefault()
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
        return;
    }
})