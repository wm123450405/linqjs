let fruits = [ "苹果", "百香果", "海南香蕉", "芒果", "橘子", "蓝莓", "新疆葡萄", "草莓" ];

let proportion = fruits.asEnumerable().proportion(fruit => fruit.length < 3);

console.log((proportion * 100) + '%');
/*
 这段代码的输出结果如下：

 62.5%
*/