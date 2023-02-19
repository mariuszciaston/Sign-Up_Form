const confirmPassword = document.querySelector('#confirm-password');
const phoneNumber = document.querySelector('#phone-number');

const emailError = document.querySelector('#email-error');
const phoneNumberError = document.querySelector('#phone-number-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

email.addEventListener("focusout", () => {
    email.validity.typeMismatch ? emailError.classList.add('show') : emailError.classList.remove('show');
});

phoneNumber.addEventListener("focusout", () => {
    phoneNumber.validity.tooShort ? phoneNumberError.classList.add('show') : phoneNumberError.classList.remove('show');
});

// password.addEventListener("input", () => {
//     password.validity.patternMismatch ? passwordError.classList.add('show') : passwordError.classList.remove('show');
// });

// confirmPassword.addEventListener("input", () => {
//     confirmPassword.validity.patternMismatch ? confirmPasswordError.classList.add('show') : confirmPasswordError.classList.remove('show');
// });




