'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultResultSelector = require('./../methods/defaultResultSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const equalityPredicate = require('./../methods/equalityPredicate');

const IGrouping = require('./IGrouping');

class GroupedEnumerable extends IEnumerable {
    constructor(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        super(source);
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        resultSelector = methods.asSelector(resultSelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* GroupedIterator() {
            let groupings = [];
            let iterators = new Map();

            let noneKey = Symbol('noneKey');

            let it = source[Symbol.iterator]();
            let hasNext = () => {
                let next = it.next();
                if (!next.done) {
                    let key = keySelector(next.value);
                    let element = elementSelector(next.value);
                    let trueKey;
                    if (iterators.has(key)) {
                        trueKey = key;
                    } else {
                        trueKey = Enumerable.where(iterators.keys(), equalityPredicate(key, comparer)).firstOrDefault(noneKey);
                    }
                    if (trueKey === noneKey) {
                        iterators.set(key, []);
                        groupings.push(new IGrouping(key, (key => function* () {
                            let array = iterators.get(key);
                            let index = 0;
                            while (array.length > index || hasNext()) {
                                if (array.length > index) {
                                    yield array[index++];
                                }
                            }
                        })(key)));
                    } else {
                        if (key !== trueKey) {
                            iterators.set(key, iterators.get(trueKey));
                        }
                    }
                    iterators.get(key).push(element);
                }
                return !next.done;
            };
            let gi = 0;
            while (groupings.length > gi || hasNext()) {
                if (groupings.length > gi) {
                    let grouping = groupings[gi++];
                    yield resultSelector(grouping.key, grouping);
                }
            }
        });
    }
}

module.exports = GroupedEnumerable;