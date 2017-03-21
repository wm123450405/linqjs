'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class IterableEnumerable extends IEnumerable {
    constructor(iterable) {
        super(iterable);
        core.defineProperty(this, Symbol.iterator, function* IterableIterator() {
            yield* iterable;
        });
    }
}

module.exports = IterableEnumerable;