export const projectInput: HTMLInputElement = document.querySelector('.project-input')
const projectInputUnderline: HTMLElement = document.querySelector('.project-underline')
const projectInputContainer: HTMLElement = document.querySelector('.project-input-container')
export let isProjectErrorDisplayed: boolean = false
const nameInputBelow: HTMLElement = document.querySelector('.cc-name-input')
const projectRequiredErrorMessage: HTMLElement = document.querySelector('.cc-project-required-error')

const nameInputStyles: CSSStyleDeclaration = getComputedStyle(nameInputBelow)
const projectRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(projectRequiredErrorMessage)
const nameInputMarginTop: string = nameInputStyles.marginTop.substring(0, nameInputStyles.marginTop.length - 2)
const projectRequiredErrorLineHeight: string = projectRequiredErrorStyles.lineHeight.substring(0, projectRequiredErrorStyles.lineHeight.length - 2)
projectInputUnderline.style.maxWidth = `${projectInputContainer.getBoundingClientRect().width}px`

export const displayProjectRequiredError = (): void => {
	if (!isProjectErrorDisplayed) {
		projectInputUnderline.style.width = '100%'
		projectInputContainer.style.marginBottom = "0px"
		nameInputBelow.style.marginTop = `${Number(nameInputMarginTop) - Number(projectRequiredErrorLineHeight)}px`
		projectRequiredErrorMessage.style.display = 'block'
		projectInputUnderline.style.backgroundColor = '#cb0b0b'
		isProjectErrorDisplayed = true
	}
}

const hideProjectRequiredError = (): void => {
	projectInputUnderline.style.backgroundColor = '#7b7b7b'
	nameInputBelow.style.marginTop = `${nameInputMarginTop}px`
	projectRequiredErrorMessage.style.display = 'none'
	isProjectErrorDisplayed = false
}

projectInput.addEventListener('focus', () => {
	if (projectInput.value === "") {
		projectInput.placeholder = ""
	}
})

projectInput.addEventListener('blur', () => {
	if (projectInput.value === "") {
		projectInput.placeholder = "Tell us about your project*"
		projectInputUnderline.style.width = '100%'
		displayProjectRequiredError()
	}
})

projectInput.addEventListener('input', () => {
	if (projectInput.value === '') {
		displayProjectRequiredError()
	} else {
		hideProjectRequiredError()
		const underlineWidth = Number(projectInputUnderline.style.width.substring(0, projectInputUnderline.style.width.length - 2))
		if (underlineWidth < projectInputContainer.getBoundingClientRect().width) {
			const span = document.createElement('span')
			span.style.fontSize = getComputedStyle(projectInput).fontSize
			span.style.lineHeight = getComputedStyle(projectInput).lineHeight
			span.style.fontFamily = getComputedStyle(projectInput).fontFamily
			span.style.fontWeight = getComputedStyle(projectInput).fontWeight
			span.innerText = projectInput.value
			document.body.appendChild(span)
			const width = span.offsetWidth
			document.body.removeChild(span)
			projectInputUnderline.style.width = `${width}px`
		}
	}
})