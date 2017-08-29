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
            let innerTemp = [], outerIndex = 0;
            for (let outerElement of outer) {
                let outerKey = outerKeySelector(outerElement, outerIndex);
                if (outerIndex === 0) {
                    let innerIndex = 0;
                    let match = false;
                    for (let innerElement of inner) {
                        let innerKey = innerKeySelector(innerElement, innerIndex++);
                        innerTemp.push({ key: innerKey, element: innerElement });
                        if (comparer(outerKey, innerKey)) {
                            match = true;
                            yield resultSelector(outerElement, innerElement);
                        }
                    }
                    if (!match) {
                        yield resultSelector(outerElement);
                    }
                } else {
                    let match = false;
                    for (let innerValue of innerTemp) {
                        if (comparer(outerKey, innerValue.key)) {
                            match = true;
                            yield resultSelector(outerElement, innerValue.element);
                        }
                    }
                    if (!match) {
                        yield resultSelector(outerElement);
                    }
                }
                outerIndex++;
            }
        });
    }
}

module.exports = LeftJoinEnumerable;