import { colors } from "./colors"

const socialCheckbox = <HTMLInputElement>document.getElementById('checkbox-pill-social')
const socialPill = <HTMLInputElement>document.getElementById('pill-checkbox-social')
const socialButtonHover = <HTMLInputElement>document.getElementById('button-hover-social')
const socialPillLabel = <HTMLInputElement>document.getElementById('pill-list-label-social')

function isLightThemed() {
	return socialPill.className.includes('__light')
}

const socialThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (socialCheckbox.checked) {
			socialPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			socialButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			socialPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			socialPillLabel.style.color = colors.lightTextColor
			socialPill.style.backgroundColor = colors.lightBackgroundColor
			socialButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (socialCheckbox.checked) {
			socialPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			socialButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			socialPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			socialPill.style.backgroundColor = colors.darkBackgroundColor
			socialButtonHover.style.backgroundColor = colors.darkHoverColor
			socialPillLabel.style.color = colors.darkTextColor
		}
	}
})

socialThemeObserver.observe(socialPill, { attributes: true })

socialCheckbox.addEventListener('change', function () {
	if (this.checked) {
		if (isLightThemed()) {
			socialPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			socialButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			socialPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			socialPillLabel.style.color = colors.darkSelectedTextColor
			socialPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			socialButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			socialPill.style.backgroundColor = colors.lightBackgroundColor
			socialButtonHover.style.backgroundColor = colors.lightHoverColor
			socialPillLabel.style.color = colors.lightTextColor
		} else {
			socialPill.style.backgroundColor = colors.darkBackgroundColor
			socialButtonHover.style.backgroundColor = colors.darkHoverColor
			socialPillLabel.style.color = colors.darkTextColor
		}
	}
});

socialPill.addEventListener('mouseover', function () {
	if (socialCheckbox.checked) {
		if (isLightThemed()) {
			socialButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			socialButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			socialButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			socialButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})