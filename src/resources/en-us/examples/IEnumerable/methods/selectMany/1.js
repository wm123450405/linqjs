let petOwners = [
    { name: "Higa, Sidney", pets: [ "Scruffy", "Sam" ] },
    { name: "Ashkenazi, Ronen", pets: [ "Walker", "Sugar" ] },
    { name: "Price, Vernette", pets: [ "Scratches", "Diesel" ] }
];

// Query using selectMany().
let query1 = petOwners.asEnumerable().selectMany(petOwner => petOwner.pets);

console.log("Using selectMany():");

// Only one foreach loop is required to iterate
// through the results since it is a
// one-dimensional collection.
for (let pet of query1) {
    console.log(pet);
}

// This code shows how to use select()
// instead of selectMany().
let query2 = petOwners.asEnumerable().select(petOwner => petOwner.pets);

console.log("\nUsing select():");

// Notice that two foreach loops are required to
// iterate through the results
// because the query returns a collection of arrays.
for (let petList of query2) {
    for (let pet of petList) {
        console.log(pet);
    }
    console.log();
}

/*
 This code produces the following output:

 Using selectMany():
 Scruffy
 Sam
 Walker
 Sugar
 Scratches
 Diesel

 Using select():
 Scruffy
 Sam

 Walker
 Sugar

 Scratches
 Diesel

*/