'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class IteratorEnumerable extends IEnumerable {
    constructor(iterable) {
        super(iterable);
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* iterable;
        });
    }
}

module.exports = IteratorEnumerable;