import { colors } from "./colors"
import { unselectProductCheckbox } from "./productPillButton"
import { unselectSoftwareCheckbox } from "./softwarePillButton"
import { unselectStaffCheckbox } from "./staffPillButton"

const otherCheckbox: HTMLInputElement = document.getElementById('checkbox-pill-other') as HTMLInputElement
const otherPill: HTMLElement = document.getElementById('pill-checkbox-other')
const otherButtonHover: HTMLElement = document.getElementById('button-hover-other')
const otherPillLabel: HTMLElement = document.getElementById('pill-list-label-other')

function isLightThemed() {
	return otherPill.className.includes('__light')
}

const otherThemeObserver = new MutationObserver((mutationList: unknown, observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (otherCheckbox.checked) {
			otherPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			otherButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			otherPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			otherPillLabel.style.color = colors.lightTextColor
			otherPill.style.backgroundColor = colors.lightBackgroundColor
			otherButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (otherCheckbox.checked) {
			otherPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			otherButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			otherPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			otherPill.style.backgroundColor = colors.darkBackgroundColor
			otherButtonHover.style.backgroundColor = colors.darkHoverColor
			otherPillLabel.style.color = colors.darkTextColor
		}
	}
})

otherThemeObserver.observe(otherPill, { attributes: true })

otherPill.addEventListener('click', function () {
	if (!otherCheckbox.checked) {
		selectOtherCheckbox()
	} else {
		unselectOtherCheckbox()
	}
});

otherPill.addEventListener('mouseover', function () {
	if (otherCheckbox.checked) {
		if (isLightThemed()) {
			otherButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			otherButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			otherButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			otherButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})

const selectOtherCheckbox = () => {
	unselectProductCheckbox()
	unselectSoftwareCheckbox()
	unselectStaffCheckbox()
	otherCheckbox.checked = true
	if (isLightThemed()) {
		otherPill.style.backgroundColor = colors.lightSelectedBackgroundColor
		otherButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		otherPillLabel.style.color = colors.lightSelectedTextColor
	} else {
		otherPillLabel.style.color = colors.darkSelectedTextColor
		otherPill.style.backgroundColor = colors.darkSelectedBackgroundColor
		otherButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
	}
}

export const unselectOtherCheckbox = () => {
	if (!otherCheckbox.checked) return
	otherCheckbox.checked = false
	if (isLightThemed()) {
		otherPill.style.backgroundColor = colors.lightBackgroundColor
		otherButtonHover.style.backgroundColor = colors.lightHoverColor
		otherPillLabel.style.color = colors.lightTextColor
	} else {
		otherPill.style.backgroundColor = colors.darkBackgroundColor
		otherButtonHover.style.backgroundColor = colors.darkHoverColor
		otherPillLabel.style.color = colors.darkTextColor
	}
}