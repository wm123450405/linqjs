let xi = { name: "习大大" };
let wang = { name: "王思聪" };
let li = { name: "李小龙" };

let white = { name: "小白", owner: wang };
let boots = { name: "机器人", owner: wang };
let black = { name: "黑蛋", owner: li };
let cai = { name: "旺财", owner: xi };

let people = [ xi, wang, li ];
let pets = [ white, boots, black, cai ];

// 从主人序列与宠物序列及其关系中
// 构建一个 主人-宠物 键值对的新序列
// 新序列的每个元素包含宠物名称和宠物主人的姓名
let query = people.asEnumerable().join(pets,
    (person, pet) => ({ ownerName: person.name, pet: pet.name }),
    person => person,
    pet => pet.owner);

for (let obj of query) {
    console.log(`${ obj.ownerName } - ${ obj.pet }`);
}

/*
 这段代码的输出结果如下：

 习大大 - 旺财
 王思聪 - 小白
 王思聪 - 机器人
 李小龙 - 黑蛋
 */