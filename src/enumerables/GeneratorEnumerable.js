'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class GeneratorEnumerable extends IEnumerable {
    constructor(generator) {
        super([]);
        core.defineProperty(this, Symbol.iterator, function GeneratorIterator() {
            return generator();
        });
    }
}

module.exports = GeneratorEnumerable;