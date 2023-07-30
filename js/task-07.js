//Знайшов повзунок та текст
const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

// Відкрив фнкцію для зміни розміру тексту
const updateFontSize = () => {
  const fontSize = sizeControl.value;
  text.style.fontSize = `${fontSize}px`;
  console.log(fontSize);
};
// Викликав функцію
sizeControl.addEventListener("input", updateFontSize);
