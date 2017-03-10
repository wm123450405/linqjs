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

console.log();
console.log(Enumerable.range(1, 10).orderBy(v => v % 3).thenBy(v => v % 2).toArray());

let ctns = [{"id":"313615299210149888","ctn":{"ctnType":"20'GP","ctnNo":"SESF2341542","sealNo":""},"vehicleNo":"苏A 12345","driver":{"id":"293328218420445184","name":"王淼","mobile":"15150506144"},"ctnStatus":{"value":"0","title":"去装箱"},"isOwner":true},{"id":"313615299193372672","ctn":{"ctnType":"20'GP","ctnNo":"SESF2341541","sealNo":""},"vehicleNo":"苏A 12345","driver":{"id":"293328218420445184","name":"王淼","mobile":"15150506144"},"ctnStatus":{"value":"0","title":"去装箱"},"isOwner":true},{"id":"313418202724728832","ctn":{"ctnType":"20'GP","ctnNo":"DISU1234935","sealNo":"FDASFDSAFAS"},"vehicleNo":"苏A 12345","driver":{"id":"293328218420445184","name":"王淼","mobile":"15150506144"},"ctnStatus":{"value":"2","title":"已封箱"},"isOwner":true},{"id":"312890970776305664","ctn":{"ctnType":"20'GP","ctnNo":"GGGG1231236","sealNo":""},"vehicleNo":"苏A1231","driver":{"id":"297629821877125120","name":"发发发2115","mobile":"12312312312"},"ctnStatus":{"value":"0","title":"去装箱"},"isOwner":true},{"id":"312890970776305665","ctn":{"ctnType":"45'GP","ctnNo":"GGGG1231234","sealNo":""},"vehicleNo":"苏A1231","driver":{"id":"297629821877125120","name":"发发发2115","mobile":"12312312312"},"ctnStatus":{"value":"1","title":"已装箱"},"isOwner":false},{"id":"312890298689421312","ctn":{"ctnType":"20'GP","ctnNo":"GGGG1123123","sealNo":""},"vehicleNo":"苏A1231","driver":{"id":"297629821877125120","name":"发发发2115","mobile":"12312312312"},"ctnStatus":{"value":"0","title":"去装箱"},"isOwner":true},{"id":"312889059616522240","ctn":{"ctnType":"20'GP","ctnNo":"GGGG1321231","sealNo":""},"vehicleNo":"苏A1231","driver":{"id":"297629821877125120","name":"发发发2115","mobile":"12312312312"},"ctnStatus":{"value":"0","title":"去装箱"},"isOwner":true},{"id":"312860853383495680","ctn":{"ctnType":"20'HT","ctnNo":"GGGG1231231","sealNo":"1231234"},"vehicleNo":"苏A1231","driver":{"id":"297629821877125120","name":"发发发2115","mobile":"12312312312"},"ctnStatus":{"value":"2","title":"已封箱"},"isOwner":false}];
console.log(ctns.asEnumerable().select(ctn => ({isOwner:ctn.isOwner, status:ctn.ctnStatus.title})).toArray());
console.log();
console.log(ctns.asEnumerable()
                    .orderBy(ctn => ctn.isOwner, Enumerable.arrayComparer([true, false]))
                    .thenBy(ctn => ctn.ctnStatus.value, Enumerable.arrayComparer(['0', '1', '2'])).select(ctn => ({isOwner:ctn.isOwner, status:ctn.ctnStatus.title})).toArray());