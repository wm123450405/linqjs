let magnus = { name: "Hedlund, Magnus" }, terry = { name: "Adams, Terry" }, charlotte = { name: "Weiss, Charlotte" };
let barley = { name: "Barley", owner: terry }, boots = { name: "Boots", owner: terry }, whiskers = { name: "Whiskers", owner: charlotte }, daisy = { name: "Daisy", owner: magnus };
let people = [ magnus, terry, charlotte ];
let pets = [ barley, boots, whiskers, daisy ];

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