'use strict';

const IteratorEnumerable = require('./IteratorEnumerable');

const core = require('./../core/core');

class IGrouping extends IteratorEnumerable {
    constructor(key, iterator) {
        super(iterator);
        core.defineProperty(this, 'key', () => {
            return key;
        }, true, true);
        iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function GroupingIterator() {
            return iterator();
        });
    }
}

module.exports = IGrouping;