let pets = [
    { name: "小白", age: 8 },
    { name: "机器人", age: 4 },
    { name: "旺财", age: 1 }
];

let query = pets.asEnumerable().orderBy(pet => pet.age);

for (let pet of query) {
    console.log(`${ pet.name } - ${ pet.age }`);
}

/*
 这段代码的输出结果如下：

 旺财 - 1
 机器人 - 4
 小白 - 8
*/