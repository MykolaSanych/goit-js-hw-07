function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const colorName = document.querySelector(".color");
let randomColor;

const colorChange = () => {
  randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
};
button.addEventListener("click", colorChange);
