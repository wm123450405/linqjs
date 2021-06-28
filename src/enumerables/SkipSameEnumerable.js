'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultSameComparer = require('../methods/defaultSameComparer');

class SkipSameEnumerable extends IEnumerable {
    constructor(source, comparer = defaultSameComparer) {
        super(source);
        comparer = methods.asComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* SkipSameIterator() {
            let first = true, firstElement = false, firstSkiped = false;
            for (let element of source) {
                if (first) {
                    firstElement = element;
                    first = false;
                } else {
                    if (firstSkiped) {
                        yield element;
                    } else if (!comparer(element, firstElement)) {
                        firstSkiped = true;
                        yield element;
                    }
                }
            }
        });
    }
}

module.exports = SkipSameEnumerable;