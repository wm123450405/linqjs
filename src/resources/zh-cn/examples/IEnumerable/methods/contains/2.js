// Custom comparer for contains
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // Fruits are equal if their names and product numbers are equal.
    return x.code === y.code && x.name === y.name;
};

let fruits = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 },
    { name: "lemon", code: 12 }
];

let apple = { name: "apple", code: 9 };
let kiwi = { name: "kiwi", code: 8 };

let hasApple = fruits.asEnumerable().contains(apple, productComparer);
let hasKiwi = fruits.asEnumerable().contains(kiwi, productComparer);

console.log("Apple? " + hasApple);
console.log("Kiwi? " + hasKiwi);

/*
 This code produces the following output:

 Apple? true
 Kiwi? false
 */