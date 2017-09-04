// 创建一个宠物的序列。
let petsList = [
    { name: "小白", age: 8.3 },
    { name: "机器人", age: 4.9 },
    { name: "旺财", age: 1.5 },
    { name: "小黑", age: 4.3 }
];

// 按照整数年龄进行分组
// 然后按每个分组生成
// 包含分组的键、数量、最小年龄与最大年龄的新对象。
let query = petsList.asEnumerable().groupBy(
    pet => Math.floor(pet.age),
    pet => pet.age,
    (age, ages) => ({
        key: age,
        count: ages.count()
    }));

// 循环每个组的结果。
for (let result of query) {
    console.log("\n年龄组：" + result.key);
    console.log("该组包含的宠物数量：" + result.count);
}

/*
 这段代码的输出结果如下：

 年龄组：8
 该组包含的宠物数量：1

 年龄组：4
 该组包含的宠物数量：2

 年龄组：1
 该组包含的宠物数量：1
 */