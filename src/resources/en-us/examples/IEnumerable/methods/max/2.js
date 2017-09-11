let pets = [
    { name: "Barley", age: 8 },
    { name: "Boots", age: 4 },
    { name: "Whiskers", age: 1 }
];

let max = pets.asEnumerable().max(pet => pet.age + pet.name.length);

console.log(`The maximum pet age plus name length is ${ max }.`);

/*
 This code produces the following output:

 The maximum pet age plus name length is 14.
 */