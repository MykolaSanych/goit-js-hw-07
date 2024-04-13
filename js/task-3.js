const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

const inputListener = (event) => {
  let text = event.currentTarget.value;
  text = text.trim();
  if (text) {
    nameOutput.textContent = text;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};
function removeListeners() {
  nameInput.removeEventListener("input", inputListener);
  nameInput.removeEventListener("blur", removeListeners);
}

nameInput.addEventListener("input", inputListener);
nameInput.addEventListener("blur", removeListeners);
