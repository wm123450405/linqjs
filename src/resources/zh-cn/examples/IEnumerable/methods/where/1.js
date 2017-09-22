let fruits = [ "苹果", "百香果", "海南香蕉", "芒果", "橘子", "蓝莓", "新疆葡萄", "草莓" ];

let query = fruits.asEnumerable().where(fruit => fruit.length < 3);

for (let fruit of query) {
    console.log(fruit);
}
/*
 这段代码的输出结果如下：

 苹果
 芒果
 橘子
 蓝莓
 草莓
*/