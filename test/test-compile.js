const Enumerable = require('./../dist/linq');

console.log(Enumerable.range(1, 10).concat(Enumerable.range(1, 10)).where(v => v > 2).orderBy(v => v % 3).thenByDescending().distinct().union(Enumerable.range(5, 10)).except(Enumerable.range(1, 3)).intersect(Enumerable.range(5, 5)).reverse().toArray())

console.log(Enumerable.range(1, 10).select(v => v > 2).toArray());

let gs = Enumerable.range(1, 10).groupBy(v => v % 3);
for (let g of gs) {
	console.log(g.key);
	for (let v of g) {
		console.log('->', v);
	}
}
console.log(gs.selectMany().toArray());

console.log(Enumerable.range(1, 10).zip(Enumerable.range(1, 10), (v1, v2) => v1 * v2).toArray());

console.log(Enumerable.repeat(1, 10).join(','));

console.log(Enumerable.range(1, 10).join(Enumerable.range(1, 10), v => v % 2, v => v % 3, (v1, v2) => v1 + ',' + v2).toArray());

console.log(Enumerable.range(1, 10).groupJoin(Enumerable.range(1, 10), v => v % 5, v => v % 2, (key, values) => key + '-' + values.join(',')).toArray());

console.log(Enumerable.asEnumerable({ a: 1, b: '2'}).toObject());

console.log(Enumerable.asEnumerable([1,'a',true,2,undefined,'b']).ofType(Number).toArray());

console.log(Enumerable.range(1, 10).skip(2).take(6).skipWhile(v => v <= 4).takeWhile(v => v <= 7).toArray());
