// Custom comparer for distinct
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // Check whether the products' properties are equal.
    return x.code === y.code && x.name === y.name;
};

let store1 = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 }
];
let store2 = [
    { name: "apple", code: 9 },
    { name: "lemon", code: 12 }
];

// Get the products from the first array
// that have duplicates in the second array.
let duplicates = store1.asEnumerable().intersect(store2, productComparer);

for (let product of duplicates) {
    console.log(product.name + " " + product.code);
}

/*
 This code produces the following output:

 apple 9
 */