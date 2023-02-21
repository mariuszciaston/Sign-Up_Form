const phoneNumber = document.querySelector('#phone-number');
const confirmPassword = document.querySelector('#confirm-password');

const emailError = document.querySelector('#email-error');
const phoneNumberError = document.querySelector('#phone-number-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

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



// SUBMIT

// confirmPassword.addEventListener("input", () => {

//     if (((password.validity.patternMismatch) && (confirmPassword.validity.patternMismatch)) && (password.value === confirmPassword.value)) {
//         alert(password.value + ' password match ' + confirmPassword.value);
//     }
//     else {
//         alert('passwords do not match');
//     }
// });



// confirmPassword.addEventListener("input", () => {
//     confirmPassword.validity.patternMismatch ? confirmPasswordError.classList.add('show') : confirmPasswordError.classList.remove('show');
// });



// function validatePassword()
// {
//     if(password.value !== confirmPassword.value)
//     {
//         alert('do not match');
//         confirmPassword.checkValidity();
//     } 
//     else if(password.value == '' || password.value == undefined || password.value == null)
//     {
//         alert('empty');

//         password.checkValidity();
//     } 
//     else
//     {
//         alert('match');

//         password.checkValidity();
//     }
// }
// password.onchange = validatePassword;
// confirmPassword.onkeyup = validatePassword;






// function validatePassword() {
//     if (password.value !== confirmPassword.value) {
//         confirmPassword.setCustomValidity("Passwords Don't Match");
// alert(password.value + ' ' + confirmPassword.value);
//         confirmPassword.checkValidity('');


//     }
//     else if (password.value == '' || password.value == undefined || password.value == null) {
//         password.setCustomValidity("Passwords must not be empty");
//         confirmPassword.checkValidity('');

//     }
//     else {
//         password.setCustomValidity('');
//         confirmPassword.checkValidity('');

//     }
// }
// password.onchange = validatePassword;
// confirmPassword.onkeyup = validatePassword;




// const createAccountButton = document.querySelector('.create-acc-btn');
// const newAccountForm = document.querySelector('new-account');

// createAccountButton.addEventListener('click', () => {
//     if (email.checkValidity() === true && password.value.trim() !== '' &&
//         confirmPassword.value === password.value &&
//         (/\d/.test(password.value) && password.value.trim().length >= 8 &&
//             /[a-zA-Z]/.test(password.value))) {
//         newAccountForm.submit()
//     }
// });



const createAccountButton = document.querySelector('.create-acc-btn');
const newAccountForm = document.querySelector('new-account');

createAccountButton.addEventListener('click', () => {
    if (email.checkValidity() === true && password.value.trim() !== '' &&
        confirmPassword.value === password.value &&
        (/\d/.test(password.value) && password.value.trim().length >= 8 &&
            /[a-zA-Z]/.test(password.value))) {
        newAccountForm.submit()
    }
});