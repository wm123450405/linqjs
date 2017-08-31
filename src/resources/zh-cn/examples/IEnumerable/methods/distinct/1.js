let ages = [ 21, 46, 46, 55, 17, 21, 55, 55 ];

let distinctAges = ages.asEnumerable().distinct();

console.log("不重复的年龄有：");

for (let age of distinctAges) {
    console.log(age);
}

/*
 这段代码的输出结果如下：

 不重复的年龄有：
 21
 46
 55
 17
 */
