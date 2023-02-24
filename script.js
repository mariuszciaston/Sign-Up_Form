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

// ERROR MESSAGES 

firstName.addEventListener("focusout", () => {
    if (firstName.validity.patternMismatch || firstName.value === '') {
        firstNameError.classList.add('errorMessage')
    };
});

firstName.addEventListener("input", () => {
    if (firstName.validity.patternMismatch === false) {
        firstNameError.classList.remove('errorMessage')
    };
});

lastName.addEventListener("focusout", () => {
    if (lastName.validity.patternMismatch || lastName.value === '') {
        lastNameError.classList.add('errorMessage')
    }
});

lastName.addEventListener("input", () => {
    if (lastName.validity.patternMismatch === false) {
        lastNameError.classList.remove('errorMessage')
    };
});

email.addEventListener("focusout", () => {
    email.validity.typeMismatch || email.value === '' ? emailError.classList.add('errorMessage') : emailError.classList.remove('errorMessage');
});

phoneNumber.addEventListener("focusout", () => {
    if (phoneNumber.validity.patternMismatch || phoneNumber.value === '') {
        phoneNumberError.classList.add('errorMessage')
    }
});

phoneNumber.addEventListener("input", () => {
    if (phoneNumber.validity.patternMismatch === false) {
        phoneNumberError.classList.remove('errorMessage')
    };
});

password.addEventListener("focus", () => {
    passwordError.classList.add('errorMessage');
});

password.addEventListener("focusout", () => {
    if (password.validity.patternMismatch === false) {
        passwordError.classList.remove('errorMessage');
    }

    if (password.value === '') {
        passwordError.classList.add('errorMessage');
    }
});

confirmPassword.addEventListener("focusout", () => {
    if (password.value !== confirmPassword.value) {
        confirmPasswordError.classList.add('errorMessage');
    }
});

confirmPassword.addEventListener("input", () => {
    if (password.value === confirmPassword.value) {
        confirmPasswordError.classList.remove('errorMessage')

    }
});

function validateForm() {
    firstName.validity.patternMismatch || firstName.value === '' ? firstNameError.classList.add('errorMessage') : firstNameError.classList.remove('errorMessage');
    lastName.validity.patternMismatch || lastName.value === '' ? lastNameError.classList.add('errorMessage') : lastNameError.classList.remove('errorMessage');
    email.validity.typeMismatch || email.value === '' ? emailError.classList.add('errorMessage') : emailError.classList.remove('errorMessage');
    phoneNumber.validity.patternMismatch || phoneNumber.value === '' ? phoneNumberError.classList.add('errorMessage') : phoneNumberError.classList.remove('errorMessage');

    if (password.validity.patternMismatch === false) {
        passwordError.classList.remove('errorMessage');
    };

    if (password.value === '') {
        passwordError.classList.add('errorMessage')
    }

    password.value === confirmPassword.value ? confirmPasswordError.classList.remove('errorMessage') : confirmPasswordError.classList.add('errorMessage');
}

// VALIDATION BEFORE SUBMIT

const createAccountBtn = document.querySelector('#createAccountBtn');
const newAccountForm = document.querySelector('new-account');

createAccountBtn.addEventListener('click', (e) => {
    validateForm();
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
        newAccountForm.submit();
    } else {
        e.preventDefault();
    }
});