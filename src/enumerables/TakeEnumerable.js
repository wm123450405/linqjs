'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

class TakeEnumerable extends IEnumerable {
    constructor(source, count) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* TakeIterator() {
            let index = 0;
            for (let element of source) {
                if (index < count) {
                    yield element;
                } else {
                    break;
                }
                index++;
            }
        });
        core.defineProperty(this, TakeEnumerable.SOURCE, () => source, true);
        core.defineProperty(this, TakeEnumerable.COUNT, () => count, true);
    }
    take(count) {
        return new TakeEnumerable(this[TakeEnumerable.SOURCE], Math.min(this[TakeEnumerable.COUNT], count));
    }
}

TakeEnumerable.SOURCE = Symbol.for("TakeEnumerable.SOURCE");
TakeEnumerable.COUNT = Symbol.for("TakeEnumerable.COUNT");

module.exports = TakeEnumerable;