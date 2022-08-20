// widndow on load
window.onload = function () {
  /* Text Selectors */
  const ccForm = document.getElementById('cc-form') as HTMLFormElement;

  const formWrapper = document.getElementById('form-wrapper') as HTMLElement;

  const formMessageWrapper = document.getElementById(
    'form-message-wrapper'
  ) as HTMLElement;

  const ccNamePlaceHolder = document.getElementById(
    'name-display'
  ) as HTMLElement;

  const ccNumberPlaceHolder = document.getElementById(
    'number-display'
  ) as HTMLElement;

  const ccNameErrorMessage = document.getElementById(
    'ccNameErrorMessage'
  ) as HTMLElement;

  const ccNumberErrorMessage = document.getElementById(
    'ccNumberErrorMessage'
  ) as HTMLElement;
  const ccExpMonthErrorMessage = document.getElementById(
    'ccExpMonthErrorMessage'
  ) as HTMLElement;
  const ccExpYearErrorMessage = document.getElementById(
    'ccExpMonthErrorMessage'
  ) as HTMLElement;

  const ccExpMonthPlaceHolder = document.getElementById(
    'exp-date-month'
  ) as HTMLElement;
  const cardCvcErrorMessage = document.getElementById(
    'cardCvcErrorMessage'
  ) as HTMLElement;

  const ccExpYearPlaceHolder = document.getElementById(
    'exp-date-year'
  ) as HTMLElement;

  const cvcPlaceHolder = document.getElementById('cvc') as HTMLElement;

  const ccNumber = document.getElementById(
    'card-holder-number'
  ) as HTMLInputElement;
  const ccName = document.getElementById(
    'card-holder-name'
  ) as HTMLInputElement;
  const ccExpMonth = document.getElementById(
    'card-exp-month'
  ) as HTMLInputElement;
  const ccExpYear = document.getElementById(
    'card-exp-year'
  ) as HTMLInputElement;
  const ccCvc = document.getElementById('card-cvc') as HTMLInputElement;

  /* submit events */
  ccForm.addEventListener('submit', function (e) {
    const nonFilledInputs = [];
    [ccNumber, ccName, ccExpMonth, ccExpYear, ccCvc].forEach((element) => {
      // check all input fields are filled
      if (!element.value) {
        nonFilledInputs.push(element);
        if (element.id === 'card-exp-month' || element.id === 'card-exp-year') {
          ccExpMonthErrorMessage.innerHTML = "Can't be blank";
        }
        e.preventDefault();
        element.classList.add('error');
        const target = element.nextElementSibling as HTMLElement;
        if (target) {
          target.innerHTML = "Can't be blank";
        }
        return;
      } else {
        element.classList.remove('error');
      }
    });

    if (!nonFilledInputs.length) {
      formWrapper.classList.add('hide');
      formMessageWrapper.classList.remove('hide');
      resetPlaceholders(
        ccNamePlaceHolder,
        ccNumberPlaceHolder,
        ccExpMonthPlaceHolder,
        ccExpYearPlaceHolder,
        cvcPlaceHolder
      );
    }

    e.preventDefault();
  });

  /* keyDown events */
  ccNumber.addEventListener('keydown', function (e) {
    let backSpaceKeyPRessed = false;
    const target = e.target as HTMLInputElement;
    e.key === 'Backspace' ? (backSpaceKeyPRessed = true) : false;

    if (
      (target.value.length === 4 ||
        target.value.length === 9 ||
        target.value.length === 14) &&
      !backSpaceKeyPRessed
    ) {
      target.value += ' ';
    }
    if (e.code === 'Space') {
      e.preventDefault();
    }
  });

  /* input events */
  document.addEventListener('input', function (event) {
    const target = event.target as HTMLInputElement;

    /* Card Holder Name Input */
    if (target.classList.contains('card-holder-name')) {
      ccNamePlaceHolder.innerText = target.value;
      if (target.value.length > 0) {
        ccName.classList.remove('error');
        ccNameErrorMessage.innerText = '';
      }
    }

    /* Card Holder CC Number */
    if (target.classList.contains('card-holder-number')) {
      ccNumberPlaceHolder.innerText = target.value;
      errorMessage(target, ccNumberErrorMessage);
    }

    /* Card Holder Exp Date Month */
    if (target.classList.contains('card-exp-month')) {
      ccExpMonthPlaceHolder.innerText = target.value;
      errorMessage(target, ccExpMonthErrorMessage);
    }

    /* Card Holder Exp Date Year */
    if (target.classList.contains('card-exp-year')) {
      ccExpYearPlaceHolder.innerText = target.value;
      errorMessage(target, ccExpYearErrorMessage);
    }
    if (target.classList.contains('card-cvc')) {
      cvcPlaceHolder.innerText = target.value;
      errorMessage(target, cardCvcErrorMessage);
    }
  });
};

function errorMessage(
  target: HTMLInputElement,
  cardCvcErrorMessage: HTMLElement
) {
  if (!numbersOnly(target) && target.value !== '') {
    cardCvcErrorMessage.innerText = 'Wrong format, numbers only';
    target.classList.add('error');
  } else {
    target.classList.remove('error');
    cardCvcErrorMessage.innerText = '';
  }
}

function numbersOnly(target: HTMLInputElement) {
  return /^(?=.*\d)[\d ]+$/.test(target.value);
}

function resetPlaceholders(
  ccNamePlaceHolder: HTMLElement,
  ccNumberPlaceHolder: HTMLElement,
  ccExpMonthPlaceHolder: HTMLElement,
  ccExpYearPlaceHolder: HTMLElement,
  cvcPlaceHolder: HTMLElement
) {
  ccNamePlaceHolder.innerHTML = 'Jane Appleseed';
  ccNumberPlaceHolder.innerHTML = '0000 0000 0000 0000';
  ccExpMonthPlaceHolder.innerHTML = '00';
  ccExpYearPlaceHolder.innerHTML = '00';
  cvcPlaceHolder.innerHTML = '000';
}
