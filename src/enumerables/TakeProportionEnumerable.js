'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class TakeProportionEnumerable extends IEnumerable {
    constructor(source, proportion = 1) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* TakeProportionIterator() {
            if (proportion !== 0) {
                proportion = proportion > 0 ? proportion : (1 - proportion);
                let count = 0, taked = 0, queue = [];
                for (let element of source) {
                    count++;
                    queue.push(element);
                    if (taked + 1 <= count * proportion) {
                        taked++;
                        yield queue.shift();
                    }
                }
            }
        });
    }
}

module.exports = TakeProportionEnumerable;