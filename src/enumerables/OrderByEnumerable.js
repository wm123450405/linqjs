'use strict';

const IOrderedEnumerable = require('./IOrderedEnumerable');

const methods = require('./../methods/methods');

const defaultSelector = require('./../methods/defaultSelector');
const defaultComparer = require('./../methods/defaultComparer');
const selectorComparer = require('./../methods/selectorComparer');

class OrderByEnumerable extends IOrderedEnumerable {
    constructor(source, keySelector = defaultSelector, comparer = defaultComparer) {
        keySelector = methods.asSelector(keySelector);
        comparer = methods.asComparer(comparer);
        super(source, selectorComparer(keySelector, comparer));
    }
}

module.exports = OrderByEnumerable;