'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class SkipProportionEnumerable extends IEnumerable {
    constructor(source, proportion = 0) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* SkipProportionIterator() {
            if (proportion === 0) {
                for (let element of source) {
                    yield element;
                }
            } else {
                let count = 0, skiped = 0, queue = [];
                for (let element of source) {
                    count++;
                    queue.push(element);
                    if (skiped + 1 <= count * proportion) {
                        skiped++;
                        queue.unshift();
                    }
                }
                for (let element of queue) {
                    yield element;
                }
            }
        });
    }
}

module.exports = SkipProportionEnumerable;