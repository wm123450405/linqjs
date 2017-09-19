let squares = Enumerable.range(1, 10).select(x => x * x);

for (let num of squares) {
    console.log(num);
}
/*
 这段代码的输出结果如下：

 1
 4
 9
 16
 25
 36
 49
 64
 81
 100
*/