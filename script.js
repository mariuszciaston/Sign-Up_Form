const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const password = document.querySelector('#password');

const upper = document.querySelector('#upper');
const lower = document.querySelector('#lower');
const numSpecChar = document.querySelector('#numSpecChar');
const eigthChar = document.querySelector('#eigthChar');
const confirmPassword = document.querySelector('#confirm-password');

const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const phoneNumberError = document.querySelector('#phone-number-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

const createAccountBtn = document.querySelector('#createAccountBtn');
const newAccountForm = document.querySelector('new-account');

// ERROR MESSAGES

firstName.addEventListener('focusout', () => {
  if (firstName.validity.patternMismatch || firstName.value === '') {
    firstNameError.classList.add('errorMessage');
  }
});

firstName.addEventListener('input', () => {
  if (firstName.validity.patternMismatch === false) {
    firstNameError.classList.remove('errorMessage');
  }
});

lastName.addEventListener('focusout', () => {
  if (lastName.validity.patternMismatch || lastName.value === '') {
    lastNameError.classList.add('errorMessage');
  }
});

lastName.addEventListener('input', () => {
  if (lastName.validity.patternMismatch === false) {
    lastNameError.classList.remove('errorMessage');
  }
});

email.addEventListener('focusout', () => {
  if (email.validity.typeMismatch || email.value === '') {
    emailError.classList.add('errorMessage');
  } else {
    emailError.classList.remove('errorMessage');
  }
});

phoneNumber.addEventListener('focusout', () => {
  if (phoneNumber.validity.patternMismatch || phoneNumber.value === '') {
    phoneNumberError.classList.add('errorMessage');
  }
});

phoneNumber.addEventListener('input', () => {
  if (phoneNumber.validity.patternMismatch === false) {
    phoneNumberError.classList.remove('errorMessage');
  }
});

password.addEventListener('focus', () => {
  passwordError.classList.add('errorMessage');
});

password.addEventListener('focusout', () => {
  if (password.validity.patternMismatch === false) {
    passwordError.classList.remove('errorMessage');
  }

  if (password.value === '') {
    passwordError.classList.add('errorMessage');
  }
});

confirmPassword.addEventListener('focusout', () => {
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.classList.add('errorMessage');
  }
});

confirmPassword.addEventListener('input', () => {
  if (password.value === confirmPassword.value) {
    confirmPasswordError.classList.remove('errorMessage');
  }
});

function validateForm() {
  if (firstName.validity.patternMismatch || firstName.value === '') {
    firstNameError.classList.add('errorMessage');
  } else {
    firstNameError.classList.remove('errorMessage');
  }

  if (lastName.validity.patternMismatch || lastName.value === '') {
    lastNameError.classList.add('errorMessage');
  } else {
    lastNameError.classList.remove('errorMessage');
  }

  if (email.validity.typeMismatch || email.value === '') {
    emailError.classList.add('errorMessage');
  } else {
    emailError.classList.remove('errorMessage');
  }

  if (phoneNumber.validity.patternMismatch || phoneNumber.value === '') {
    phoneNumberError.classList.add('errorMessage');
  } else {
    phoneNumberError.classList.remove('errorMessage');
  }

  if (password.validity.patternMismatch === false) {
    passwordError.classList.remove('errorMessage');
  }

  if (password.value === '') {
    passwordError.classList.add('errorMessage');
  }

  if (password.value === confirmPassword.value) {
    confirmPasswordError.classList.remove('errorMessage');
  } else {
    confirmPasswordError.classList.add('errorMessage');
  }
}

// PASSWORD CHECK MARKS

password.addEventListener('input', () => {
  if (/[A-Z]/.test(password.value)) {
    upper.classList.remove('deny');
    upper.classList.add('pass');
  } else {
    upper.classList.remove('pass');
    upper.classList.add('deny');
  }

  if (/[a-z]/.test(password.value)) {
    lower.classList.remove('deny');
    lower.classList.add('pass');
  } else {
    lower.classList.remove('pass');
    lower.classList.add('deny');
  }

  if (/((?=.*\d)|(?=.*\W+))/.test(password.value)) {
    numSpecChar.classList.remove('deny');
    numSpecChar.classList.add('pass');
  } else {
    numSpecChar.classList.remove('pass');
    numSpecChar.classList.add('deny');
  }

  if (/^.{8,}$/.test(password.value)) {
    eigthChar.classList.remove('deny');
    eigthChar.classList.add('pass');
  } else {
    eigthChar.classList.remove('pass');
    eigthChar.classList.add('deny');
  }
});

// VALIDATION BEFORE SUBMIT

createAccountBtn.addEventListener('click', (e) => {
  validateForm();
  if (
    /[a-zA-Z]+/.test(firstName.value)
    && /[a-zA-Z]+/.test(lastName.value)
    && email.checkValidity() === true
    && phoneNumber.checkValidity() === true
    && password.value.trim() !== ''
    && /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password.value)
    && password.value === confirmPassword.value
  ) {
    newAccountForm.submit();
  } else {
    e.preventDefault();
  }
});
