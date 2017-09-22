let ints1 = [ 5, 3, 9, 7, 5, 9, 3, 7 ];
let ints2 = [ 8, 3, 6, 4, 4, 9, 1, 0 ];

let union = ints1.asEnumerable().union(ints2);

for (let num of union) {
    console.log(num);
}

/*
 这段代码的输出结果如下：

 5
 3
 9
 7
 8
 6
 4
 1
 0
*/