// SELECTORS
const pageSlider = document.querySelector(".page-slider")
const signInBtn = document.querySelector(".sign-in-btn")
const signUpBtn = document.querySelector(".sign-up-btn")
const signIn = document.querySelector(".sign-in")
const signUp = document.querySelector(".sign-up")
const dob = document.querySelector(".dob")
const nextBtn = document.querySelector(".next-btn")


// EVENT LISTENER
signInBtn.addEventListener("click", signInSlider)
signUpBtn.addEventListener("click", signUpSlider)
nextBtn.addEventListener("click", dobSlider)



// FUNCTIONS
function signInSlider () {
    pageSlider.style.transform = "translateX(0%)"
    signIn.style.transform = "translateX(100%)"
    signUp.style.transform = "translateX(100%)"
    dob.style.transform = "translate(100%)"
}


function signUpSlider () {
    pageSlider.style.transform = "translateX(100%)"
    signIn.style.transform = "translateX(-100%)"
    signUp.style.transform = "translateX(0%)"
    dob.style.transform = "translate(100%)"
}


function dobSlider () {
    pageSlider.style.transform = "translateX(100%)"
    signIn.style.transform = "translateX(-100%)"
    signUp.style.transform = "translateX(-100%)"
    dob.style.transform = "translate(100%)"
}