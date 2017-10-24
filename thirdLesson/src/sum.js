// sum(2)(4)(5)(6)(); // => 17
// sum(1)(2)(); // => 3

export default function sum (curr) {
  return function (next) {
    return next ? sum (curr + next) :  curr}
}
