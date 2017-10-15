import parseAmount from '../src/parse-amount';

describe('parse amount', function() {

  it('should parse integer string', function() {
    expect(parseAmount('100')).toBe(10000);
  });

  it('should parse integer string with comma', function() {
    expect(parseAmount('100,12')).toBe(10012);
  });

  it('should return error when called with bad request', function() {
    expect(parseAmount('100,sd12')).toBe('bad request');
  });

});
