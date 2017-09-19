let petOwners = [
    { name: "李小龙", pets: [ "小白", "小石头" ] },
    { name: "成龙", pets: [ "大黄", "小甜心" ] },
    { name: "李连杰", pets: [ "小花", "狗带" ] },
    { name: "甄子丹", pets: [ "斑点" ] }
];

// 投影宠物主人的名称和宠物的名称。
let query = petOwners.asEnumerable().selectMany(petOwner => petOwner.pets, (petOwner, petName) => ({ petOwner, petName }))
        .where(ownerAndPet => ownerAndPet.petName.startsWith("小"))
        .select(ownerAndPet => ({
            owner: ownerAndPet.petOwner.name,
            pet: ownerAndPet.petName
        }));

// 输出结果。
for (let obj of query) {
    console.log(obj);
}

// 这段代码的输出结果如下：
//
// {"owner":"李小龙","pet":"小白"}
// {"owner":"李小龙","pet":"小石头"}
// {"owner":"成龙","pet":"小甜心"}
// {"owner":"李连杰","pet":"小花"}