// Custom comparer for distinct
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // Check whether the products' properties are equal.
    return x.code === y.code && x.name === y.name;
};

let products = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 },
    { name: "apple", code: 9 },
    { name: "lemon", code: 12 }
];

// Exclude duplicates.
let noduplicates = products.distinct(productComparer);

for (let product of noduplicates) {
    console.log(product.name + " " + product.code);
}

/*
 This code produces the following output:

 apple 9
 orange 4
 lemon 12
 */