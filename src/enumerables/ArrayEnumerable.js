'use strict';

const IteratorEnumerable = require('./IteratorEnumerable');

const core = require('./../core/core');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

const Enumerable = require('./../Enumerable');

class ArrayEnumerable extends IteratorEnumerable {
    constructor(array) {
        super(array);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer && core.array$indexOf && isNaN(value)) {
                    return core.array$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = Infinity, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer && core.array$lastIndexOf && isNaN(value)) {
                    return core.array$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            findIndex(predicate, start = 0) {
                if (start === 0 && core.array$findIndex) {
                    return core.array$findIndex.call(array, predicate);
                } else {
                    return Enumerable.findIndex(this, predicate, start);
                }
            }
        });
    }
}

module.exports = ArrayEnumerable;