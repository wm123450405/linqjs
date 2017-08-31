// Custom comparer for distinct
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // Check whether the products' properties are equal.
    return x.code === y.code && x.name === y.name;
};

let fruits1 = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 },
    { name: "lemon", code: 12 }
];

let fruits2 = [ { name: "apple", code: 9 } ];

//Get all the elements from the first array
//except for the elements from the second array.
let except = fruits1.asEnumerable().except(fruits2, productComparer);

for (let product of except) {
    console.log(product.name + " " + product.code);
}

/*
 This code produces the following output:

 orange 4
 lemon 12
 */