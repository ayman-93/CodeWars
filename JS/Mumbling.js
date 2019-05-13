const accum = str => {
  let newStr = [];
  let l = "";

  for (let index = 1; index <= str.length; index++) {
    l = Array(index).fill(str[index - 1]);
    l = l
      .join("")
      .toLowerCase()
      .split("");
    l[0] = l[0].toUpperCase();
    l = l.join("");

    console.log(l[0]);
    // l = l.join('')
    console.log(l);
    newStr.push(l);
  }
  console.log(newStr.join("-"));

  return newStr.join("-");
};

// newStr = str.split('').map((l,index) =>{
//         console.log(l);

//         let newArr = Array(index + 1).fill(l).join('-');
//         console.log(newArr);

//         return newArr;

//     } )
//     return newStr.join('');
// }

console.log(
  accum("ZpglnRxqenU"),
  "^^^Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
// console.log(accum("NyffsGeyylB"), "^^^N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// console.log(accum("MjtkuBovqrU"), "^^^M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// console.log(accum("EvidjUnokmM"), "^^^E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// console.log(accum("HbideVbxncC"), "^^^H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
