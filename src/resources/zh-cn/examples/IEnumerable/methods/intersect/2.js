// 一个自定义的比较器。
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // 如果产品的名称和编号相等，则表示是相同的产品。
    return x.code === y.code && x.name === y.name;
};

let store1 = [
    { name: "苹果", code: 9 },
    { name: "橘子", code: 4 }
];
let store2 = [
    { name: "苹果", code: 9 },
    { name: "柠檬", code: 12 }
];

// 获取所有的在第一个数组从出现
// 又在第二个数组中出现了的产品
let duplicates = store1.asEnumerable().intersect(store2, productComparer);

for (let product of duplicates) {
    console.log(product.name + " " + product.code);
}

/*
 这段代码的输出结果如下：

 苹果 9
 */