const btn = document.querySelector(".app__btn");
const title = document.querySelector(".app__title");
const advice = document.querySelector(".app__text");

const getItemLocalStorage = () => {
  const adviceNumber = localStorage.getItem("adviceNumber");
  const adviceText = localStorage.getItem("adviceText");

  title.textContent = `ADVICE #${adviceNumber}`;
  advice.textContent = `${adviceText}`;
};

// getItemLocalStorage();

const getAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceNumber = data.slip.id;
      const adviceText = data.slip.advice;

      title.textContent = `ADVICE #${adviceNumber}`;
      advice.textContent = `“${adviceText}”`;

      const createItemLocalStorage = () => {
        localStorage.setItem("adviceNumber", `${adviceNumber}`);
        localStorage.setItem("adviceText", `“${adviceText}”`);
      };

      createItemLocalStorage();
    });
};

btn.addEventListener("click", getAdvice);
