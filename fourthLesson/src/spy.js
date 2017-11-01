// function adder(n1, n2) { return n1 + n2; }
// var adderSpy = spyOn( adder );
//
// adderSpy(2, 4); // returns 6
// adderSpy(3, 5); // returns 8
// adderSpy.callCount(); // returns 2
// adderSpy.wasCalledWith(4); // true
// adderSpy.wasCalledWith(0); // false
// adderSpy.returned(8); // true
// adderSpy.returned(0); // false

export function adder(n1, n2) {
  return n1 + n2;
}

export function spyOn(func) {
  var count = 0;
  var args = [];
  var results = [];

  function magic() {
    count++;

    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    results.push(func.apply(this, arguments))

    return func.apply(this, arguments);
  }

  magic.callCount = function() {
    return count;
  };

  magic.wasCalledWith = function(a) {
    return (args.indexOf(a) != -1) ? true : false;
  };

  magic.returned = function(b) {
    return (results.indexOf(b) != -1) ? true : false;
  };

  return magic;
}
