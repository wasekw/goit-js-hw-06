const item = document.querySelectorAll(".item");
const categories = document.querySelector("#categories").children;

console.log(`Number of categories: ${item.length}`);
[...categories].forEach((el) => {
  const elements = el.querySelectorAll("li");
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
