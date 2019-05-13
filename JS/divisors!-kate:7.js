function divisors(integer) {
    dividable = []
    for (let i = 2 ; i < integer; i++){
        if(integer%i === 0)
        dividable.push(i);
    }
    if (dividable.length)
        return dividable;
    else
    return `${integer} is prime`
};




console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");