const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input',onClickInput)

function onClickInput() {
     spanEl.textContent = inputEl.value;
}
console.log(inputEl.value)