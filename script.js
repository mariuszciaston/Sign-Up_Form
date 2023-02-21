
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const phoneNumber = document.querySelector('#phone-number');
const confirmPassword = document.querySelector('#confirm-password');

const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const phoneNumberError = document.querySelector('#phone-number-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

// SHOW OR HIDE ERROR MESSAGES 

firstName.addEventListener("focusout", () => {
    if (firstName.validity.patternMismatch) {
        firstNameError.classList.add('show')
    }
});

firstName.addEventListener("input", () => {
    if (firstName.validity.patternMismatch === false) {
        firstNameError.classList.remove('show')
    };
});

lastName.addEventListener("focusout", () => {
    if (lastName.validity.patternMismatch) {
        lastNameError.classList.add('show')
    }
});

lastName.addEventListener("input", () => {
    if (lastName.validity.patternMismatch === false) {
        lastNameError.classList.remove('show')
    };
});

email.addEventListener("focusout", () => {
    email.validity.typeMismatch ? emailError.classList.add('show') : emailError.classList.remove('show');
});

phoneNumber.addEventListener("focusout", () => {
    if (phoneNumber.validity.patternMismatch) {
        phoneNumberError.classList.add('show')
    }
});

phoneNumber.addEventListener("input", () => {
    if (phoneNumber.validity.patternMismatch === false) {
        phoneNumberError.classList.remove('show')
    };
});

password.addEventListener("focus", () => {
    passwordError.classList.add('show');
});

password.addEventListener("focusout", () => {
    if (password.validity.patternMismatch === false) {
        passwordError.classList.remove('show');
    }
});

confirmPassword.addEventListener("focusout", () => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.classList.add('show');
    }
});

confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.classList.remove('show')
    }
});

// VALIDATION AFTER CREATE ACCOUNT BUTTON PRESS

const createAccountBtn = document.querySelector('#createAccountBtn');
const newAccountForm = document.querySelector('new-account');

createAccountBtn.addEventListener('click', () => {
    if (
        /[a-zA-Z]+/.test(firstName.value)
        &&
        /[a-zA-Z]+/.test(lastName.value)
        &&
        email.checkValidity() === true
        &&
        phoneNumber.checkValidity() === true
        &&
        password.value.trim() !== ''
        &&
        /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password.value)
        &&
        password.value === confirmPassword.value
    ) {
        newAccountForm.submit()
    }
});