const captchaError: HTMLElement = document.querySelector('.cc-captcha-required-error')
const captchaWrapper: HTMLElement = document.querySelector('.c-captcha-wrapper')
const submitButton: HTMLFormElement = document.querySelector('#submit-button')
export let isCaptchaErrorDisplayed: boolean = false

const submitButtonStyles: CSSStyleDeclaration = getComputedStyle(submitButton)
const submitButtonMarginTop: number = Number(submitButtonStyles.marginTop.substring(0, submitButtonStyles.marginTop.length - 2))
const captchaErrorStyles: CSSStyleDeclaration = getComputedStyle(captchaError)
const captchaErrorLineHeight: number = Number(captchaErrorStyles.lineHeight.substring(0, captchaErrorStyles.lineHeight.length - 2))

export const displayCaptchaRequiredError = () => {
    if (!isCaptchaErrorDisplayed) {
        captchaWrapper.style.borderColor = "#cb0b0b"
        captchaError.style.display = 'block'
        submitButton.style.marginTop = `${submitButtonMarginTop - captchaErrorLineHeight}px`
        isCaptchaErrorDisplayed = true
    }
}

export const hideCaptchaRequiredError = () => {
    captchaWrapper.style.borderColor = 'transparent'
    captchaError.style.display = 'none'
    submitButton.style.marginTop = `${submitButtonMarginTop}px`
    isCaptchaErrorDisplayed = false
}