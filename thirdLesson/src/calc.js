//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3

export function plus(f) {
  return ' + ' + f
}

export function minus(f) {
  return ' - ' + f
}

export function times(f) {
  return ' * ' + f
}

export function dividedBy(f) {
  return ' / ' + f
}

export function zero(expr) {
  return expr ? eval('0 ' + expr) : 0
}

export function one(expr) {
  return expr ? eval('1 ' + expr) : 1
}

export function two(expr) {
  return expr ? eval('2 ' + expr) : 2
}

export function three(expr) {
  return expr ? eval('3 ' + expr) : 3
}

export function four(expr) {
  return expr ? eval('4 ' + expr) : 4
}

export function five(expr) {
  return expr ? eval('5 ' + expr) : 5
}

export function six(expr) {
  return expr ? eval('6 ' + expr) : 6
}

export function seven(expr) {
  return expr ? eval('7 ' + expr) : 7
}

export function eight(expr) {
  return expr ? eval('8 ' + expr) : 8
}

export function nine(expr) {
  return expr ? eval('9 ' + expr) : 9
}
