let fruits = [ "苹果", "香蕉", "芒果", "橘子", "百香果", "葡萄" ];

let fruit1 = fruits.asEnumerable().single(fruit => fruit.length > 2);

console.log(fruit1);

/*
 这段代码的输出结果如下：

 百香果
*/