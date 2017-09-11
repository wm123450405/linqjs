let pets = [
    { name: "小白", age: 8 },
    { name: "机器人", age: 4 },
    { name: "旺财", age: 1 }
];

let min = pets.asEnumerable().min(pet => pet.age);

console.log(`年龄最小的宠物是${ min }岁。`);

/*
 这段代码的输出结果如下：

 年龄最小的宠物是1岁。
 */