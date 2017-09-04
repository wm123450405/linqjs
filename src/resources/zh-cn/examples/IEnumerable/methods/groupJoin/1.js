
let magnus = { name: "Hedlund, Magnus" };
let terry = { name: "Adams, Terry" };
let charlotte = { name: "Weiss, Charlotte" };

let barley = { name: "Barley", owner: terry };
let boots = { name: "Boots", owner: terry };
let whiskers = { name: "Whiskers", owner: charlotte };
let daisy = { name: "Daisy", owner: magnus };

let people = [ magnus, terry, charlotte ];
let pets = [ barley, boots, whiskers, daisy ];

// Create a list where each element is an anonymous
// type that contains a person's name and
// a collection of names of the pets they own.
let query = people.asEnumerable().groupJoin(pets,
    (person, petCollection) => ({
        ownerName: person.name,
        pets: petCollection.select(pet => pet.name)
    }),
    person => person,
    pet => pet.owner);

for (let obj of query) {
    // Output the owner's name.
    console.log(`${ obj.ownerName }:`);
    // Output each of the owner's pet's names.
    for (let pet of obj.pets) {
        console.log(`  ${ pet }`);
    }
}

/*
 This code produces the following output:

 Hedlund, Magnus:
   Daisy
 Adams, Terry:
   Barley
   Boots
 Weiss, Charlotte:
   Whiskers
 */