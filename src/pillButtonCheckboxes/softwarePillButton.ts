import { colors } from './colors'
import { unselectOtherCheckbox } from './otherPillButton'
import { unselectProductCheckbox } from './productPillButton'
import { unselectStaffCheckbox } from './staffPillButton'

const softwareCheckbox: HTMLInputElement = document.getElementById('checkbox-pill-software') as HTMLInputElement
const softwarePill: HTMLElement = document.getElementById('pill-checkbox-software')
const softwareButtonHover: HTMLElement = document.getElementById('button-hover-software')
const softwarePillLabel: HTMLElement = document.getElementById('pill-list-label-software')

function isLightThemed() {
	return softwarePill.className.includes('__light')
}

const softwareThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (softwareCheckbox.checked) {
			softwarePill.style.backgroundColor = colors.lightSelectedBackgroundColor
			softwareButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			softwarePillLabel.style.color = colors.lightSelectedTextColor
		} else {
			softwarePillLabel.style.color = colors.lightTextColor
			softwarePill.style.backgroundColor = colors.lightBackgroundColor
			softwareButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (softwareCheckbox.checked) {
			softwarePill.style.backgroundColor = colors.darkSelectedBackgroundColor
			softwareButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			softwarePillLabel.style.color = colors.darkSelectedTextColor
		} else {
			softwarePill.style.backgroundColor = colors.darkBackgroundColor
			softwareButtonHover.style.backgroundColor = colors.darkHoverColor
			softwarePillLabel.style.color = colors.darkTextColor
		}
	}
})

softwareThemeObserver.observe(softwarePill, { attributes: true })

softwarePill.addEventListener('click', function () {

	if (!softwareCheckbox.checked) {
		selectSoftwareCheckbox()
	} else {
		unselectSoftwareCheckbox()
	}
});

softwarePill.addEventListener('mouseover', function () {
	if (softwareCheckbox.checked) {
		if (isLightThemed()) {
			softwareButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			softwareButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			softwareButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			softwareButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})

export const selectSoftwareCheckbox = () => {
	unselectProductCheckbox()
	unselectOtherCheckbox()
	unselectStaffCheckbox()
	softwareCheckbox.checked = true
	if (isLightThemed()) {
		softwarePill.style.backgroundColor = colors.lightSelectedBackgroundColor
		softwareButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		softwarePillLabel.style.color = colors.lightSelectedTextColor
	} else {
		softwarePillLabel.style.color = colors.darkSelectedTextColor
		softwarePill.style.backgroundColor = colors.darkSelectedBackgroundColor
		softwareButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
	}
}

export const unselectSoftwareCheckbox = () => {
	softwareCheckbox.checked = false
	if (isLightThemed()) {
		softwarePill.style.backgroundColor = colors.lightBackgroundColor
		softwareButtonHover.style.backgroundColor = colors.lightHoverColor
		softwarePillLabel.style.color = colors.lightTextColor
	} else {
		softwarePill.style.backgroundColor = colors.darkBackgroundColor
		softwareButtonHover.style.backgroundColor = colors.darkHoverColor
		softwarePillLabel.style.color = colors.darkTextColor
	}
}