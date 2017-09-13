'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class GenerateEnumerable extends IEnumerable {
    constructor(generate, count = 0) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function* GenerateIterator() {
            for (let i = 0; i < count; i++) {
                yield generate(i);
            }
        });
    }
}

module.exports = GenerateEnumerable;