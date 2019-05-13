const stray = numbers =>
  numbers.filter((n, i) =>
    numbers.indexOf(n) === numbers.lastIndexOf(n) ? true : ""
  )[0];

console.log(stray([0, 0, 7, 7, 4, 4, 5, 0, 0, 0]), 7);
