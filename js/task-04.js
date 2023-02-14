let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let value = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

// const saveBtn = document.querySelector('button[data-action="save"]');

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });
