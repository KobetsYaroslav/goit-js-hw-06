const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//Знайшов список
const list = document.querySelector("#ingredients");
console.log(list);

//Зробив розмітку, заповнив та додав класи елементам списку
const potatoes = document.createElement("li");
potatoes.textContent = "Potatoes";
potatoes.classList.add("item");
console.log(potatoes);

const mushrooms = document.createElement("li");
mushrooms.textContent = "Mushrooms";
mushrooms.classList.add("item");
console.log(mushrooms);

const garlic = document.createElement("li");
garlic.textContent = "Garlic";
garlic.classList.add("item");
console.log(garlic);

const tomatos = document.createElement("li");
tomatos.textContent = "Tomatos";
tomatos.classList.add("item");
console.log(tomatos);

const herbs = document.createElement("li");
herbs.textContent = "Herbs";
herbs.classList.add("item");
console.log(herbs);

const condiments = document.createElement("li");
condiments.textContent = "Condiments";
condiments.classList.add("item");
console.log(condiments);

//Додав елемнти в список
list.after(potatoes, mushrooms, garlic, tomatos, herbs, condiments);
