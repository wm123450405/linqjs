'use strict';

const IMapEnumerable = require('./IMapEnumerable');

const core = require('./../core/core');

const methods = require('./../methods/methods');

const defaultSameComparer = require('./../methods/defaultSameComparer');
const equalityPredicate = require('./../methods/equalityPredicate');

const Entry = require('./Entry');

class MapEnumerable extends IMapEnumerable {
    constructor(map) {
        super();
        core.defineProperty(this, Symbol.iterator, function* MapIterator() {
            for (let key of map.keys()) {
                yield new Entry(key, map.get(key));
            }
        });
        core.defineProperties(this, {
            get(key, comparer = defaultSameComparer) {
                comparer = methods.asSameComparer(comparer);
                if (comparer === defaultSameComparer) {
                    return map.get(key);
                } else {
                    return map.get(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)));
                }
            },
            set(key, value, comparer = defaultSameComparer) {
                comparer = methods.asSameComparer(comparer);
                if (comparer === defaultSameComparer) {
                    map.set(key, value);
                } else {
                    map.set(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)), value);
                }
                return this;
            },
            has(key, comparer = defaultSameComparer) {
                comparer = methods.asSameComparer(comparer);
                if (comparer === defaultSameComparer) {
                    return map.has(key);
                } else {
                    return this.keys().contains(key, comparer);
                }
            },
            delete(key, comparer = defaultSameComparer) {
                comparer = methods.asSameComparer(comparer);
                if (comparer === defaultSameComparer) {
                    return map.delete(key);
                } else {
                    return map.delete(this.keys().singleOrDefault(key, equalityPredicate(key, comparer)));
                }
            },
            keys() {
                return map.keys().asEnumerable();
            },
            values() {
                return map.values().asEnumerable();
            },
            entries() {
                return map.entries().asEnumerable();
            }
        });
    }
}

module.exports = MapEnumerable;