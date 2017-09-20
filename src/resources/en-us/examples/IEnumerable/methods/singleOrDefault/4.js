let fruits = [ "apple", "banana", "mango", "orange", "passionfruit", "grape" ];

let fruit2 = fruits.asEnumerable().singleOrDefault("No such string!", fruit => fruit.length > 15);

console.log(fruit2);

/*
 This code produces the following output:

 No such string!
*/