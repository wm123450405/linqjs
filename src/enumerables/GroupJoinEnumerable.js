'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultJoinSelector = require('../methods/defaultJoinSelector');
const defaultEqualityComparer = require('../methods/defaultEqualityComparer');
const defaultSelector = require('../methods/defaultSelector');
const equalityPredicate = require('../methods/equalityPredicate');

const IGrouping = require('./IGrouping');

class GroupJoinEnumerable extends IEnumerable {
    constructor(outer, inner, resultSelector = defaultJoinSelector, outerKeySelector = defaultSelector, innerKeySelector = defaultSelector, comparer = defaultEqualityComparer) {
        super(outer);
        outerKeySelector = methods.asSelector(outerKeySelector);
        innerKeySelector = methods.asSelector(innerKeySelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* GroupJoinIterator() {
            let outerIndex = 0, innerIndex = 0, innerIterator = inner[Symbol.iterator]();
            let outers = new Map(), inners = new Map();

            let noneKey = Symbol('noneKey');
            let grouped = false;

            let isGrouped = () => grouped;

            let innerHasNext = () => {
                let next = innerIterator.next();
                if (!next.done) {
                    let innerElement = next.value;
                    let innerKey = innerKeySelector(next.value, innerIndex++);
                    let array;
                    if (inners.has(innerKey)) {
                        array = inners.get(innerKey);
                    } else {
                        let outerKey = core.asEnumerable(outers.keys()).where(outerKey => comparer(outerKey, innerKey)).firstOrDefault(noneKey);
                        if (outerKey !== noneKey) {
                            array = outers.get(outerKey).array;
                        } else {
                            array = [];
                        }
                        inners.set(innerKey, array);
                    }
                    array.push(innerElement);
                } else {
                    grouped = true;
                }
                return !next.done;
            };
            let outerKey;
            let comparerInner = innerKey => comparer(outerKey, innerKey);
            let innerArray = innerKey => inners.get(innerKey);
            for (let outerElement of outer) {
                outerKey = outerKeySelector(outerElement, outerIndex++);
                let innerKeys = core.asEnumerable(inners.keys()).where(comparerInner).toArray();
                let array;
                if (innerKeys.length) {
                    array = core.asEnumerable(innerKeys).selectMany(innerArray).toArray();
                    for (let innerKey of innerKeys) {
                        inners.set(innerKey, array);
                    }
                } else {
                    array = [];
                }
                let grouping = new IGrouping(outerKey, array, innerHasNext, isGrouped);
                outers.set(outerKey, { array, grouping });
                yield resultSelector(outerElement, grouping);
                outerIndex++;
            }
        });
    }
}

module.exports = GroupJoinEnumerable;