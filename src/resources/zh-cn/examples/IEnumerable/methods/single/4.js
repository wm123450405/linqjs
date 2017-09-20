let fruits = [ "苹果", "香蕉", "芒果", "橘子", "百香果", "葡萄" ];
let fruit2 = null;

try {
    fruit2 = fruits.asEnumerable().single(fruit => fruit.length > 5);

    console.log(fruit2);
} catch (e) {
    console.log("集合中不包含恰好一个长度超过5的元素。");
}

// 这段代码的输出结果如下：
//
// 集合中不包含恰好一个长度超过5的元素。