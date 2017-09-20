let fruits = [ "apple", "banana", "mango", "orange", "passionfruit", "grape" ];
let fruit2 = null;

try {
    fruit2 = fruits.asEnumerable().single(fruit => fruit.length > 15);

    console.log(fruit2);
} catch (e) {
    console.log("The collection does not contain exactly one element whose length is greater than 15.");
}

// This code produces the following output:
//
// The collection does not contain exactly one element whose length is greater than 15.