let fruits = [ "苹果", "海南香蕉", "芒果", "沙糖桔", "西番莲的果实", "长城干红葡萄酒" ];

let query = fruits.asEnumerable().select((fruit, index) => ({ index, str: fruit.substring(0, index) }));

for (let obj of query) {
    console.log(obj);
}

/*
 这段代码的输出结果如下：

 {"index":0,"str":""}
 {"index":1,"str":"海"}
 {"index":2,"str":"芒果"}
 {"index":3,"str":"沙糖桔"}
 {"index":4,"str":"西番莲的"}
 {"index":5,"str":"长城干红葡"}
*/