const specialComparer = (d1, d2) => {
    let f1 = d1 * 1e16 % 1e16 / 1e16;
    let f2 = d2 * 1e16 % 1e16 / 1e16;
    if (f1 === f2) {
        return d1 - d2;
    } else if (f1 > f2) {
        return 1;
    } else {
        return -1;
    }
};

let decimals = [ 6.2, 8.3, 0.5, 1.3, 6.3, 9.7 ];

let query = decimals.asEnumerable().orderByDescending(num => num, specialComparer);

for (let num of query) {
    console.log(num);
}

/*
 This code produces the following output:

 9.7
 0.5
 8.3
 6.3
 1.3
 6.2
*/