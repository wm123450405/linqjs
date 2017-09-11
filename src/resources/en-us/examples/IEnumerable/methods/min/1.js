let longs = [ 4294967296, 466855135, 81125 ];

let min = longs.asEnumerable().min();

console.log(`The smallest number is ${ min }.`);

/*
 This code produces the following output:

 The smallest number is 81125.
 */