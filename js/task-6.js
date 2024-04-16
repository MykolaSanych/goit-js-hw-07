function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlElements = document.getElementById("controls");
const controlInput = controlElements.querySelector("input");
const controlButtons = controlElements.querySelectorAll("button");
const paternalElement = document.getElementById("boxes");

let inputNumber;
function createBoxes(amount) {
  let n = 0;
  let newDiv = "";
  for (let i = 0; i < amount; i++) {
    newDiv += `<div style="width: ${30 + n}px; height: ${
      30 + n
    }px; background-color: ${getRandomHexColor()};"></div>`;
    n += 10;
  }
  paternalElement.insertAdjacentHTML("afterbegin", newDiv);
}

controlInput.addEventListener(
  "input",
  (number) => (inputNumber = number.currentTarget.value)
);
function actionButtonCreate() {
  if (!isNaN(inputNumber) && inputNumber >= 1 && inputNumber <= 100) {
    removeDiv();
    createBoxes(inputNumber);
    controlInput.value = "";
    inputNumber = 0;
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}
function removeDiv() {
  const allDiv = paternalElement.querySelectorAll("div");
  allDiv.forEach((div) => {
    div.remove();
  });
}
controlButtons[0].addEventListener("click", actionButtonCreate);
controlButtons[1].addEventListener("click", removeDiv);
