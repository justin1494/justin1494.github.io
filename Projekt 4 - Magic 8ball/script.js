const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const getAnswer = () => {
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

  if (input.value !== "" && input.value.slice(-1) === "?") {
    error.textContent = "";
    answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`;
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?"';
    answer.textContent = "";
  } else {
    error.textContent = "Musisz zadać pytanie!";
    answer.textContent = "";
  }

  setTimeout(() => ball.classList.remove("shake-animaton"), 1000);
};

ball.addEventListener("click", getAnswer);
