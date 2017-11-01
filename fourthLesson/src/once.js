// function joinedArgs() {
//   return [].join.call(arguments, ', ')
// }
//
// function once(func) {
//   // your code here
// }
//
// onceJoinedArgs = once(joinedArgs);
//
// onceJoinedArgs(1, 2, 3); // => 1, 2, 3
// onceJoinedArgs(1, 2, 3); // undefined

export function joinedArgs() {
  return [].join.call(arguments, ', ')
}

export function once(func) {
  var wasCalled = false;
  return function() {
    if (!wasCalled) {
      wasCalled = true;
      return func.apply(null, arguments)
    }
  }
}
