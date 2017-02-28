import IEnumerable from './../IEnumerable';

import core from './../core/core';

import Enumerable from './../Enumerable';

import defaultSelector from './../methods/defaultSelector';
import defaultGroupResultSelector from './../methods/defaultGroupResultSelector';
import defaultEqualityComparer from './../methods/defaultEqualityComparer';
import equalityPredicate from './../methods/equalityPredicate';

import IGrouping from './IGrouping';

class GroupingEnumerable extends IEnumerable {
    constructor(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultGroupResultSelector, comparer = defaultEqualityComparer) {
        super(source);
        core.defineProperty(this, Symbol.iterator, function*() {
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
};

export default GroupingEnumerable;