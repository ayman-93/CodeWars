// first solution
// const nextItem = (xs, item) => {
//   if (xs.constructor === Array || typeof xs === "string") {
//     if (xs.indexOf(item) === -1) return undefined;
//     else return xs[xs.indexOf(item) + 1];
//   } else {
//     let c = xs.next();

//     while (!c.done && c.value < item) {
//       if (c.value === item) {
//         break;
//       }
//       c = xs.next();
//     }
//   }
//   return xs.next().value;
// };

// not mine ;/
function nextItem(xs, item) {
  var found = false;
  for (let x of xs) {
    if (found) return x;
    if (x === item) found = true;
  }
  return undefined;
}

function* countFrom(n) {
  for (let i = n; ; ++i) yield i;
}

console.log(nextItem(countFrom(0), 5));

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5), 6);
console.log(nextItem(["a", "b", "c", "d"], "c"), undefined);
console.log(nextItem({ 1: "1" }, "c"), undefined);
