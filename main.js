let amountValue;
let percentValue;
let periodValue;
let percentInput = document.getElementById("percent-input");
let percentLabel = document.getElementById("percent-label");
let addConsistently = document.getElementById("add-consistently");

const percentChange = () => {
  percentLabel.value = percentInput.value;
};
percentChange();
percentInput.addEventListener("input", () => {
  percentChange(), intrest();
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const intrest = () => {
  let amountValue = parseInt(document.getElementById("amount-input").value);
  percentValue = parseFloat(percentLabel.value);
  periodValue = parseInt(document.getElementById("period-input").value);
  let result = 0;
  for (let i = 0; i < periodValue; i++) {
    if (addConsistently.checked || i == 0) {
      result += amountValue;
    }
    result += (result / 100) * percentValue;
  }
  document.getElementById("result").innerHTML =
    "£ " + numberWithCommas(Math.floor(result));
};

let calculate = document
  .getElementById("calculate-button")
  .addEventListener("click", () => intrest());
