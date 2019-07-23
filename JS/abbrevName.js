function abbrevName(name) {
    let short ='';
    for(let litter=0; litter<name.length;litter++){
        if(litter === 0)
            short += name[litter].toUpperCase()+".";
        if (name[litter] === ' ' && name[litter+1] !== ' ')
            short += name[litter+1].toUpperCase();

    }
return short;
}

console.log( abbrevName("Sam Harris"), "S.H");

 console.log( abbrevName(("Patrick Feenan"), "P.F") );
console.log( abbrevName("Evan Cole"));

 console.log( abbrevName("P Favuzzi"), "P.F");

 console.log( abbrevName("david mendieta"));