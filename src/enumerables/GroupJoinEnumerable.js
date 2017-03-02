const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultSelector = require('./../methods/defaultSelector');

const IGrouping = require('./IGrouping');
const Entry = require('./Entry');

class GroupJoinEnumerable extends IEnumerable {
    constructor(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
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

module.exports = GroupJoinEnumerable;