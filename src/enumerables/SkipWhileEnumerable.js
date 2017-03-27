'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultPredicate = require('./../methods/defaultPredicate');

class SkipWhileEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        predicate = methods.asPredicate(predicate);
        core.defineProperty(this, Symbol.iterator, function* SkipWhileIterator() {
            let skipping = true, index = 0;
            for (let element of source) {
                skipping = skipping && predicate(element, index++);
                if (!skipping) {
                    yield element;
                }
            }
        });
    }
}

module.exports = SkipWhileEnumerable;