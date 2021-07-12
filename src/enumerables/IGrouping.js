'use strict';

const IEnumerable = require('../IEnumerable');

const { defineProperty, asEnumerable } = require('../core/core');

const methods = require('../methods/methods');

const defaultPredicate = require('../methods/defaultPredicate');

class IGrouping extends IEnumerable {
    constructor(key, array, hasNext, grouped) {
        super(array);
        defineProperty(this, 'key', () => {
            return key;
        }, true, true);
        defineProperty(this, Symbol.iterator, function* GroupingIterator() {
            let index = 0;
            if (grouped()) {
                yield* array;
            } else {
                while (array.length > index || hasNext()) {
                    if (array.length > index) {
                        yield array[index++];
                    }
                }
            }
        });
        defineProperty(this, IGrouping.ARRAY, array);
        defineProperty(this, IGrouping.GROUPED, grouped);
    }
    count(predicate = defaultPredicate) {
        if (this[IGrouping.GROUPED]()) {
            return asEnumerable(this[IGrouping.ARRAY]).count(predicate);
        } else {
            return super.count(predicate);
        }
    }
}

IGrouping.ARRAY = Symbol.for('IGrouping.ARRAY');
IGrouping.GROUPED = Symbol.for('IGrouping.GROUPED');

module.exports = IGrouping;