'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultEqualityComparer = require('../methods/defaultEqualityComparer');

class ExceptEnumerable extends IEnumerable {
    constructor(source, other, comparer = defaultEqualityComparer) {
        super(source);
        comparer = methods.asEqualityComparer(comparer);
        other = core.asEnumerable(other);
        core.defineProperty(this, Symbol.iterator, function* ExceptIterator() {
            let temp = core.asEnumerable([]);
            for (let element of source) {
                if (!other.contains(element, comparer)) {
                    if (!temp.contains(element, comparer)) {
                        temp.push(element);
                        yield element;
                    }
                }
            }
        });
    }
}

module.exports = ExceptEnumerable;