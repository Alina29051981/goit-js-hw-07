const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", function () {
  const trimmedValue = input.value.trim();
  output.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
});
