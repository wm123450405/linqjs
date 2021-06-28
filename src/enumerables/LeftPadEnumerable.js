'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

class LeftPadEnumerable extends IEnumerable {
    constructor(source, length, value) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* ConcatIterator() {
            let temp = source.toArray();
            for (let i = temp.length; i < length; i++) {
                yield value;
            }
            yield* temp;
        });
    }
}

module.exports = LeftPadEnumerable;