// 创建一个宠物的数组。
let pets = [
    { name: "小白", age: 8, vaccinated: true },
    { name: "机器人", age: 4, vaccinated: false },
    { name: "旺财", age: 1, vaccinated: false }
];

// 确定是否存在年龄大于1岁且没有接种疫苗的宠物
let unvaccinated = pets.asEnumerable().any(p => p.age > 1 && p.vaccinated === false);

console.log(`${ unvaccinated ? "有" : "没有" }超过一岁未接种疫苗的动物。`);

// 这段代码的输出结果如下：
//
//  有超过一岁未接种疫苗的动物。