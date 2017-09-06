// 创建一个宠物的序列。
let pets = [
    { name: "小白", age: 8 },
    { name: "机器人", age: 4 },
    { name: "旺财", age: 1 },
    { name: "小黑", age: 4 }
];

// 使用年龄作为分组的键同时
// 使用宠物的名字作为每个分组中的元素。
let query = pets.asEnumerable().groupBy(pet => pet.age, pet => pet.name);

// 循环每个组的结果。
for (let petGroup of query) {
    // 输出该组的键。
    console.log(petGroup.key);
    // 循环每个结果的内容。
    for (let name of petGroup)
        // 输出 IGrouping 中的值。
        console.log(`  ${ name }`);
}

/*
 这段代码的输出结果如下：

 8
   小白
 4
   机器人
   小黑
 1
   旺财
 */
