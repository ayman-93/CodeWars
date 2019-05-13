// function incrementString (strng) {
//   // return incrementedString
//   console.log(strng[strng.length-1]);

//   console.log(strng[strng.length-1]);
//   gg = strng.split('');
//   num = '';
//   str = '';
//   zeros = '';
//   for (char of strng){
//     if (isNaN(char)){
//       str+= char;
//     } else if (char === '0'){
//       zeros+= char;
//     }
//     else{
//       num+= char;
//     }
//  }
 
//  if (strng[strng.length - 1] == '0'){
//    strng = strng.slice(0, -1); 
//   return strng+1
//  }

//   num = (num === '') ? num = 1 : +num + 1 ;
//   return `${str}${zeros}${num}`;
  
  
  
//   console.log(strng[strng.length - 1]);

//   return str; 
// }
function incrementString (strng) {
  num = '';
  str = '';
  zeros = '';
  for (char of strng){
    if (isNaN(char)){
      str+= char;
    } else if (char === '0'){
      zeros+= char;
    }
    else{
      num+= char;
    }
 }

 if(strng == '')
  return '1'
 else if (!str.includes(0) && num != ''){
   
   return `${str}${zeros}${+num++}`
  }
 
//  return `${str}${zeros}${num}`
}
console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");

// const incrementString = (strng) => {
//   str=''
//   num=''
//   strng = strng.split('').filter((num) => !isNaN(num))
//   return strng;
// }
// console.log("saf".length);

console.log(NaN)
console.log(Number('d'))
let a= typeof(NaN);
let b = typeof(Number('b'))
console.log(typeof(NaN));
console.log((isNaN('f')) == NaN);


console.log(a===b);

console.log(parseInt('d')  == NaN);




let arrr = 'ffg660'
arrr = arrr.split('')
console.log(arrr[arrr.length-1] === '0');

console.log(arrr);




let abb = '002'
console.log(!abb.includes('2'));



// const incrementString = (strng) => {
//   // let num = parseInt(strng,10);
//   // return num;
// }

