'use strict';

const IMapEnumerable = require('./IMapEnumerable');

const core = require('./../core/core');

const Entry = require('./Entry');

class ObjectEnumerable extends IMapEnumerable {
    constructor(source) {
        super();
        core.defineProperty(this, Symbol.iterator, function* ObjectIterator() {
            for (let key of Object.keys(source)) {
                yield new Entry(key, source[key]);
            }
        });
    }
}

module.exports = ObjectEnumerable;