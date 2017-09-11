let longs = [ 4294967296, 466855135, 81125 ];

let max = longs.asEnumerable().max();

console.log(`The largest number is ${ max }.`);

/*
 This code produces the following output:

 The largest number is 4294967296.
 */