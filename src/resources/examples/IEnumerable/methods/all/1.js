// Create an array of Pets.
let pets = [
    { name: "Barley", age: 10 },
    { name: "Boots", age: 14 },
    { name: "Whiskers", age: 6 }
];

// Determine whether all pet names
// in the array start with 'B'.
let allStartWithB = pets.all(pet => pet.name.startsWith("B"));

console.log(`${ allStartWithB ? "All" : "Not all" } pet names start with 'B'.`);

// This code produces the following output:
//
//  Not all pet names start with 'B'.