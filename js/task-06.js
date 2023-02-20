const input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
  event.preventDefault();

  const dataLength = +input.attributes["data-length"].value;
  
  if (dataLength === input)
});
