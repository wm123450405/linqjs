'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultSameComparer = require('../methods/defaultSameComparer');

class TakeSameEnumerable extends IEnumerable {
    constructor(source, comparer = defaultSameComparer) {
        super(source);
        comparer = methods.asComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* TakeSameIterator() {
            let first = true, firstElement = false;
            for (let element of source) {
                if (first) {
                    firstElement = element;
                    first = false;
                    yield element;
                } else {
                    if (comparer(element, firstElement)) {
                        yield element;
                    } else {
                        break;
                    }
                }
            }
        });
    }
}

module.exports = TakeSameEnumerable;