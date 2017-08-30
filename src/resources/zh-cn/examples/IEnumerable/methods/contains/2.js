// 一个自定义的比较器。
let productComparer = (x, y) => {
    if (x === y) return true;
    if (!x || !y) return false;
    // 如果水果的名称和数目相等，则表示是相同的产品。
    return x.code === y.code && x.name === y.name;
};

let fruits = [
    { name: "苹果", code: 9 },
    { name: "橘子", code: 4 },
    { name: "柠檬", code: 12 }
];

let apple = { name: "苹果", code: 9 };
let kiwi = { name: "奇异果", code: 8 };

let hasApple = fruits.asEnumerable().contains(apple, productComparer);
let hasKiwi = fruits.asEnumerable().contains(kiwi, productComparer);

console.log("苹果? " + hasApple);
console.log("奇异果? " + hasKiwi);

/*
 这段代码的输出结果如下：

 苹果? true
 奇异果? false
 */