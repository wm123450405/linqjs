'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const defaultSelector = require('./../methods/defaultSelector');

const IGrouping = require('./IGrouping');
const Entry = require('./Entry');

const createGrouping = (array, key, comparer, hasNext) => new IGrouping(key, {
    *[Symbol.iterator]() {
        let index = 0;
        while (array.length > index || hasNext()) {
            if (array.length > index) {
                if (comparer(key, array[index].key)) {
                    yield array[index].value;
                }
                index++;
            }
        }
    }
});

class GroupJoinEnumerable extends IEnumerable {
    constructor(outer, inner, resultSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        super(outer);
        outerKeySelector = methods.asSelector(outerKeySelector);
        innerKeySelector = methods.asSelector(innerKeySelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* GroupJoinIterator() {
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
                yield resultSelector(outerElement, createGrouping(innerTemp, outerKey, comparer, innerHasNext));
                outerIndex++;
            }
        });
    }
}

module.exports = GroupJoinEnumerable;