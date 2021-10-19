// const countOfCategories = document.querySelectorAll("li.item");
// console.log("Number of categories:", countOfCategories.length);
// const nameCategories = document.querySelectorAll("h2");
// const numberOfElementsAnimal = document.querySelector(".list--animal");
// const numberOfElementsProduct = document.querySelector(".list--products");
// const numberOfElementsTechnologies = document.querySelector(
//   ".list--technologies"
// );

// console.log("Category:", nameCategories[0].textContent);
// console.log("Elements:", numberOfElementsAnimal.children.length);

// console.log("Category:", nameCategories[1].textContent);
// console.log("Elements:", numberOfElementsProduct.children.length);

// console.log("Category:", nameCategories[2].textContent);
// console.log("Elements:", numberOfElementsTechnologies.children.length);

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const countOfCategories = document.querySelectorAll("li.item");
console.log("Number of categories:", countOfCategories.length);

const allCategories = document.querySelector("#categories");
const listOfItems = [...allCategories.children];

listOfItems.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
