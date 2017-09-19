let petOwners = [
    { name: "李小龙", pets: [ "小白", "旺财" ] },
    { name: "成龙", pets: [ "大黄", "甜心" ] },
    { name: "李连杰", pets: [ "花花", "狗带" ] }
];

// 使用 selectMany() 查询。
let query1 = petOwners.asEnumerable().selectMany(petOwner => petOwner.pets);

console.log("使用 selectMany()：");

// 只需要一个循环来遍历这个结果序列，
// 因为它已经是一个一维序列了。
for (let pet of query1) {
    console.log(pet);
}

// 下面的代码演示了如何使用 select()
// 来代替 selectMany()。
let query2 = petOwners.asEnumerable().select(petOwner => petOwner.pets);

console.log("\n使用 select()：");

// 需要两层循环来遍历结果序列，
// 因为它是一个元素为序列的序列。
for (let petList of query2) {
    for (let pet of petList) {
        console.log(pet);
    }
    console.log();
}

/*
 这段代码的输出结果如下：

 使用 selectMany()：:
 小白
 旺财
 大黄
 甜心
 花花
 狗带

 使用 select()：:
 小白
 旺财

 大黄
 甜心

 花花
 狗带

*/