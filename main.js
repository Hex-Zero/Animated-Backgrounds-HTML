let amountValue;
let percentValue;
let periodValue;

const intrest = () => {
  amountValue = parseInt(document.getElementById("amount-input").value);
  percentValue = parseInt(document.getElementById("percent-input").value);
  periodValue = parseInt(document.getElementById("period-input").value);
  let result = amountValue;
  for (let i = 0; i < periodValue; i++) {
    result += (result / 100) * percentValue;
  }
  document.getElementById("result").innerHTML = Math.floor(result) + " £";
};

let calculate = document
  .getElementById("calculate-button")
  .addEventListener("click", () => intrest());
