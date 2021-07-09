'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultSelector = require('../methods/defaultSelector');
const defaultComparer = require('../methods/defaultComparer');

const FIRST = Symbol.for('FIRST');

class IOrderedEnumerable extends IEnumerable {
    constructor(source, orderByComparer = defaultComparer) {
        super(source);
        orderByComparer = methods.asComparer(orderByComparer);
        core.defineProperty(this, Symbol.iterator, function* OrderedIterator() {
            let temp = [];
            let first = FIRST;
            for (let element of source) {
                if (first === FIRST) {
                    first = element;
                } else if (orderByComparer(first, element) <= 0) {
                    temp.push(element);
                } else {
                    temp.unshift(first);
                    first = element;
                }
            }
            if (first !== FIRST) {
                yield first;
                for (let element of temp.sort(orderByComparer)) {
                    yield element;
                }
            }
        });
        core.defineProperty(this, IOrderedEnumerable.SOURCE, () => source, true);
        core.defineProperty(this, IOrderedEnumerable.ORDER_BY_COMPARER, () => orderByComparer, true);
    }
    thenBy(keySelector = defaultSelector, comparer = defaultComparer) {
        keySelector = methods.asSelector(keySelector);
        comparer = methods.asComparer(comparer);
        return new ThenByEnumerable(this, keySelector, comparer);
    }
    thenByDescending(keySelector = defaultSelector, comparer = defaultComparer) {
        keySelector = methods.asSelector(keySelector);
        comparer = methods.asComparer(comparer);
        return new ThenByDescendingEnumerable(this, keySelector, comparer);
    }
    take(count) {
        return new TopEnumerable(this[IOrderedEnumerable.SOURCE], count, this[IOrderedEnumerable.ORDER_BY_COMPARER]);
    }
    skip(count) {
        return new BottomEnumerable(this[IOrderedEnumerable.SOURCE], count, this[IOrderedEnumerable.ORDER_BY_COMPARER]);
    }
}

IOrderedEnumerable.SOURCE = Symbol('IOrderedEnumerable.SOURCE');
IOrderedEnumerable.ORDER_BY_COMPARER = Symbol('IOrderedEnumerable.ORDER_BY_COMPARER');

module.exports = IOrderedEnumerable;

const ThenByEnumerable = require('./ThenByEnumerable');
const ThenByDescendingEnumerable = require('./ThenByDescendingEnumerable');
const TopEnumerable = require('./TopEnumerable');
const BottomEnumerable = require('./BottomEnumerable');