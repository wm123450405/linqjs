'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultComparer = require('./../methods/defaultComparer');

class IOrderedEnumerable extends IEnumerable {
    constructor(source, orderByComparer = defaultComparer) {
        super(source);
        orderByComparer = methods.asComparer(orderByComparer);
        core.defineProperty(this, Symbol.iterator, function* OrderedIterator() {
            for (let element of Enumerable.toArray(source).sort(orderByComparer)) {
                yield element;
            }
        });
        core.defineProperties(this, {
            thenBy(keySelector = defaultSelector, comparer = defaultComparer) {
                keySelector = methods.asSelector(keySelector);
                comparer = methods.asComparer(comparer);
                return Enumerable.thenBy(this, keySelector, comparer);
            },
            thenByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
                keySelector = methods.asSelector(keySelector);
                comparer = methods.asComparer(comparer);
                return Enumerable.thenByDescending(this, keySelector, comparer);
            }
        });
        core.defineProperty(this, IOrderedEnumerable.source, source);
        core.defineProperty(this, IOrderedEnumerable.orderByComparer, orderByComparer);
    }
}

IOrderedEnumerable.source = Symbol('IOrderedEnumerable.source');
IOrderedEnumerable.orderByComparer = Symbol('IOrderedEnumerable.orderByComparer');

module.exports = IOrderedEnumerable;