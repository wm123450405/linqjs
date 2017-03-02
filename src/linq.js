'use strict';
const core = require('./core/core');

const Enumerable = require('./Enumerable');

const MapEnumerable = require('./enumerables/MapEnumerable');
const ArrayEnumerable = require('./enumerables/ArrayEnumerable');
const StringEnumerable = require('./enumerables/StringEnumerable');
const IteratorEnumerable = require('./enumerables/IteratorEnumerable');
const ObjectEnumerable = require('./enumerables/ObjectEnumerable');

const extendArray = require('./linq-array');
const extendObject = require('./linq-object');
const extendString = require('./linq-string');

if (!regeneratorRuntime) {
    require('babel-polyfill');
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

//module.exports = Enumerable;
module.exports = Enumerable;