let pets = [
    { name: "Barley", age: 8 },
    { name: "Boots", age: 4 },
    { name: "Whiskers", age: 1 }
];

let min = pets.asEnumerable().min(pet => pet.age);

console.log(`The youngest animal is age ${ min }.`);

/*
 This code produces the following output:

 The youngest animal is age 5.
 */