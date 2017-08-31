let ages = [ 21, 46, 46, 55, 17, 21, 55, 55 ];

let distinctAges = ages.asEnumerable().distinct();

console.log("Distinct ages:");

for (let age of distinctAges) {
    console.log(age);
}

/*
 This code produces the following output:

 Distinct ages:
 21
 46
 55
 17
 */
