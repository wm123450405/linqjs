'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class IChunk extends IEnumerable {
    constructor(index, iterable) {
        super([]);
        this.index = index;
        core.defineProperty(this, Symbol.iterator, function* IChunkIterator() {
            yield* iterable;
        });
    }
}

module.exports = IChunk;