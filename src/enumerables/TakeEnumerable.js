'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

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
    }
}

module.exports = TakeEnumerable;