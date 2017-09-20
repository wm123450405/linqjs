let pet1 = { name: "Turbo", age: 2 };
let pet2 = { name: "Peanut", age: 8 };

// Create two lists of pets.
let pets1 = [ pet1, pet2 ];
let pets2 = [ pet1, pet2 ];

let equal = pets1.asEnumerable().sequenceEqual(pets2);

console.log(`The lists ${ equal ? "are" : "are not" } equal.`);

/*
 This code produces the following output:

 The lists are equal.
*/