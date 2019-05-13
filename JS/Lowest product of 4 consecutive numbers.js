const lowestProduct = (input) => {
    let sum =1;
    if(input.length <= 3)
        return "Number is too small"
    else
        input = input.split("").sort();
        for(i=0 ; i<=3 ; i++){
            sum *= input[i]
        }
        return sum;
}



console.log(lowestProduct("2341"), 12);
console.log(lowestProduct("234567899"), 120);
console.log(lowestProduct("2345611117899"), 1);
console.log(lowestProduct("333"), "Number is too small");
console.log(lowestProduct("1234111"), 4, "Numbers should be consecutives");   

