import { colors } from './colors'

const productCheckbox = <HTMLInputElement>document.getElementById('checkbox-pill-product')
const productPill = <HTMLInputElement>document.getElementById('pill-checkbox-product')
const productButtonHover = <HTMLInputElement>document.getElementById('button-hover-product')
const productPillLabel = <HTMLInputElement>document.getElementById('pill-list-label-product')

function isLightThemed() {
	return productPill.className.includes('__light')
}

const productThemeObserver = new MutationObserver((mutationList: unknown, observer) => {
	if (mutationList[0].target.className.includes('__light')) {
		if (productCheckbox.checked) {
			productPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			productButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			productPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			productPillLabel.style.color = colors.lightTextColor
			productPill.style.backgroundColor = colors.lightBackgroundColor
			productButtonHover.style.backgroundColor = colors.lightHoverColor
		}
	} else {
		if (productCheckbox.checked) {
			productPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			productButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
			productPillLabel.style.color = colors.darkSelectedTextColor
		} else {
			productPill.style.backgroundColor = colors.darkBackgroundColor
			productButtonHover.style.backgroundColor = colors.darkHoverColor
			productPillLabel.style.color = colors.darkTextColor
		}
	}
})

productThemeObserver.observe(productPill, { attributes: true })

productCheckbox.addEventListener('change', function () {
	if (this.checked) {
		if (isLightThemed()) {
			productPill.style.backgroundColor = colors.lightSelectedBackgroundColor
			productButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
			productPillLabel.style.color = colors.lightSelectedTextColor
		} else {
			productPillLabel.style.color = colors.darkSelectedTextColor
			productPill.style.backgroundColor = colors.darkSelectedBackgroundColor
			productButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			productPill.style.backgroundColor = colors.lightBackgroundColor
			productButtonHover.style.backgroundColor = colors.lightHoverColor
			productPillLabel.style.color = colors.lightTextColor
		} else {
			productPill.style.backgroundColor = colors.darkBackgroundColor
			productButtonHover.style.backgroundColor = colors.darkHoverColor
			productPillLabel.style.color = colors.darkTextColor
		}
	}
});

productPill.addEventListener('mouseover', function () {
	if (productCheckbox.checked) {
		if (isLightThemed()) {
			productButtonHover.style.backgroundColor = colors.lightSelectedHoverColor
		} else {
			productButtonHover.style.backgroundColor = colors.darkSelectedHoverColor
		}
	} else {
		if (isLightThemed()) {
			productButtonHover.style.backgroundColor = colors.lightHoverColor
		} else {
			productButtonHover.style.backgroundColor = colors.darkHoverColor
		}
	}
})
