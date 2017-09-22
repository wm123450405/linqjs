let numbers = [ 1, 2, 3, 4 ];
let words = [ "one", "two", "three" ];

let numbersAndWords = numbers.asEnumerable().zip(words, (first, second) => first + " " + second);

for (let item of numbersAndWords) {
    console.log(item);
}

// This code produces the following output:

// 1 one
// 2 two
// 3 three