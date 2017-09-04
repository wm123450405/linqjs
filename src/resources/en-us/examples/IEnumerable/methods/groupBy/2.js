// Create a list of pets.
let petsList = [
    { name: "Barley", age: 8.3 },
    { name: "Boots", age: 4.9 },
    { name: "Whiskers", age: 1.5 },
    { name: "Daisy", age: 4.3 }
];

// Group Pet objects by the Math.Floor of their age.
// Then project an anonymous type from each group
// that consists of the key, the count of the group's elements.
let query = petsList.asEnumerable().groupBy(
    pet => Math.floor(pet.age),
    pet => pet,
    (age, pets) => (
    {
        key: age,
        count: pets.count()
    }));

// Iterate over each anonymous type.
for (let result of query)
{
    console.log("\nAge group: " + result.key);
    console.log("Number of pets in this age group: " + result.count);
}

/*  This code produces the following output:

 Age group: 8
 Number of pets in this age group: 1

 Age group: 4
 Number of pets in this age group: 2

 Age group: 1
 Number of pets in this age group: 1
 */