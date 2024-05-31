const emailInput = document.querySelector('.email-input')
const emailError = document.querySelector('.email-error')
const emailButton = document.querySelector('.subscribe-click')
const subscribe = document.querySelector('.subscribe-card')
const success = document.querySelector('.success-message')
const successButton = document.querySelector('.success-click')
const imgChange = document.querySelector('.subscribe-img')






emailButton.addEventListener('click', () => {

    if (!emailInput.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)) {
        emailError.style.display = "inline-block"
        emailInput.style.cssText = `
        color: var(--Orange);
        background-color: var(--Tomato);
        border: 1px solid var(--Orange);
        `

    } else {
        subscribe.style.display = 'none'
        success.style.display = 'flex'

    }

})

emailInput.addEventListener('focus', () => {

    emailInput.style.cssText = `
    border: 1px solid var(--DarkSlateGrey);
    color: var(--DarkSlateGrey);
    background-color: white;
    
    `;
    emailError.style.display = 'none';
});

successButton.addEventListener('click', () => {
    subscribe.style.display = 'flex'
    success.style.display = 'none'
})

window.addEventListener('resize', () => {
    if (window.innerWidth <= 375) {
        imgChange.src = "./assets/images/illustration-sign-up-mobile.svg"
        imgChange.alt = "illustration-mobile"
    }
})