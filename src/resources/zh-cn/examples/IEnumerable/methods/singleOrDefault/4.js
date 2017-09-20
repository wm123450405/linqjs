let fruits = [ "苹果", "香蕉", "芒果", "橘子", "百香果", "葡萄" ];

let fruit2 = fruits.asEnumerable().singleOrDefault("没有这样的水果！", fruit => fruit.length > 5);

console.log(fruit2);

/*
 这段代码的输出结果如下：

 没有这样的水果！
*/