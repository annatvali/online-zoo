// Limit input type number value to maxlength of 4 digits
let inputNumber = document.querySelector('#input-another-amount');
const maxLength = inputNumber.maxLength;

inputNumber.addEventListener('input', (e) => {
  e.target.value = e.target.value.slice(0, maxLength);
});
