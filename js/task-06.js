//Знайшов поле вводу
const inputField = document.querySelector("#validation-input");

// Відкрив функцію для перевірки кількості символів в полі вводу
const checkInputLength = () => {
  //Знайшов кількість символів для поля вводу за атрибутом data-lenght
  //і кількість введених символів
  const requiredLength = parseInt(inputField.getAttribute("data-length"));
  const length = inputField.value.length;

  //За допомогоюоператора if...else додав класи
  //для станів рамки, коли умова виконана та не виконана
  if (length === requiredLength) {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  } else {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  }
};

// Викликав функцію
inputField.addEventListener("blur", checkInputLength);
