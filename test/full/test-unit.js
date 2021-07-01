const assert = require('assertrue');

module.exports = function(Enumerable) {
	const a = 'a',
		b = 'b',
		c = 'c',
		d = 'd',
		e = 'e',
		f = 'f',
		u = undefined;
	const oba = {
			key: a,
			value: a
		},
		obb = {
			key: b,
			value: b
		},
		obc = {
			key: c,
			value: c
		},
		obd = {
			key: d,
			value: d
		},
		obe = {
			key: e,
			value: e
		},
		obf = {
			key: f,
			value: f
		},
		obu = {
			key: u,
			value: u
		};
	const ob1 = {
			id: 1,
			value: 1
		},
		ob2 = {
			id: 2,
			value: 2
		},
		ob3 = {
			id: 3,
			value: 3
		},
		ob4 = {
			id: 4,
			value: 4
		},
		ob5 = {
			id: 5,
			value: 5
		},
		ob6 = {
			id: 6,
			value: 6
		};
    const nodea = { key: a, value: a };
    const nodeb = { key: b, value: b, parent: a };
    const nodec = { key: c, value: c, parent: b };
    const noded = { key: d, value: d, parent: b };
    const nodee = { key: e, value: e, parent: a };
    const nodef = { key: f, value: f };
    const nodes = [ nodea, nodeb, nodec, noded, nodee, nodef ];
    const tree = [
        {
            key: a,
            value: nodea,
            children: [
                {
                    key: b,
                    value: nodeb,
                    parent: a,
                    children: [
                        {
                            key: c,
                            value: nodec,
                            parent: b
                        },
                        {
                            key: d,
                            value: noded,
                            parent: b
                        }
                    ]
                },
                {
                    key: e,
                    value: nodee,
                    parent: a
                }
            ]
        },
        {
            key: f,
            value: nodef
        }
    ];
    const treeNoKey = [
        {
            value: nodea,
            children: [
                {
                    value: nodeb,
                    children: [
                        {
                            value: nodec,
                        },
                        {
                            value: noded,
                        }
                    ]
                },
                {
                    value: nodee,
                }
            ]
        },
        {
            value: nodef
        }
    ];
	const OutOfRangeException = Enumerable.exceptions.OutOfRangeException;
	const NoSuchElementsException = Enumerable.exceptions.NoSuchElementsException;
	const TooManyElementsException = Enumerable.exceptions.TooManyElementsException;
	const KeysForMultiElementsException = Enumerable.exceptions.KeysForMultiElementsException;

	//Enumerable static methods
	assert.deepStrictEqual(Enumerable.empty().toArray(), []);
	assert.deepStrictEqual(Enumerable.repeat(1, 4).toArray(), [1, 1, 1, 1]);
	assert.deepStrictEqual(Enumerable.range(1, 4).toArray(), [1, 2, 3, 4]);
    assert.deepStrictEqual(Enumerable.range(2, 4).toArray(), Enumerable.between(2, 5).toArray());
    assert.deepStrictEqual(Enumerable.generate(i => i * 2, 4).toArray(), [0, 2, 4, 6]);

	//Enumerable static methods for extends IEnumerable
	//select
	assert.deepStrictEqual(Enumerable.select([a, b, c]).toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.select([a, b, c], v => v + v).toArray(), ['aa', 'bb', 'cc']);
	assert.deepStrictEqual(Enumerable.select([oba, obb, obc], 'key').toArray(), [a, b, c]);
	//where
	assert.deepStrictEqual(Enumerable.where([0, 1, 2, 3, 4, 5]).toArray(), [0, 1, 2, 3, 4, 5]);
	assert.deepStrictEqual(Enumerable.where([0, 1, 2, 3, 4, 5], v => v % 2 === 0).toArray(), [0, 2, 4]);
	assert.deepStrictEqual(Enumerable.where([oba, obb, obc, obu], 'key').select('value').toArray(), [a, b, c]);
	assert.deepStrictEqual(Enumerable.where([oba, obb, obc, obu], Enumerable.predicates.not('key')).select('value').toArray(), [u]);
	//any
	assert.isStrictTrue(Enumerable.any([a, b, c], v => v === b));
	assert.isStrictTrue(Enumerable.any([oba, obb, obc, obu], Enumerable.predicates.not(Enumerable.predicates.selector('key'))));
	//all
	assert.isStrictFalse(Enumerable.all([a, b, c], v => v === b));
	assert.isStrictFalse(Enumerable.all([oba, obb, obc, obu], 'key'));
	//sum
	assert.strictEqual(Enumerable.sum([1, 2, 3]), 6);
	assert.strictEqual(Enumerable.sum([1, 2, 3, 4], v => v * v), 30);
	assert.isStrictNaN(Enumerable.sum([a, b, c]), NaN);
	assert.strictEqual(Enumerable.sum([ob1, ob2, ob3, ob4], 'value'), 10);
	//average
	assert.strictEqual(Enumerable.average([1, 2, 3]), 2);
	assert.strictEqual(Enumerable.average([1, 2, 3, 4], v => v * v), 7.5);
	assert.isStrictNaN(Enumerable.average([a, b, c]), NaN);
	assert.strictEqual(Enumerable.average([ob1, ob2, ob3, ob4], 'value'), 2.5);
	//aggregate
	assert.strictEqual(Enumerable.aggregate([4, 3, 2, 1], 5, (seed, v) => seed + v), 15);
	assert.strictEqual(Enumerable.aggregate([4, 3, 2, 1], 5, (seed, v) => seed + v, r => r * 2), 30);
	//max
	assert.strictEqual(Enumerable.maxOrDefault([], 1), 1);

	assert.strictEqual(Enumerable.maxOrDefault([5], 1), 5);

	assert.strictEqual(Enumerable.maxOrDefault([5, 7], 1), 7);

	assert.strictEqual(Enumerable.select([5, 7], v => v + 2).maxOrDefault(1), 9);

	assert.strictEqual(Enumerable.max([5, 7, 3, 1, 9]), 9);
	assert.strictEqual(Enumerable.max([b, c, d, a], v => '-' + v), d);
	assert.strictEqual(Enumerable.max([b, c, d, a], v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), a);
	assert.strictEqual(Enumerable.max([obb, obc, obd, oba], 'value'), obd);
	assert.strictEqual(Enumerable.max([obb, obc, obd, oba], '', 'key').value, d);
	//min
	assert.strictEqual(Enumerable.min([5, 7, 3, 1, 9]), 1);
	assert.strictEqual(Enumerable.min([b, c, d, a], v => '-' + v), a);
	assert.strictEqual(Enumerable.min([b, c, d, a], v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), d);
	assert.strictEqual(Enumerable.min([obb, obc, obd, oba], 'value'), oba);
	assert.strictEqual(Enumerable.min([obb, obc, obd, oba], '', 'key').value, a);
	//concat
	assert.deepStrictEqual(Enumerable.concat([a, b], [d, e]).toArray(), [a, b, d, e]);
	//contains
	assert.isStrictTrue(Enumerable.contains([a, b, c, d], c));
	assert.isStrictFalse(Enumerable.contains([1, 2, 3, 4, 5], 6));
	assert.isStrictTrue(Enumerable.contains([1, 2, 3, 4, 5], 6, (element, value) => element === value % 4));
	assert.isStrictTrue(Enumerable.contains([ob1, ob2, ob3, ob4], {
		id: 1
	}, 'id'));
	//count
	assert.strictEqual(Enumerable.count([1, 2, 3, 4, 5]), 5);
	assert.strictEqual(Enumerable.count([1, 2, 3, 4, 5], element => element % 2 === 0), 2);
	assert.strictEqual(Enumerable.count([ob1, ob2, ob3, ob4, obu], 'value'), 4);
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
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], String).toArray(), [a, b, c, '']);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Number).toArray(), [1, 0.2, 1E2]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Boolean).toArray(), [true]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Array).toArray(), [
		[1, 2]
	]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], RegExp).toArray(), [/\w/ig]);
	assert.deepStrictEqual(Enumerable.ofType([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''], Object).toArray(), [{}]);
	//reverse
	assert.deepStrictEqual(Enumerable.reverse([a, b, c]).toArray(), [c, b, a]);
	//sequenceEqual
	assert.isStrictFalse(Enumerable.sequenceEqual([a, b, c], [a, b, d]));
	assert.isStrictTrue(Enumerable.sequenceEqual([0, 1, 2], [3, 4, 5], (element, value) => element % 3 === value % 3));
	//skip
	assert.deepStrictEqual(Enumerable.skip([a, b, c, d, e], 2).toArray(), [c, d, e]);
	//skipWhile
	assert.deepStrictEqual(Enumerable.skipWhile([1, 2, 3, 4, 5], v => v < 3).toArray(), [3, 4, 5]);
    //skipSame
    assert.deepStrictEqual(Enumerable.skipSame([1, 1, 1, 4, 5], v => v < 3).toArray(), [4, 5]);
    //skipProportion
	assert.deepStrictEqual(Enumerable.skipProportion([1, 1, 1, 4, 5], 0.5).toArray(), [1, 4, 5]);
	//take
	assert.deepStrictEqual(Enumerable.take([a, b, c, d, e], 3).toArray(), [a, b, c]);
	//takeWhile
	assert.deepStrictEqual(Enumerable.takeWhile([1, 2, 3, 4, 5], v => v <= 3).toArray(), [1, 2, 3]);
    //takeWhile
    assert.deepStrictEqual(Enumerable.takeSame([1, 1, 1, 4, 5], v => v <= 3).toArray(), [1, 1, 1]);
	//takeProportion
	assert.deepStrictEqual(Enumerable.takeProportion([1, 1, 1, 4, 5], 0.5).toArray(), [1, 1]);
	//proportion
	assert.strictEqual(Enumerable.proportion([1, 2, 3, 4, 5], v => v <= 3), 0.6);
	//zip
	assert.deepStrictEqual(Enumerable.zip([1, 2, 3], [a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
	//orderBy
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b]).toArray(), [a, b, c, d]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b], v => v + v).toArray(), [a, b, c, d]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, c, b], v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderBy([d, a, e, c, f, b], '', [c, b, d]).toArray(), [a, e, f, c, b, d]);
	//orderByDescending
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b]).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b], v => v + v).toArray(), [d, c, b, a]);
	assert.deepStrictEqual(Enumerable.orderByDescending([d, a, c, b], v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [a, b, c, d]);
	//leftJoin
    assert.deepStrictEqual(Enumerable.leftJoin([1, 2, 3, 4], [2, 3, 4, 5], (outerElement, innerElement) => outerElement * (innerElement || 0)).toArray(), [0, 4, 9, 16]);
    //rightJoin
    assert.deepStrictEqual(Enumerable.rightJoin([1, 2, 3, 4], [2, 3, 4, 5], (outerElement, innerElement) => (outerElement || 0) * innerElement).toArray(), [4, 9, 16, 0]);
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
	}], v => v.values, (v, value) => value + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
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
    //chunk
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d, e], 3, 1).count(), 3);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d], 2).select(c => c.toArray()).toArray(), [ [a, b], [c, d] ]);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d, e, f], 3, 2).skip(1).select(c => c.toArray()).toArray(), [ [c, d, e], [f] ]);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d], 2).select(c => c.index).toArray(), [ 0, 1 ]);
    assert.deepStrictEqual(Enumerable.chunk([a, b, c, d, e, f], 3, 2).skip(1).select(c => c.index).toArray(), [ 1, 2 ]);
	//split
    assert.deepStrictEqual(Enumerable.split([a, b, c, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.split([b, a, c, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.split([a, b, c, b, d, e, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual(Enumerable.split([b, a, b, b, c, b, d, e, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [], [c], [d, e], [] ]);
    assert.deepStrictEqual(Enumerable.split('babbcbdeb', /b/).select(chunk => chunk.join('')).toArray(), [ '', 'a', '', 'c', 'de', '' ]);
    assert.deepStrictEqual(Enumerable.nearSplit('babbcbdeb', /b/).select(chunk => chunk.join('')).toArray(), [ '', 'a', 'c', 'de', '' ]);
    //nearSplit
    assert.deepStrictEqual(Enumerable.nearSplit([a, b, c, b, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.nearSplit([b, b, a, c, b, d, e], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual(Enumerable.nearSplit([a, b, c, b, d, e, b, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual(Enumerable.nearSplit([b, a, b, b, b, c, b, d, e, b], element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [c], [d, e], [] ]);
    //product
    assert.strictEqual(Enumerable.product([1, 2, 3, 4, 5]), 120);
    assert.strictEqual(Enumerable.range(1, 5).product(), 120);
    //rightPad
    assert.deepStrictEqual(Enumerable.rightPad([a, b, c], 5, d).toArray(), [a, b, c, d, d]);
    //leftPad
    assert.deepStrictEqual(Enumerable.leftPad([a, b, c], 5, d).toArray(), [d, d, a, b, c]);
    //wipe
    assert.deepStrictEqual(Enumerable.wipe([a, b, c, a, b, c, a, b, c], e => e === a).toArray(), [b, c, b, c, b, c]);
    assert.deepStrictEqual(Enumerable.wipe([a, b, c, a, b, c, a, b, c], e => e === a, 2).toArray(), [b, c, b, c, a, b, c]);
    //nearBy
	assert.deepStrictEqual(Enumerable.nearBy([a, a, b, b, b, a, c, c]).select(g => g.toArray()).toArray(), [[a, a], [b, b, b], [a], [c, c]]);
	//combine
    assert.deepStrictEqual(Enumerable.combine(nodes).select(v => v.toObject()).toArray(), tree);
    assert.deepStrictEqual(Enumerable.combine(nodes, node => node.parent, node => node.key).select(v => v.toObject()).toArray(), tree);
	//separate
	assert.deepStrictEqual(Enumerable.separate([[[a, b], c, d], [e, f], a]).toArray(), [a, b, c, d, e, f, a]);
    assert.deepStrictEqual(Enumerable.separate(tree).toArray(), nodes);
	assert.deepStrictEqual(Enumerable.separate(tree, v => v.children).toArray(), nodes);
	//isSub
    assert.strictEqual(Enumerable.isSub([1, 2, 3], [5, 4, 3, 2, 1]), true);
    assert.strictEqual(Enumerable.isSub([1, 2, 3], [5, 4, 3]), false);
    //isSuper
    assert.strictEqual(Enumerable.isSuper([5, 4, 3, 2, 1], [1, 2, 3]), true);
    assert.strictEqual(Enumerable.isSuper([5, 4, 3], [1, 2, 3]), false);
    //symmetric
	assert.deepStrictEqual(Enumerable.symmetric([1, 2, 3], [3, 4, 5]).toArray(), [1, 2, 4, 5]);
	//indices
    assert.deepStrictEqual(Enumerable.indices([a, b, c, d, e, f], [0, 2, 4]).toArray(), [a, c, e]);
    assert.deepStrictEqual(Enumerable.indices([a, b, c, d, e, f], [3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
    //permutation
	assert.deepStrictEqual(Enumerable.permutation([a, b, c], 2).select(per => per.toArray()).toArray(), [ [a, b], [a, c], [b, a], [b, c], [c, a], [c, b] ]);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c, d, e], 3).count(), 60);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c], 2, true).select(per => per.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, a], [b, b], [b, c], [c, a], [c, b], [c, c] ]);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c, d, e], 3, true).count(), 125);
    assert.deepStrictEqual(Enumerable.permutation([a, b, c], 4, true).count(), 81);
    //combination
    assert.deepStrictEqual(Enumerable.combination([a, b, c], 2).select(com => com.toArray()).toArray(), [ [a, b], [a, c], [b, c] ]);
    assert.deepStrictEqual(Enumerable.combination([a, b, c, d, e], 3).count(), 10);
    assert.deepStrictEqual(Enumerable.combination([a, b, c], 2, true).select(com => com.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, b], [b, c], [c, c] ]);
    assert.deepStrictEqual(Enumerable.combination([a, b, c, d, e], 3, true).count(), 35);
    assert.deepStrictEqual(Enumerable.combination([a, b, c], 4, true).count(), 15);

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
	assert.strictEqual([b, c, d, a].asEnumerable().max(v => '-' + v), d);
	assert.strictEqual([b, c, d, a].asEnumerable().max(v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), a);
	//min
	assert.strictEqual([5, 7, 3, 1, 9].asEnumerable().min(), 1);
	assert.strictEqual([b, c, d, a].asEnumerable().min(v => '-' + v), a);
	assert.strictEqual([b, c, d, a].asEnumerable().min(v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), d);
	//concat
	assert.deepStrictEqual([a, b].asEnumerable().concat([d, e]).toArray(), [a, b, d, e]);
	//contains
	assert.isStrictTrue([a, b, c, d].asEnumerable().contains(c));
	assert.isStrictFalse([1, 2, 3, 4, 5].asEnumerable().contains(6));
	assert.isStrictTrue([1, 2, 3, 4, 5].asEnumerable().contains(6, (element, value) => element === value % 4));
	//count
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().count(), 5);
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().count(element => element % 2 === 0), 2);
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
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(String).toArray(), [a, b, c, '']);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Number).toArray(), [1, 0.2, 1E2]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Boolean).toArray(), [true]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Array).toArray(), [
		[1, 2]
	]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(RegExp).toArray(), [/\w/ig]);
	assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].asEnumerable().ofType(Object).toArray(), [{}]);
	//reverse
	assert.deepStrictEqual([a, b, c].asEnumerable().reverse().toArray(), [c, b, a]);
	//sequenceEqual
	assert.isStrictFalse([a, b, c].asEnumerable().sequenceEqual([a, b, d]));
	assert.isStrictTrue([0, 1, 2].asEnumerable().sequenceEqual([3, 4, 5], (element, value) => element % 3 === value % 3));
	//skip
	assert.deepStrictEqual([a, b, c, d, e].asEnumerable().skip(2).toArray(), [c, d, e]);
	//skipWhile
	assert.deepStrictEqual([1, 2, 3, 4, 5].asEnumerable().skipWhile(v => v < 3).toArray(), [3, 4, 5]);
    //skipSame
	assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().skipSame().toArray(), [4, 5]);
	//skipProportion
	assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().skipProportion(0.5).toArray(), [1, 4, 5]);
	//take
	assert.deepStrictEqual([a, b, c, d, e].asEnumerable().take(3).toArray(), [a, b, c]);
	//takeWhile
	assert.deepStrictEqual([1, 2, 3, 4, 5].asEnumerable().takeWhile(v => v <= 3).toArray(), [1, 2, 3])
    //takeSame
    assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().takeSame().toArray(), [1, 1, 1]);
	//takeProportion
	assert.deepStrictEqual([1, 1, 1, 4, 5].asEnumerable().takeProportion(0.5).toArray(), [1, 1]);
	//proportion
	assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().proportion(v => v <= 3), 0.6);
	//zip
	assert.deepStrictEqual([1, 2, 3].asEnumerable().zip([a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
	//orderBy
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy().toArray(), [a, b, c, d]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy(v => v + v).toArray(), [a, b, c, d]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderBy(v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [d, c, b, a]);
	//orderByDescending
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending().toArray(), [d, c, b, a]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending(v => v + v).toArray(), [d, c, b, a]);
	assert.deepStrictEqual([d, a, c, b].asEnumerable().orderByDescending(v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [a, b, c, d]);
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
	}].asEnumerable().selectMany(v => v.values, (v, value) => value + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
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
    //chunk
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().chunk(3, 1).count(), 3);
    assert.deepStrictEqual([a, b, c, d].asEnumerable().chunk(2).select(c => c.toArray()).toArray(), [ [a, b], [c, d] ]);
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().chunk(3, 2).skip(1).select(c => c.toArray()).toArray(), [ [c, d, e], [f] ]);
    assert.deepStrictEqual([a, b, c, d].asEnumerable().chunk(2).select(c => c.index).toArray(), [ 0, 1 ]);
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().chunk(3, 2).skip(1).select(c => c.index).toArray(), [ 1, 2 ]);
    //split
    assert.deepStrictEqual([a, b, c, b, d, e].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual([b, a, c, b, d, e].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual([a, b, c, b, d, e, b].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual([b, a, b, b, c, b, d, e, b].asEnumerable().split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [], [c], [d, e], [] ]);
    //nearSplit
    assert.deepStrictEqual([a, b, c, b, b, d, e].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
    assert.deepStrictEqual([b, b, a, c, b, d, e].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
    assert.deepStrictEqual([a, b, c, b, d, e, b, b].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
    assert.deepStrictEqual([b, a, b, b, b, c, b, d, e, b].asEnumerable().nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [c], [d, e], [] ]);
    //product
    assert.strictEqual([1, 2, 3, 4, 5].asEnumerable().product(), 120);
    //rightPad
    assert.deepStrictEqual([a, b, c].asEnumerable().rightPad(5, d).toArray(), [a, b, c, d, d]);
    //leftPad
    assert.deepStrictEqual([a, b, c].asEnumerable().leftPad(5, d).toArray(), [d, d, a, b, c]);
    //wipe
    assert.deepStrictEqual([a, b, c, a, b, c, a, b, c].asEnumerable().wipe(e => e === a).toArray(), [b, c, b, c, b, c]);
    assert.deepStrictEqual([a, b, c, a, b, c, a, b, c].asEnumerable().wipe(e => e === a, 2).toArray(), [b, c, b, c, a, b, c]);
    //nearBy
    assert.deepStrictEqual([a, a, b, b, b, a, c, c].asEnumerable().nearBy().select(g => g.toArray()).toArray(), [[a, a], [b, b, b], [a], [c, c]]);
    //combine
    assert.deepStrictEqual(nodes.asEnumerable().combine().select(v => v.toObject()).toArray(), tree);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).select(v => v.toObject()).toArray(), tree);
    //separate
    assert.deepStrictEqual([[[a, b], c, d], [e, f], a].asEnumerable().separate().toArray(), [a, b, c, d, e, f, a]);
    assert.deepStrictEqual(tree.asEnumerable().separate().toArray(), nodes);
    assert.deepStrictEqual(tree.asEnumerable().separate(v => v.children).toArray(), nodes);
    //isSub
    assert.strictEqual([1, 2, 3].asEnumerable().isSub([5, 4, 3, 2, 1]), true);
    assert.strictEqual([1, 2, 3].asEnumerable().isSub([5, 4, 3]), false);
    //isSuper
    assert.strictEqual([5, 4, 3, 2, 1].asEnumerable().isSuper([1, 2, 3]), true);
    assert.strictEqual([5, 4, 3].asEnumerable().isSuper([1, 2, 3]), false);
    //symmetric
    assert.deepStrictEqual([1, 2, 3].asEnumerable().symmetric([3, 4, 5]).toArray(), [1, 2, 4, 5]);
    //indices
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([0, 2, 4]).toArray(), [a, c, e]);
    assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
    //permutation
    assert.deepStrictEqual([a, b, c].asEnumerable().permutation(2).select(per => per.toArray()).toArray(), [ [a, b], [a, c], [b, a], [b, c], [c, a], [c, b] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().permutation(3).count(), 60);
    assert.deepStrictEqual([a, b, c].asEnumerable().permutation(2, true).select(per => per.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, a], [b, b], [b, c], [c, a], [c, b], [c, c] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().permutation(3, true).count(), 125);
    assert.deepStrictEqual([a, b, c].asEnumerable().permutation(4, true).count(), 81);
    //combination
    assert.deepStrictEqual([a, b, c].asEnumerable().combination(2).select(com => com.toArray()).toArray(), [ [a, b], [a, c], [b, c] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().combination(3).count(), 10);
    assert.deepStrictEqual([a, b, c].asEnumerable().combination(2, true).select(com => com.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, b], [b, c], [c, c] ]);
    assert.deepStrictEqual([a, b, c, d, e].asEnumerable().combination(3, true).count(), 35);
    assert.deepStrictEqual([a, b, c].asEnumerable().combination(4, true).count(), 15);

	//for Syntax
	assert.deepStrictEqual([...Enumerable.asEnumerable([1, 2, 3, 4, 5, 6]).where(v => v % 2 === 0)], [2, 4, 6]);

	//ITree
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).degree(), 2);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depth(), 3);

    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).degree(node => node.value === b), 1);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depth(node => node.value !== b), 2);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).breadthTraverse().toArray(), [ nodea, nodeb, nodee, nodec, noded ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depthTraverse().toArray(),   [ nodea, nodeb, nodec, noded, nodee ]);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).breadthSearch(node => node.value === e), nodee);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depthSearch(node => node.value === c),   nodec);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).breadthSubTree(node => node.value === e).select(node => node.value).toArray(), [ nodee ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).depthSubTree(node => node.value === c).select(node => node.value).toArray(),   [ nodec ]);

    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isBinary(), true);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isFullBinary(), true);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isCompleteBinary(), true);
    assert.strictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).isPerfectBinary(), false);

    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).asBinary().preOrder().toArray(),  [ nodea, nodeb, nodec, noded, nodee ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).asBinary().inOrder().toArray(),   [ nodec, nodeb, noded, nodea, nodee ]);
    assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).asBinary().postOrder().toArray(), [ nodec, noded, nodeb, nodee, nodea ]);

	(() => {
        let theTree = nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0);
        let bTree = theTree.getChild(0);
        let eTree = theTree.getChild(1);
        let cTree = bTree.getChild(0);
        let dTree = bTree.getChild(1);

        assert.strictEqual(theTree.isAncestorOf(eTree), true);
        assert.strictEqual(eTree.isDescendantOf(theTree), true);
        assert.strictEqual(dTree.isAncestorOf(eTree), false);
        assert.strictEqual(eTree.isDescendantOf(dTree), false);

        assert.deepStrictEqual(theTree.pathTo(cTree).toArray(), [ nodea, nodeb, nodec ]);

        assert.strictEqual(theTree.lowestAncestor(cTree, dTree), nodeb);
        assert.strictEqual(theTree.lowestAncestor(nodec, noded), nodeb);

        assert.strictEqual(theTree.getParentNode(nodec).value, bTree.value);

        assert.deepStrictEqual(theTree.prevAll(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.prev(noded), nodec);
        assert.deepStrictEqual(theTree.nextAll(nodec).toArray(), [ noded ]);
        assert.deepStrictEqual(theTree.next(nodec), noded);
        assert.deepStrictEqual(theTree.siblings(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.siblings(nodec).toArray(), [ noded ]);

        assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).toObject(), tree[0]);
        assert.deepStrictEqual(nodes.asEnumerable().combine(node => node.parent, node => node.key).elementAt(0).toValue(), tree[0]);
	})();

    (() => {
        let theTree = tree[0].asEnumerable(node => node.children);
        let bTree = theTree.getChild(0);
        let eTree = theTree.getChild(1);
        let cTree = bTree.getChild(0);
        let dTree = bTree.getChild(1);

        assert.strictEqual(theTree.isAncestorOf(eTree), true);
        assert.strictEqual(eTree.isDescendantOf(theTree), true);
        assert.strictEqual(dTree.isAncestorOf(eTree), false);
        assert.strictEqual(eTree.isDescendantOf(dTree), false);

        assert.deepStrictEqual(theTree.pathTo(cTree).toArray(), [ nodea, nodeb, nodec ]);

        assert.strictEqual(theTree.lowestAncestor(cTree, dTree), nodeb);
        assert.strictEqual(theTree.lowestAncestor(nodec, noded), nodeb);

        assert.strictEqual(theTree.getParentNode(nodec).value, bTree.value);

        assert.deepStrictEqual(theTree.prevAll(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.prev(noded), nodec);
        assert.deepStrictEqual(theTree.nextAll(nodec).toArray(), [ noded ]);
        assert.deepStrictEqual(theTree.next(nodec), noded);
        assert.deepStrictEqual(theTree.siblings(noded).toArray(), [ nodec ]);
        assert.deepStrictEqual(theTree.siblings(nodec).toArray(), [ noded ]);

        assert.deepStrictEqual(tree[0].asEnumerable(node => node.children).toObject(), treeNoKey[0]);
        assert.deepStrictEqual(tree[0].asEnumerable(node => node.children).toValue(), treeNoKey[0]);
    })();

    assert.deepStrictEqual(Enumerable.toPreOrder([ a, b, c, d, e, f ]).preOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual(Enumerable.toInOrder([ a, b, c, d, e, f ]).inOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual(Enumerable.toPostOrder([ a, b, c, d, e, f ]).postOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual([ a, b, c, d, e, f ].asEnumerable().toPreOrder().preOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual([ a, b, c, d, e, f ].asEnumerable().toInOrder().inOrder().toArray(), [ a, b, c, d, e, f ]);
    assert.deepStrictEqual([ a, b, c, d, e, f ].asEnumerable().toPostOrder().postOrder().toArray(), [ a, b, c, d, e, f ]);

    //builtins array function
	(() => {
		//splice
		let array_splice = [1, 2, 4, 3, 5, 6].asEnumerable();
		assert.deepStrictEqual(array_splice.splice(2, 2, 3, 4).toArray(), [4, 3]);
		assert.deepStrictEqual(array_splice.toArray(), [1, 2, 3, 4, 5, 6]);
		//slice
		assert.deepStrictEqual([1, 2, 3, 4, 5, 6].asEnumerable().slice(2, 5).toArray(), [3, 4, 5]);
		//copyWithin
		let array_copyWithin = ["alpha", "beta", "copy", "delta"].asEnumerable();
		assert.deepStrictEqual(array_copyWithin.copyWithin(1, 2, 3).toArray(), ["alpha", "copy", "copy", "delta"]);
		assert.deepStrictEqual(array_copyWithin.toArray(), ["alpha", "copy", "copy", "delta"]);
		array_copyWithin = ['alpha', 'bravo', 'charlie', 'delta'].asEnumerable();
		assert.deepStrictEqual(array_copyWithin.copyWithin(2, 0).toArray(), ["alpha", "bravo", "alpha", "bravo"]);
		assert.deepStrictEqual(array_copyWithin.toArray(), ["alpha", "bravo", "alpha", "bravo"]);
		//every
		assert.strictEqual([12, 5, 8, 130, 44].every(element => element >= 10), false);
		assert.strictEqual([12, 54, 18, 130, 44].every(element => element >= 10), true);
		//fill
		let array_fill = [1, 2, 3].asEnumerable();
		assert.deepStrictEqual(array_fill.fill(4).toArray(), [4, 4, 4]);
		assert.deepStrictEqual(array_fill.toArray(), [4, 4, 4]);
		array_fill = [1, 2, 3].asEnumerable();
		assert.deepStrictEqual(array_fill.fill(4, 1).toArray(), [1, 4, 4]);
		assert.deepStrictEqual(array_fill.toArray(), [1, 4, 4]);
		array_fill = [1, 2, 3].asEnumerable();
		assert.deepStrictEqual(array_fill.fill(4, 1, 2).toArray(), [1, 4, 3]);
		assert.deepStrictEqual(array_fill.toArray(), [1, 4, 3]);
		//filter
		assert.deepStrictEqual([12, 5, 8, 130, 44].asEnumerable().filter(value => value >= 10).toArray(), [12, 130, 44]);
		//find
		assert.strictEqual([12, 5, 8, 130, 44].asEnumerable().find(element => element >= 15), 130);
		//findIndex
		assert.strictEqual([12, 5, 8, 130, 44].asEnumerable().findIndex(element => element >= 15), 3);
		//forEach
		//ignore
		//indices
        assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([0, 2, 4]).toArray(), [a, c, e]);
        assert.deepStrictEqual([a, b, c, d, e, f].asEnumerable().indices([3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
		//includes
		assert.strictEqual([1, 2, 3].asEnumerable().includes(2), true);
		assert.strictEqual([1, 2, 3].asEnumerable().includes(4), false);
		//indexOf
		assert.strictEqual([2, 9, 9].asEnumerable().indexOf(2), 0);
		assert.strictEqual([2, 9, 9].asEnumerable().indexOf(7), -1);
		//lastIndexOf
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2), 3);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(7), -1);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, 3), 3);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, 2), 0);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, -2), 0);
		assert.strictEqual([2, 5, 9, 2].asEnumerable().lastIndexOf(2, -1), 3);
		//findLast
		assert.strictEqual([2, 5, 9, 2].asEnumerable().findLast(element => element % 2 === 1), 9);
		//map
		assert.deepStrictEqual([1, 5, 10, 15].asEnumerable().map(x => x * 2).toArray(), [2, 10, 20, 30]);
		assert.deepStrictEqual([1, 4, 9].asEnumerable().map(x => Math.sqrt(x)).toArray(), [1, 2, 3]);
		//reduce
		assert.strictEqual([0, 1, 2, 3].asEnumerable().reduce((acc, val) => acc + val, 0), 6);
		let array_reduce1 = [
			[0, 1],
			[2, 3],
			[4, 5]
		].asEnumerable();
		let array_reduce2 = [0, [1, [2, [3, [4, [5, [6]]]]]]].asEnumerable();
		let flatten_reduce = (arr) => {
			return arr.reduce(
				(acc, val) => {
					return acc.concat(Array.isArray(val) ? flatten_reduce(val) : val)
				}, []
			);
		};
		assert.deepStrictEqual(flatten_reduce(array_reduce1), [0, 1, 2, 3, 4, 5]);
		assert.deepStrictEqual(flatten_reduce(array_reduce2), [0, 1, 2, 3, 4, 5, 6]);
		//reduceRight
		assert.deepStrictEqual([
			[0, 1],
			[2, 3],
			[4, 5]
		].asEnumerable().reduceRight((a, b) => a.concat(b), []), [4, 5, 2, 3, 0, 1]);
		//some
		assert.strictEqual([2, 5, 8, 1, 4].asEnumerable().some(element => element >= 10), false);
		assert.strictEqual([12, 5, 8, 1, 4].asEnumerable().some(element => element >= 10), true);
		//sort
		let array_sort = ['cherries', 'apples', 'bananas'].asEnumerable();
		assert.deepStrictEqual(array_sort.sort().toArray(), ['apples', 'bananas', 'cherries']);
		assert.deepStrictEqual(array_sort.toArray(), ['apples', 'bananas', 'cherries']);
		//pop
		let array_pop = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_pop.pop(), 3);
		assert.deepStrictEqual(array_pop.toArray(), [1, 2]);
		//push
		let array_push = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_push.push(4), 4);
		assert.deepStrictEqual(array_push.toArray(), [1, 2, 3, 4]);
		//shift
		let array_shift = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_shift.shift(), 1);
		assert.deepStrictEqual(array_shift.toArray(), [2, 3]);
		//unshift
		let array_unshift = [1, 2, 3].asEnumerable();
		assert.strictEqual(array_unshift.unshift(4), 4);
		assert.deepStrictEqual(array_unshift.toArray(), [4, 1, 2, 3]);
	})();

	let testExtends = lazy => {

		Enumerable.config.extends.array = true;
		//Enumerable.config.extends.object = true;
        //Enumerable.config.extends.string = true;
        Enumerable.config.extends.lazy = lazy;

        //select
        assert.deepStrictEqual([a, b, c].select().toArray(), [a, b, c]);
        assert.deepStrictEqual([a, b, c].select(v => v + v).toArray(), ['aa', 'bb', 'cc']);
        //where
        assert.deepStrictEqual([0, 1, 2, 3, 4, 5].where().toArray(), [0, 1, 2, 3, 4, 5]);
        assert.deepStrictEqual([0, 1, 2, 3, 4, 5].where(v => v % 2 === 0).toArray(), [0, 2, 4]);
        //any
        assert.isStrictTrue([a, b, c].any(v => v === b));
        //all
        assert.isStrictFalse([a, b, c].all(v => v === b));
        //sum
        assert.strictEqual([1, 2, 3].sum(), 6);
        assert.strictEqual([1, 2, 3, 4].sum(v => v * v), 30);
        assert.isStrictNaN([a, b, c].sum(), NaN);
        //average
        assert.strictEqual([1, 2, 3].average(), 2);
        assert.strictEqual([1, 2, 3, 4].average(v => v * v), 7.5);
        assert.isStrictNaN([a, b, c].average(), NaN);
        //aggregate
        assert.strictEqual([4, 3, 2, 1].aggregate(5, (seed, v) => seed + v), 15);
        assert.strictEqual([4, 3, 2, 1].aggregate(5, (seed, v) => seed + v, r => r * 2), 30);
        //max
        assert.strictEqual([5, 7, 3, 1, 9].max(), 9);
        assert.strictEqual([b, c, d, a].max(v => '-' + v), d);
        assert.strictEqual([b, c, d, a].max(v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), a);
        //min
        assert.strictEqual([5, 7, 3, 1, 9].min(), 1);
        assert.strictEqual([b, c, d, a].min(v => '-' + v), a);
        assert.strictEqual([b, c, d, a].min(v => '-' + v, (element, other) => element > other ? -1 : element === other ? 0 : 1), d);
        //concat
        assert.deepStrictEqual([a, b].concat([d, e]).toArray(), [a, b, d, e]);
        //contains
        assert.isStrictTrue([a, b, c, d].contains(c));
        assert.isStrictFalse([1, 2, 3, 4, 5].contains(6));
        assert.isStrictTrue([1, 2, 3, 4, 5].contains(6, (element, value) => element === value % 4));
        //count
        assert.strictEqual([1, 2, 3, 4, 5].count(), 5);
        assert.strictEqual([1, 2, 3, 4, 5].count(element => element % 2 === 0), 2);
        //defaultIfEmpty
        assert.deepStrictEqual([].defaultIfEmpty(a).toArray(), [a]);
        assert.deepStrictEqual([a, b].defaultIfEmpty(a).toArray(), [a, b]);
        //distinct
        assert.deepStrictEqual([a, b, c, c, b, b, c, a].distinct().toArray(), [a, b, c]);
        assert.deepStrictEqual([1, 2, 3, 3, 2, 2, 3, 1].distinct((element, value) => element % 2 === value % 2).toArray(), [1, 2]);
        //except
        assert.deepStrictEqual([a, b, c, d, e, c].except([d, b]).toArray(), [a, c, e]);
        assert.deepStrictEqual([1, 2, 3, 4, 5, 3, 6].except([2, 4], (element, value) => element % 3 === value % 3).toArray(), [3]); //in this equality comparer 3 is equal to 6, so number 6 was been ignored
        //union
        assert.deepStrictEqual([a, b, c].union([b, c, d, e]).toArray(), [a, b, c, d, e]);
        assert.deepStrictEqual([1, 2, 3, 4].union([5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [1, 2, 3]);
        //itersect
        assert.deepStrictEqual([a, b, c].intersect([b, c, d, e]).toArray(), [b, c]);
        assert.deepStrictEqual([1, 2, 3, 4].intersect([5, 3, 6], (element, value) => element % 3 === value % 3).toArray(), [2, 3]);
        //elementAt
        assert.strictEqual([a, b, c, d, e].elementAt(2), c);
        assert.throws(() => [a, b, c, d, e].elementAt(10), OutOfRangeException);
        assert.throws(() => [a, b, c, d, e].elementAt(-1), OutOfRangeException);
        //elementAtOrDefault
        assert.strictEqual([a, b, c, d, e].elementAtOrDefault(2, f), c);
        assert.strictEqual([a, b].elementAtOrDefault(2, f), f);
        //first
        assert.strictEqual([a, b, c].first(), a);
        assert.throws(() => Enumerable.first([]), NoSuchElementsException);
        //firstOrDefault
        assert.strictEqual([a, b, c].firstOrDefault(f), a);
        assert.strictEqual(Enumerable.firstOrDefault([], f), f);
        //last
        assert.strictEqual([a, b, c].last(), c);
        assert.throws(() => Enumerable.last([]), NoSuchElementsException);
        //lastOrDefault
        assert.strictEqual([a, b, c].lastOrDefault(f), c);
        assert.strictEqual(Enumerable.lastOrDefault([], f), f);
        //single
        assert.strictEqual([a].single(), a);
        assert.throws(() => [a, b, c].single(), TooManyElementsException);
        assert.throws(() => Enumerable.single([]), NoSuchElementsException);
        //singleOrDefault
        assert.throws(() => [a, b, c].singleOrDefault(f), TooManyElementsException);
        assert.strictEqual(Enumerable.singleOrDefault([], f), f);
        assert.strictEqual([a].singleOrDefault(f), a);
        //join
        assert.strictEqual([a, b, c].join('|'), 'a|b|c');
        //ofType
        assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].ofType(String).toArray(), [a, b, c, '']);
        assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].ofType(Number).toArray(), [1, 0.2, 1E2]);
        assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].ofType(Boolean).toArray(), [true]);
        assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].ofType(Array).toArray(), [
            [1, 2]
        ]);
        assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].ofType(RegExp).toArray(), [/\w/ig]);
        assert.deepStrictEqual([1, a, undefined, {}, undefined, /\w/ig, [1, 2], b, 0.2, () => {}, c, true, 1E2, ''].ofType(Object).toArray(), [{}]);
        //reverse
        assert.deepStrictEqual([a, b, c].reverse().toArray(), [c, b, a]);
        //sequenceEqual
        assert.isStrictFalse([a, b, c].sequenceEqual([a, b, d]));
        assert.isStrictTrue([0, 1, 2].sequenceEqual([3, 4, 5], (element, value) => element % 3 === value % 3));
        //skip
        assert.deepStrictEqual([a, b, c, d, e].skip(2).toArray(), [c, d, e]);
        //skipWhile
        assert.deepStrictEqual([1, 2, 3, 4, 5].skipWhile(v => v < 3).toArray(), [3, 4, 5]);
		//skipSame
		assert.deepStrictEqual([1, 1, 1, 4, 5].skipSame().toArray(), [4, 5]);
		//skipProportion
		assert.deepStrictEqual([1, 1, 1, 4, 5].skipProportion(0.5).toArray(), [1, 4, 5]);
        //take
        assert.deepStrictEqual([a, b, c, d, e].take(3).toArray(), [a, b, c]);
        //takeWhile
        assert.deepStrictEqual([1, 2, 3, 4, 5].takeWhile(v => v <= 3).toArray(), [1, 2, 3]);
        //takeSame
        assert.deepStrictEqual([1, 1, 1, 4, 5].takeSame().toArray(), [1, 1, 1]);
		//takeProportion
		assert.deepStrictEqual([1, 1, 1, 4, 5].takeProportion(0.5).toArray(), [1, 1]);
		//proportion
		assert.strictEqual([1, 2, 3, 4, 5].proportion(v => v <= 3), 0.6);
        //zip
        assert.deepStrictEqual([1, 2, 3].zip([a, b, c], (element, other) => element + other).toArray(), ['1a', '2b', '3c']);
        //orderBy
        assert.deepStrictEqual([d, a, c, b].orderBy().toArray(), [a, b, c, d]);
        assert.deepStrictEqual([d, a, c, b].orderBy(v => v + v).toArray(), [a, b, c, d]);
        assert.deepStrictEqual([d, a, c, b].orderBy(v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [d, c, b, a]);
        //orderByDescending
        assert.deepStrictEqual([d, a, c, b].orderByDescending().toArray(), [d, c, b, a]);
        assert.deepStrictEqual([d, a, c, b].orderByDescending(v => v + v).toArray(), [d, c, b, a]);
        assert.deepStrictEqual([d, a, c, b].orderByDescending(v => v + v, (element, other) => element > other ? -1 : element === other ? 0 : 1).toArray(), [a, b, c, d]);
        //join
        assert.deepStrictEqual([1, 2, 3, 4].join([2, 3, 4, 5], (outerElement, innerElement) => outerElement * innerElement).toArray(), [4, 9, 16]);
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
        }].join([2, 3, 4, 5], (outerElement, innerElement) => outerElement.value * innerElement, v => v.key).toArray(), [6, 12, 20]);
        assert.deepStrictEqual([{
            id: 1,
            firstName: d
        }, {
            id: 2,
            firstName: e
        }, {
            id: 3,
            firstName: f
        }].join([{
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
        }].join([{
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
        assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].groupBy().select(grouping => grouping.toArray()).toArray(), [
            [3, 3, 3],
            [2],
            [1, 1],
            [4]
        ]);
        assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].groupBy(v => v % 3).select(grouping => grouping.toArray()).toArray(), [
            [3, 3, 3],
            [2],
            [1, 4, 1]
        ]);
        assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].groupBy(v => v % 3, v => v * v).select(grouping => grouping.toArray()).toArray(), [
            [9, 9, 9],
            [4],
            [1, 16, 1]
        ]);
        assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].groupBy(v => v % 3, v => v * v, (key, grouping) => grouping.toArray()).toArray(), [
            [9, 9, 9],
            [4],
            [1, 16, 1]
        ]);
        assert.deepStrictEqual([3, 2, 1, 4, 3, 3, 1].groupBy(v => v % 3, v => v * v, (key, grouping) => grouping.toArray(), (element, other) => element % 2 === other % 2).toArray(), [
            [9, 4, 9, 9],
            [1, 16, 1]
        ]);
        //selectMany
        assert.deepStrictEqual([
            [a, b, c],
            [d],
            [e, f]
        ].selectMany().toArray(), [a, b, c, d, e, f]);
        assert.deepStrictEqual([{
            key: 'vowel',
            values: [a, e]
        }, {
            key: 'other',
            values: [b, c, d, f]
        }].selectMany(v => v.values).toArray(), [a, e, b, c, d, f]);
        assert.deepStrictEqual([{
            key: 'vowel',
            values: [a, e]
        }, {
            key: 'other',
            values: [b, c, d, f]
        }].selectMany(v => v.values, (v, value) => value + a).toArray(), [a + a, e + a, b + a, c + a, d + a, f + a]);
        //groupJoin
        assert.deepStrictEqual([1, 2, 3, 4].groupJoin([2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray()).toArray(), [
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
        }].groupJoin([2, 4, 3, 4, 5], (outerElement, innerGrouping) => innerGrouping.toArray(), v => v.key).toArray(), [
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
        }].groupJoin([{
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
        }].groupJoin([{
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
        //chunk
        assert.deepStrictEqual([a, b, c, d, e].chunk(3, 1).count(), 3);
        assert.deepStrictEqual([a, b, c, d].chunk(2).select(c => c.toArray()).toArray(), [ [a, b], [c, d] ]);
        assert.deepStrictEqual([a, b, c, d, e, f].chunk(3, 2).skip(1).select(c => c.toArray()).toArray(), [ [c, d, e], [f] ]);
        assert.deepStrictEqual([a, b, c, d].chunk(2).select(c => c.index).toArray(), [ 0, 1 ]);
        assert.deepStrictEqual([a, b, c, d, e, f].chunk(3, 2).skip(1).select(c => c.index).toArray(), [ 1, 2 ]);
		//split
        assert.deepStrictEqual([a, b, c, b, d, e].split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
        assert.deepStrictEqual([b, a, c, b, d, e].split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
        assert.deepStrictEqual([a, b, c, b, d, e, b].split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
        assert.deepStrictEqual([b, a, b, b, c, b, d, e, b].split(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [], [c], [d, e], [] ]);
        //nearSplit
        assert.deepStrictEqual([a, b, c, b, b, d, e].nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e] ]);
        assert.deepStrictEqual([b, b, a, c, b, d, e].nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a, c], [d, e] ]);
        assert.deepStrictEqual([a, b, c, b, d, e, b, b].nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [a], [c], [d, e], [] ]);
        assert.deepStrictEqual([b, a, b, b, b, c, b, d, e, b].nearSplit(element => element === b).select(chunk => chunk.toArray()).toArray(), [ [], [a], [c], [d, e], [] ]);
        //product
        assert.strictEqual([1, 2, 3, 4, 5].product(), 120);
        //rightPad
        assert.deepStrictEqual([a, b, c].rightPad(5, d).toArray(), [a, b, c, d, d]);
        //leftPad
        assert.deepStrictEqual([a, b, c].leftPad(5, d).toArray(), [d, d, a, b, c]);
        //wipe
        assert.deepStrictEqual([a, b, c, a, b, c, a, b, c].wipe(e => e === a).toArray(), [b, c, b, c, b, c]);
        assert.deepStrictEqual([a, b, c, a, b, c, a, b, c].wipe(e => e === a, 2).toArray(), [b, c, b, c, a, b, c]);
        //nearBy
        assert.deepStrictEqual([a, a, b, b, b, a, c, c].nearBy().select(g => g.toArray()).toArray(), [[a, a], [b, b, b], [a], [c, c]]);
        //combine
        assert.deepStrictEqual(nodes.combine().select(v => v.toObject()).toArray(), tree);
        assert.deepStrictEqual(nodes.combine(node => node.parent, node => node.key).select(v => v.toObject()).toArray(), tree);
        //separate
        assert.deepStrictEqual([[[a, b], c, d], [e, f], a].separate().toArray(), [a, b, c, d, e, f, a]);
        assert.deepStrictEqual(tree.separate().toArray(), nodes);
        assert.deepStrictEqual(tree.separate(v => v.children).toArray(), nodes);
        //isSub
        assert.strictEqual([1, 2, 3].isSub([5, 4, 3, 2, 1]), true);
        assert.strictEqual([1, 2, 3].isSub([5, 4, 3]), false);
        //isSuper
        assert.strictEqual([5, 4, 3, 2, 1].isSuper([1, 2, 3]), true);
        assert.strictEqual([5, 4, 3].isSuper([1, 2, 3]), false);
        //symmetric
        assert.deepStrictEqual([1, 2, 3].symmetric([3, 4, 5]).toArray(), [1, 2, 4, 5]);
        //indices
        assert.deepStrictEqual([a, b, c, d, e, f].indices([0, 2, 4]).toArray(), [a, c, e]);
        assert.deepStrictEqual([a, b, c, d, e, f].indices([3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
        //permutation
        assert.deepStrictEqual([a, b, c].permutation(2).select(per => per.toArray()).toArray(), [ [a, b], [a, c], [b, a], [b, c], [c, a], [c, b] ]);
        assert.deepStrictEqual([a, b, c, d, e].permutation(3).count(), 60);
        assert.deepStrictEqual([a, b, c].permutation(2, true).select(per => per.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, a], [b, b], [b, c], [c, a], [c, b], [c, c] ]);
        assert.deepStrictEqual([a, b, c, d, e].permutation(3, true).count(), 125);
        assert.deepStrictEqual([a, b, c].permutation(4, true).count(), 81);
        //combination
        assert.deepStrictEqual([a, b, c].combination(2).select(com => com.toArray()).toArray(), [ [a, b], [a, c], [b, c] ]);
        assert.deepStrictEqual([a, b, c, d, e].combination(3).count(), 10);
        assert.deepStrictEqual([a, b, c].combination(2, true).select(com => com.toArray()).toArray(), [ [a, a], [a, b], [a, c], [b, b], [b, c], [c, c] ]);
        assert.deepStrictEqual([a, b, c, d, e].combination(3, true).count(), 35);
        assert.deepStrictEqual([a, b, c].combination(4, true).count(), 15);

		//splice
		let array_splice = [1, 2, 4, 3, 5, 6];
		assert.deepStrictEqual(array_splice.splice(2, 2, 3, 4).toArray(), [4, 3]);
		assert.deepStrictEqual(array_splice.toArray(), [1, 2, 3, 4, 5, 6]);
		//slice
		assert.deepStrictEqual([1, 2, 3, 4, 5, 6].slice(2, 5).toArray(), [3, 4, 5]);
		//copyWithin
		let array_copyWithin = ["alpha", "beta", "copy", "delta"];
		assert.deepStrictEqual(array_copyWithin.copyWithin(1, 2, 3).toArray(), ["alpha", "copy", "copy", "delta"]);
		assert.deepStrictEqual(array_copyWithin.toArray(), ["alpha", "copy", "copy", "delta"]);
		array_copyWithin = ['alpha', 'bravo', 'charlie', 'delta'];
		assert.deepStrictEqual(array_copyWithin.copyWithin(2, 0).toArray(), ["alpha", "bravo", "alpha", "bravo"]);
		assert.deepStrictEqual(array_copyWithin.toArray(), ["alpha", "bravo", "alpha", "bravo"]);
		//every
		assert.strictEqual([12, 5, 8, 130, 44].every(element => element >= 10), false);
		assert.strictEqual([12, 54, 18, 130, 44].every(element => element >= 10), true);
		//fill
		let array_fill = [1, 2, 3];
		assert.deepStrictEqual(array_fill.fill(4).toArray(), [4, 4, 4]);
		assert.deepStrictEqual(array_fill.toArray(), [4, 4, 4]);
		array_fill = [1, 2, 3];
		assert.deepStrictEqual(array_fill.fill(4, 1).toArray(), [1, 4, 4]);
		assert.deepStrictEqual(array_fill.toArray(), [1, 4, 4]);
		array_fill = [1, 2, 3];
		assert.deepStrictEqual(array_fill.fill(4, 1, 2).toArray(), [1, 4, 3]);
		assert.deepStrictEqual(array_fill.toArray(), [1, 4, 3]);
		//filter
		assert.deepStrictEqual([12, 5, 8, 130, 44].filter(value => value >= 10).toArray(), [12, 130, 44]);
		//find
		assert.strictEqual([12, 5, 8, 130, 44].find(element => element >= 15), 130);
		//findIndex
		assert.strictEqual([12, 5, 8, 130, 44].findIndex(element => element >= 15), 3);
		//forEach
		//ignore
        //indices
        assert.deepStrictEqual([a, b, c, d, e, f].indices([0, 2, 4]).toArray(), [a, c, e]);
        assert.deepStrictEqual([a, b, c, d, e, f].indices([3, 2, 3, 5, 0]).toArray(), [d, c, d, f, a]);
		//includes
		assert.strictEqual([1, 2, 3].includes(2), true);
		assert.strictEqual([1, 2, 3].includes(4), false);
		//indexOf
		assert.strictEqual([2, 9, 9].indexOf(2), 0);
		assert.strictEqual([2, 9, 9].indexOf(7), -1);
		//lastIndexOf
		assert.strictEqual([2, 5, 9, 2].lastIndexOf(2), 3);
		assert.strictEqual([2, 5, 9, 2].lastIndexOf(7), -1);
		assert.strictEqual([2, 5, 9, 2].lastIndexOf(2, 3), 3);
		assert.strictEqual([2, 5, 9, 2].lastIndexOf(2, 2), 0);
		assert.strictEqual([2, 5, 9, 2].lastIndexOf(2, -2), 0);
		assert.strictEqual([2, 5, 9, 2].lastIndexOf(2, -1), 3);
		//findLast
		assert.strictEqual([2, 5, 9, 2].findLast(element => element % 2 === 1), 9);
		//map
		assert.deepStrictEqual([1, 5, 10, 15].map(x => x * 2).toArray(), [2, 10, 20, 30]);
		assert.deepStrictEqual([1, 4, 9].map(x => Math.sqrt(x)).toArray(), [1, 2, 3]);
		//reduce
		assert.strictEqual([0, 1, 2, 3].reduce((acc, val) => acc + val, 0), 6);
		let array_reduce1 = [
			[0, 1],
			[2, 3],
			[4, 5]
		];
		let array_reduce2 = [0, [1, [2, [3, [4, [5, [6]]]]]]];
		let flatten_reduce = (arr) => arr.reduce((acc, val) =>  acc.concat(Array.isArray(val) ? flatten_reduce(val) : val), []);
		assert.deepStrictEqual(flatten_reduce(array_reduce1).toArray(), [0, 1, 2, 3, 4, 5]);
		assert.deepStrictEqual(flatten_reduce(array_reduce2).toArray(), [0, 1, 2, 3, 4, 5, 6]);
		//reduceRight
		assert.deepStrictEqual([
			[0, 1],
			[2, 3],
			[4, 5]
		].reduceRight((a, b) => a.concat(b), []).toArray(), [4, 5, 2, 3, 0, 1]);
		//some
		assert.strictEqual([2, 5, 8, 1, 4].some(element => element >= 10), false);
		assert.strictEqual([12, 5, 8, 1, 4].some(element => element >= 10), true);
		//sort
		let array_sort = ['cherries', 'apples', 'bananas'];
		assert.deepStrictEqual(array_sort.sort().toArray(), ['apples', 'bananas', 'cherries']);
		assert.deepStrictEqual(array_sort.toArray(), ['apples', 'bananas', 'cherries']);
		//pop
		let array_pop = [1, 2, 3];
		assert.strictEqual(array_pop.pop(), 3);assert.deepStrictEqual(array_pop.toArray(), [1, 2]);
		//push
		let array_push = [1, 2, 3];
		assert.strictEqual(array_push.push(4), 4);
		assert.deepStrictEqual(array_push.toArray(), [1, 2, 3, 4]);
		//shift
		let array_shift = [1, 2, 3];
		assert.strictEqual(array_shift.shift(), 1);
		assert.deepStrictEqual(array_shift.toArray(), [2, 3]);
		//unshift
		let array_unshift = [1, 2, 3];
		assert.strictEqual(array_unshift.unshift(4), 4);
		assert.deepStrictEqual(array_unshift.toArray(), [4, 1, 2, 3]);


		Enumerable.addPlugins({
			name: 'toHtml',
			value(source) {
				return `<span>${ source.join('</span><span>') }</span>`;
			}
		});

		assert([1, 2, 3].toHtml(), '<span>1</span><span>2</span><span>3</span>');

		Enumerable.removePlugins('toHtml');

		Enumerable.config.extends.array = false;
		Enumerable.config.extends.object = false;
		Enumerable.config.extends.string = false;
        Enumerable.config.extends.lazy = false;
	};

	testExtends(false);
    testExtends(true);

	assert.deepStrictEqual(Enumerable.toDictionary(['a', 'b', 'c']).toObject(), {
		a: 'a',
		b: 'b',
		c: 'c'
	});
	assert.deepStrictEqual(Enumerable.toDictionary([{
		key: 'apple',
		value: 'red'
	}, {
		key: 'orange',
		value: 'yellow'
	}, {
		key: 'watermelon',
		value: 'green'
	}], v => v.key, v => v.value).toObject(), {
		apple: 'red',
		orange: 'yellow',
		watermelon: 'green'
	});

	assert.deepStrictEqual(Enumerable.toLookup(['a', 'b', 'a', 'c']).toObject(), {
		a: ['a', 'a'],
		b: ['b'],
		c: ['c']
	});
	assert.deepStrictEqual(Enumerable.toLookup([{
		key: 'red',
		value: 'apple'
	}, {
		key: 'yellow',
		value: 'orange'
	}, {
		key: 'green',
		value: 'watermelon'
	}, {
		key: 'yellow',
		value: 'pear'
	}], v => v.key, v => v.value).toObject(), {
		red: ['apple'],
		yellow: ['orange', 'pear'],
		green: ['watermelon']
	});


	Enumerable.addPlugins({
		name: 'toHtml',
		value(source) {
			return `<span>${ source.join('</span><span>') }</span>`;
		}
	});

	assert.strictEqual([1, 2, 3].asEnumerable().toHtml(), '<span>1</span><span>2</span><span>3</span>');

	Enumerable.removePlugins('toHtml');

	assert.deepStrictEqual(Enumerable([1, 2, 3]).toArray(), [1, 2, 3]);

	assert.deepStrictEqual(Enumerable.where([{a:1, b:2, c:3}, {a:3, b:2, c:3}, {a:1, b:5, c:3}], {b:5, c:3}).toArray(), [{a:1, b:5, c:3}]);

	class TestArray { *[Symbol.iterator]() { yield 0; } }

	Enumerable.typeAs(TestArray, Enumerable.types.Array);

	assert.strictEqual(new TestArray().asEnumerable().elementAt(0), 0);

    global.Enumerable = require('../../src/linq');
    global.Enumerable.noConflict();
    global.Enumerable.noConflict(true);

    assert.deepStrictEqual(({ key: 1, value: 'a' }).asEnumerable().select(v => v.toObject()).toArray(), [ { key: 'key', value: 1 }, { key: 'value', value: 'a' }]);

	console.log(Enumerable.version + ' test successful!');
};