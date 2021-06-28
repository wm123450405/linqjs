'use strict';

const GeneratorEnumerable = require('./GeneratorEnumerable');

const core = require('../core/core');

class IChunk extends GeneratorEnumerable {
    constructor(index, generator) {
        super(generator);
        core.defineProperty(this, 'index', () => {
            return index;
        }, true, true);
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function IChunkIterator() {
            return iterator();
        });
    }
}

module.exports = IChunk;