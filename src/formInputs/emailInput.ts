import { isEmail } from "class-validator"

export const emailInput: HTMLInputElement = document.querySelector('.email-input')
const emailInputUnderline: HTMLElement = document.querySelector('.email-underline')
const emailInputContainer: HTMLElement = document.querySelector('.email-input-container')
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
emailInputUnderline.style.maxWidth = `${emailInputContainer.getBoundingClientRect().width}px`

export const displayEmailRequiredError = (): void => {
	if (!isEmailRequiredErrorDisplayed) {
		emailInputUnderline.style.width = '100%'
		emailInputContainer.style.marginBottom = "0px"
		socialCheckboxGroup.style.marginTop = `${Number(socialCheckboxGroupMarginTop) - Number(emailRequiredErrorLineHeight)}px`
		emailRequiredErrorMessage.style.display = 'block'
		emailInputUnderline.style.backgroundColor = '#cb0b0b'
		isEmailRequiredErrorDisplayed = true
	}
}

export const displayEmailFormatError = (): void => {
	if (!isEmailFormatErrorDisplayed) {
		emailInputContainer.style.marginBottom = '0px'
		socialCheckboxGroup.style.marginTop = `${Number(socialCheckboxGroupMarginTop) - Number(emailFormatErrorLineHeight)}px`
		emailFormatErrorMessage.style.display = 'block'
		emailInputUnderline.style.backgroundColor = '#cb0b0b'
		isEmailFormatErrorDisplayed = true
	}
}

const hideEmailRequiredError = (): void => {
	if (isEmailRequiredErrorDisplayed) {
		emailInputUnderline.style.backgroundColor = "#7b7b7b"
		socialCheckboxGroup.style.marginTop = `${socialCheckboxGroupMarginTop}px`
		emailRequiredErrorMessage.style.display = 'none'
		isEmailRequiredErrorDisplayed = false
	}
}

const hideEmailFormatError = (): void => {
	if (isEmailFormatErrorDisplayed) {
		emailInputUnderline.style.backgroundColor = "#7b7b7b"
		socialCheckboxGroup.style.marginTop = `${socialCheckboxGroupMarginTop}px`
		emailFormatErrorMessage.style.display = 'none'
		isEmailFormatErrorDisplayed = false
	}
}

emailInput.addEventListener('focus', () => {
	if (emailInput.value === "") {
		emailInput.placeholder = ""
	}
})

emailInput.addEventListener('blur', () => {
	if (emailInput.value === '') {
		emailInput.placeholder = "Your email*"
		emailInputUnderline.style.width = '100%'
		displayEmailRequiredError()
	} else if (!isEmail(emailInput.value)) {
		displayEmailFormatError()
	}
})

emailInput.addEventListener('input', () => {
	if (emailInput.value === '') {
		hideEmailFormatError()
		displayEmailRequiredError()
	} else {
		hideEmailRequiredError()
		const underlineWidth = Number(emailInputUnderline.style.width.substring(0, emailInputUnderline.style.width.length - 2))
		if (underlineWidth < emailInputContainer.getBoundingClientRect().width) {
			const span = document.createElement('span')
			span.style.fontSize = getComputedStyle(emailInput).fontSize
			span.style.lineHeight = getComputedStyle(emailInput).lineHeight
			span.style.fontFamily = getComputedStyle(emailInput).fontFamily
			span.style.fontWeight = getComputedStyle(emailInput).fontWeight
			span.innerText = emailInput.value
			document.body.appendChild(span)
			const width = span.offsetWidth
			document.body.removeChild(span)
			emailInputUnderline.style.width = `${width}px`
		}
		if (!isEmail(emailInput.value)) {
			displayEmailFormatError()
		} else {
			hideEmailFormatError()
		}
	}
})