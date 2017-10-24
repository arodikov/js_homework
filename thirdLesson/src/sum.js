export default function sum (curr) {
  return function (next) {
    return next ? sum (curr + next) :  curr}
}
