'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultPredicate = require('./../methods/defaultPredicate');

class SkipWhileEnumerable extends IEnumerable {
    constructor(source, predicate = defaultPredicate) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
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