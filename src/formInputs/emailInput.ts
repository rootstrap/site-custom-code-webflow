import { isEmail } from "class-validator"

export const emailInput: HTMLInputElement = document.querySelector('.cc-email-input') as HTMLInputElement
export let isEmailRequiredErrorDisplayed: boolean = false
export let isEmailFormatErrorDisplayed: boolean = false
const emailRequiredErrorMessage: HTMLElement = document.querySelector('.cc-email-required-error')
const emailFormatErrorMessage: HTMLElement = document.querySelector('.cc-email-format-error')
const socialCheckboxGroup: HTMLElement = document.querySelector('.cc-social-checkbox-group')

const socialCheckboxGroupStyles: CSSStyleDeclaration = getComputedStyle(socialCheckboxGroup)
const emailRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(emailRequiredErrorMessage)
const emailFormatErrorStyles: CSSStyleDeclaration = getComputedStyle(emailFormatErrorMessage)
const socialCheckboxGroupMarginTop: string = socialCheckboxGroupStyles.marginTop.substring(0, socialCheckboxGroupStyles.marginTop.length - 2)
const emailRequiredErrorLineHeight: string = emailRequiredErrorStyles.lineHeight.substring(0, emailRequiredErrorStyles.lineHeight.length - 2)
const emailFormatErrorLineHeight: string = emailFormatErrorStyles.lineHeight.substring(0, emailFormatErrorStyles.lineHeight.length - 2)

emailInput.style.border = '1px solid transparent'
emailInput.style.borderBottom = '1px solid #7b7b7b'

export const displayEmailRequiredError = (): void => {
	if (!isEmailRequiredErrorDisplayed) {
		socialCheckboxGroup.style.marginTop = `${Number(socialCheckboxGroupMarginTop) - Number(emailRequiredErrorLineHeight)}px`
		emailRequiredErrorMessage.style.display = 'block'
		emailInput.style.borderBottom = '1px solid #cb0b0b'
		isEmailRequiredErrorDisplayed = true
	}
}

export const displayEmailFormatError = (): void => {
	if (!isEmailFormatErrorDisplayed) {
		socialCheckboxGroup.style.marginTop = `${Number(socialCheckboxGroupMarginTop) - Number(emailFormatErrorLineHeight)}px`
		emailFormatErrorMessage.style.display = 'block'
		emailInput.style.borderBottom = '1px solid #cb0b0b'
		isEmailFormatErrorDisplayed = true
	}
}

const hideEmailRequiredError = (): void => {
	if (isEmailRequiredErrorDisplayed) {
		emailInput.style.border = '1px solid transparent'
		emailInput.style.borderBottom = '1px solid #7b7b7b'
		socialCheckboxGroup.style.marginTop = `${socialCheckboxGroupMarginTop}px`
		emailRequiredErrorMessage.style.display = 'none'
		isEmailRequiredErrorDisplayed = false
	}
}

const hideEmailFormatError = (): void => {
	if (isEmailFormatErrorDisplayed) {
		emailInput.style.border = '1px solid transparent'
		emailInput.style.borderBottom = '1px solid #7b7b7b'
		socialCheckboxGroup.style.marginTop = `${socialCheckboxGroupMarginTop}px`
		emailFormatErrorMessage.style.display = 'none'
		isEmailFormatErrorDisplayed = false
	}
}

emailInput.addEventListener('blur', () => {
	if (emailInput.value === '') {
		displayEmailRequiredError()
	}
})

emailInput.addEventListener('input', () => {
	if (emailInput.value === '') {
		hideEmailFormatError()
		displayEmailRequiredError()
	} else {
		hideEmailRequiredError()
		if (!isEmail(emailInput.value)) {
			displayEmailFormatError()
		} else {
			hideEmailFormatError()
		}
	}
})