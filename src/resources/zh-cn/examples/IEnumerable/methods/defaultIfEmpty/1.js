let defaultPet = { name: "默认宠物名称", age: 0 };

let pets1 = [
    { name: "小白", age: 8 },
    { name: "机器人", age: 4 },
    { name: "旺财", age: 1 }
];

for (let pet of pets1.asEnumerable().defaultIfEmpty(defaultPet)) {
    console.log(`宠物名称是：${ pet.name }`);
}

console.log();

let pets2 = [];

for (let pet of pets2.asEnumerable().defaultIfEmpty(defaultPet)) {
    console.log(`宠物名称是：${ pet.name }`);
}

/*
 这段代码的输出结果如下：

 宠物名称是：小白
 宠物名称是：机器人
 宠物名称是：旺财

 宠物名称是：默认宠物名称
 */