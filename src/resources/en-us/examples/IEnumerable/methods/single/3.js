let fruits = [ "apple", "banana", "mango", "orange", "passionfruit", "grape" ];

let fruit1 = fruits.asEnumerable().single(fruit => fruit.length > 10);

console.log(fruit1);

/*
 This code produces the following output:

 passionfruit
*/