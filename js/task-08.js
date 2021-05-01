
const btnCreateEl = document.querySelector('[data-action="render"]');
const btnResetEl = document.querySelector('[data-action="destroy"]');
const boxes = document.querySelector('#boxes');

btnCreateEl.addEventListener("click", getAmount);
btnResetEl.addEventListener("click", destroyBoxes);

function getAmount() {
  const amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const basicSize = 30;
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const size = basicSize + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }boxes.appendChild(fragment);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function random() {
  return Math.floor(Math.random() * 256);
}




