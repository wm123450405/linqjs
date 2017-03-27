'use strict';

const IOrderedEnumerable = require('./IOrderedEnumerable');

const methods = require('./../methods/methods');

const thenByComparer = require('./../methods/thenByComparer');
const selectorComparer = require('./../methods/selectorComparer');
const defaultSelector = require('./../methods/defaultSelector');
const defaultComparer = require('./../methods/defaultComparer');
const descendingComparer = require('./../methods/descendingComparer');

class ThenByDescendingEnumerable extends IOrderedEnumerable {
    constructor(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
    	keySelector = methods.asSelector(keySelector);
    	comparer = methods.asComparer(comparer);
        super(orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], descendingComparer(selectorComparer(keySelector, comparer))));
    }
}

module.exports = ThenByDescendingEnumerable;