"use strict";
import './styles/style.scss';
require.context('./images/', true, /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i)
// import './images/favicon-32x32.png';

const errorIcon = document.querySelector('.main__form-error-icon');
const erroMsg = document.querySelector('.main__form-error-msg');
const emailForm = document.querySelector('.main__form-email');
const emailTextField = document.querySelector('.main__field-email');


///////////////////////////////////
// main
///////////////////////////////////
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//
emailForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const inputValue = emailTextField.value;
    console.log('value:', inputValue);
    const emailIsValid = emailPattern.test(inputValue);
    console.log('email is: ', emailIsValid);

    if (emailIsValid) {
        if (errorIcon.classList.contains('hidden')) return;
        errorIcon.classList.add('hidden');

        if (erroMsg.classList.contains('hidden-keep-space')) return;
        erroMsg.classList.add('hidden-keep-space');


        if (emailTextField.classList.contains('error'))
            emailTextField.classList.remove('error');
    }
    else {
        if (errorIcon.classList.contains('hidden'))
            errorIcon.classList.remove('hidden');

        if (erroMsg.classList.contains('hidden-keep-space'))
            erroMsg.classList.remove('hidden-keep-space');

        if (emailTextField.classList.contains('error')) return;
        emailTextField.classList.add('error');
    }

});







