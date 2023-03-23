export const nameInput: HTMLInputElement = document.querySelector('.cc-name-input') as HTMLInputElement
export let isNameErrorDisplayed: boolean = false
const emailInputBelow: HTMLInputElement = document.querySelector('.cc-email-input') as HTMLInputElement
const nameRequiredErrorMessage: HTMLElement = document.querySelector('.cc-name-required-error')

const emailInputStyles: CSSStyleDeclaration = getComputedStyle(emailInputBelow)
const nameRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(nameRequiredErrorMessage)
const emailInputMarginTop: string = emailInputStyles.marginTop.substring(0, emailInputStyles.marginTop.length - 2)
const nameRequiredErrorLineHeight: string = nameRequiredErrorStyles.lineHeight.substring(0, nameRequiredErrorStyles.lineHeight.length - 2)

nameInput.style.border = '1px solid transparent'
nameInput.style.borderBottom = '1px solid #7b7b7b'

export const displayNameRequiredError = (): void => {
    if (!isNameErrorDisplayed) {
        emailInputBelow.style.marginTop = `${Number(emailInputMarginTop) - Number(nameRequiredErrorLineHeight)}px`
        nameRequiredErrorMessage.style.display = 'block'
        nameInput.style.borderBottom = '1px solid #cb0b0b'
        isNameErrorDisplayed = true
    }
}

const hideNameRequiredError = (): void => {
    nameInput.style.border = '1px solid transparent'
    nameInput.style.borderBottom = '1px solid #7b7b7b'
    emailInputBelow.style.marginTop = `${emailInputMarginTop}px`
    nameRequiredErrorMessage.style.display = 'none'
    isNameErrorDisplayed = false
}

nameInput.addEventListener('blur', () => {
    if (nameInput.value === '') {
        displayNameRequiredError()
    }
})

nameInput.addEventListener('input', () => {
    if (nameInput.value === '') {
        displayNameRequiredError()
    } else {
        hideNameRequiredError()
    }
})