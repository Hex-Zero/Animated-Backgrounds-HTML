let amountValue;
let percentValue;
let periodValue;
let percentInput = document.getElementById("percent-input");
let percentLabel = document.getElementById("percent-label");

const percentChange = () => {
  percentLabel.value = percentInput.value;
};
percentChange();
percentInput.addEventListener("input", () => percentChange());

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const intrest = () => {
  amountValue = parseInt(document.getElementById("amount-input").value);
  percentValue = parseFloat(percentLabel.value);
  periodValue = parseInt(document.getElementById("period-input").value);
  let result = amountValue;
  for (let i = 0; i < periodValue; i++) {
    result += (result / 100) * percentValue;
  }
  document.getElementById("result").innerHTML =
    numberWithCommas(Math.floor(result)) + " £";
};
console.log(parseInt(document.getElementById("percent-input").value));

let calculate = document
  .getElementById("calculate-button")
  .addEventListener("click", () => intrest());
