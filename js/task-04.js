const counterValue = document.querySelector('#value');
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

let currentValue = 0;

const updateCounterValue = () => {
  counterValue.textContent = currentValue;
};

const incrementCounter = () => {
  currentValue += 1;
  updateCounterValue();
};

const decrementCounter = () => {
  currentValue -= 1;
  updateCounterValue();
};

incrementButton.addEventListener('click', incrementCounter);
decrementButton.addEventListener('click', decrementCounter);
