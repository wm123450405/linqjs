let numbers = [ 43.68, 1.25, 583.7, 6.5 ];

let sum = numbers.asEnumerable().sum();

console.log(`The sum of the numbers is ${ sum }.`);

/*
 This code produces the following output:

 The sum of the numbers is 635.13.
*/