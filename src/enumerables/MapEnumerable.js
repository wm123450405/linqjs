'use strict';

const IMapEnumerable = require('./IMapEnumerable');

const core = require('./../core/core');

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
                return map.get(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            set(key, value, comparer = defaultSameComparer) {
                return map.set(map.keys().asEnumerable().singleOrDefault(key, equalityPredicate(key, comparer)), value);
            },
            has(key, comparer = defaultSameComparer) {
                return map.keys().asEnumerable().contains(key, comparer);
            },
            delete(key, comparer = defaultSameComparer) {
                return map.delete(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            keys() {
                return map.keys().asEnumerable();
            },
            values() {
                return map.values.asEnumerable();
            },
            entries() {
                return map.entries().asEnumerable();
            }
        });
    }
}

module.exports = MapEnumerable;