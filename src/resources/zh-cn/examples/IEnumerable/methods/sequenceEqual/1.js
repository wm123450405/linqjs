let pet1 = { name: "小白", age: 2 };
let pet2 = { name: "旺财", age: 8 };

// 创建两个宠物列表.
let pets1 = [ pet1, pet2 ];
let pets2 = [ pet1, pet2 ];

let equal = pets1.asEnumerable().sequenceEqual(pets2);

console.log(`这些宠物列表${ equal ? "是" : "不是" }相同的。`);

/*
 这段代码的输出结果如下：

 这些宠物列表是相同的。
*/