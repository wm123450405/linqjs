'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

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
        core.defineProperty(this, SkipEnumerable.SOURCE, () => source, true);
        core.defineProperty(this, SkipEnumerable.COUNT, () => count, true);
    }
    skip(count) {
        return new SkipEnumerable(this[SkipEnumerable.SOURCE], this[SkipEnumerable.COUNT] + count);
    }
}

SkipEnumerable.SOURCE = Symbol.for("SkipEnumerable.SOURCE");
SkipEnumerable.COUNT = Symbol.for("SkipEnumerable.COUNT");

module.exports = SkipEnumerable;