let fruits = [ "苹果", "香蕉", "芒果", "橘子", "百香果", "葡萄" ];

let numberOfFruits = fruits.asEnumerable().count();

console.log(`数组中有${ numberOfFruits }种水果。`);

// 这段代码的输出结果如下：
//
// 数组中有6种水果。
