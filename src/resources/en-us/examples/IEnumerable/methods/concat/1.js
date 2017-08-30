let cats = [
    { name: "Barley", age: 8 },
    { name: "Boots", age: 4 },
    { name: "Whiskers", age: 1 }
];

let dogs = [
    { name: "Bounder", age: 3 },
    { name: "Snoopy", age: 14 },
    { name: "Fido", age: 9 }
];

let query = cats.asEnumerable().select(cat => cat.name)
    .concat(dogs.asEnumerable().select(dog => dog.name));

for (let name of query) {
    console.log(name);
}

// This code produces the following output:
//
// Barley
// Boots
// Whiskers
// Bounder
// Snoopy
// Fido