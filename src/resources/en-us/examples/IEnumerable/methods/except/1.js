let numbers1 = [ 2.0, 2.0, 2.1, 2.2, 2.3, 2.3, 2.4, 2.5 ];
let numbers2 = [ 2.2 ];

let onlyInFirstSet = numbers1.asEnumerable().except(numbers2);

for (let number of onlyInFirstSet) {
    console.log(number);
}

/*
 This code produces the following output:

 2
 2.1
 2.3
 2.4
 2.5
 */