let packages = [
    { company: "化肥", weight: 25.2 },
    { company: "水泥", weight: 18.7 },
    { company: "海绵", weight: 6.0 },
    { company: "黄沙", weight: 33.9 }
];

let totalWeight = packages.asEnumerable().sum(pkg => pkg.weight);

console.log(`所有袋子的总重量是：${ totalWeight }`);

/*
 这段代码的输出结果如下：

 所有袋子的总重量是：83.8
*/