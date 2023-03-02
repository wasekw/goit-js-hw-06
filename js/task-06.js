const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  event.preventDefault();

  const dataLength = +input.attributes["data-length"].value;
  const valLength = +event.target.value.length;
  if (valLength == dataLength) {
    input.style.borderColor = "#4caf50";
  } else {
    input.style.borderColor = "#f44336";
  }
});

// const refs = {
//   inputRef: document.querySelector("#validation-input"),
// };

// const dataLength = Number.parseInt(refs.inputRef.dataset.length);

// function onInputRemoveFocus(event) {
//   if (event.currentTarget.value.length === dataLength) {
//     event.currentTarget.classList.remove("invalid");
//     event.currentTarget.classList.add("valid");
//   } else if (!event.currentTarget.value) {
//     event.currentTarget.classList.remove("valid");
//     event.currentTarget.classList.remove("invalid");
//   } else {
//     event.currentTarget.classList.remove("valid");
//     event.currentTarget.classList.add("invalid");
//   }
// }

// refs.inputRef.addEventListener("blur", onInputRemoveFocus);
