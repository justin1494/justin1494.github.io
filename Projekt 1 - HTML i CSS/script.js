const input = document.querySelector("input");
const liList = document.querySelectorAll("li");

const getInput = (e) => {
  for (const li of liList) {
    const inputText = li.textContent.toLowerCase();
    const listItemText = e.target.value.toLowerCase();

    if (inputText.includes(listItemText)) {
      li.classList.remove("hidden");
    } else {
      li.classList.add("hidden");
    }
  }
};

input.addEventListener("input", getInput);
