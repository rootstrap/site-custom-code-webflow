import { colors } from "./colors"
import { unselectOtherCheckbox } from "./otherPillButton"
import { unselectProductCheckbox } from "./productPillButton"
import { unselectSoftwareCheckbox } from "./softwarePillButton"

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
	if (!staffCheckbox.checked) {
		selectStaffCheckbox()
	} else {
		unselectStaffCheckbox()
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

const selectStaffCheckbox = () => {
	unselectProductCheckbox()
	unselectOtherCheckbox()
	unselectSoftwareCheckbox()
	staffCheckbox.checked = true
	if (isLightThemed()) {
		staffPill.style.backgroundColor = colors.lightSelectedBackgroundColor
		staffButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		staffPillLabel.style.color = colors.lightSelectedTextColor
	} else {
		staffPillLabel.style.color = colors.darkSelectedTextColor
		staffPill.style.backgroundColor = colors.darkSelectedBackgroundColor
		staffButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
	}
}

export const unselectStaffCheckbox = () => {
	if (!staffCheckbox.checked) return
	staffCheckbox.checked = false
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
