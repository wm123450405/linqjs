let numbers = [ 1, 2, 3, 4 ];
let words = [ "一", "二", "三" ];

let numbersAndWords = numbers.asEnumerable().zip(words, (first, second) => first + " " + second);

for (let item of numbersAndWords) {
    console.log(item);
}

// 这段代码的输出结果如下：

// 1 一
// 2 二
// 3 三