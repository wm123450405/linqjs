let numbers = [ 0, 30, 20, 15, 90, 85, 40, 75 ];

let query = numbers.asEnumerable().where((number, index) => number <= index * 10);

for (let number of query) {
    console.log(number);
}

/*
 This code produces the following output:

 0
 20
 15
 40
*/