let id1 = [ 44, 26, 92, 30, 71, 38 ];
let id2 = [ 39, 59, 83, 47, 26, 4, 30 ];

let both = id1.asEnumerable().intersect(id2);

for (let id of both) {
    console.log(id);
}

/*
 这段代码的输出结果如下：

 26
 30
 */