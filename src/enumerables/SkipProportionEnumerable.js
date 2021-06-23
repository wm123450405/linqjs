'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');

class SkipProportionEnumerable extends IEnumerable {
    constructor(source, proportion = 0) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* SkipProportionIterator() {
            if (proportion > 0) {
                if (proportion < 1) {
                    let array = Enumerable.toArray(source);
                    let length = array.length;
                    for (let i = Math.floor(length * proportion); i < length; i++) {
                        yield array[i];
                    }
                }
            } else {
                for (let element of source) {
                    yield element;
                }
            }
        });
    }
}

module.exports = SkipProportionEnumerable;