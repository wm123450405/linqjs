'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

const FIRST = Symbol.for('FIRST');

class IToppedEnumerable extends IEnumerable {
    constructor(source, count, reverse, orderByComparer = defaultComparer) {
        super(source);
        orderByComparer = methods.asComparer(orderByComparer);
        core.defineProperty(this, Symbol.iterator, function* ToppedIterator() {
            let temp = [], ts = count - 1;
            let first = FIRST;
            const insert = (temp, element, comparer) => {
                let len = temp.length, c;
                let i = Math.floor(len / 2);
                if (len > 0) {
                    for (let l = 0, r = len; ; i = Math.floor((l + r) / 2)) {
                        c = comparer(element, temp[i]);
                        if (c < 0) {
                            if (l === i) break;
                            r = i;
                        } else if (c > 0) {
                            i++;
                            if (i === r) break;
                            l = i;
                        } else {
                            break;
                        }
                    }
                }
                temp.splice(i, 0, element);
                if (temp.length > ts) {
                    temp.pop();
                }
            };
            for (let element of source) {
                if (first === FIRST) {
                    first = element;
                } else if (orderByComparer(first, element) <= 0) {
                    insert(temp, element, orderByComparer);
                } else {
                    insert(temp, first, orderByComparer);
                    first = element;
                }
            }
            if (first !== FIRST) {
                if (reverse) {
                    for (let i = temp.length - 1; i >= 0; i--) {
                        yield temp[i];
                    }
                    yield first;
                } else {
                    yield first;
                    yield* temp;
                }
            }
        });
    }
}

module.exports = IToppedEnumerable;