'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

const Enumerable = require('./../Enumerable');

class ArrayEnumerable extends IterableEnumerable {
    constructor(array) {
        super(array);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer && core.array$indexOf) {
                    return core.array$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = Infinity, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer && core.array$lastIndexOf) {
                    return core.array$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            },
            findIndex(predicate, thisArg) {
                if (core.array$findIndex) {
                    return core.array$findIndex.call(array, predicate, thisArg);
                } else {
                    return Enumerable.findIndex(this, predicate, thisArg);
                }
            }
        });
    }
}

module.exports = ArrayEnumerable;