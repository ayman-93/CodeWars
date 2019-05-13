const uniqueInOrder = iterable => {
  if (!Array.isArray(iterable)) iterable = iterable.split("");
  let newIterable = [...iterable].filter((a, i) => a !== iterable[i + 1]);
  // let newIterable = iterable.filter((litter,index) => {
  //     if(litter !== iterable[index+1])
  //     return true
  // })
  return newIterable;
};

let str = "01234";
let arr = ["0", "1", "2", "3", "4"];
console.log([...str]);
str;

arr.splice(4, 1);
console.log(str);

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
console.log(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
console.log(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
