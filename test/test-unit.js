const Enumerable = require('./../src/linq');
const assert = require('assert');

const a = 'a', b = 'b', c = 'c', d = 'd', e = 'e';

//Enumerable static methods
assert.deepEqual([], Enumerable.empty().toArray());
assert.deepEqual([1, 1, 1, 1], Enumerable.repeat(1, 4).toArray());
assert.deepEqual([1, 2, 3, 4], Enumerable.range(1, 4).toArray());

//Enumerable static methods for extends IEnumerable
assert.deepEqual([a, b, c, d], Enumerable.orderBy([d, a, c, b]).toArray());
assert.deepEqual([a, b, c], Enumerable.take([a, b, c, d, e], 3).toArray());
assert.deepEqual([c, d, e], Enumerable.skip([a, b, c, d, e], 2).toArray());

//IEnumerable methods
assert.deepEqual([a, b, c, d], [d, a, c, b].asEnumerable().orderBy().toArray());
assert.deepEqual([a, b, c], [a, b, c, d, e].asEnumerable().take(3).toArray());
assert.deepEqual([c, d, e], [a, b, c, d, e].asEnumerable().skip(2).toArray());