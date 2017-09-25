'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

class SymmetricEnumerable extends IEnumerable {
    constructor(source, other, comparer = defaultEqualityComparer) {
        super(source);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* SymmetricIterator() {
            let temp = [];
            for (let element of source) {
                if (!Enumerable.contains(other, element, comparer)) {
                    if (!Enumerable.contains(temp, element, comparer)) {
                        temp.push(element);
                        yield element;
                    }
                }
            }
            for (let element of other) {
                if (!Enumerable.contains(source, element, comparer)) {
                    if (!Enumerable.contains(temp, element, comparer)) {
                        temp.push(element);
                        yield element;
                    }
                }
            }
        });
    }
}

module.exports = SymmetricEnumerable;