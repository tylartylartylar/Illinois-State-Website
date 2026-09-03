
const form = document.querySelector("#contact-us");

let emailValue = document.querySelector("#email");
let confirmEmailValue = document.querySelector("#confirm-email");
let formMessage = document.querySelector("#form-message");

//function applies a red border and message to remind user to enter a matching confirmation email value
confirmEmailValue.addEventListener("input", function() {
    if (emailValue.value !== confirmEmailValue.value) {
        confirmEmailValue.style.border = "2px solid red";
        formMessage.textContent = "Email addresses must match.";
    } else {
        confirmEmailValue.style.border = "";
        formMessage.textContent = "";
    }
});

// function ensures user does not submit the 'contact us' form without a matching email and confirm email
form.addEventListener("submit", function(event) {
    if (emailValue.value.trim().toLowerCase() !== confirmEmailValue.value.trim().toLowerCase()) {  
        event.preventDefault();
        formMessage.textContent = "Email addresses must match.";
        confirmEmailValue.style.border = "2px solid red";
        alert("Email addresses must match.");
    }
    else {
        formMessage.textContent = "";
        confirmEmailValue.style.border = "";
    }
});