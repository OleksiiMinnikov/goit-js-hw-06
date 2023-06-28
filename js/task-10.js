
const controlsDiv = document.querySelector('#controls');
const input = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', handleCreate);
destroyButton.addEventListener('click', handleDestroy);

function handleCreate() {
  const amount = Number(input.value);
  createBoxes(amount);
}

function handleDestroy() {
  destroyBoxes();
}

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(box);
  }

  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

