'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultSelector = require('./../methods/defaultSelector');

class LeftJoinEnumerable extends IEnumerable {
    constructor(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        super(outer);
        outerKeySelector = methods.asSelector(outerKeySelector);
        innerKeySelector = methods.asSelector(innerKeySelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* LeftJoinIterator() {
            let outerTemp = [], innerIndex = 0;
            for (let innerElement of inner) {
                let innerKey = innerKeySelector(innerElement, innerIndex);
                if (innerIndex === 0) {
                    let outerIndex = 0;
                    let match = false;
                    for (let outerElement of outer) {
                        let outerKey = outerKeySelector(outerElement, outerIndex++);
                        outerTemp.push({ key: outerKey, element: outerElement });
                        if (comparer(outerKey, innerKey)) {
                            match = true;
                            yield resultSelector(outerElement, innerElement);
                        }
                    }
                    if (!match) {
                        yield resultSelector(undefined, innerElement);
                    }
                } else {
                    let match = false;
                    for (let outerValue of outerTemp) {
                        if (comparer(outerValue.key, innerKey)) {
                            match = true;
                            yield resultSelector(outerValue.element, innerElement);
                        }
                    }
                    if (!match) {
                        yield resultSelector(undefined, innerElement);
                    }
                }
                innerIndex++;
            }
        });
    }
}

module.exports = LeftJoinEnumerable;