let xi = { name: "大龙哥" }, wang = { name: "王思聪" }, li = { name: "李小龙" };
let white = { name: "小白", owner: wang }, boots = { name: "机器人", owner: wang }, black = { name: "黑蛋", owner: li }, cai = { name: "旺财", owner: xi };
let people = [ xi, wang, li ];
let pets = [ white, boots, black, cai ];

let query = people.asEnumerable().join(pets,
    (person, pet) => ({ ownerName: person.name, pet: pet.name }),
    person => person,
    pet => pet.owner);

for (let obj of query) {
    console.log(`${ obj.ownerName } - ${ obj.pet }`);
}

/*
 这段代码的输出结果如下：

 大龙哥 - 旺财
 王思聪 - 小白
 王思聪 - 机器人
 李小龙 - 黑蛋
 */