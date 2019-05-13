// const solution = number =>{
//     number = number.toString().split("");
//     return number.reduce((sum, v) => {
//       if (+v % 3 === 0 || +v % 5 === 0){
//           sum += +v;
//       }

//        return sum;
//     },0);

// // }

// const solution = n =>{
// let sum =0;
// while (n >= 1){
//     if (n % 3 === 0 || n % 5 === 0){
//        sum = sum+ n;}
//   n--
//     }
//        return sum;
// }

// const solution = n => {
//     let sum = 0;
//     while (n > 0) {
//         n--;
//         console.log(n);
//         if (n % 3 === 0 || n % 5 === 0) {
//             sum = sum + n;

//             console.log(n);
            
//         }
//     }
//     return sum;
// }

// const solution = n => 

//   number.reduce((sum, v) => (v % 3 === 0 || v % 5 === 0 ? (sum += v) : null));

console.log(solution(10));
// console.log(solution(1));
