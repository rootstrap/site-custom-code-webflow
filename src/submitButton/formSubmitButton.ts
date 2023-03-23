import { isNameErrorDisplayed, nameInput, displayNameRequiredError } from "../formInputs/nameInput";
import { isProjectErrorDisplayed, projectInput, displayProjectRequiredError } from "../formInputs/projectInput";
import {
    isEmailFormatErrorDisplayed,
    isEmailRequiredErrorDisplayed,
    emailInput,
    displayEmailRequiredError,
    displayEmailFormatError
} from "../formInputs/emailInput";
const elementToScroll: HTMLElement = document.querySelector('#what-to-do-checkbox-group')
const submitButton: HTMLFormElement = document.querySelector('#submit-button');

submitButton.addEventListener('click', (event: Event) => {

    if (emailInput.value === "") displayEmailRequiredError()
    if (emailInput.value === "") displayEmailFormatError
    if (nameInput.value === "") displayNameRequiredError()
    if (projectInput.value === "") displayProjectRequiredError()

    if (
        !isNameErrorDisplayed &&
        !isEmailRequiredErrorDisplayed &&
        !isProjectErrorDisplayed &&
        !isEmailFormatErrorDisplayed
    ) {
        elementToScroll.scrollIntoView()
    }

})