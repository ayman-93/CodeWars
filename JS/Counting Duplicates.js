const duplicateCount = text => {
  text = text
    .toLowerCase()
    .split("")
    .sort();
  console.log(text);
  let counter = 0;
  for (const letter of text) {
    console.log(letter);

    console.log(text.indexOf(letter));

    if (text.indexOf(letter) !== text.lastIndexOf(letter)) {
      text.splice(text.indexOf(letter), 1);
      counter++;
    }
  }
  console.log(text);

  return counter;
};

let str = "1fs";
console.log(str.toLowerCase());
let test = [1, 2, 3, 4];
test.splice(4, 1);
console.log(test);

// console.log(duplicateCount(""), 0);
// console.log(duplicateCount("abcde"), 0);
// console.log(duplicateCount("aabbcde"), 2);
// console.log(duplicateCount("aabBcde"), 2,"should ignore case");
// console.log(duplicateCount("Indivisibility"), 1)
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
