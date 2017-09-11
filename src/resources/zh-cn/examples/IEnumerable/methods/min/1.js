let longs = [ 4294967296, 466855135, 81125 ];

let min = longs.asEnumerable().min();

console.log(`最小的数字是${ min }。`);

/*
 这段代码的输出结果如下：

 最小的数字是81125。
 */