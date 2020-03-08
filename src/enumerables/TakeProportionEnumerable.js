'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class TakeProportionEnumerable extends IEnumerable {
    constructor(source, proportion = 1) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* TakeProportionIterator() {
            if (proportion === 1) {
                for (let element of source) {
                    yield element;
                }
            } else {
                let count = 0, taked = 0, queue = [];
                for (let element of source) {
                    count++;
                    queue.push(element);
                    if (taked + 1 <= count * proportion) {
                        taked++;
                        yield queue.unshift();
                    }
                }
            }
        });
    }
}

module.exports = TakeProportionEnumerable;