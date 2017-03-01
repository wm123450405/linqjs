const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const Enumerable = require('./../Enumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultGroupResultSelector = require('./../methods/defaultGroupResultSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');
const equalityPredicate = require('./../methods/equalityPredicate');

const IGrouping = require('./IGrouping');

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

module.exports = GroupingEnumerable;