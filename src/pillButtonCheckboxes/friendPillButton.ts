import { hideSocialsCheckboxError } from "../formInputs/socialCheckboxGroup"
import { colors } from "./colors"
import { unselectGoogleCheckbox } from "./googlePillButton"
import { unselectOtherSocialCheckbox } from "./otherSocialPillButton"
import { unselectReferralCheckbox } from "./referralPillButton"
import { unselectSocialCheckbox } from "./socialMediaPillButton"

const friendCheckbox: HTMLInputElement = document.getElementById('checkbox-pill-friend') as HTMLInputElement
const friendPill: HTMLElement = document.getElementById('pill-checkbox-friend')
const friendButtonHover: HTMLElement = document.getElementById('button-hover-friend')
const friendPillLabel: HTMLElement = document.getElementById('pill-list-label-friend')

function isLightThemed() {
	return friendPill.className.includes('__light')
}

const friendThemeObserver = new MutationObserver((mutationList: unknown, _observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (friendCheckbox.checked) {
			friendPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			friendButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			friendPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			friendPillLabel.style.color = colors.lightTextColor
			friendPill.style.backgroundColor = colors.lightBackgroundColor
			friendButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (friendCheckbox.checked) {
			friendPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			friendButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			friendPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			friendPill.style.backgroundColor = colors.darkBackgroundColor
			friendButtonHover.style.backgroundColor = colors.darkHoverColor
			friendPillLabel.style.color = colors.darkTextColor
		}
	}
})

friendThemeObserver.observe(friendPill, { attributes: true })

friendPill.addEventListener('click', function () {
	hideSocialsCheckboxError()
	if (!friendCheckbox.checked) {
		selectFriendCheckbox()
	} else {
		unselectFriendCheckbox()
	}
});

friendPill.addEventListener('mouseover', function () {
	if (friendCheckbox.checked) {
		if (isLightThemed()) {
			friendButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			friendButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			friendButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			friendButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})

const selectFriendCheckbox = () => {
	friendCheckbox.checked = true
	unselectGoogleCheckbox()
	unselectOtherSocialCheckbox()
	unselectReferralCheckbox()
	unselectSocialCheckbox()
	if (isLightThemed()) {
		friendPill.style.backgroundColor = colors.lightSelectedBackgroundColor
		friendButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		friendPillLabel.style.color = colors.lightSelectedTextColor
	} else {
		friendPillLabel.style.color = colors.darkSelectedTextColor
		friendPill.style.backgroundColor = colors.darkSelectedBackgroundColor
		friendButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
	}
}

export const unselectFriendCheckbox = () => {
	if (!friendCheckbox.checked) return
	friendCheckbox.checked = false
	if (isLightThemed()) {
		friendPill.style.backgroundColor = colors.lightBackgroundColor
		friendButtonHover.style.backgroundColor = colors.lightHoverColor
		friendPillLabel.style.color = colors.lightTextColor
	} else {
		friendPill.style.backgroundColor = colors.darkBackgroundColor
		friendButtonHover.style.backgroundColor = colors.darkHoverColor
		friendPillLabel.style.color = colors.darkTextColor
	}
}