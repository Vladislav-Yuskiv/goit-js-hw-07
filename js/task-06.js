const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('input', onClickInput)
function onClickInput() {
    const lengthNumber = Number(inputEl.dataset.length)

    if (lengthNumber === inputEl.value.length) {
       
        inputEl.classList.replace('invalid','valid')
    }
    else {
        inputEl.classList.add('invalid')
         inputEl.classList.remove('valid')
    }
    
}
