function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const createBtnEl = document.querySelector("[data-create]");
// const destroyBtnEl = document.querySelector("[data-destroy]");
// const placeForBoxes = document.querySelector("#boxes");
// const inputEl = document.querySelector("#controls > input");
// console.dir(inputEl);

// createBtnEl.addEventListener("click", makeCollationBoxes);

// function makeCollationBoxes() {
//   function createBoxes(amount) {
//     for (let i = 0; i <= amount; i += 1) {
//       return `<div style="width: 30 + ${i * 10}px, height: 30 + ${
//         i * 10
//       }px, color: ${getRandomHexColor()}`;
//     }
//   }
// }
// const insertBoxesInPage = createBoxes.join(" ");
// placeForBoxes.insertAdjacentHTML("afterbegin", insertBoxesInPage);

//  Потом доделаю, как разберусь....
