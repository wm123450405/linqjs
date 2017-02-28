import IMapEnumerable from './IMapEnumerable';

import core from './../core/core';

import defaultEqualityComparer from './../methods/defaultEqualityComparer';
import equalityPredicate from './../methods/equalityPredicate';

import Entry from './Entry';

class MapEnumerable extends IMapEnumerable {
    constructor(map) {
        super();
        core.defineProperty(this, Symbol.iterator, function*() {
            for (let key of map.keys()) {
                yield new Entry(key, map.get(key));
            }
        });
        core.defineProperties(this, {
            get(key, comparer = defaultEqualityComparer) {
                return map.get(map.keys().asEnumerable().single(equalityPredicate(key, comparer)));
            },
            set(key, value, comparer = defaultEqualityComparer) {
                return map.set(map.keys().asEnumerable().singleOrDefault(key, equalityPredicate(key, comparer)), value);
            },
            has(key, comparer = defaultComparer) {
                return map.keys().asEnumerable().contains(key, comparer);
            },
            delete(key, comparer = defaultComparer) {
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
        })
    };
};

export default MapEnumerable;