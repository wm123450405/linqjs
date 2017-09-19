let petOwners = [
    { name: "Higa, Sidney", pets: [ "Scruffy", "Sam" ] },
    { name: "Ashkenazi, Ronen", pets: [ "Walker", "Sugar" ] },
    { name: "Price, Vernette", pets: [ "Scratches", "Diesel" ] },
    { name: "Hines, Patrick", pets: [ "Dusty" ] }
];

// Project the items in the array by appending the index
// of each PetOwner to each pet's name in that petOwner's
// array of pets.
let query = petOwners.asEnumerable().selectMany((petOwner, index) =>
        petOwner.pets.asEnumerable().select(pet => index + pet));

for (let pet of query) {
    console.log(pet);
}

// This code produces the following output:
//
// 0Scruffy
// 0Sam
// 1Walker
// 1Sugar
// 2Scratches
// 2Diesel
// 3Dusty