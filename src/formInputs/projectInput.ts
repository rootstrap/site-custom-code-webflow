export const projectInput: HTMLInputElement = document.querySelector('.cc-project-input') as HTMLInputElement
export let isProjectErrorDisplayed: boolean = false
const nameInputBelow: HTMLInputElement = document.querySelector('.cc-name-input') as HTMLInputElement
const projectRequiredErrorMessage: HTMLElement = document.querySelector('.cc-project-required-error')

const nameInputStyles: CSSStyleDeclaration = getComputedStyle(nameInputBelow)
const projectRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(projectRequiredErrorMessage)
const nameInputMarginTop: string = nameInputStyles.marginTop.substring(0, nameInputStyles.marginTop.length - 2)
const projectRequiredErrorLineHeight: string = projectRequiredErrorStyles.lineHeight.substring(0, projectRequiredErrorStyles.lineHeight.length - 2)

projectInput.style.border = '1px solid transparent'
projectInput.style.borderBottom = '1px solid #7b7b7b'

export const displayProjectRequiredError = (): void => {
	if (!isProjectErrorDisplayed) {
		nameInputBelow.style.marginTop = `${Number(nameInputMarginTop) - Number(projectRequiredErrorLineHeight)}px`
		projectRequiredErrorMessage.style.display = 'block'
		projectInput.style.borderBottom = '1px solid #cb0b0b'
		isProjectErrorDisplayed = true
	}
}

const hideProjectRequiredError = (): void => {
	projectInput.style.border = '1px solid transparent'
	projectInput.style.borderBottom = '1px solid #7b7b7b'
	nameInputBelow.style.marginTop = `${nameInputMarginTop}px`
	projectRequiredErrorMessage.style.display = 'none'
	isProjectErrorDisplayed = false
}

projectInput.addEventListener('blur', () => {
	if (projectInput.value === '') {
		displayProjectRequiredError()
	}
})

projectInput.addEventListener('input', () => {
	if (projectInput.value === '') {
		displayProjectRequiredError()
	} else {
		hideProjectRequiredError()
	}
})