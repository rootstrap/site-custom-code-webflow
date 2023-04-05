import { hideSocialsCheckboxError } from "../formInputs/socialCheckboxGroup"
import { colors } from "./colors"
import { unselectFriendCheckbox } from "./friendPillButton"
import { unselectGoogleCheckbox } from "./googlePillButton"
import { unselectOtherSocialCheckbox } from "./otherSocialPillButton"
import { unselectSocialCheckbox } from "./socialMediaPillButton"

const referralCheckbox: HTMLInputElement = document.getElementById('checkbox-pill-referral') as HTMLInputElement
const referralPill: HTMLElement = document.getElementById('pill-checkbox-referral')
const referralButtonHover: HTMLElement = document.getElementById('button-hover-referral')
const referralPillLabel: HTMLElement = document.getElementById('pill-list-label-referral')

function isLightThemed() {
	return referralPill.className.includes('__light')
}

const referralThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (referralCheckbox.checked) {
			referralPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			referralButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			referralPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			referralPillLabel.style.color = colors.lightTextColor
			referralPill.style.backgroundColor = colors.lightBackgroundColor
			referralButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (referralCheckbox.checked) {
			referralPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			referralButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			referralPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			referralPill.style.backgroundColor = colors.darkBackgroundColor
			referralButtonHover.style.backgroundColor = colors.darkHoverColor
			referralPillLabel.style.color = colors.darkTextColor
		}
	}
})

referralThemeObserver.observe(referralPill, { attributes: true })

referralPill.addEventListener('click', function () {
	hideSocialsCheckboxError()
	if (!referralCheckbox.checked) {
		selectReferralCheckbox()
	} else {
		unselectReferralCheckbox()
	}
});

referralPill.addEventListener('mouseover', function () {
	if (referralCheckbox.checked) {
		if (isLightThemed()) {
			referralButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			referralButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			referralButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			referralButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})
const selectReferralCheckbox = () => {
	referralCheckbox.checked = true
	unselectGoogleCheckbox()
	unselectFriendCheckbox()
	unselectOtherSocialCheckbox()
	unselectSocialCheckbox()
	if (isLightThemed()) {
		referralPill.style.backgroundColor = colors.lightSelectedBackgroundColor
		referralButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		referralPillLabel.style.color = colors.lightSelectedTextColor
	} else {
		referralPillLabel.style.color = colors.darkSelectedTextColor
		referralPill.style.backgroundColor = colors.darkSelectedBackgroundColor
		referralButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
	}
}

export const unselectReferralCheckbox = () => {
	if (!referralCheckbox.checked) return
	referralCheckbox.checked = false
	if (isLightThemed()) {
		referralPill.style.backgroundColor = colors.lightBackgroundColor
		referralButtonHover.style.backgroundColor = colors.lightHoverColor
		referralPillLabel.style.color = colors.lightTextColor
	} else {
		referralPill.style.backgroundColor = colors.darkBackgroundColor
		referralButtonHover.style.backgroundColor = colors.darkHoverColor
		referralPillLabel.style.color = colors.darkTextColor
	}
}
