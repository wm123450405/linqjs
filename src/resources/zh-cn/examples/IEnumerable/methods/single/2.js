let fruits2 = [ "橘子", "苹果" ];
let fruit2 = null;

try {
    fruit2 = fruits2.asEnumerable().single();
    console.log(fruit2);
} catch (e) {
    console.log("集合中不包含恰好一个元素。");
}

/*
 这段代码的输出结果如下：

 集合中不包含恰好一个元素。
*/
