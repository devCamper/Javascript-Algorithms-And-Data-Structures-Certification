function binaryAgent(str) {
  let asciiChars =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\}]^_`abcdefghijklmnopqrstuvwxyz{|}~"
  let offset = 32
  let binaryArr = str.split(" ");
  let charArray = []
  for(let i = 0; i < binaryArr.length; i++) {
    let binaryCode = binaryArr[i];
    let decimalCode = parseInt(binaryCode, 2)
    let letter = asciiChars[decimalCode-offset]
    charArray.push(letter)
  }
  return charArray.join("");
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));