/*Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 */

let n = 4614397162;
var countBits = function(n){
  let bin =  convertBin(n);
  let con = getNum(bin);
  return con
}

function convertBin(n){
  return parseInt(n, 10).toString(2)
}


function getNum(bin) {
  let num = bin.match(/1/g);
  return num.length
}

console.log(countBits(n));