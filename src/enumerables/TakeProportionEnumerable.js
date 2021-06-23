'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

class TakeProportionEnumerable extends IEnumerable {
    constructor(source, proportion = 1) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function* TakeProportionIterator() {
            if (proportion > 0) {
                if (proportion >= 1) {
                    for (let element of source) {
                        yield element;
                    }
                } else {
                    let count = 0, take = 0, nextCount = (1 / proportion), queue = [];
                    for (let element of source) {
                        count++;
                        queue.push(element);
                        if (nextCount < count && take < Math.floor(count * proportion)) {
                            yield queue[take];
                            take++;
                            nextCount = (take + 1) / proportion;
                        }
                    }
                    let countProportion = Math.floor(count * proportion);
                    for (; take < countProportion; take++) {
                        yield queue[take];
                    }
                }
            }
        });
    }
}

module.exports = TakeProportionEnumerable;