'use strict';

const IToppedEnumerable = require('./IToppedEnumerable');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

class TopEnumerable extends IToppedEnumerable {
    constructor(source, count, orderByComparer = defaultComparer) {
        orderByComparer = methods.asComparer(orderByComparer);
        super(source, count, orderByComparer);
    }
}

module.exports = TopEnumerable;