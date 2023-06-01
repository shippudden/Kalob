let form = document.getElementById("signupForm")
let nameInputField = document.getElementById("fullnameField")
let emailField = document.getElementById("emailField")
let passwordInputField = document.getElementById("passwordField")
let fullNameError = document.getElementById("fullNameErrorMessage")
let fullNameExclamation = document.getElementById("fullNameExclamation")
let fullNameSuccess = document.getElementById("fullNameSuccess")
let emailError = document.getElementById("emailErrorMessage")
let emailExclamation = document.getElementById("emailExclamation")
let emailSuccess = document.getElementById("emailSuccess")

form.addEventListener("submit", function(event){
    event.preventDefault()
    formValidation()
})

function formValidation(){
     if(nameInputField.value.trim() === ""){
        fullNameError.innerText = "Enter your full name"
        nameInputField.style.border = "1px solid red"
        fullNameExclamation.style.visibility = "visible"
        fullNameExclamation.style.color = "red"
     }else if(nameInputField.value.trim().length < 6){
        nameInputField.style.border = "1px solid red"
        fullNameExclamation.style.visibility = "visible"
        fullNameExclamation.style.color = "red"
     }else{
        fullNameExclamation.style.visibility = "hidden"
        fullNameError.style.visibility = "hidden"
        nameInputField.style.border = "ipx solid green"
        fullNameSuccess.style.visibility = "visible"
        fullNameSuccess.style.color = "green"
     }

     if(emailField.value.trim() === ""){
        emailError.innerText = "Enter your email address"
        emailField.style.border = "1px solid red"
     }else if(validEmail(emailField.value)){
        emailError.style.visibility = "hidden"
        emailField.style.border = "1px solid green"
     }
}

function validEmail(emailOfUser){
    const regularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let myTest = regularExpression.test(emailOfUser)
    return myTest
}