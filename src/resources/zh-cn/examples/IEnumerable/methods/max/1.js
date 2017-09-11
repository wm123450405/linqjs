let longs = [ 4294967296, 466855135, 81125 ];

let max = longs.asEnumerable().max();

console.log(`最大的数字是${ max }。`);

/*
 这段代码的输出结果如下：

 最大的数字是4294967296。
 */