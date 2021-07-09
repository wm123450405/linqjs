'use strict';

const IHeap = require('./IHeap');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');

class MaxHeap extends IHeap {
    constructor(source, comparer = defaultComparer) {
        comparer = methods.asComparer(comparer);
        super(source, comparer);
    }
}

module.exports = MaxHeap;