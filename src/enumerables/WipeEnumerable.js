'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultPredicate = require('../methods/defaultPredicate');

class WipeEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate, count = 0) {
        super(source);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* WipeIterator() {
            let index = 0;
            let size = 0;
            for (let element of source) {
                if (count !== 0 && size > count || !predicate(element, index++)) {
                    yield element;
                    size++;
                }
            }
        });
    }
}

module.exports = WipeEnumerable;