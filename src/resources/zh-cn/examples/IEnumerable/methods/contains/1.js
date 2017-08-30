let fruits = [ "苹果", "香蕉", "芒果", "橘子", "百香果", "葡萄" ];

let fruit = "芒果";

let hasMango = fruits.asEnumerable().contains(fruit);

console.log(`数组中${ hasMango ? "含" : "不含" }有“${ fruit }”。`);

// 这段代码的输出结果如下：
//
// 数组中含有“芒果”。