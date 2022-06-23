const box = document.querySelector(".box");
const speedBtns = document.querySelectorAll('[data-setting="speed"]');
const colorBtns = document.querySelectorAll('[data-setting="color"]');
const slider = document.querySelector("#slider");
const sliderInfo = document.querySelector(".saturation-percent");

const squares = 336;
let sliderValue = 70;
let range = 360;

const createSquare = (speed) => {
  box.innerHTML = "";
  for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    square.style.transitionDuration = speed;
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseleave", () => removeColor(square));

    box.appendChild(square);
  }
};

const setColor = (square) => {
  let h;

  if (range === 360) {
    h = Math.floor(Math.random() * 360);
  } else {
    h = Math.floor(Math.random() * 60) + range;
  }

  const s = slider.value + "%";
  const l = "50%";

  square.style.backgroundColor = `hsl(${h},${s},${l})`;
};

const removeColor = (square) => {
  square.style.backgroundColor = "transparent";
};

function handleSpeed() {
  const newSpeed = this.dataset.speed + "s";
  createSquare(newSpeed);
}

function handleColorRange() {
  range = parseInt(this.dataset.colorRange);
}

const updateSaturation = () => {
  sliderInfo.textContent = slider.value + "%";
};

updateSaturation();

speedBtns.forEach((btn) => btn.addEventListener("click", handleSpeed));
colorBtns.forEach((btn) => btn.addEventListener("click", handleColorRange));
slider.addEventListener("mouseup", updateSaturation);
createSquare();
// box.addEventListener("click", (e) => {
//   console.log(e.target.textContent);
// });
