import { colors } from "./colors"

const otherSocialCheckbox = <HTMLInputElement>document.getElementById('checkbox-pill-other-social')
const otherSocialPill = <HTMLInputElement>document.getElementById('pill-checkbox-other-social')
const otherSocialButtonHover = <HTMLInputElement>document.getElementById('button-hover-other-social')
const otherSocialPillLabel = <HTMLInputElement>document.getElementById('pill-list-label-other-social')

function isLightThemed() {
	return otherSocialPill.className.includes('__light')
}

const otherSocialThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (otherSocialCheckbox.checked) {
			otherSocialPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			otherSocialPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			otherSocialPillLabel.style.color = colors.lightTextColor
			otherSocialPill.style.backgroundColor = colors.lightBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (otherSocialCheckbox.checked) {
			otherSocialPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			otherSocialPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			otherSocialPill.style.backgroundColor = colors.darkBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.darkHoverColor
			otherSocialPillLabel.style.color = colors.darkTextColor
		}
	}
})

otherSocialThemeObserver.observe(otherSocialPill, { attributes: true })

otherSocialCheckbox.addEventListener('change', function () {
	if (this.checked) {
		if (isLightThemed()) {
			otherSocialPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			otherSocialPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			otherSocialPillLabel.style.color = colors.darkSelectedTextColor
			otherSocialPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			otherSocialPill.style.backgroundColor = colors.lightBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.lightHoverColor
			otherSocialPillLabel.style.color = colors.lightTextColor
		} else {
			otherSocialPill.style.backgroundColor = colors.darkBackgroundColor
			otherSocialButtonHover.style.backgroundColor = colors.darkHoverColor
			otherSocialPillLabel.style.color = colors.darkTextColor
		}
	}
});

otherSocialPill.addEventListener('mouseover', function () {
	if (otherSocialCheckbox.checked) {
		if (isLightThemed()) {
			otherSocialButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			otherSocialButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			otherSocialButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			otherSocialButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})