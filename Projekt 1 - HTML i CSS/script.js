const input = document.querySelector("input");
const drinkList = document.querySelector(".drink-list");

fetch("./drinks.json")
  .then((res) => res.json())
  .then((data) => {
    const drinks = document.createElement("ul");
    data.Drinks.forEach((el) => {
      drinks.innerHTML = drinks.innerHTML + `<li>${el}</li>`;
    });
    console.log(drinks);
    drinkList.append(drinks);
  });

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
