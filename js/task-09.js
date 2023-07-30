function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Знайшов color.span та кнопку зміни кольору
const colorSpan = document.querySelector(".color");
const changeColorButton = document.querySelector(".change-color");

//Відкрив функцію
changeColorButton.addEventListener("click", () => {
  //Викликав функцію для рандомної генерації кольорів
  const randomColor = getRandomHexColor();
  //Прив'язав ці кольори до body
  document.body.style.backgroundColor = randomColor;
});
