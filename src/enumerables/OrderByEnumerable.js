const IOrderedEnumerable = require('./IOrderedEnumerable');

const defaultSelector = require('./../methods/defaultSelector');
const defaultComparer = require('./../methods/defaultComparer');
const selectorComparer = require('./../methods/selectorComparer');

class OrderByEnumerable extends IOrderedEnumerable {
    constructor(source, keySelector = defaultSelector, comparer = defaultComparer) {
        super(source, selectorComparer(keySelector, comparer));
    }
};

module.exports = OrderByEnumerable;