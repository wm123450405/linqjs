'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class RangeEnumerable extends IEnumerable {
    constructor(start, count, step = 1) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* RangeIterator() {
            for (let i = 0, value = start; i < count; i++, value += step) {
                yield value;
            }
        });
    }
}

module.exports = RangeEnumerable;