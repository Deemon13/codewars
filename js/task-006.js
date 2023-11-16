const squareDigits = function (num) {
  // console.log('num: ', num)
  let sqrTotal = "";
  // console.log('sqrTotal: ', sqrTotal)
  const arr = num.toString().split("");
  // console.log('arr: ', arr)

  for (const number of arr) {
    const newNum = number * number;
    // console.log('newNum: ', newNum)
    sqrTotal += newNum.toString();
    // console.log('sqrTotal concatanated: ', sqrTotal)
  }
  // console.log('sqrTotal number: ', Number(sqrTotal))
  return Number(sqrTotal);
};

console.log(squareDigits(1221));
console.log(squareDigits(235));
console.log(squareDigits(67857856));
