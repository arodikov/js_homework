function parseAmount(amount) {

  let commasCount = amount.split(",").length - 1;

  if (commasCount > 1) {
    alert("Дохера запятых");
  } else {
    alert(parseFloat(amount.replace(',', '.')) * 100);
  }
}

let ama = prompt("Введите сумму:");
parseAmount(ama);
