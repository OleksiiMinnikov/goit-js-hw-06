const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsList = document.querySelector('#ingredients');

// const listItems = ingredients.map((ingredient) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;
//   listItem.classList.add('item');
//   return listItem;
// });

// ingredientsList.append(...listItems);


const ingredientsList = document.querySelector('#ingredients');
const fragment = document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  fragment.appendChild(listItem);
});

ingredientsList.appendChild(fragment);