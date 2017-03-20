'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class ConcatEnumerable extends IEnumerable {
    constructor(source, ...others) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
            yield* source;
            for (let other of others) {
            	yield* other;
            }
        });
    }
}

module.exports = ConcatEnumerable;