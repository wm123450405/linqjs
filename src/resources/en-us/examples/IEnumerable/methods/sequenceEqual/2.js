// 一个自定义的比较器。
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // 如果产品的名称和数目相等，则表示是相同的产品。
    return x.code === y.code && x.name === y.name;
};

let storeA = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 }
];

let storeB = [
    { name: "apple", code: 9 },
    { name: "orange", code: 4 }
];

let equalAB = storeA.asEnumerable().sequenceEqual(storeB, productComparer);

console.log("Equal? " + equalAB);

/*
    This code produces the following output:

    Equal? True
*/