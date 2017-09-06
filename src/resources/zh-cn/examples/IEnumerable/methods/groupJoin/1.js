let xi = { name: "习大大" };
let wang = { name: "王思聪" };
let li = { name: "李小龙" };

let white = { name: "小白", owner: wang };
let boots = { name: "机器人", owner: wang };
let black = { name: "黑蛋", owner: li };
let cai = { name: "旺财", owner: xi };

let people = [ xi, wang, li ];
let pets = [ white, boots, black, cai ];

// 生成一个每个元素都包含
// 主人名字和其所有宠物名字列表
// 的新序列
let query = people.asEnumerable().groupJoin(pets,
    (person, petCollection) => ({
        ownerName: person.name,
        pets: petCollection.select(pet => pet.name)
    }),
    person => person,
    pet => pet.owner);

for (let obj of query) {
    // 输入该主人姓名。
    console.log(`${ obj.ownerName }：`);
    // 输入该主人所有宠物的名字。
    for (let pet of obj.pets) {
        console.log(`  ${ pet }`);
    }
}

/*
 这段代码的输出结果如下：

 习大大：
   旺财
 王思聪：
   小白
   机器人
 李小龙：
   黑蛋
 */