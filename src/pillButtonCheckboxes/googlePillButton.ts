import { hideSocialsCheckboxError } from "../formInputs/socialCheckboxGroup"
import { colors } from "./colors"
import { unselectFriendCheckbox } from "./friendPillButton"
import { unselectOtherSocialCheckbox } from "./otherSocialPillButton"
import { unselectReferralCheckbox } from "./referralPillButton"
import { unselectSocialCheckbox } from "./socialMediaPillButton"

const googleCheckbox: HTMLInputElement = document.getElementById('checkbox-pill-google') as HTMLInputElement
const googlePill: HTMLElement = document.getElementById('pill-checkbox-google')
const googleButtonHover: HTMLElement = document.getElementById('button-hover-google')
const googlePillLabel: HTMLElement = document.getElementById('pill-list-label-google')

function isLightThemed() {
	return googlePill.className.includes('__light')
}

const googleThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (googleCheckbox.checked) {
			googlePill.style.backgroundColor = colors.lightSelectedBackgroundColor
			googleButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			googlePillLabel.style.color = colors.lightSelectedTextColor
		} else {
			googlePillLabel.style.color = colors.lightTextColor
			googlePill.style.backgroundColor = colors.lightBackgroundColor
			googleButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (googleCheckbox.checked) {
			googlePill.style.backgroundColor = colors.darkSelectedBackgroundColor
			googleButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			googlePillLabel.style.color = colors.darkSelectedTextColor
		} else {
			googlePill.style.backgroundColor = colors.darkBackgroundColor
			googleButtonHover.style.backgroundColor = colors.darkHoverColor
			googlePillLabel.style.color = colors.darkTextColor
		}
	}
})

googleThemeObserver.observe(googlePill, { attributes: true })

googlePill.addEventListener('click', function () {
	hideSocialsCheckboxError()
	if (!googleCheckbox.checked) {
		selectGoogleCheckbox()
	} else {
		unselectGoogleCheckbox()
	}
});

googlePill.addEventListener('mouseover', function () {
	if (googleCheckbox.checked) {
		if (isLightThemed()) {
			googleButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			googleButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			googleButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			googleButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})

const selectGoogleCheckbox = () => {
	googleCheckbox.checked = true
	unselectFriendCheckbox()
	unselectOtherSocialCheckbox()
	unselectSocialCheckbox()
	unselectReferralCheckbox()
	if (isLightThemed()) {
		googlePill.style.backgroundColor = colors.lightSelectedBackgroundColor
		googleButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		googlePillLabel.style.color = colors.lightSelectedTextColor
	} else {
		googlePillLabel.style.color = colors.darkSelectedTextColor
		googlePill.style.backgroundColor = colors.darkSelectedBackgroundColor
		googleButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
	}
}

export const unselectGoogleCheckbox = () => {
	if (!googleCheckbox.checked) return
	googleCheckbox.checked = false
	if (isLightThemed()) {
		googlePill.style.backgroundColor = colors.lightBackgroundColor
		googleButtonHover.style.backgroundColor = colors.lightHoverColor
		googlePillLabel.style.color = colors.lightTextColor
	} else {
		googlePill.style.backgroundColor = colors.darkBackgroundColor
		googleButtonHover.style.backgroundColor = colors.darkHoverColor
		googlePillLabel.style.color = colors.darkTextColor
	}
}