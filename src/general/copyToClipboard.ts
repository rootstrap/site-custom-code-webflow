const emailDefault: HTMLElement | null = document.querySelector('.cc-footer-email-default')
const emailCopied: HTMLElement | null = document.querySelector('.cc-footer-email-copied')

function fadeInElement(element: HTMLElement) {
    element.style.opacity = '0'
    const fadeEffect = setInterval(() => {
        if (element.style.opacity != "1") {
            element.style.opacity = `${Number(element.style.opacity) + 0.1}`
        } else {
            clearInterval(fadeEffect)
        }
    }, 25)
}

function fadeOutElement(elementOut: HTMLElement, elementIn: HTMLElement) {
    elementOut.style.opacity = '1'
    const fadeEffect = setInterval(() => {
        if (elementOut.style.opacity != "0") {
            elementOut.style.opacity = `${Number(elementOut.style.opacity) - 0.1}`
        } else {
            elementOut.style.display = 'none'
            clearInterval(fadeEffect)
            elementIn.style.display = 'flex'
            fadeInElement(elementIn)
        }
    }, 25)
}

emailDefault?.addEventListener('click', () => {
    navigator.clipboard.writeText(emailDefault.innerText).then(() => {
      if(emailCopied) {
        fadeOutElement(emailDefault, emailCopied)
        setTimeout(() => {
            fadeOutElement(emailCopied, emailDefault)
        }, 1500)
      }
    })
})
