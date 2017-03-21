'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class SkipEnumerable extends IEnumerable {
    constructor(source, count) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* SkipIterator() {
            let index = 0;
            for (let element of source) {
                if (index >= count) {
                    yield element;
                }
                index++;
            }
        });
    }
}

module.exports = SkipEnumerable;