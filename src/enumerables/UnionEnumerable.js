'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultEqualityComparer = require('../methods/defaultEqualityComparer');

class UnionEnumerable extends IEnumerable {
    constructor(source, other, comparer = defaultEqualityComparer) {
        super(source);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* UnionIterator() {
            let temp = core.asEnumerable([]);
            for (let element of source) {
                if (!temp.contains(element, comparer)) {
                    temp.push(element);
                    yield element;
                }
            }
            for (let element of other) {
                if (!temp.contains(element, comparer)) {
                    temp.push(element);
                    yield element;
                }
            }
        });
    }
}

module.exports = UnionEnumerable;