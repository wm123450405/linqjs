let pets = [
    { name: "小白", props: { age: 10, weight: 59 } },
    { name: "小黑", props: { age: 14, weight: 50 } },
    { name: "旺财", props: { age: 6, weight: 36 } }
];

pets.asEnumerable().select("name");
//上述代码等价于以下代码
pets.asEnumerable().select(pet => pet.name);