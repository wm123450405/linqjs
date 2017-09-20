let fruits = [ "苹果", "百香果", "香蕉", "芒果", "橘子", "蓝莓", "葡萄", "草莓" ];

let query = fruits.asEnumerable().takeWhile((fruit, index) => fruit.length >= index);

for (let fruit of query) {
    console.log(fruit);
}

/*
 这段代码的输出结果如下：

 苹果
 百香果
 香蕉
*/