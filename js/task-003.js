const grow = function (x) {
  let total = 1;
  for (const integer of x) {
    total *= integer;
  }
  return total;
};

console.log(grow([1, 2, 3, 4])); // 24
console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
console.log(grow([2, 2, 2, 2, 2, 2])); // 64
