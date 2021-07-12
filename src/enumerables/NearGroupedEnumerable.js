'use strict';

const IEnumerable = require('../IEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');


const defaultSelector = require('../methods/defaultSelector');
const defaultResultSelector = require('../methods/defaultResultSelector');
const defaultEqualityComparer = require('../methods/defaultEqualityComparer');

const IGrouping = require('./IGrouping');

class NearGroupedEnumerable extends IEnumerable {
    constructor(source, keySelector = defaultSelector, elementSelector = defaultSelector, resultSelector = defaultResultSelector, comparer = defaultEqualityComparer) {
        super(source);
        keySelector = methods.asSelector(keySelector);
        elementSelector = methods.asSelector(elementSelector);
        resultSelector = methods.asSelector(resultSelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* NearGroupedIterator() {
            let groupings = [];
            let array = [];

            let noneKey = Symbol('noneKey');
            let prevKey = noneKey;
            let grouped = false;

            let it = source[Symbol.iterator]();
            let hasNext = () => {
                let next = it.next();
                if (!next.done) {
                    let key = keySelector(next.value);
                    let element = elementSelector(next.value);
                    if (prevKey === noneKey || !comparer(key, prevKey)) {
                        array = [];
                        prevKey = key;
                        groupings.push(new IGrouping(key, array, hasNext, () => grouped));
                    }
                    array.push(element);
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

module.exports = NearGroupedEnumerable;