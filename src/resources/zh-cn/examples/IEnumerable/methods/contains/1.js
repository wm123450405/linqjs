let fruits = [ "apple", "banana", "mango", "orange", "passionfruit", "grape" ];

let fruit = "mango";

let hasMango = fruits.asEnumerable().contains(fruit);

console.log(`The array ${ hasMango ? "does" : "does not" } contain '${ fruit }'.`);

// This code produces the following output:
//
// The array does contain 'mango'.