const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const getAnswer = () => {
  answer.classList.add("hidden");
  error.classList.add("hidden");
  setTimeout(() => {
    if (input.value !== "" && input.value.slice(-1) === "?") {
      answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`;
      answer.classList.remove("hidden");
    } else if (input.value !== "" && input.value.slice(-1) !== "?") {
      error.textContent = 'Pytanie musi być zakończone znakiem "?"';
      error.classList.remove("hidden");
    } else {
      error.textContent = "Musisz zadać pytanie!";
      error.classList.remove("hidden");
    }
  }, 1000);
  const answers = [
    "tak",
    "nie",
    "chyba...",
    "lepiej nie pytaj...",
    "bardzo prawdopodobne",
    "nigdy w życiu!",
  ];
  const number = Math.floor(Math.random() * 5);

  ball.classList.add("shake-animaton");

  setTimeout(() => ball.classList.remove("shake-animaton"), 1000);
};

ball.addEventListener("click", getAnswer);
