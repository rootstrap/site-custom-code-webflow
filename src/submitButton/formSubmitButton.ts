import { isNameErrorDisplayed, nameInput, displayNameRequiredError } from "../formInputs/nameInput";
import { isProjectErrorDisplayed, projectInput, displayProjectRequiredError } from "../formInputs/projectInput";
import {
    isEmailFormatErrorDisplayed,
    isEmailRequiredErrorDisplayed,
    emailInput,
    displayEmailRequiredError,
    displayEmailFormatError
} from "../formInputs/emailInput";
const submitButton: HTMLFormElement = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event: Event) => {
    const headerOffset = 150

    if (emailInput.value === "") displayEmailRequiredError()
    if (emailInput.value === "") displayEmailFormatError
    if (nameInput.value === "") displayNameRequiredError()
    if (projectInput.value === "") displayProjectRequiredError()

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
})