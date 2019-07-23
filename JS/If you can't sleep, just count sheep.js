countSheep = (num) => {
    //your code here
    let str = '';
    for(let i =1; i<= num; i++) {
        str += `${i} sheep...`
        
    }
    return str;
}


// another solution
// const countSheep = length => Array.from({ length }, (_, i) => ++i + ' sheep...').join('')


console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
