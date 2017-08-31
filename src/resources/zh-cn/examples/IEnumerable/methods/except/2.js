// 一个自定义的比较器。
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // 如果产品的名称和数目相等，则表示是相同的产品。
    return x.code === y.code && x.name === y.name;
};

let fruits1 = [
    { name: "苹果", code: 9 },
    { name: "橘子", code: 4 },
    { name: "柠檬", code: 12 }
];

let fruits2 = [ { name: "苹果", code: 9 } ];

//获取第一个数组中的全部元素
//除了出现在第二个数组中的元素。
let except = fruits1.asEnumerable().except(fruits2, productComparer);

for (let product of except) {
    console.log(product.name + " " + product.code);
}

/*
 这段代码的输出结果如下：

 橘子 4
 柠檬 12
 */