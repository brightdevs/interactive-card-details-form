// widndow on load
window.onload = function () {
  /* Text Selectors */
  const namePlaceHolder = document.getElementById(
    'name-display'
  ) as HTMLElement;

  const numberPlaceHolder = document.getElementById(
    'number-display'
  ) as HTMLElement;

  /* Event Listener for input */
  document.addEventListener('input', function (event) {
    const target = event.target as HTMLInputElement;

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

    /* coment */
  });
};

/**
 * Fuction to add space to the card number
 *
 * @param {string} number
 * @return {*}
 */
function addSpace(number: string): string {
  let newNumber = '';
  for (let i = 0; i < number.length; i++) {
    if (i % 4 === 0 && i !== 0) {
      newNumber += '-';
    }
    newNumber += number[i];
  }
  return newNumber;
}
