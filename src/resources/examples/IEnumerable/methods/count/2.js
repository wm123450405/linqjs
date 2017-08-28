let pets = [
    { name: "Barley", vaccinated: true },
    { name: "Boots", vaccinated: false },
    { name: "Whiskers", vaccinated: false }
];

let numberUnvaccinated = pets.asEnumerable().count(p => p.vaccinated === false);

console.log(`There are ${ numberUnvaccinated } unvaccinated animals.`);

// This code produces the following output:
//
// There are 2 unvaccinated animals.