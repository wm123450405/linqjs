let fruits = ["芒果", "橘子", "苹果", 3.0, "香蕉"];

// 对序列执行 ofType 方法
let query1 = fruits.asEnumerable().ofType(String);

console.log("元素是 String 类型的有：");
for (let fruit of query1) {
    console.log(fruit);
}

// 以下的查询展示了在 ofType 方法调用后使用 where 方法
let query2 = fruits.asEnumerable().ofType(String).where(fruit => fruit.asEnumerable().contains("果", Enumerable.comparers.ignoreCase()));

console.log("\n下列字符串包含 “果”：");
for (let fruit of query2) {
    console.log(fruit);
}

// 这段代码的输出结果如下：
//
// 元素是 String 类型的有：
// 芒果
// 橘子
// 苹果
// 香蕉
//
// 下列字符串包含 “果”：
// 芒果
// 苹果