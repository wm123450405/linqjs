let petOwners = [
    { name: "Higa, Sidney", pets: [ "Scruffy", "Sam" ] },
    { name: "Ashkenazi, Ronen", pets: [ "Walker", "Sugar" ] },
    { name: "Price, Vernette", pets: [ "Scratches", "Diesel" ] },
    { name: "Hines, Patrick", pets: [ "Dusty" ] }
];

// Project the pet owner's name and the pet's name.
let query = petOwners.asEnumerable().selectMany(petOwner => petOwner.pets, (petOwner, petName) => ({ petOwner, petName }))
        .where(ownerAndPet => ownerAndPet.petName.startsWith("S"))
        .select(ownerAndPet => ({
            owner: ownerAndPet.petOwner.name,
            pet: ownerAndPet.petName
        }));

// Print the results.
for (let obj of query) {
    console.log(obj);
}

// This code produces the following output:
//
// {"owner":"Higa","pet":"Scruffy"}
// {"owner":"Higa","pet":"Sam"}
// {"owner":"Ashkenazi","pet":"Sugar"}
// {"owner":"Price","pet":"Scratches"}