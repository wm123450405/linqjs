const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultComparer = require('./../methods/defaultComparer');

class IOrderedEnumerable extends IEnumerable {
    constructor(source, orderByComparer = defaultComparer) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let element of source.toArray().sort(orderByComparer)) {
                yield element;
            }
        });
        core.defineProperties(this, {
            thenBy(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.thenBy(this, keySelector, comparer);
            },
            thenByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                return Enumerable.thenByDescending(this, keySelector, comparer);
            }
        });
        core.defineProperty(this, IOrderedEnumerable.source, source);
        core.defineProperty(this, IOrderedEnumerable.orderByComparer, orderByComparer);
    };
};
IOrderedEnumerable.source = Symbol('source');
IOrderedEnumerable.orderByComparer = Symbol('orderByComparer');

module.exports = IOrderedEnumerable;