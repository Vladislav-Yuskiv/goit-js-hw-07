const counter = document.querySelector('#counter');
const btnIncrement = counter.firstElementChild;
const btnDecrement = counter.lastElementChild;
const span = document.querySelector('#value');

let counterValue = 0;

btnIncrement.addEventListener('click',onClickBtnDecrement);
btnDecrement.addEventListener('click',onClickBtnIncrement)

function onClickBtnIncrement() {
    counterValue += 1;
    span.textContent = counterValue;
   
 }

function onClickBtnDecrement() {
    counterValue -= 1;
    span.textContent = counterValue;
}