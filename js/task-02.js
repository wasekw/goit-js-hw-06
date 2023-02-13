const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const item = document.createElement("li");
  item.textContent = `${el}`;
  list.append(item);
});
