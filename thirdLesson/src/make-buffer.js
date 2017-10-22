// buffer('Замыкания');
// buffer(' Использовать');
// buffer(' Нужно!');
//
// console.log(buffer());
// buffer.clear();
// console.log(buffer());

export default function makeBuffer() {

  let str = '';

  let accumulator = function(strApp) {
    return (strApp) ? str = str + strApp : str
  };

  accumulator.clear = function() {
    return str = '';
  };

  return accumulator;

}
