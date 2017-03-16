'use strict';

const g =
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

const defaultAs = 'asEnumerable';

const config = {
    extends: {
        array: false,
        object: false,
        string: false
    },
    as: defaultAs
};

const initAs = (name) => {
    if (name !== defaultAs && config.as && config.as !== defaultAs) {
        delete String.prototype[config.as];
        delete Array.prototype[config.as];
        delete Map.prototype[config.as];
        delete Set.prototype[config.as];
        delete Object.prototype[config.as];
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
    config.as = name;
};

initAs(defaultAs);

Enumerable.config = {
    extends: {
        set array(value) {
            if (value && config.extends.array !== value) {
                extendArray();
            }
            config.extends.array = value;
        },
        get array() {
            return config.extends.array;
        },
        set object(value) {
            if (value && config.extends.object !== value) {
                extendObject();
            }
            config.extends.object = value;
        },
        get object() {
            return config.extends.object;
        },
        set string(value) {
            if (value && config.extends.string !== value) {
                extendString();
            }
            config.extends.string = value;
        },
        get string() {
            return config.extends.string;
        },
    },
    set as(name) {
        initAs(name);
    },
    get as() {
        return config.as;
    }
};

module.exports = Enumerable;