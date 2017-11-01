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

import {
  adder,
  spyOn
} from '../src/spy';

describe('spy', function() {

  var adderSpy = spyOn(adder);

  it('should return 6 when called with (2, 4)', function() {
    expect(adderSpy(2, 4)).toBe(6);
  });

  it('should return 8 when called with (3, 5)', function() {
    expect(adderSpy(3, 5)).toBe(8);
  });

  it('should remember count of calls', function() {
    expect(adderSpy.callCount()).toBe(2);
  });

  it('should remember arguments', function() {
    expect(adderSpy.wasCalledWith(4)).toBe(true);
    expect(adderSpy.wasCalledWith(0)).toBe(false);
  });

  it('should remember results', function() {
    expect(adderSpy.returned(8)).toBe(true);
    expect(adderSpy.returned(0)).toBe(false);
  });

});
