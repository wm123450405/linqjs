let fruits = [ "apple", "banana", "mango", "orange", "passionfruit", "grape" ];

let query = fruits.asEnumerable().select((fruit, index) => ({ index, str: fruit.substring(0, index) }));

for (let obj of query) {
    console.log(obj);
}

/*
 This code produces the following output:

 {"index":0,"str":""}
 {"index":1,"str":"b"}
 {"index":2,"str":"ma"}
 {"index":3,"str":"ora"}
 {"index":4,"str":"pass"}
 {"index":5,"str":"grape"}
*/