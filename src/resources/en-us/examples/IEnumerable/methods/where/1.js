let fruits = [ "apple", "passionfruit", "banana", "mango", "orange", "blueberry", "grape", "strawberry" ];

let query = fruits.asEnumerable().where(fruit => fruit.length < 6);

for (let fruit of query) {
    console.log(fruit);
}
/*
 This code produces the following output:

 apple
 mango
 grape
*/