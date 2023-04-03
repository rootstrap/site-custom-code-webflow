export const nameInput: HTMLInputElement = document.querySelector('.name-input')
export let isNameErrorDisplayed: boolean = false
const nameInputUnderline: HTMLElement = document.querySelector('.name-underline')
const nameInputContainer: HTMLElement = document.querySelector('.project-input-container')
const emailInputBelow: HTMLElement = document.querySelector('.cc-email-input')
const nameRequiredErrorMessage: HTMLElement = document.querySelector('.cc-name-required-error')

const emailInputStyles: CSSStyleDeclaration = getComputedStyle(emailInputBelow)
const nameRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(nameRequiredErrorMessage)
const emailInputMarginTop: string = emailInputStyles.marginTop.substring(0, emailInputStyles.marginTop.length - 2)
const nameRequiredErrorLineHeight: string = nameRequiredErrorStyles.lineHeight.substring(0, nameRequiredErrorStyles.lineHeight.length - 2)
nameInputUnderline.style.maxWidth = `${nameInputContainer.getBoundingClientRect().width}px`

export const displayNameRequiredError = (): void => {
    if (!isNameErrorDisplayed) {
        nameInputUnderline.style.width = '100%'
        nameInputContainer.style.marginBottom = "0px"
        emailInputBelow.style.marginTop = `${Number(emailInputMarginTop) - Number(nameRequiredErrorLineHeight)}px`
        nameRequiredErrorMessage.style.display = 'block'
        nameInputUnderline.style.backgroundColor = '#cb0b0b'
        isNameErrorDisplayed = true
    }
}

const hideNameRequiredError = (): void => {
    nameInputUnderline.style.backgroundColor = "#7b7b7b"
    emailInputBelow.style.marginTop = `${emailInputMarginTop}px`
    nameRequiredErrorMessage.style.display = 'none'
    isNameErrorDisplayed = false
}

nameInput.addEventListener('focus', () => {
    if (nameInput.value === "") {
        nameInput.placeholder = ''
    }
})

nameInput.addEventListener('blur', () => {
    if (nameInput.value === "") {
        nameInput.placeholder = "Your name*"
        nameInputUnderline.style.width = '100%'
        displayNameRequiredError()
    }
})

nameInput.addEventListener('input', () => {
    if (nameInput.value === "") {

        displayNameRequiredError()
    } else {
        hideNameRequiredError()
        const underlineWidth = Number(nameInputUnderline.style.width.substring(0, nameInputUnderline.style.width.length - 2))
        if (underlineWidth < nameInputContainer.getBoundingClientRect().width) {
            const fontSize = Number(getComputedStyle(nameInput).fontSize.substring(0, getComputedStyle(nameInput).fontSize.length - 2))
            nameInputUnderline.style.width = `${nameInput.value.length * fontSize * 0.5}px`
        }
    }

})