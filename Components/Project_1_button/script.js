const button = document.querySelector("button");

const getTarget = (e) => {
  const circle = document.createElement("span");
  const circleDiameter = 20;

  circle.classList.add("circle");
  circle.style.width = `${circleDiameter}px`;
  circle.style.left = `${e.offsetX - circleDiameter / 2}px`;
  circle.style.top = `${e.offsetY - circleDiameter / 2}px`;

  e.target.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 300);
};

button.addEventListener("click", getTarget);
console.log("project 1 loaded");
