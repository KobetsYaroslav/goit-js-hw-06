const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//Знайшов список інгрідієнтів
const ingredientsList = document.querySelector("#ingredients");
//За допомогою методу map(), додав до списку
//елементи li та задав їм клас "item"
const ingredientElements = ingredients.map((ingredientText) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredientText;
  listItem.classList.add("item");
  return listItem;
});
console.log(ingredientsList);
ingredientsList.append(...ingredientElements);
