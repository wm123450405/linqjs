let fruits = [ "apple", "passionfruit", "banana", "mango", "orange", "blueberry", "grape", "strawberry" ];

let query = fruits.asEnumerable().takeWhile((fruit, index) => fruit.length >= index);

for (let fruit of query) {
    console.log(fruit);
}

/*
 This code produces the following output:

 apple
 passionfruit
 banana
 mango
 orange
 blueberry
*/