const input = document.querySelector("input");
const drinkList = document.querySelector(".drink-list");
import myJson from "./drinksList.json" assert { type: "json" };

// importing with fetch if it was on the internet

// fetch("./drinks.json")
//   .then((res) => res.json())
//   .then((data) => {
//     const drinks = document.createElement("ul");
//     data.drinks.forEach((el) => {
//       drinks.innerHTML = drinks.innerHTML + `<li>${el}</li>`;
//     });
//     drinkList.append(drinks);

//     console.log(data.drinks);
//   });

// or from files directly with import
const drinks = document.createElement("ul");
myJson.cocktails.forEach((el) => {
  drinks.innerHTML = drinks.innerHTML + `<li>${el.name}</li>`;
});
drinkList.append(drinks);

const getInput = (e) => {
  const NewList =
    e.target.parentNode.parentNode.children[1].children[1].children;
  for (const li of NewList) {
    const inputText = li.textContent.toLowerCase();
    const listItemText = e.target.value.toLowerCase();

    if (inputText.includes(listItemText)) {
      li.classList.remove("hidden");
    } else {
      li.classList.add("hidden");
    }
  }
};

const handleRecipe = (coctail) => {
  for (let i = 0; i < myJson.cocktails.length; i++) {
    if (myJson.cocktails[i].name == coctail) {
      alert(myJson.cocktails[i].preparation);
    }
  }
};

const drinksNames = drinkList.children[1].childNodes;
drinksNames.forEach((el) => {
  el.addEventListener("click", () => {
    handleRecipe(el.textContent);
  });
});
input.addEventListener("input", getInput);
