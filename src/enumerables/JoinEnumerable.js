const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

class JoinEnumerable extends IEnumerable {
    constructor(outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
        super(outer);
        core.defineProperty(this, Symbol.iterator, function*() {
            let innerTemp = [], outerIndex = 0;
            for (let outerElement of outer) {
                let outerKey = outerKeySelector(outerElement, outerIndex);
                if (outerIndex == 0) {
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
};

module.exports = JoinEnumerable;