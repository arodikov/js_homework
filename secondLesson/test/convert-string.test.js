import convertString from '../src/convert-string';

describe('convert string', function() {

  it('should return \'())\' when called with \'100\'', function() {
    expect(convertString('100')).toBe('())');
  });

});
