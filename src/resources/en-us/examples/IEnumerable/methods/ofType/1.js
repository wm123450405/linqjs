let fruits = ["Mango", "Orange", "Apple", 3.0, "Banana"];

// Apply ofType() to the Array
let query1 = fruits.asEnumerable().ofType(String);

console.log("Elements of type 'String' are:");
for (let fruit of query1) {
    console.log(fruit);
}

// The following query shows that the standard query operators such as
// where() can be applied to the Array type after calling ofType().
let query2 = fruits.asEnumerable().ofType(String).where(fruit => fruit.toLowerCase().asEnumerable().contains("n"));

console.log("\nThe following strings contain 'n':");
for (let fruit of query2) {
    console.log(fruit);
}

// This code produces the following output:
//
// Elements of type 'string' are:
// Mango
// Orange
// Apple
// Banana
//
// The following strings contain 'n':
// Mango
// Orange
// Banana