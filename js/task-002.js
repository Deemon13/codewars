// 1 variant

// const repeatStr = function (n, s) {
//   let res = "";
//   for (let i = 1; i <= n; i += 1) {
//     res += s;
//   }
//   return res;
// };

// 2 variant

const repeatStr = function (n, s) {
  return s.repeat(n);
};

console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));
console.log(repeatStr(3, "Aha"));
