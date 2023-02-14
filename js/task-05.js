const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (event) => {
  outputName.textContent = event.currentTarget.value;
});

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });
