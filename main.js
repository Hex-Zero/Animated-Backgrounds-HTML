const intrest = (amount, percent, period) => {
  let result = amount;
  for (let i = 0; i < period; i++) {
    result += (result / 100) * percent;
  }
  console.log(result);
};

let amountValue = document.getElementById("amount-input").value;
let percentValue = document.getElementById("percent-input").value;
let periodValue = document.getElementById("period-input").value;

console.log(amountValue);
console.log(percentValue);
console.log(periodValue);

intrest(300, 3, 300);
