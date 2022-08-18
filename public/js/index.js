"use strict";
// widndow on load
window.onload = function () {
    /* Text Selectors */
    const namePlaceHolder = document.getElementById('name-display');
    const numberPlaceHolder = document.getElementById('number-display');
    const expirationMonthPlaceHolder = document.getElementById('exp-date-month');
    const expirationYearPlaceHolder = document.getElementById('exp-date-year');
    const cvcPlaceHolder = document.getElementById('cvc');
    /* Event Listener for input */
    document.addEventListener('input', function (event) {
        const target = event.target;
        /* Card Holder Name Input */
        if (target.classList.contains('card-holder-name')) {
            namePlaceHolder.innerText = target.value;
            console.log(target.value);
        }
        /* Card Holder CC Number */
        if (target.classList.contains('card-holder-number')) {
            numberPlaceHolder.innerText = addSpace(target.value);
            //   console.log(target.value);
        }
        /* Card Holder Exp Date Month */
        if (target.classList.contains('card-exp-month')) {
            expirationMonthPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        /* Card Holder Exp Date Year */
        if (target.classList.contains('card-exp-year')) {
            expirationYearPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        if (target.classList.contains('card-cvc')) {
            cvcPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        /* coment */
    });
};
/**
 * Fuction to add space to the card number
 *
 * @param {string} number
 * @return {*}
 */
function addSpace(number) {
    let newNumber = '';
    for (let i = 0; i < number.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            newNumber += '-';
        }
        newNumber += number[i];
    }
    return newNumber;
}
