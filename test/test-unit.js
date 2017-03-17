const assert = require('asserture');

module.exports = function(Enumerable, exceptions) {
	const a = 'a',
		b = 'b',
		c = 'c',
		d = 'd',
		e = 'e',
		f = 'f';
	const OutOfRangeException = exceptions && exceptions.outOfRange || require('./../src/core/exceptions/OutOfRangeException');
	const NoSuchElementsException = exceptions && exceptions.noSuchElements || require('./../src/core/exceptions/NoSuchElementsException');
	const TooManyElementsException = exceptions && exceptions.tooManyElements || require('./../src/core/exceptions/TooManyElementsException');
	const KeysForMultiElementsException = exceptions && exceptions.keysForMultiElements || require('./../src/core/exceptions/KeysForMultiElementsException');

	Enumerable = Enumerable || require('./../src/linq');

	//Enumerable static methods
	assert.deepStrictEqual(Enumerable.empty().toArray(), []);
	assert.deepStrictEqual(Enumerable.repeat(1, 4).toArray(), [1, 1, 1, 1]);
	assert.deepStrictEqual(Enumerable.range(1, 4).toArray(), [1, 2, 3, 4]);

	//Enumerable static methods for extends IEnumerable
	//select
	assert.deepStrictEqual(Enumerable.select([a, b, c]).toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.select([a, b, c], v => v + v).toArray(), ['aa', 'bb', 'cc']);
	//where
	assert.deepStrictEqual(Enumerable.where([0, 1, 2, 3, 4, 5]).toArray(), [0, 1, 2, 3, 4, 5]);
	assert.deepStrictEqual(Enumerable.where([0, 1, 2, 3, 4, 5], v => v % 2 === 0).toArray(), [0, 2, 4]);
	//any
	assert.isStrictTrue(Enumerable.any([a, b, c], v => v === b));
	//all
	assert.isStrictFalse(Enumerable.all([a, b, c], v => v === b));
	//sum
	assert.strictEqual(Enumerable.sum([1, 2, 3]), 6);
	assert.strictEqual(Enumerable.sum([1, 2, 3, 4], v => v * v), 30);
	assert.isStrictNaN(Enumerable.sum([a, b, c]), NaN);
	//average
	assert.strictEqual(Enumerable.average([1, 2, 3]), 2);
	assert.strictEqual(Enumerable.average([1, 2, 3, 4], v => v * v), 7.5);
	assert.isStrictNaN(Enumerable.average([a, b, c]), NaN);
	//aggregate
	assert.strictEqual(Enumerable.aggregate([4, 3, 2, 1], 5, (seed, v) => seed + v), 15);
	assert.strictEqual(Enumerable.aggregate([4, 3, 2, 1], 5, (seed, v) => seed + v, r => r * 2), 30);
	//max
	assert.strictEqual(Enumerable.max([5, 7, 3, 1, 9]), 9);
	assert.strictEqual(Enumerable.max([b, c, d, a], v => '-' + v), '-d');
	assert.strictEqual(Enumerable.max([b, c, d, a], v => '-' + v, (element, other) => element > other ? -1 : element == other ? 0 : 1), '-a');
	//min
	assert.strictEqual(Enumerable.min([5, 7, 3, 1, 9]), 1);
	assert.strictEqual(Enumerable.min([b, c, d, a], v => '-' + v), '-a');
	assert.strictEqual(Enumerable.min([b, c, d, a], v => '-' + v, (element, other) => element > other ? -1 : element == other ? 0 : 1), '-d');
	//concat
	assert.deepStrictEqual(Enumerable.concat([a, b], [d, e]).toArray(), [a, b, d, e]);
	//contains
	assert.isStrictTrue(Enumerable.contains([a, b, c, d], c));
	assert.isStrictFalse(Enumerable.contains([1, 2, 3, 4, 5], 6));
	assert.isStrictTrue(Enumerable.contains([1, 2, 3, 4, 5], 6, (element, value) => element === value % 4));
	//count
	assert.strictEqual(Enumerable.count([1, 2, 3, 4, 5]), 5);
	assert.strictEqual(Enumerable.count([1, 2, 3, 4, 5], element => element % 2 == 0), 2);
	//defaultIfEmpty
	assert.deepStrictEqual(Enumerable.defaultIfEmpty([], a).toArray(), [a]);
	assert.deepStrictEqual(Enumerable.defaultIfEmpty([a, b], a).toArray(), [a, b]);
	//distinct
	assert.deepStrictEqual(Enumerable.distinct([a, b, c, c, b, b, c, a]).toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.distinct([1, 2, 3, 3, 2, 2, 3, 1], (element, value) => element % 2 === value % 2).toArray(), [1, 2]);
	//except
	assert.deepStrictEqual(Enumerable.except([a, b, c, d, e, c], [d, b]).toArray(), [a, c, e]);
	assert.deepStrictEqual(Enumerable.except([1, 2, 3, 4, 5, 3, 6], [2, 4], (element, value) => element % 3 === value % 3).toArray(), [3]); //in this equality comparer 3 is equal to 6, so number 6 was been ignored
	//union
	assert.deepStrictEqual(Enumerable.union([a, b, c], [b, c, d, e]).toArray(), [a, b, c, d, e]);
	assert.deepStrictEqual(Enumerable.union([1, 2, 3, 4], [5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [1, 2, 3]);
	//itersect
	assert.deepStrictEqual(Enumerable.intersect([a, b, c], [b, c, d, e]).toArray(), [b, c]);
	assert.deepStrictEqual(Enumerable.intersect([1, 2, 3, 4], [5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [2, 3]);
	//elementAt
	assert.strictEqual(Enumerable.elementAt([a, b, c, d, e], 2), c);
	assert.throws(() => Enumerable.elementAt([a, b, c, d, e], 10), OutOfRangeException);
	assert.throws(() => Enumerable.elementAt([a, b, c, d, e], -1), OutOfRangeException);
	//elementAtOrDefault
	assert.strictEqual(Enumerable.elementAtOrDefault([a, b, c, d, e], 2, f), c);
	assert.strictEqual(Enumerable.elementAtOrDefault([a, b], 2, f), f);
	//first
	assert.strictEqual(Enumerable.first([a, b, c]), a);
	assert.throws(() => Enumerable.first([]), NoSuchElementsException);
	//firstOrDefault
	assert.strictEqual(Enumerable.firstOrDefault([a, b, c], f), a);
	assert.strictEqual(Enumerable.firstOrDefault([], f), f);
	//last
	assert.strictEqual(Enumerable.last([a, b, c]), c);
	assert.throws(() => Enumerable.last([]), NoSuchElementsException);
	//lastOrDefault
	assert.strictEqual(Enumerable.lastOrDefault([a, b, c], f), c);
	assert.strictEqual(Enumerable.lastOrDefault([], f), f);
	//single
	assert.strictEqual(Enumerable.single([a]), a);
	assert.throws(() => Enumerable.single([a, b, c]), TooManyElementsException);
	assert.throws(() => Enumerable.single([]), NoSuchElementsException);
	//singleOrDefault
	assert.throws(() => Enumerable.singleOrDefault([a, b, c], f), TooManyElementsException);
	assert.strictEqual(Enumerable.singleOrDefault([], f), f);
	assert.strictEqual(Enumerable.singleOrDefault([a], f), a);
	//join
	assert.strictEqual(Enumerable.join([a, b, c], '|'), 'a|b|c');
	//ofType
	assert.deepStrictEqual(Enumerable.ofType([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], String).toArray(), [a, b, c, '']);
	assert.deepStrictEqual(Enumerable.ofType([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Number).toArray(), [1, 0.2, 1E2]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Boolean).toArray(), [true]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Array).toArray(), [
		[1, 2]
	]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], RegExp).toArray(), [/\w/ig]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Object).toArray(), [{}]);
	//reverse
	assert.deepStrictEqual(Enumerable.reverse([a, b, c]).toArray(), [c, b, a]);
	//sequenceEqual
	assert.isStrictFalse(Enumerable.sequenceEqual([a, b, c], [a, b, d]));
	assert.isStrictTrue(Enumerable.sequenceEqual([0, 1, 2], [3, 4, 5], (element, value) => element % 3 === value % 3));
	//skip
	assert.deepStrictEqual(Enumerable.skip([a, b, c, d, e], 2).toArray(), [c, d, e]);
	//skipWhile
	assert.deepStrictEqual(Enumerable.skipWhile([1, 2, 3, 4, 5], v => v < 3).toArray(), [3, 4, 5]);
	//take
	assert.deepStrictEqual(Enumerable.take([a, b, c, d, e], 3).toArray(), [a, b, c]);
	//takeWhile
	assert.deepStrictEqual(Enumerable.takeWhile([1, 2, 3, 4, 5], v => v <= 3).toArray(), [1, 2, 3]);
	//zip
	assert.deepStrictEqual(Enumerable.zip([1, 2, 3], [a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
	//orderBy
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b]).toArray(), [a, b, c, d]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b], v => v + v).toArray(), [a, b, c, d]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b], v => v + v, (element, other) => element > other ? -1 : element == other ? 0 : 1).toArray(), [d, c, b, a]);
	//orderByDescending
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b]).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b], v => v + v).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b], v => v + v, (element, other) => element > other ? -1 : element == other ? 0 : 1).toArray(), [a, b, c, d]);
	//join
	assert.deepStrictEqual(Enumerable.join([1, 2, 3, 4], [2, 3, 4, 5], (outerElement, innerElement) => outerElement * innerElement).toArray(), [4, 9, 16]);
	assert.deepStrictEqual(Enumerable.join([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}], [2, 3, 4, 5], (outerElement, innerElement) => outerElement.value * innerElement, v => v.key).toArray(), [6, 12, 20]);
	assert.deepStrictEqual(Enumerable.join([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['e a', 'f b']);
	assert.deepStrictEqual(Enumerable.join([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b', 'e c']);
	//groupBy
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1]).select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 1],
		[4]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3).select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 4, 1]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3, v => v * v).select(grouping => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3, v => v * v, (key, grouping) => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual(Enumerable.groupBy([3, 2, 1, 4, 3, 3, 1], v => v % 3, v => v * v, (key, grouping) => grouping.toArray(), (element, other) => element % 2 === other % 2).toArray(), [
		[9, 4, 9, 9],
		[1, 16, 1]
	]);
	//selectMany
	assert.deepStrictEqual(Enumerable.selectMany([
		[a, b, c],
		[d],
		[e, f]
	]).toArray(), [a, b, c, d, e, f]);
	assert.deepStrictEqual(Enumerable.selectMany([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}], v => v.values).toArray(), [a, e, b, c, d, f]);
	assert.deepStrictEqual(Enumerable.selectMany([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}], v => v.values, v => v + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
	//groupJoin
	assert.deepStrictEqual(Enumerable.groupJoin([1, 2, 3, 4], [2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray()).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual(Enumerable.groupJoin([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}], [2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray(), v => v.key).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual(Enumerable.groupJoin([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 3,
		lastName: '!'
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['d ', 'e a', 'f b !']);
	assert.deepStrictEqual(Enumerable.groupJoin([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}], [{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 101,
		lastName: '!'
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b !', 'e c', 'f ']);

	//IEnumerable methods
	//select
	assert.deepStrictEqual([a, b, c].asEnumerable().select().toArray(), [a, b, c]);
	assert.deepStrictEqual([a, b, c].asEnumerable().select(v => v + v).toArray(), ['aa', 'bb', 'cc']);
	//where
	assert.deepStrictEqual([0, 1, 2, 3, 4, 5].asEnumerable().where().toArray(), [0, 1, 2, 3, 4, 5]);
	assert.deepStrictEqual([0, 1, 2, 3, 4, 5].asEnumerable().where(v => v % 2 === 0).toArray(), [0, 2, 4]);
	//any
	assert.isStrictTrue([a, b, c].asEnumerable().any(v => v === b));
	//all
	assert.isStrictFalse([a, b, c].asEnumerable().all(v => v === b));
	//sum
	assert.strictEqual([1, 2, 3].asEnumerable().sum(), 6);
	assert.strictEqual([1, 2, 3, 4].asEnumerable().sum(v => v * v), 30);
	assert.isStrictNaN([a, b, c].asEnumerable().sum(), NaN);
	//average
	assert.strictEqual([1, 2, 3].asEnumerable().average(), 2);
	assert.strictEqual([1, 2, 3, 4].asEnumerable().average(v => v * v), 7.5);
	assert.isStrictNaN([a, b, c].asEnumerable().average(), NaN);
	//aggregate
	assert.strictEqual([4, 3, 2, 1].asEnumerable().aggregate(5, (seed, v) => seed + v), 15);
	assert.strictEqual([4, 3, 2, 1].asEnumerable().aggregate(5, (seed, v) => seed + v, r => r * 2), 30);
	//max
	assert.strictEqual([5, 7, 3, 1, 9].asEnumerable().max(), 9);
	assert.strictEqual([b, c, d, a].asEnumerable().max(v => '-' + v), '-d');
	assert.strictEqual([b, c, d, a].asEnumerable().max(v => '-' + v, (element, other) => element > other ? -1 : element == other ? 0 : 1), '-a');
	//min
	assert.strictEqual([5, 7, 3, 1, 9].asEnumerable().min(), 1);
	assert.strictEqual([b, c, d, a].asEnumerable().min(v => '-' + v), '-a');
	assert.strictEqual([b, c, d, a].asEnumerable().min(v => '-' + v, (element, other) => element > other ? -1 : element == other ? 0 : 1), '-d');
	//concat
	assert.deepStrictEqual([a, b].asEnumerable().concat([d, e]).toArray(), [a, b, d, e]);
	//contains
	assert.isStrictTrue([a, b, c, d].asEnumerable().contains(c));
	assert.isStrictFalse([1, 2, 3, 4, 5].asEnumerable().contains(6));
	assert.isStrictTrue([1, 2, 3, 4, 5].asEnumerable().contains(6, (element, value) => element === value % 4));
	//count
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().count(), 5);
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().count(element => element % 2 == 0), 2);
	//defaultIfEmpty
	assert.deepStrictEqual([].asEnumerable().defaultIfEmpty(a).toArray(), [a]);
	assert.deepStrictEqual([a, b].asEnumerable().defaultIfEmpty(a).toArray(), [a, b]);
	//distinct
	assert.deepStrictEqual([a, b, c, c, b, b, c, a].asEnumerable().distinct().toArray(), [a, b, c]);
	assert.deepStrictEqual([1, 2, 3, 3, 2, 2, 3, 1].asEnumerable().distinct((element, value) => element % 2 === value % 2).toArray(), [1, 2]);
	//except
	assert.deepStrictEqual([a, b, c, d, e, c].asEnumerable().except([d, b]).toArray(), [a, c, e]);
	assert.deepStrictEqual([1, 2, 3, 4, 5, 3, 6].asEnumerable().except([2, 4], (element, value) => element % 3 === value % 3).toArray(), [3]); //in this equality comparer 3 is equal to 6, so number 6 was been ignored
	//union
	assert.deepStrictEqual([a, b, c].asEnumerable().union([b, c, d, e]).toArray(), [a, b, c, d, e]);
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().union([5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [1, 2, 3]);
	//itersect
	assert.deepStrictEqual([a, b, c].asEnumerable().intersect([b, c, d, e]).toArray(), [b, c]);
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().intersect([5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [2, 3]);
	//elementAt
	assert.strictEqual([a, b, c, d, e].asEnumerable().elementAt(2), c);
	assert.throws(() => [a, b, c, d, e].asEnumerable().elementAt(10), OutOfRangeException);
	assert.throws(() => [a, b, c, d, e].asEnumerable().elementAt(-1), OutOfRangeException);
	//elementAtOrDefault
	assert.strictEqual([a, b, c, d, e].asEnumerable().elementAtOrDefault(2, f), c);
	assert.strictEqual([a, b].asEnumerable().elementAtOrDefault(2, f), f);
	//first
	assert.strictEqual([a, b, c].asEnumerable().first(), a);
	assert.throws(() => Enumerable.first([]), NoSuchElementsException);
	//firstOrDefault
	assert.strictEqual([a, b, c].asEnumerable().firstOrDefault(f), a);
	assert.strictEqual(Enumerable.firstOrDefault([], f), f);
	//last
	assert.strictEqual([a, b, c].asEnumerable().last(), c);
	assert.throws(() => Enumerable.last([]), NoSuchElementsException);
	//lastOrDefault
	assert.strictEqual([a, b, c].asEnumerable().lastOrDefault(f), c);
	assert.strictEqual(Enumerable.lastOrDefault([], f), f);
	//single
	assert.strictEqual([a].asEnumerable().single(), a);
	assert.throws(() => [a, b, c].asEnumerable().single(), TooManyElementsException);
	assert.throws(() => Enumerable.single([]), NoSuchElementsException);
	//singleOrDefault
	assert.throws(() => [a, b, c].asEnumerable().singleOrDefault(f), TooManyElementsException);
	assert.strictEqual(Enumerable.singleOrDefault([], f), f);
	assert.strictEqual([a].asEnumerable().singleOrDefault(f), a);
	//join
	assert.strictEqual([a, b, c].asEnumerable().join('|'), 'a|b|c');
	//ofType
	assert.deepStrictEqual([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(String).toArray(), [a, b, c, '']);
	assert.deepStrictEqual([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Number).toArray(), [1, 0.2, 1E2]);
	assert.deepStrictEqual([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Boolean).toArray(), [true]);
	assert.deepStrictEqual([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Array).toArray(), [
		[1, 2]
	]);
	assert.deepStrictEqual([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(RegExp).toArray(), [/\w/ig]);
	assert.deepStrictEqual([1, a, , {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Object).toArray(), [{}]);
	//reverse
	assert.deepStrictEqual([a, b, c].asEnumerable().reverse().toArray(), [c, b, a]);
	//sequenceEqual
	assert.isStrictFalse([a, b, c].asEnumerable().sequenceEqual([a, b, d]));
	assert.isStrictTrue([0, 1, 2].asEnumerable().sequenceEqual([3, 4, 5], (element, value) => element % 3 === value % 3));
	//skip
	assert.deepStrictEqual([a, b, c, d, e].asEnumerable().skip(2).toArray(), [c, d, e]);
	//skipWhile
	assert.deepStrictEqual([1, 2, 3, 4, 5].asEnumerable().skipWhile(v => v < 3).toArray(), [3, 4, 5]);
	//take
	assert.deepStrictEqual([a, b, c, d, e].asEnumerable().take(3).toArray(), [a, b, c]);
	//takeWhile
	assert.deepStrictEqual([1, 2, 3, 4, 5].asEnumerable().takeWhile(v => v <= 3).toArray(), [1, 2, 3]);
	//zip
	assert.deepStrictEqual([1, 2, 3].asEnumerable().zip([a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
	//orderBy
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy().toArray(), [a, b, c, d]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy(v => v + v).toArray(), [a, b, c, d]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy(v => v + v, (element, other) => element > other ? -1 : element == other ? 0 : 1).toArray(), [d, c, b, a]);
	//orderByDescending
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending().toArray(), [d, c, b, a]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending(v => v + v).toArray(), [d, c, b, a]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending(v => v + v, (element, other) => element > other ? -1 : element == other ? 0 : 1).toArray(), [a, b, c, d]);
	//join
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().join([2, 3, 4, 5], (outerElement, innerElement) => outerElement * innerElement).toArray(), [4, 9, 16]);
	assert.deepStrictEqual([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}].asEnumerable().join([2, 3, 4, 5], (outerElement, innerElement) => outerElement.value * innerElement, v => v.key).toArray(), [6, 12, 20]);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().join([{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['e a', 'f b']);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().join([{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerElement) => outerElement.firstName + ' ' + innerElement.lastName, outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b', 'e c']);
	//groupBy
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy().select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 1],
		[4]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3).select(grouping => grouping.toArray()).toArray(), [
		[3, 3, 3],
		[2],
		[1, 4, 1]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3, v => v * v).select(grouping => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3, v => v * v, (key, grouping) => grouping.toArray()).toArray(), [
		[9, 9, 9],
		[4],
		[1, 16, 1]
	]);
	assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].asEnumerable().groupBy(v => v % 3, v => v * v, (key, grouping) => grouping.toArray(), (element, other) => element % 2 === other % 2).toArray(), [
		[9, 4, 9, 9],
		[1, 16, 1]
	]);
	//selectMany
	assert.deepStrictEqual([
		[a, b, c],
		[d],
		[e, f]
	].asEnumerable().selectMany().toArray(), [a, b, c, d, e, f]);
	assert.deepStrictEqual([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}].asEnumerable().selectMany(v => v.values).toArray(), [a, e, b, c, d, f]);
	assert.deepStrictEqual([{
		key: 'vowel',
		values: [a, e]
	}, {
		key: 'other',
		values: [b, c, d, f]
	}].asEnumerable().selectMany(v => v.values, v => v + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
	//groupJoin
	assert.deepStrictEqual([1, 2, 3, 4].asEnumerable().groupJoin([2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray()).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual([{
		key: 1,
		value: 2
	}, {
		key: 2,
		value: 3
	}, {
		key: 3,
		value: 4
	}, {
		key: 4,
		value: 5
	}].asEnumerable().groupJoin([2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray(), v => v.key).toArray(), [
		[],
		[2],
		[3],
		[4, 4]
	]);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().groupJoin([{
		id: 2,
		lastName: a
	}, {
		id: 3,
		lastName: b
	}, {
		id: 3,
		lastName: '!'
	}, {
		id: 4,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.id).toArray(), ['d ', 'e a', 'f b !']);
	assert.deepStrictEqual([{
		id: 1,
		firstName: d
	}, {
		id: 2,
		firstName: e
	}, {
		id: 3,
		firstName: f
	}].asEnumerable().groupJoin([{
		code: 100,
		lastName: a
	}, {
		code: 101,
		lastName: b
	}, {
		code: 101,
		lastName: '!'
	}, {
		code: 102,
		lastName: c
	}], (outerElement, innerGrouping) => outerElement.firstName + ' ' + innerGrouping.select(v => v.lastName).join(' '), outerElement => outerElement.id, innerElement => innerElement.code, (element, other) => element === other - 100).toArray(), ['d b !', 'e c', 'f ']);


	console.log('test successful!');
};