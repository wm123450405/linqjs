let fruits = [ "苹果", "香蕉", "芒果", "橘子", "百香果", "葡萄" ];

let query = fruits.asEnumerable().takeWhile(fruit => "橘子" !== fruit);

for (let fruit of query) {
    console.log(fruit);
}

/*
 这段代码的输出结果如下：

 苹果
 香蕉
 芒果
*/