'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultSelector = require('./../methods/defaultSelector');

class JoinEnumerable extends IEnumerable {
    constructor(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        super(outer);
        outerKeySelector = methods.asSelector(outerKeySelector);
        innerKeySelector = methods.asSelector(innerKeySelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* JoinIterator() {
            let innerTemp = [], outerIndex = 0;
            for (let outerElement of outer) {
                let outerKey = outerKeySelector(outerElement, outerIndex);
                if (outerIndex === 0) {
                    let innerIndex = 0;
                    for (let innerElement of inner) {
                        let innerKey = innerKeySelector(innerElement, innerIndex++);
                        innerTemp.push({ key: innerKey, element: innerElement });
                        if (comparer(outerKey, innerKey)) {
                            yield resultSelector(outerElement, innerElement);
                        }
                    }
                } else {
                    for (let innerValue of innerTemp) {
                        if (comparer(outerKey, innerValue.key)) {
                            yield resultSelector(outerElement, innerValue.element);
                        }
                    }
                }
                outerIndex++;
            }
        });
    }
}

module.exports = JoinEnumerable;