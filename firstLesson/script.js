function parseAmount(amount) {

  let amaReg = /^\d{1,}$|^\d{1,},\d{1,2}$/;

  if (amount.match(amaReg)) {
      alert(parseFloat(amount.replace(',', '.')) * 100);
    } else {
      alert("Некорректная сумма");
    }
  }

  let ama = prompt("Введите сумму:");
  parseAmount(ama);
