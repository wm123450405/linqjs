'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

class DistinctEnumerable extends IEnumerable {
    constructor(source, comparer = defaultEqualityComparer) {
        super(source);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* DistinctIterator() {
            let temp = [];
            for (let element of source) {
                if (!Enumerable.contains(temp, element, comparer)) {
                    temp.push(element);
                    yield element;
                }
            }
        });
    }
}

module.exports = DistinctEnumerable;