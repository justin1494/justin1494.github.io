const incomeSection = document.querySelector(".income-area");
const expensesSection = document.querySelector(".expenses-area");
const availableMoney = document.querySelector(".available-money");
const addTransactionPanel = document.querySelector(".add-transaction-panel");

const nameInput = document.querySelector("#name");
const amountInput = document.querySelector("#amount");
const categorySelect = document.querySelector("#category");

const transactionDiv = document.querySelectorAll(".transaction");

const addTransactionBtn = document.querySelector(".add-transaction");
const saveBtn = document.querySelector(".save");
const cancelBtn = document.querySelector(".cancel");
const deleteAllBtn = document.querySelector(".delete-all");

const lightStyleBtn = document.querySelector(".light");
const darkStyleBtn = document.querySelector(".dark");

let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];
let sum;

const checkForm = () => {
  if (
    nameInput.value !== "" &&
    amountInput.value !== "" &&
    categorySelect.value !== "none"
  ) {
    createNewTransaction();
  } else {
    alert("Wypełnij wszystkie pola!");
  }
};

const clearInputs = () => {
  nameInput.value = "";
  amountInput.value = "";
  categorySelect.selectedIndex = 0;
};

const sumAmout = () => {
  sum = moneyArr.reduce((partialSum, a) => partialSum + a, 0);
  availableMoney.textContent = `${sum}zł`;
};

const createNewTransaction = () => {
  const newTransaction = document.createElement("div");
  newTransaction.classList.add("transaction");
  newTransaction.setAttribute("id", ID);

  //  Changes categoryIcon depend on the slected category options
  switch (categorySelect.options[categorySelect.selectedIndex].text) {
    case "[ + ] Przychód":
      categoryIcon = '<i class="fas fa-money-bill-wave"></i>';
      break;
    case "[ - ] Rata":
      categoryIcon = '<i class="fa-solid fa-money-bill"></i>';
      break;
    case "[ - ] Zakupy":
      categoryIcon = '<i class="fas fa-cart-arrow-down"></i>';
      break;
    case "[ - ] Jedzenie":
      categoryIcon = '<i class="fas fa-hamburger"></i>';
      break;
    case "[ - ] Kino":
      categoryIcon = '<i class="fas fa-film"></i>';
      break;
  }

  // adds now transactions
  newTransaction.innerHTML = `
        <p class="transaction-name">
        ${categoryIcon} ${nameInput.value}
        </p>
        <p class="transaction-amount">
        ${amountInput.value}zł 
        <button class="delete" onclick="deleteTransatcion(${ID})"><i class="fas fa-times"></i></button>
        </p>
    `;

  if (categorySelect.value == "income") {
    incomeSection.appendChild(newTransaction);
    newTransaction.classList.add("income");
    moneyArr.push(parseFloat(amountInput.value));
  } else {
    expensesSection.appendChild(newTransaction);
    newTransaction.classList.add("expense");
    moneyArr.push(parseFloat(-amountInput.value));
  }
  // window.localStorage.setItem(`${ID}`, `${newTransaction.innerHTML}`);
  sumAmout();
  closePanel();
  ID++;
  clearInputs();
};

const deleteTransatcion = (e) => {
  const el = document.getElementById(e);
  const elAmount = Number(el.children[1].textContent.trim().slice(0, -2));
  if (el.parentElement.classList.contains("income-area")) {
    const index = moneyArr.indexOf(elAmount);
    moneyArr.splice(index, 1);
  } else {
    const index = moneyArr.indexOf(-elAmount);
    moneyArr.splice(index, 1);
  }
  el.remove();
  sumAmout();
};

const showPanel = () => {
  addTransactionPanel.style.display = "flex";
};

const closePanel = () => {
  addTransactionPanel.style.display = "none";
  clearInputs();
};

const deleteAllTransactions = () => {
  incomeSection.innerHTML = "<h3>Przychód:</h3>";
  expensesSection.innerHTML = "<h3>Wydatki:</h3>";
  availableMoney.textContent = "0zł";
  moneyArr = [0];
};

const changeStyleToLight = () => {
  root.style.setProperty("--first-color", "#F9F9F9");
  root.style.setProperty("--second-color", "#14161F");
  root.style.setProperty("--border-color", "rgba(0, 0, 0, .2)");
};

const changeStyleToDark = () => {
  root.style.setProperty("--first-color", "#14161F");
  root.style.setProperty("--second-color", "#F9F9F9");
  root.style.setProperty("--border-color", "rgba(255, 255, 255, .4)");
};
changeStyleToDark();

addTransactionBtn.addEventListener("click", showPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", checkForm);
deleteAllBtn.addEventListener("click", deleteAllTransactions);
lightStyleBtn.addEventListener("click", changeStyleToLight);
darkStyleBtn.addEventListener("click", changeStyleToDark);
