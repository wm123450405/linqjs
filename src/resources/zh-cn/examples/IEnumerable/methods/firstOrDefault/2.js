let names = [ "李小龙", "李连杰", "六小龄童", "甄子丹", "成龙", "洪金宝" ];

let firstLongName = names.asEnumerable().firstOrDefault("", name => name.length > 3);

console.log(`第一个最长的名字是：“${ firstLongName }”。`);

let firstVeryLongName = names.asEnumerable().firstOrDefault("", name => name.length > 4);

console.log(`${ firstVeryLongName === "" ? "没有" : "有" }名字的长度多于4个字。`);

/*
 这段代码的输出结果如下：

 第一个最长的名字是：“六小龄童”。
 没有名字的长度多于4个字。
 */