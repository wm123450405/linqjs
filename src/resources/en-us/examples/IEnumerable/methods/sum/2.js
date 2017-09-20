let packages = [
    { company: "Coho Vineyard", weight: 25.2 },
    { company: "Lucerne Publishing", weight: 18.7 },
    { company: "Wingtip Toys", weight: 6.0 },
    { company: "Adventure Works", weight: 33.9 }
];

let totalWeight = packages.asEnumerable().sum(pkg => pkg.weight);

console.log(`The total weight of the packages is: ${ totalWeight }`);

/*
 This code produces the following output:

 The total weight of the packages is: 83.8
*/