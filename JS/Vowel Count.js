// const getCount = str => {
//     let count = str.split("").filter(l => (l === "a" || l === "e" || l === "i" || l === "o" || l === "u"));

//     return count.length

// }
const getCount = str =>
  str.split("").reduce((acu, l) => {
    l === "a" || l === "e" || l === "i" || l === "o" || l === "u" ? acu++ : "";
    return acu;
  }, 0);

console.log(getCount("abracadabra"), 5);
