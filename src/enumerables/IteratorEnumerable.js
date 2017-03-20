'use strict';

const IterableEnumerable = require('./IterableEnumerable');

const core = require('./../core/core');

class IteratorEnumerable extends IterableEnumerable {
    constructor(iterator) {
        super(iterator);
        core.defineProperty(this, Symbol.iterator, iterator);
    }
}

module.exports = IteratorEnumerable;