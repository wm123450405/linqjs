let people = [
    {
        lastName: "老王",
        pets: [
            { name: "小白", age: 10 },
            { name: "机器人", age: 14 },
            { name: "旺财", age: 6 }
        ]
    },
    {
        lastName: "老郑",
        pets: [
            { name: "雪诺", age: 1 }
        ]
    },
    {
        lastName: "老吴",
        pets: [
            { name: "贝贝", age: 8 }
        ]
    },
    {
        lastName: "老周",
        pets: [
            { name: "甜心", age: 2 },
            { name: "大河", age: 13 }
        ]
    }
];

// 确定谁的宠物都是大于5岁的。
let names = people.asEnumerable()
        .where(person => person.pets.all(pet => pet.age > 5))
        .select(person => person.lastName);

for (let name of names) {
    console.log(name);
}

/* 这段代码的输出结果如下：
 *
 * 老王
 * 老吴
 */