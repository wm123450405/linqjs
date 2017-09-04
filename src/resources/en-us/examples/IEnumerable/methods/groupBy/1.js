// Create a list of pets.
let pets = [
    { name: "Barley", age: 8 },
    { name: "Boots", age: 4 },
    { name: "Whiskers", age: 1 },
    { name: "Daisy", age: 4 }
];

// Group the pets using Age as the key value
// and selecting only the pet's Name for each value.
let query = pets.asEnumerable().groupBy(pet => pet.age, pet => pet.name);

// Iterate over each IGrouping in the collection.
for (let petGroup of query) {
    // Print the key value of the IGrouping.
    console.log(petGroup.key);
    // Iterate over each value in the
    // IGrouping and print the value.
    for (let name of petGroup)
        console.log(`  ${ name }`);
}

/*
 This code produces the following output:

 8
   Barley
 4
   Boots
   Daisy
 1
   Whiskers
 */