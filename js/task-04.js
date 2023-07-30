//Створив змінну counterValue
let counterValue = 0;

//Знайшов лічильник та кнопки
const valueWindow = document.getElementById("value");
const decBtn = document.querySelector('[data-action="decrement"]');
const incBtn = document.querySelector('[data-action="increment"]');

//Відкрив функцію для оновлення лічильника
const updateCounter = () => {
  valueWindow.textContent = counterValue;
};
updateCounter();

//Налаштував кнопки
decBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounter();
});
incBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounter();
});
