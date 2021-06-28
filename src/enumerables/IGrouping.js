'use strict';

const GeneratorEnumerable = require('./GeneratorEnumerable');

const core = require('../core/core');

class IGrouping extends GeneratorEnumerable {
    constructor(key, generator) {
        super(generator);
        core.defineProperty(this, 'key', () => {
            return key;
        }, true, true);
        let iterator = this[Symbol.iterator];
        core.defineProperty(this, Symbol.iterator, function GroupingIterator() {
            return iterator();
        });
    }
}

module.exports = IGrouping;