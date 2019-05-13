const list = (names) => {
    let str = '';
    names.forEach((element,index) => {
        if (index === names.length - 1 && names.length !== 1)
        str+= ` & ${element.name}`;
        else if (index === names.length - 2 || names.length === 1)
        str+= `${element.name}`;
        else
        str+= `${element.name}, `;

    });
    // return names[names.length-1].name
    return str;
}



console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]), 'Bart, Lisa, Maggie, Homer & Marge',
    "Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]), 'Bart, Lisa & Maggie',
    "Must work with many names")
console.log(list([{ name: 'Bart' }, { name: 'Lisa' }]), 'Bart & Lisa',
    "Must work with two names")
console.log(list([{ name: 'Bart' }]), 'Bart', "Wrong output for a single name")
console.log(list([]), '', "Must work with no names")