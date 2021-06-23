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
            let temp = [], set = new Set(), type;
            for (let element of source) {
                type = core.getType(element);
                if (type === core.types.String || type === core.types.Number || type === core.types.Symbol || type === core.types.Boolean) {
                    if (!set.has(element)) {
                        if (!Enumerable.contains(temp, element, comparer)) {
                            yield element;
                            temp.push(element);
                        }
                        set.add(element);
                    }
                } else if (!Enumerable.contains(temp, element, comparer)) {
                    yield element;
                    temp.push(element);
                }
            }
        });
    }
}

module.exports = DistinctEnumerable;