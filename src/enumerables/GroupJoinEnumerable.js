import IEnumerable from './../IEnumerable';

import core from './../core/core';

import defaultEqualityComparer from './../methods/defaultEqualityComparer';

import IGrouping from './IGrouping';
import Entry from './Entry';

class GroupJoinEnumerable extends IEnumerable {
    constructor(outer, inner, outerKeySelector, innerKeySelector, resultSelector, comparer = defaultEqualityComparer) {
        super(outer);
        core.defineProperty(this, Symbol.iterator, function*() {
            let innerTemp = [], outerIndex = 0, innerIndex = 0, innerIterator = inner[Symbol.iterator]();
            let innerHasNext = () => {
                let next = innerIterator.next();
                if (!next.done) {
                    let innerElement = next.value;
                    innerTemp.push(new Entry(innerKeySelector(innerElement, innerIndex++), innerElement));
                }
                return !next.done;
            };
            for (let outerElement of outer) {
                let outerKey = outerKeySelector(outerElement, outerIndex++);
                yield resultSelector(outerElement, new IGrouping(outerKey, {
                    *[Symbol.iterator]() {
                        let index = 0;
                        while (innerTemp.length > index || innerHasNext()) {
                            if (innerTemp.length > index) {
                                if (comparer(outerKey, innerTemp[index].key)) {
                                    yield innerTemp[index].value;
                                }
                                index++
                            }
                        }
                    }
                }));
                outerIndex++;
            }
        });
    }
};

export default GroupJoinEnumerable;