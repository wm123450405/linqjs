let pets = [
    { name: "Barley", age: 8 },
    { name: "Boots", age: 4 },
    { name: "Whiskers", age: 1 }
];

let query = pets.asEnumerable().orderBy(pet => pet.age);

for (let pet of query) {
    console.log(`${ pet.name } - ${ pet.age }`);
}

/*
 This code produces the following output:

 Whiskers - 1
 Boots - 4
 Barley - 8
*/