'use strict';
import core from './core/core';

import Enumerable from './Enumerable';

import MapEnumerable from './enumerables/MapEnumerable';
import ArrayEnumerable from './enumerables/ArrayEnumerable';
import StringEnumerable from './enumerables/StringEnumerable';
import IteratorEnumerable from './enumerables/IteratorEnumerable';
import ObjectEnumerable from './enumerables/ObjectEnumerable';

import extendArray from './linq-array';
import extendObject from './linq-object';
import extendString from './linq-string';

if (!global._babelPolyfill) {
    require('babel-polyfill');
} else {
    console.warn('babel-polyfill already imported');
}

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

Enumerable.Config = {
    extends: {
        set array(value) {
            if (value) {
                extendArray();
            }
        },
        set object(value) {
            if (value) {
                extendObject();
            }
        },
        set string(value) {
            if (value) {
                extendString();
            }
        }
    }
}

export default Enumerable;