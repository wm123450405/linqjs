let fruits2 = [ "orange", "apple" ];
let fruit2 = null;

try {
    fruit2 = fruits2.asEnumerable().single();
    console.log(fruit2);
} catch (e) {
    console.log("The collection does not contain exactly one element.");
}

/*
 This code produces the following output:

 The collection does not contain exactly one element.
*/
