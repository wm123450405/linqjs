let numbers = [ 43.68, 1.25, 583.7, 6.5 ];

let sum = numbers.asEnumerable().sum();

console.log(`所有数的和是${ sum }。`);

/*
 这段代码的输出结果如下：

 所有数的和是635.13。
*/