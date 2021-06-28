'use strict';

const IMapEnumerable = require('./IMapEnumerable');

const core = require('../core/core');

const methods = require('../methods/methods');

const defaultSameComparer = require('../methods/defaultSameComparer');
const equalityPredicate = require('../methods/equalityPredicate');

const Entry = require('./Entry');

class MapEnumerable extends IMapEnumerable {
    constructor(map) {
        super();
        core.defineProperty(this, core.delegate, map);
        core.defineProperty(this, Symbol.iterator, function* MapIterator() {
            for (let key of map.keys()) {
                yield new Entry(key, map.get(key));
            }
        });
    }
    get(key, comparer = defaultSameComparer) {
        comparer = methods.asSameComparer(comparer);
        if (comparer === defaultSameComparer) {
            return this[core.delegate].get(key);
        } else {
            return this[core.delegate].get(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)));
        }
    }
    set(key, value, comparer = defaultSameComparer) {
        comparer = methods.asSameComparer(comparer);
        if (comparer === defaultSameComparer) {
            this[core.delegate].set(key, value);
        } else {
            this[core.delegate].set(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)), value);
        }
        return this;
    }
    has(key, comparer = defaultSameComparer) {
        comparer = methods.asSameComparer(comparer);
        if (comparer === defaultSameComparer) {
            return this[core.delegate].has(key);
        } else {
            return this.keys().contains(key, comparer);
        }
    }
    delete(key, comparer = defaultSameComparer) {
        comparer = methods.asSameComparer(comparer);
        if (comparer === defaultSameComparer) {
            return this[core.delegate].delete(key);
        } else {
            return this[core.delegate].delete(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)));
        }
    }
    keys() {
        return this[core.delegate].keys().asEnumerable();
    }
    values() {
        return this[core.delegate].values().asEnumerable();
    }
    entries() {
        return this[core.delegate].entries().asEnumerable();
    }
}

module.exports = MapEnumerable;