let defaultPet = { name: "Default Pet Name", age: 0 };

let pets1 = [
    { name: "Barley", age: 8 },
    { name: "Boots", age: 4 },
    { name: "Whiskers", age: 1 }
];

for (let pet of pets1.asEnumerable().defaultIfEmpty(defaultPet)) {
    console.log(`Name: ${ pet.name }`);
}

console.log();

let pets2 = [];

for (let pet of pets2.asEnumerable().defaultIfEmpty(defaultPet)) {
    console.log(`Name: ${ pet.name }`);
}

/*
 This code produces the following output:

 Name: Barley
 Name: Boots
 Name: Whiskers

 Name: Default Pet Name
 */