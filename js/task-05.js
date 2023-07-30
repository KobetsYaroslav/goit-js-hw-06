//Знайшов поле вводу та спан
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Відкрив функцію для оновлення тексту у спані
const updateName = () => {
  const name = nameInput.value.trim();

  // Застосував оператор if...else для вводу
  //шаблону, коли поле вводу тексту прожнє
  if (name === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = name;
  }
};

// Додав обробник події для виклику функції
nameInput.addEventListener("input", updateName);
