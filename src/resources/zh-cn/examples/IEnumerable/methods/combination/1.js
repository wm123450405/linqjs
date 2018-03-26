let array = [ 1, 2, 3 ];

//数量为2的所有组合
console.log(array.asEnumerable().combination(2).select(per => `[${ per.join('|') }]`).toArray());
//数量为2的所有重复组合
console.log(array.asEnumerable().combination(2, true).select(per => `[${ per.join('|') }]`).toArray());

// 这段代码的输出结果如下：
//
// [1|2],[1|3],[2|3]
// [1|1],[1|2],[1|3],[2|2],[2|3],[3|3]