// 一个自定义的比较器。
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // 如果产品的名称和编号相等，则表示是相同的产品。
    return x.code === y.code && x.name === y.name;
};

let store1 = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 }
];

let store2 = [
    { name: "apple", code: 9 },
    { name: "lemon", code: 12 }
];

//Get the products from the both arrays
//excluding duplicates.
let union = store1.asEnumerable().union(store2, productComparer);

for (let product of union) {
    console.log(product.name + " " + product.code);
}

/*
    This code produces the following output:

    apple 9
    orange 4
    lemon 12
*/