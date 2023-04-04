import { colors } from "./colors"

const staffCheckbox: HTMLInputElement = document.getElementById('checkbox-pill-staff') as HTMLInputElement
const staffPill: HTMLElement = document.getElementById('pill-checkbox-staff')
const staffButtonHover: HTMLElement = document.getElementById('button-hover-staff')
const staffPillLabel: HTMLElement = document.getElementById('pill-list-label-staff')

function isLightThemed() {
	return staffPill.className.includes('__light')
}

const staffThemeObserver = new MutationObserver((mutationList: unknown, observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (staffCheckbox.checked) {
			staffPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			staffButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			staffPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			staffPillLabel.style.color = colors.lightTextColor
			staffPill.style.backgroundColor = colors.lightBackgroundColor
			staffButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (staffCheckbox.checked) {
			staffPill.style.backgroundColor = colors.darkSelectedBackgroundColor;
			staffButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			staffPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			staffPill.style.backgroundColor = colors.darkBackgroundColor
			staffButtonHover.style.backgroundColor = colors.darkHoverColor
			staffPillLabel.style.color = colors.darkTextColor
		}
	}
})

staffThemeObserver.observe(staffPill, { attributes: true })

staffPill.addEventListener('click', function () {
	staffCheckbox.checked = !staffCheckbox.checked
	if (staffCheckbox.checked) {
		if (isLightThemed()) {
			staffPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			staffButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			staffPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			staffPillLabel.style.color = colors.darkSelectedTextColor
			staffPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			staffButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			staffPill.style.backgroundColor = colors.lightBackgroundColor
			staffButtonHover.style.backgroundColor = colors.lightHoverColor
			staffPillLabel.style.color = colors.lightTextColor
		} else {
			staffPill.style.backgroundColor = colors.darkBackgroundColor
			staffButtonHover.style.backgroundColor = colors.darkHoverColor
			staffPillLabel.style.color = colors.darkTextColor
		}
	}
});

staffPill.addEventListener('mouseover', function () {
	if (staffCheckbox.checked) {
		if (isLightThemed()) {
			staffButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			staffButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			staffButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			staffButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})
