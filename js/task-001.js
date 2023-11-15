const summation = function (num) {
    let total = 0;
    for (let i = 0; i <= num; i += 1) {
        total += i;
    }
    return total;
  }

  console.log(summation(8));