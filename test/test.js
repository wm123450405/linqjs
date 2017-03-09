const Enumerable = require('./../src/linq');

let enumerator = [1,3,4].asEnumerable().getEnumerator();
while (enumerator.moveNext()) {
	console.log(enumerator.current);
}

console.log(Enumerable.range(1, 10).concat(Enumerable.range(1, 10)).where(v => v > 2).orderBy(v => v % 3).thenByDescending().distinct().union(Enumerable.range(5, 10)).except(Enumerable.range(1, 3)).intersect(Enumerable.range(5, 5)).reverse().toArray())

console.log(Enumerable.range(1, 10).select(v => v > 2).toArray());

let gs = Enumerable.range(1, 10).groupBy(v => v % 3);

gs.forEach(g => {
	console.log(g.key);
	g.forEach(console.log);
});

console.log(gs.selectMany().toArray());

console.log(Enumerable.range(1, 10).zip(Enumerable.range(1, 10), (v1, v2) => v1 * v2).toArray());

console.log(Enumerable.repeat(1, 10).join(','));

console.log(Enumerable.range(1, 10).join(Enumerable.range(1, 10), (v1, v2) => v1 + ',' + v2, v => v % 2, v => v % 3).toArray());

console.log(Enumerable.range(1, 10).groupJoin(Enumerable.range(1, 10), (key, values) => key + '-' + values.join(','), v => v % 5, v => v % 2).toArray());

console.log(Enumerable.asEnumerable({ a: 1, b: '2'}).toObject());

console.log(Enumerable.asEnumerable([1,'a',true,2,undefined,'b']).ofType(Number).toArray());

console.log(Enumerable.range(1, 10).skip(2).take(6).skipWhile(v => v <= 4).takeWhile(v => v <= 7).toArray());


let e = [
	{"status": "start", "value": "A"},
	{"status": "end", "value": "B"},
	{"status": "start", "value": "C"},
	{"status": "progress", "value": "D"},
	{"status": "start", "value": "E"},
 	{"status": "init", "value": "F"}
];
console.log(e.asEnumerable().orderBy(v => v.status, Enumerable.arrayComparer(["start", "progress", "end"])).select(v => v.value).toArray());
console.log(e.asEnumerable().orderBy(v => v.status, Enumerable.arrayComparer(["start", "progress", "end"], true)).select(v => v.value).toArray());
console.log(e.asEnumerable().orderBy(v => v.status, Enumerable.predicateComparer([s => s == "start", s => s == "progress", s => s == "end"])).select(v => v.value).toArray());
console.log(e.asEnumerable().orderBy(v => v.status, Enumerable.predicateComparer([s => s == "start", s => s == "progress", s => s == "end"], true)).select(v => v.value).toArray());