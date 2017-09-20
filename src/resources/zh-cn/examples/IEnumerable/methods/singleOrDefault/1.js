let fruits1 = [ "橘子" ];

let fruit1 = fruits1.asEnumerable().singleOrDefault("没有这样的水果！");

console.log(fruit1);

/*
 这段代码的输出结果如下：

 橘子
*/