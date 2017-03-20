'use strict';

const IteratorEnumerable = require('./IteratorEnumerable');

const core = require('./../core/core');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

const Enumerable = require('./../Enumerable');

class StringEnumerable extends IteratorEnumerable {
    constructor(array) {
        super(array);
        core.defineProperties(this, {
            indexOf(value, start = 0, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer && core.string$indexOf) {
                    return core.string$indexOf.call(array, value, start);
                } else {
                    return Enumerable.indexOf(this, value, start, comparer);
                }
            },
            lastIndexOf(value, start = Infinity, comparer = defaultEqualityComparer) {
                if (comparer === defaultEqualityComparer && core.string$lastIndexOf) {
                    return core.string$lastIndexOf.call(array, value, start);
                } else {
                    return Enumerable.lastIndexOf(this, value, start, comparer);
                }
            }
        });
    }
}

module.exports = StringEnumerable;