let names = [ "李小龙", "李连杰", "甄子丹", "成龙", "洪金宝" ];

let index = 20;

let name = names.asEnumerable().elementAtOrDefault(index, "【这个位置上没有人】");

console.log(`在位置${ index }上的名字是“${ name }”。`);

/*
 这段代码的输出结果如下：

 在位置20上的名字是“【这个位置上没有人】”。
 */