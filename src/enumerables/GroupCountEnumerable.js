'use strict';

const IEnumerable = require('./../IEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const Enumerable = require('./../Enumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultResultSelector = require('./../methods/defaultResultSelector');
const defaultEqualityComparer = require('./../methods/defaultEqualityComparer');

const Entry = require('./Entry');

class GroupCountEnumerable extends IEnumerable {
    constructor(source, keySelector = defaultSelector, comparer = defaultEqualityComparer) {
        super(source);
        keySelector = methods.asSelector(keySelector);
        comparer = methods.asEqualityComparer(comparer);
        core.defineProperty(this, Symbol.iterator, function* GroupCountIterator() {
            for (let grouping of Enumerable.groupBy(source, keySelector, defaultSelector, defaultResultSelector, comparer)) {
                yield new Entry(grouping.key, grouping.count());
            }
        });
    }
}

module.exports = GroupCountEnumerable;