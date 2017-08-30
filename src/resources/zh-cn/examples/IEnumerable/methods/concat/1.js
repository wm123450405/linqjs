let cats = [
    { name: "花斑虎", age: 3 },
    { name: "汤姆", age: 14 },
    { name: "懒猫", age: 9 }
];

let dogs = [
    { name: "小白", age: 8 },
    { name: "机器人", age: 4 },
    { name: "旺财", age: 1 }
];

let query = cats.asEnumerable().select(cat => cat.name)
        .concat(dogs.asEnumerable().select(dog => dog.name));

for (let name of query) {
    console.log(name);
}

// 这段代码的输出结果如下：
//
// 花斑虎
// 汤姆
// 懒猫
// 小白
// 机器人
// 旺财