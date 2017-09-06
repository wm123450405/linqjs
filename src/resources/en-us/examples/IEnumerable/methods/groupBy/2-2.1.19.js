// Create a list of pets.
let petsList = [
    { name: "Barley", age: 8.3 },
    { name: "Boots", age: 4.9 },
    { name: "Whiskers", age: 1.5 },
    { name: "Daisy", age: 4.3 }
];

// Group Pet objects by the Math.Floor of their age.
// Then project an anonymous type from each group
// that consists of the key, the count of the group's
// elements, and the minimum and maximum age in the group.
let query = petsList.asEnumerable().groupBy(
    pet => Math.floor(pet.age),
    pet => pet,
    (age, pets) => ({
        key: age,
        count: pets.count(),
        min: pets.min(pet => pet.age),
        max: pets.max(pet => pet.age)
    }));

// Iterate over each anonymous type.
for (let result of query) {
    console.log("\nAge group: " + result.key);
    console.log("Number of pets in this age group: " + result.count);
    console.log("Minimum age: " + result.min);
    console.log("Maximum age: " + result.max);
}

/*  This code produces the following output:

 Age group: 8
 Number of pets in this age group: 1
 Minimum age: 8.3
 Maximum age: 8.3

 Age group: 4
 Number of pets in this age group: 2
 Minimum age: 4.3
 Maximum age: 4.9

 Age group: 1
 Number of pets in this age group: 1
 Minimum age: 1.5
 Maximum age: 1.5
 */