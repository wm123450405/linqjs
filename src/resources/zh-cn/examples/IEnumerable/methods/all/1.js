// 创建一个宠物的数组。
let pets = [
    { name: "小白", age: 10 },
    { name: "小黑", age: 14 },
    { name: "旺财", age: 6 }
];

// 确实是否所有的宠物名称
// 都是“小”字开头的。
let allStartWithXiao = pets.asEnumerable().all(pet => pet.name.startsWith("小"));

console.log(`${ allStartWithXiao ? "所有" : "不是所有" }宠物的名字都是以“小”字开头的。`);

// 这段代码的输出结果如下：
//
//  不是所有宠物的名字都是以“小”字开头的。