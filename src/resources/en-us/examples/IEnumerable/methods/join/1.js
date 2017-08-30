let magnus = { name: "Hedlund, Magnus" };
let terry = { name: "Adams, Terry" };
let charlotte = { name: "Weiss, Charlotte" };

let barley = { name: "Barley", owner: terry };
let boots = { name: "Boots", owner: terry };
let whiskers = { name: "Whiskers", owner: charlotte };
let daisy = { name: "Daisy", owner: magnus };

let people = [ magnus, terry, charlotte ];
let pets = [ barley, boots, whiskers, daisy ];

// Create a list of Person-Pet pairs where
// each element is an anonymous type that contains a
// Pet's name and the name of the Person that owns the Pet.
let query = people.asEnumerable().join(pets,
    (person, pet) => ({ ownerName: person.name, pet: pet.name }),
    person => person,
    pet => pet.owner);

for (let obj of query) {
    console.log(`${ obj.ownerName } - ${ obj.pet }`);
}

/*
 This code produces the following output:

 Hedlund, Magnus - Daisy
 Adams, Terry - Barley
 Adams, Terry - Boots
 Weiss, Charlotte - Whiskers
 */