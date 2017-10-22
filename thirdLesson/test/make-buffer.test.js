import makeBuffer from '../src/make-buffer';

describe('make buffer', function() {

  it('should return \'Замыкания Использовать Нужно!\' when called with \'Замыкания\', \' Использовать\', \'Нужно!\'', function() {

    let buffer = makeBuffer();

    buffer('Замыкания'); //почему не работает просто через makeBuffer? Вовзвращает тело функции =/
    buffer(' Использовать');
    buffer(' Нужно!');

    expect(buffer()).toBe('Замыкания Использовать Нужно!');
  });

  it('should clear buffer', function() {

    let buffer = makeBuffer();

    buffer('Замыкания');
    buffer(' Использовать');
    buffer(' Нужно!');

    buffer.clear();

    expect(buffer()).toBe('');
  });


});
