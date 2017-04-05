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
                    let trueKey = Enumerable.where(iterators.keys(), equalityPredicate(key, comparer)).firstOrDefault(noneKey);
                    if (trueKey === noneKey) {
                        iterators.set(key, []);
                        groupings.push(new IGrouping(key, {
                            *[Symbol.iterator]() {
                                let array = iterators.get(key);
                                while (array.length > 0 || hasNext()) {
                                    if (array.length > 0) {
                                        yield array.shift();
                                    }
                                }
                            }
                        }));
                    } else {
                        key = trueKey;
                    }
                    iterators.get(key).push(element);
                }
                return !next.done;
            };
            while (groupings.length > 0 || hasNext()) {
                if (groupings.length > 0) {
                    yield resultSelector(Enumerable.first(groupings).key, groupings.shift());
                }
            }
        });
    }
}

module.exports = GroupedEnumerable;