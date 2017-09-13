'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class BetweenEnumerable extends IEnumerable {
    constructor(start, end, step = 1) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* BetweenIterator() {
            for (let value = start; value < end; value += step) {
                yield value;
            }
        });
    }
}

module.exports = BetweenEnumerable;