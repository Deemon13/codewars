const reverseWords = function (str) {
    const arr = str.split(' ');
    const reverseArr = [];

    for (const word of arr) {
        reverseArr.push(word.split('').reverse().join(''))
    }

    return reverseArr.join(" ");
  }

  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));
  console.log(reverseWords('apple'));
  console.log(reverseWords('a b c d'));
  console.log(reverseWords('double  spaced  words'));