import { colors } from "./colors"

const referalCheckbox = <HTMLInputElement>document.getElementById('checkbox-pill-referal')
const referalPill = <HTMLInputElement>document.getElementById('pill-checkbox-referal')
const referalButtonHover = <HTMLInputElement>document.getElementById('button-hover-referal')
const referalPillLabel = <HTMLInputElement>document.getElementById('pill-list-label-referal')

function isLightThemed() {
	return referalPill.className.includes('__light')
}

const referalThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (referalCheckbox.checked) {
			referalPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			referalButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			referalPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			referalPillLabel.style.color = colors.lightTextColor
			referalPill.style.backgroundColor = colors.lightBackgroundColor
			referalButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (referalCheckbox.checked) {
			referalPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			referalButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			referalPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			referalPill.style.backgroundColor = colors.darkBackgroundColor
			referalButtonHover.style.backgroundColor = colors.darkHoverColor
			referalPillLabel.style.color = colors.darkTextColor
		}
	}
})

referalThemeObserver.observe(referalPill, { attributes: true })

referalCheckbox.addEventListener('change', function () {
	if (this.checked) {
		if (isLightThemed()) {
			referalPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			referalButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			referalPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			referalPillLabel.style.color = colors.darkSelectedTextColor
			referalPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			referalButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			referalPill.style.backgroundColor = colors.lightBackgroundColor
			referalButtonHover.style.backgroundColor = colors.lightHoverColor
			referalPillLabel.style.color = colors.lightTextColor
		} else {
			referalPill.style.backgroundColor = colors.darkBackgroundColor
			referalButtonHover.style.backgroundColor = colors.darkHoverColor
			referalPillLabel.style.color = colors.darkTextColor
		}
	}
});

referalPill.addEventListener('mouseover', function () {
	if (referalCheckbox.checked) {
		if (isLightThemed()) {
			referalButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			referalButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			referalButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			referalButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})

