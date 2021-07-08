'use strict';

const IToppedEnumerable = require('./IToppedEnumerable');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');
const descendingComparer = require('../methods/descendingComparer');

class BottomEnumerable extends IToppedEnumerable {
    constructor(source, count, orderByComparer = defaultComparer) {
        orderByComparer = methods.asComparer(orderByComparer);
        super(source, count, true, descendingComparer(orderByComparer));
    }
}

module.exports = BottomEnumerable;