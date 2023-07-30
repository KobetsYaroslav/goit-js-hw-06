//Знайшов список категорій та порахував їх кількість
const list = document.querySelector("#categories");
const listItems = list.querySelectorAll("li.item");
const numberOfItems = listItems.length;
console.log("Number of categories:", numberOfItems);

listItems.forEach((item) => {
  //Додав заголовки категорій в консоль
  const itemTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${itemTitle}`);

  //Знайшо список підкатегорій та порахував
  //їх кількість для кожної категорії окремо
  const subcategories = item.querySelectorAll("li");
  const numberOfElements = subcategories.length;
  console.log(`Elements: ${numberOfElements}`);
});
