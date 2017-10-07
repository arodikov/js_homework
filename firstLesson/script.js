function parseAmount(ama) {
  let amaReg = /^\d{1,}$|^\d{1,},\d{1,2}$/;
  if (ama.match(amaReg)) {
    alert(parseFloat(ama.replace(',', '.')) * 100);
  } else {
    alert("Некорректная сумма");
  }
}

function convertString(str) {
  let newStr = '';
  for (i = 0; i < str.length; i++) {
    let count = str.toLowerCase().split(str[i].toLowerCase()).length - 1;
    if (count > 1) {
      newStr = newStr + ')';
    } else {
      newStr = newStr + '(';
    }
  }
  alert(newStr);
}

function sevenAte9(str) {
  while (str.indexOf("797") != -1) {
    str = str.replace(/797/g, "77");
  }
  alert(str);
}

function dna(str) {
  str = str.replace(/\w/g, replacer);
  alert(str);
}

function replacer(str) {
  switch (str.toUpperCase()) {
    case 'A':
      return 'T';
      break;
    case 'T':
      return 'A';
      break;
    case 'C':
      return 'G';
      break;
    case 'G':
      return 'C';
      break;
    default:
      return str;
      break;
  }
}

let ama = prompt("Задание 1 (перевод в минорные). Введите сумму:");
parseAmount(ama);

let str = prompt("Задание 2 (замена на скобки). Введите строку:");
convertString(str);

let str7ate9 = prompt("Задание 3 (797 на 77). Введите число:");
sevenAte9(str7ate9);

let strDNA = prompt("Задание 4 (ДНК). Введите последовательность:");
dna(strDNA);
