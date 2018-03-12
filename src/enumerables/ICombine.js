'use strict';

const ITree = require('./ITree');

const core = require('./../core/core');

class ICombine extends ITree {
    constructor(key, parent, value, iterator) {
        super(key, parent, value, iterator);
        iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function ICombineIterator() {
            return iterator();
        });
    }
}

module.exports = ICombine;