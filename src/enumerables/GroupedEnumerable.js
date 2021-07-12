'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultSelector = require('../methods/defaultSelector');
const defaultResultSelector = require('../methods/defaultResultSelector');
const defaultEqualityComparer = require('../methods/defaultEqualityComparer');
const equalityPredicate = require('../methods/equalityPredicate');

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
            let grouped = false;

            let it = source.getIterator();
            let hasNext = () => {
                let next = it.next();
                if (!next.done) {
                    let key = keySelector(next.value);
                    let element = elementSelector(next.value);
                    let trueKey;
                    if (iterators.has(key)) {
                        trueKey = key;
                    } else if (!(core.isPrimitive(key) && comparer === defaultEqualityComparer)) {
                        trueKey = core.asEnumerable(iterators.keys()).where(equalityPredicate(key, comparer)).firstOrDefault(noneKey);
                    } else {
                        trueKey = noneKey;
                    }
                    if (trueKey === noneKey) {
                        let array = [];
                        iterators.set(key, array);
                        groupings.push(new IGrouping(key, array, hasNext, () => grouped));
                    } else {
                        if (key !== trueKey) {
                            iterators.set(key, iterators.get(trueKey));
                        }
                    }
                    iterators.get(key).push(element);
                } else {
                    grouped = true;
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