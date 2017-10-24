import sum from '../src/sum';

describe('sum', function() {

  it('should return sum of arguments when called with sum(2)(4)(5)(6)()', function() {
    expect(sum(2)(4)(5)(6)()).toBe(17);
  });

  it('should return function when called with sum(2)(4)', function() {
    expect(sum(2)(4)).toBeInstanceOf(Function);
  });

});
