'use strict';

const IteratorEnumerable = require('./IteratorEnumerable');

const core = require('./../core/core');

class IChunk extends IteratorEnumerable {
    constructor(index, iterator) {
        super(iterator);
        core.defineProperty(this, 'index', () => {
            return index;
        }, true, true);
        iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function IChunkIterator() {
            return iterator();
        });
    }
}

module.exports = IChunk;