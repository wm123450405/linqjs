'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class ConcatEnumerable extends IEnumerable {
    constructor(source, ...others) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* ConcatIterator() {
            yield* source;
            for (let other of others) {
            	if (other[Symbol.iterator]) {
            		yield* other;
            	} else if (core.isIterator(other)) {
            		yield* other.asEnumerable();
            	} else {
            		yield other;
            	}
            }
        });
    }
}

module.exports = ConcatEnumerable;