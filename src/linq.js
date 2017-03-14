'use strict';
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;
if (!g.regeneratorRuntime && typeof regeneratorRuntime === 'undefined') {
    require('babel-polyfill');
}

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

const defaultName = 'asEnumerable';
let prevName = '';
const init = (name) => {
    if (name !== defaultName && prevName) {
        delete String.prototype[prevName];
        delete Array.prototype[prevName];
        delete Map.prototype[prevName];
        delete Set.prototype[prevName];
        delete Object.prototype[prevName];
        prevName = '';
    }
    core.defineProperties(String.prototype, {
        [name]() {
            return new StringEnumerable(this);
        }
    });
    core.defineProperties(Array.prototype, {
        [name]() {
            return new ArrayEnumerable(this);
        }
    });
    core.defineProperties(Map.prototype, {
        [name]() {
            return new MapEnumerable(this);
        }
    });
    core.defineProperties(Set.prototype, {
        [name]() {
            return new ArrayEnumerable(this);
        }
    });
    core.defineProperties(Object.prototype, {
        [name]() {
            let type = core.getType(this);
            if (type.endsWith(' Iterator')) {
                return new IteratorEnumerable(this);
            } else {
                return new ObjectEnumerable(this);
            }
        }
    });
};

init(defaultName);

Enumerable.config = {
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
    },
    set as(name) {
        init(name);
    }
}

module.exports = Enumerable;