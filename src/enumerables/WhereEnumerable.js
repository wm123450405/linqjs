'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultPredicate = require('./../methods/defaultPredicate');

class WhereEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* WhereIterator() {
            let index = 0;
            for (let element of source) {
                if (predicate(element, index++)) {
                    yield element;
                }
            }
        });
    }
}

module.exports = WhereEnumerable;