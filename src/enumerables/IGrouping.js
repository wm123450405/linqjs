'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class IGrouping extends IEnumerable {
    constructor(key, iterable) {
        super([]);
        core.defineProperty(this, 'key', () => {
            return key;
        }, true, true);
        core.defineProperty(this, Symbol.iterator, function* GroupingIterator() {
            yield* iterable;
        });
    }
}

module.exports = IGrouping;