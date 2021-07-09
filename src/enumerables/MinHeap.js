'use strict';

const IHeap = require('./IHeap');

const methods = require('../methods/methods');

const defaultComparer = require('../methods/defaultComparer');
const descendingComparer = require('../methods/descendingComparer');

class MinHeap extends IHeap {
    constructor(source, comparer = defaultComparer) {
        comparer = descendingComparer(methods.asComparer(comparer));
        super(source, comparer);
    }
}

module.exports = MinHeap;