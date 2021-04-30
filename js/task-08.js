const divControlsEl = document.querySelector('#controls');
const inputEl = divControlsEl.firstElementChild;
const btnCreateEl = document.querySelector('.js-create ');
const btnResetEl = document.querySelector('.js-reset');
const divBoxEl = document.querySelector('#boxes');

btnCreateEl.addEventListener('click', createBoxes)
btnResetEl.addEventListener('click', destroyBoxes)
inputEl.addEventListener('input', onClickInput)

const divMakeUp = []

function onClickInput() {
    const amount = Number(inputEl.value)
    return amount
}

function createBoxes() {

    for (let i = 0; i < onClickInput() ; i++){
        divMakeUp.push('<div></div>')
    }
  
    divBoxEl.insertAdjacentHTML('afterbegin', divMakeUp.join(''))
}
function destroyBoxes() {
    divBoxEl.innerHTML=" "
 }




