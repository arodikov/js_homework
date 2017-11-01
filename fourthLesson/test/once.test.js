import {
  joinedArgs,
  once
} from '../src/once';

describe('once', function() {

  var onceJoinedArgs = once(joinedArgs);

  it('should return arguments when called once', function() {
    expect(onceJoinedArgs(1, 2, 3)).toBe('1, 2, 3');
  });

  it('should return undefined when called twice', function() {
    expect(onceJoinedArgs(1, 2, 3)).toBe(undefined);
  });

});
