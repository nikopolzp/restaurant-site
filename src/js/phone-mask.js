document.addEventListener('DOMContentLoaded', function () {
  let phoneInputs = document.querySelectorAll('input[data-tel-input]');

  let getInputNumbersValue = function (input) {
    // Return stripped input value — just numbers
    return input.value.replace(/\D/g, '');
  };

  let onPhonePaste = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    let pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      let pastedText = pasted.getData('Text');
      if (/\D/g.test(pastedText)) {
        // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
        // formatting will be in onPhoneInput handler
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  let onPhoneInput = function (e) {
    let input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = '';

    if (!inputNumbersValue) {
      return (input.value = '');
    }

    if (input.value.length != selectionStart) {
      // Editing in the middle of input, not last symbol
      if (e.data && /\D/g.test(e.data)) {
        // Attempt to input non-numeric symbol
        input.value = inputNumbersValue;
      }
      return;
    }

    if (['3', '0'].includes(inputNumbersValue[0]) > -1) {
      // Ukrainian phone number
      if (inputNumbersValue[0] == '0')
        inputNumbersValue = '3' + inputNumbersValue;
      let firstSymbols = inputNumbersValue[0] == '0' ? '0' : '+38';
      formattedInputValue = input.value = firstSymbols + ' ';
      if (inputNumbersValue.length > 2) {
        formattedInputValue += '(' + inputNumbersValue.substring(2, 5);
      }
      if (inputNumbersValue.length >= 6) {
        formattedInputValue += ') ' + inputNumbersValue.substring(5, 8);
      }
      if (inputNumbersValue.length >= 9) {
        formattedInputValue += '-' + inputNumbersValue.substring(8, 10);
      }
      if (inputNumbersValue.length >= 11) {
        formattedInputValue += '-' + inputNumbersValue.substring(10, 12);
      }
    } else {
      // Not Ukrainian phone number
      formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
    }
    input.value = formattedInputValue;
  };
  let onPhoneKeyDown = function (e) {
    console.log(e.keyCode, e.target.value);
    // Clear input after remove last symbol
    let inputValue = e.target.value.replace(/\D/g, '');
    if (e.keyCode == 8 && inputValue.length == 2) {
      e.target.value = '';
    }
  };
  for (let phoneInput of phoneInputs) {
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
  }
});
