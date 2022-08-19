"use strict";
// widndow on load
window.onload = function () {
    /* Text Selectors */
    const ccForm = document.getElementById('cc-form');
    const ccNamePlaceHolder = document.getElementById('name-display');
    const ccNumberPlaceHolder = document.getElementById('number-display');
    const ccNameErrorMessage = document.getElementById('ccNameErrorMessage');
    const ccNumberErrorMessage = document.getElementById('ccNumberErrorMessage');
    const ccExpMonthErrorMessage = document.getElementById('ccExpMonthErrorMessage');
    const ccExpYearErrorMessage = document.getElementById('ccExpMonthErrorMessage');
    const ccExpMonthPlaceHolder = document.getElementById('exp-date-month');
    const ccExpYearPlaceHolder = document.getElementById('exp-date-year');
    const cvcPlaceHolder = document.getElementById('cvc');
    const ccNumber = document.getElementById('card-holder-number');
    const ccName = document.getElementById('card-holder-name');
    const ccExpMonth = document.getElementById('card-exp-month');
    const ccExpYear = document.getElementById('card-exp-year');
    /* submit events */
    ccForm.addEventListener('submit', function (e) {
        const elements = ccForm.elements;
        if (ccNumber.value === '') {
            ccNumberErrorMessage.innerHTML = `Can't be empty`;
        }
        if (ccName.value === '') {
            ccNameErrorMessage.innerHTML = `Can't be empty`;
        }
        if (ccExpMonth.value === '') {
            ccExpMonthErrorMessage.innerHTML = `Can't be empty`;
        }
        if (ccExpYear.value === '') {
            ccExpYearErrorMessage.innerHTML = `Can't be empty`;
        }
        // //loop over elements
        // for (let i = 0; i < elements.length; i++) {
        //   const element = elements[i] as HTMLFormElement;
        //   if (element.localName === 'input') {
        //     console.log(element.value);
        //     if (element.value === '') {
        //       setText([ccNameErrorMessage, ccNumberErrorMessage], "Can't be empty");
        //     }
        //   }
        // }
        // loop through all the elements in the form and console.log them
        // for (let i = 0; i < elements.length; i++) {
        //   const element = elements[i].value as string
        // }
        // console.log(elements);
        e.preventDefault();
        // console.log('form submitted');
        // console.log(e.target);
        // const ccNumberValue = ccNumber.value;
        // const ccNumberError = document.getElementById(
        //     'ccNumberErrorMessage'
        // ) as HTMLElement;
        // if (ccNumberValue.length < 16) {
        //     ccNumberError.style.display = 'block';
        // } else {
        //     ccNumberError.style.display = 'none';
        // }
    });
    /* keyDown events */
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
    /* input events */
    document.addEventListener('input', function (event) {
        const target = event.target;
        /* Card Holder Name Input */
        if (target.classList.contains('card-holder-name')) {
            ccNamePlaceHolder.innerText = target.value;
            if (target.value.length > 0) {
                ccNameErrorMessage.innerText = '';
            }
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
        }
        /* Card Holder Exp Date Month */
        if (target.classList.contains('card-exp-month')) {
            ccExpMonthPlaceHolder.innerText = target.value;
            if (target.value.length > 0) {
                ccExpMonthErrorMessage.innerText = '';
            }
        }
        /* Card Holder Exp Date Year */
        if (target.classList.contains('card-exp-year')) {
            ccExpYearPlaceHolder.innerText = target.value;
        }
        if (target.classList.contains('card-cvc')) {
            cvcPlaceHolder.innerText = target.value;
        }
    });
};
// create a function that takes an array  of html elements and sets the innerText to a value then sets a timeout to set the innerText to empty
function setText(elements, value) {
    alert(elements);
    elements.forEach((element) => {
        element.innerText = value;
    });
    setTimeout(() => {
        elements.forEach((element) => (element.innerHTML = ''));
    }, 3000);
}
