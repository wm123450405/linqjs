let numbers = [ 9, 34, 65, 92, 87, 435, 3, 54, 83, 23, 87, 435, 67, 12, 19 ];

let first = numbers.asEnumerable().first(number => number > 80);

console.log(first);

/*
 This code produces the following output:

 92
 */