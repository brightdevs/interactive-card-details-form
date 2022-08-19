"use strict";
// widndow on load
window.onload = function () {
    /* Text Selectors */
    const ccNamePlaceHolder = document.getElementById('name-display');
    const ccNumberPlaceHolder = document.getElementById('number-display');
    const ccNumberErrorMessage = document.getElementById('ccNumberErrorMessage');
    const ccExpMonthPlaceHolder = document.getElementById('exp-date-month');
    const ccExpYearPlaceHolder = document.getElementById('exp-date-year');
    const cvcPlaceHolder = document.getElementById('cvc');
    const ccNumber = document.getElementById('card-holder-number');
    ccNumber.addEventListener('keydown', function (e) {
        let backSpaceKeyPRessed = false;
        const target = e.target;
        e.key === 'Backspace' ? (backSpaceKeyPRessed = true) : false;
        if ((target.value.length === 4 ||
            target.value.length === 9 ||
            target.value.length === 14) &&
            !backSpaceKeyPRessed) {
            target.value += ' ';
        }
        if (e.code === 'Space') {
            e.preventDefault();
        }
    });
    /* Event Listener for input */
    document.addEventListener('input', function (event) {
        const target = event.target;
        /* Card Holder Name Input */
        if (target.classList.contains('card-holder-name')) {
            ccNamePlaceHolder.innerText = target.value;
            console.log(target.value);
        }
        /* Card Holder CC Number */
        if (target.classList.contains('card-holder-number')) {
            ccNumberPlaceHolder.innerText = target.value;
            if (!/^(?=.*\d)[\d ]+$/.test(target.value) && target.value !== '') {
                ccNumberErrorMessage.innerText = 'Wrong format, numbers only';
            }
            else {
                ccNumberErrorMessage.innerText = '';
            }
            //   console.log(target.value);
        }
        /* Card Holder Exp Date Month */
        if (target.classList.contains('card-exp-month')) {
            ccExpMonthPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        /* Card Holder Exp Date Year */
        if (target.classList.contains('card-exp-year')) {
            ccExpYearPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        if (target.classList.contains('card-cvc')) {
            cvcPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        /* coment */
    });
};
