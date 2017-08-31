let names = [ "李小龙", "李连杰", "甄子丹", "成龙", "洪金宝" ];

let name = names.asEnumerable().elementAt(4);

console.log(`名字是“${ name }”。`);

/*
 这段代码的输出结果如下：

 名字是“洪金宝”。
 */