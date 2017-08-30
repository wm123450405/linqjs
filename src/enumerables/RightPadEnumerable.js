'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class RightPadEnumerable extends IEnumerable {
    constructor(source, length, value) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* ConcatIterator() {
            for (let v of source) {
                length--;
                yield v;
            }
            for (let i = 0; i < length; i++) {
                yield value;
            }
        });
    }
}

module.exports = RightPadEnumerable;