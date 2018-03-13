'use strict';

const ITree = require('./ITree');

const core = require('./../core/core');

class ICombine extends ITree {
    constructor(key, parent, value, generator) {
        super(value, generator);
        core.defineProperty(this, 'parent', () => parent, true, true);
        core.defineProperty(this, 'key', () => key, true, true);
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function ICombineIterator() {
            return iterator();
        });
    }
}

module.exports = ICombine;