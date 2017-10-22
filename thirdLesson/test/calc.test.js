import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy
} from '../src/calc';

describe('calc', function() {

  it('should return 35 when called with seven(times(five()))', function() {
    expect(seven(times(five()))).toBe(35);
  });

  it('should return 13 when called with four(plus(nine()))', function() {
    expect(four(plus(nine()))).toBe(13);
  });

  it('should return 5 when called with eight(minus(three()))', function() {
    expect(eight(minus(three()))).toBe(5);
  });

  it('should return 3 when called with six(dividedBy(two()))', function() {
    expect(six(dividedBy(two()))).toBe(3);
  });

});
