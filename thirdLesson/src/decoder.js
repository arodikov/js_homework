// var abc1 = "abcdefghijklmnopqrstuvwxyz";
// var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
//
// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
//
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"

export default function SubstitutionCipher(abc1, abc2) {

  this.alph1 = abc1;
  this.alph2 = abc2;

  this.encode = function(str) {
    let encodedStr = '';
    for (let i = 0; i < str.length; i++) {
      encodedStr = encodedStr + this.alph2[this.alph1.indexOf(str[i])]
    }
    return encodedStr;
  };

  this.decode = function(str) {
    let decodedStr = '';
    for (let i = 0; i < str.length; i++) {
      decodedStr = decodedStr + this.alph1[this.alph2.indexOf(str[i])]
    }
    return decodedStr;
  }
}
