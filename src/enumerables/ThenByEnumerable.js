const IOrderedEnumerable = require('./IOrderedEnumerable');

const thenByComparer = require('./../methods/thenByComparer');
const selectorComparer = require('./../methods/selectorComparer');
const defaultSelector = require('./../methods/defaultSelector');
const defaultComparer = require('./../methods/defaultComparer');

class ThenByEnumerable extends IOrderedEnumerable {
    constructor(orderedSource, keySelector = defaultSelector, comparer = defaultComparer) {
        super(orderedSource[IOrderedEnumerable.source], thenByComparer(orderedSource[IOrderedEnumerable.orderByComparer], selectorComparer(keySelector, comparer)));
    }
};

module.exports = ThenByEnumerable;