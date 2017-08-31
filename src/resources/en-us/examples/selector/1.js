let pets = [
    { name: "Barley", props: { age: 10, weight: 59 } },
    { name: "Boots", props: { age: 14, weight: 50 } },
    { name: "Whiskers", props: { age: 6, weight: 36 } }
];

pets.asEnumerable().select("name");
//the above code and the following code are same feature.
pets.asEnumerable().select(pet => pet.name);