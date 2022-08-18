"use strict";
// widndow on load
window.onload = function () {
    /* Text Selectors */
    const namePlaceHolder = document.getElementById('name-display');
    const numberPlaceHolder = document.getElementById('number-display');
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
            numberPlaceHolder.innerText = target.value;
            //   console.log(target.value);
        }
        /* coment */
    });
};
function addSpace(number) {
    if (number.length >= 16) {
        return;
    }
    let newNumber = '';
    for (let i = 0; i < number.length; i++) {
        if (i % 4 === 0 && i !== 0) {
            newNumber += '-';
        }
        newNumber += number[i];
    }
    return newNumber;
}
console.log(addSpace('123456789012345'));
console.log(addSpace('123456789012345678'));
console.log(addSpace('1234567890123456789'));
