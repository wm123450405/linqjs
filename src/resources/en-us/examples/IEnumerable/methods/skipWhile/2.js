let amounts = [ 5000, 2500, 9000, 8000, 6500, 4000, 1500, 5500 ];

let query = amounts.asEnumerable().skipWhile((amount, index) => amount > index * 1000);

for (let amount of query) {
    console.log(amount);
}

/*
 This code produces the following output:

 4000
 1500
 5500
*/