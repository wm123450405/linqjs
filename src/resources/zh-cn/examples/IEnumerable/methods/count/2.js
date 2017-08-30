let pets = [
    { name: "小白", vaccinated: true },
    { name: "机器人", vaccinated: false },
    { name: "旺财", vaccinated: false }
];

let numberUnvaccinated = pets.asEnumerable().count(p => p.vaccinated === false);

console.log(`有${ numberUnvaccinated }个动物没有接种疫苗。`);

// 这段代码的输出结果如下：
//
// 有2个动物没有接种疫苗。