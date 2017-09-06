let id1 = [ 44, 26, 92, 30, 71, 38 ];
let id2 = [ 39, 59, 83, 47, 26, 4, 30 ];

let both = id1.asEnumerable().intersect(id2);

for (let id of both) {
    console.log(id);
}

/*
 This code produces the following output:

 26
 30
 */