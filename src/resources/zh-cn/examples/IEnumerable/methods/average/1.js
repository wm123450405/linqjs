let numbers = [ "10007", "37", 299846234235 ];

let average = numbers.asEnumerable().average();

console.log(`平均数是${ average }。`);

// 这段代码的输出结果如下：
//
// 平均数是99948748093。