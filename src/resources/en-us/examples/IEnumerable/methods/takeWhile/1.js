let fruits = [ "apple", "banana", "mango", "orange", "passionfruit", "grape" ];

let query = fruits.asEnumerable().takeWhile(fruit => "orange" !== fruit);

for (let fruit of query) {
    console.log(fruit);
}

/*
 This code produces the following output:

 apple
 banana
 mango
*/