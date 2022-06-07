const priceInput = document.querySelector("#price");
const peopleInput = document.querySelector("#people");
const tip = document.querySelector("#tip");
const calcBtn = document.querySelector(".count");
const error = document.querySelector(".error");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

const getBill = () => {
  if (priceInput.value && peopleInput.value) {
    error.textContent = "";
    const price = parseFloat(priceInput.value);
    const people = parseInt(peopleInput.value);
    const tipValue = parseFloat(tip.value);

    cost.textContent = ((price + price * tipValue) / people).toFixed(2);
    costInfo.style.display = "block";
  } else {
    error.textContent = "Proszę wypełnić wszystkie pola";
  }
};

calcBtn.addEventListener("click", getBill);
