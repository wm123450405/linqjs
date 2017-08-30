'use strict';

const IEnumerable = require('./../IEnumerable');

const Enumerable = require('./../Enumerable');

const core = require('./../core/core');

class RandEnumerable extends IEnumerable {
    constructor(source, length = 0) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* RandIterator() {
            let temp = Enumerable.toArray(source);
            let count = 0;
            while (length === 0 && temp.length || count < length) {
                yield* temp.splice(parseInt(temp.length * Math.random()), 1);
                count++;
            }
        });
    }
}

module.exports = RandEnumerable;