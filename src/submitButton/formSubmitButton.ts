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
import { checkboxes, displaySocialCheckboxError, isSocialsCheckboxErrorDisplayed, socialsCheckboxGroup } from "../formInputs/socialCheckboxGroup";
const submitButton: HTMLFormElement = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event: Event) => {
    const headerOffset = 150

    if (emailInput.value === "") {
        displayEmailRequiredError()
    } else if (!isEmail(emailInput.value)) {
        displayEmailFormatError()
    }

    if (nameInput.value === "") displayNameRequiredError()
    if (projectInput.value === "") displayProjectRequiredError()

    if (
        !checkboxes[0].checked &&
        !checkboxes[1].checked &&
        !checkboxes[2].checked &&
        !checkboxes[3].checked &&
        !checkboxes[4].checked
    ) {
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