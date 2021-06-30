let pets = [
    { name: "小白", age: 8 },
    { name: "机器人", age: 4 },
    { name: "旺财", age: 1 }
];

let max = pets.asEnumerable().max(pet => pet.age + pet.name.length);

console.log(`最大的年龄加名字长度是${ max.name }+${ max.age }。`);

/*
 这段代码的输出结果如下：

 最大的年龄加名字长度是小白+8。
 */