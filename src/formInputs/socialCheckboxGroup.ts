export const socialsCheckboxGroup: HTMLElement = document.querySelector('.cc-socials-checkbox-group')
export let isSocialsCheckboxErrorDisplayed: boolean = false;
export const checkboxes: HTMLInputElement[] = [
    document.querySelector('#pill-checkbox-google'),
    document.querySelector('#pill-checkbox-social'),
    document.querySelector('#pill-checkbox-friend'),
    document.querySelector('#pill-checkbox-referal'),
    document.querySelector('#pill-checkbox-other-social'),
]
const socialsRequiredErrorMessage: HTMLElement = document.querySelector('.cc-socials-required-error')

const socialsRequiredErrorStyles: CSSStyleDeclaration = getComputedStyle(socialsRequiredErrorMessage)
const socialsCheckboxGroupsStyles: CSSStyleDeclaration = getComputedStyle(socialsCheckboxGroup)
const socialsCheckboxGroupMarginTop: string = socialsCheckboxGroupsStyles.marginTop.substring(0, socialsCheckboxGroupsStyles.marginTop.length - 2)
const socialsRequiredErrorLineHeight: string = socialsRequiredErrorStyles.lineHeight.substring(0, socialsRequiredErrorStyles.lineHeight.length - 2)


export const displaySocialCheckboxError = () => {
    if (!isSocialsCheckboxErrorDisplayed) {
        socialsCheckboxGroup.style.marginTop = `${Number(socialsCheckboxGroupMarginTop) - Number(socialsRequiredErrorLineHeight)}px`
        socialsRequiredErrorMessage.style.display = 'block'
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].style.border = '1px solid #cb0b0b'
        }
        isSocialsCheckboxErrorDisplayed = true
    }
}

export const hideSocialsCheckboxError = () => {
    socialsRequiredErrorMessage.style.display = 'none'
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].style.border = '1px solid #9e9e9e'
    }
    socialsCheckboxGroup.style.marginTop = `${socialsCheckboxGroupMarginTop}px`
    isSocialsCheckboxErrorDisplayed = false
}