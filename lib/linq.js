'use strict';
import core from './core/core';

import Enumerable from './Enumerable';

import MapEnumerable from './enumerables/MapEnumerable';
import ArrayEnumerable from './enumerables/ArrayEnumerable';
import StringEnumerable from './enumerables/StringEnumerable';
import IteratorEnumerable from './enumerables/IteratorEnumerable';
import ObjectEnumerable from './enumerables/ObjectEnumerable';

core.defineProperties(Map.prototype, {
    asEnumerable() {
        return new MapEnumerable(this);
    }
});
core.defineProperties(Array.prototype, {
    asEnumerable() {
        return new ArrayEnumerable(this);
    }
});
core.defineProperties(Set.prototype, {
    asEnumerable() {
        return new ArrayEnumerable(this);
    }
});
core.defineProperties(String.prototype, {
    asEnumerable() {
        return new StringEnumerable(this);
    }
});
core.defineProperties(Object.prototype, {
    asEnumerable() {
        let type = core.typeName(this);
        if (type.endsWith(' Iterator')) {
            return new IteratorEnumerable(this);
        } else {
            return new ObjectEnumerable(this);
        }
    }
});

export default Enumerable;