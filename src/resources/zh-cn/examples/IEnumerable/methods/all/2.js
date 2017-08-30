let people = [
    {
        lastName: "Haas",
        pets: [
            { name: "Barley", age: 10 },
            { name: "Boots", age: 14 },
            { name: "Whiskers", age: 6 }
        ]
    },
    {
        lastName: "Fakhouri",
        pets: [
            { name: "Snowball", age: 1 }
        ]
    },
    {
        lastName: "Antebi",
        pets: [
            { name: "Belle", age: 8 }
        ]
    },
    {
        lastName: "Philips",
        pets: [
            { name: "Sweetie", age: 2 },
            { name: "Rover", age: 13 }
        ]
    }
];

// Determine which people have pets that are all older than 5.
let names = people.asEnumerable().where(person => person.pets.all(pet => pet.age > 5)).select(person => person.lastName);

for (let name of names) {
    console.log(name);
}

/* This code produces the following output:
 *
 * Haas
 * Antebi
 */