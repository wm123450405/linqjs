let pets = [ { name: "Barley", age: 8, vaccinated: true }, { name: "Boots", age: 4, vaccinated: false }, { name: "Whiskers", age: 1, vaccinated: false } ];

let unvaccinated = pets.asEnumerable().any(p => p.age > 1 && p.vaccinated === false);

console.log(`There ${ unvaccinated ? "are" : "are not any" } unvaccinated animals over age one.`);

// This code produces the following output:
//
//  There are unvaccinated animals over age one.