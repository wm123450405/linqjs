let petOwners = [
    { name: "李小龙", pets: [ "小白", "小石头" ] },
    { name: "成龙", pets: [ "大黄", "小甜心" ] },
    { name: "李连杰", pets: [ "小花", "狗带" ] },
    { name: "甄子丹", pets: [ "斑点" ] }
];

// 使用宠物列表中的宠物名字
// 追加在宠物主人的序号后的方式
// 投影序列中的元素。
let query = petOwners.asEnumerable().selectMany((petOwner, index) =>
        petOwner.pets.asEnumerable().select(pet => index + pet));

for (let pet of query) {
    console.log(pet);
}

// 这段代码的输出结果如下：
//
// 0小白
// 0小石头
// 1大黄
// 1小甜心
// 2小花
// 2狗带
// 3斑点