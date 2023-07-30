//Знайшов форму логіна
const loginForm = document.querySelector(".login-form");

// Відкрив функцію для обробки відправлення форми
const handleSubmit = (event) => {
  //Заблокував перезавантаження сьорінки
  event.preventDefault();
  //Створив об'єкт для збереження властивості та значення
  const data = {};

  // Відкрив доступ до всіх елементів форми
  const formElements = event.target.elements;

  for (let element of formElements) {
    // Зберіг значення поля у об'єкт за ім'ям
    if (element.tagName === "INPUT") {
      data[element.name] = element.value;
    }
  }

  //З допомогою операторів if та "Або" перевірив заповненість полів
  if (data.email === "" || data.password === "") {
    alert("All fields must be filled!");
    return;
  }
  //Вивів дані в консоль
  console.log(data);
  //Очистив після цього поля форми
  loginForm.reset();
};

// Викликав функцію
loginForm.addEventListener("submit", handleSubmit);
