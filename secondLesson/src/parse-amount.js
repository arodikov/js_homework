export default function parseAmount(ama) {
  let amaReg = /^\d{1,}$|^\d{1,},\d{1,2}$/;
  if (ama.match(amaReg)) {
    return(parseFloat(ama.replace(',', '.')) * 100);
  } else {
    return('bad request');
  }
}
