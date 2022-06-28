const text = document.querySelector("h1");

const textContent = text.dataset.value;

let index = 0;
let speed = 60;

const writingAnimation = () => {
  text.setAttribute("data-value", `${textContent.slice(0, index)}`);
  index++;

  if (index > textContent.length) {
    return;
  }

  setTimeout(writingAnimation, speed);
};

setTimeout(() => {
  writingAnimation();
}, 920);
