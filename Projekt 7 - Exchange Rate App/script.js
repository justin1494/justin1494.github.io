const currencyOne = document.querySelector("#currency-one");
const amountOne = document.querySelector(".amount-one");
const currencyTwo = document.querySelector("#currency-two");
const amountTwo = document.querySelector(".amount-two");
const swapBtn = document.querySelector(".swap");
const rateInfo = document.querySelector(".rate-info");

let myHeaders = new Headers();
myHeaders.append("apikey", "bzua1WFikQvdquyv0JdOOvY7Y8WmjnTO");

let requestOptions = {
  //   method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

const calculate = () => {
  fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${currencyTwo.value}&from=${currencyOne.value}&amount=${amountOne.value}`,
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      const currency1 = currencyOne.value;
      const currency2 = currencyTwo.value;

      const rate = data.info.rate;
      rateInfo.textContent = `1${currency1} = ${rate.toFixed(4)} ${currency2}`;
      amountTwo.value = data.result.toFixed(2);
    })
    .catch((error) => console.log("Coś jest nie tak", error));
};

const swap = () => {
  const oldValue = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = oldValue;
  calculate();
};

currencyOne.addEventListener("change", calculate);
currencyTwo.addEventListener("change", calculate);
amountOne.addEventListener("input", calculate);
swapBtn.addEventListener("click", swap);

calculate(0);
