import SubstitutionCipher from '../src/decoder';

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);

describe('decoder', function() {

  it('should return \'eta\' when encoding \'abc\'', function() {
    expect(sub.encode('abc')).toBe('eta');
  });

  it('should return \'eirfg\' when encoding \'aeiou\'', function() {
    expect(sub.encode('aeiou')).toBe('eirfg');
  });

  it('should return \'abc\' when decoding \'eta\'', function() {
    expect(sub.decode('eta')).toBe('abc');
  });

  it('should return \'aeiou\' when decoding \'eirfg\'', function() {
    expect(sub.decode('eirfg')).toBe('aeiou');
  });

});
