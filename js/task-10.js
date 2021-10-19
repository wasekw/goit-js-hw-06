function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const placeForBoxes = document.querySelector("#boxes");
const inputEl = document.querySelector("input");
let amount = 0;

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    const markup = `<div style="width: ${30 + i * 10}px; height: ${
      30 + i * 10
    }px; background-color: ${getRandomHexColor()}">box-${i + 1}</div>`;
    placeForBoxes.insertAdjacentHTML("beforeend", markup);
    console.log(placeForBoxes);
  }
};

const destroyBoxes = () => {
  placeForBoxes.innerHTML = "";
};

const getAmountDiv = (event) => {
  amount = event.currentTarget.value;
};

inputEl.addEventListener("input", getAmountDiv);

createBtnEl.addEventListener("click", () => {
  createBoxes(amount);
});

destroyBtnEl.addEventListener("click", destroyBoxes);
