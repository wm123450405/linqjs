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
const typeAs = Symbol('typeAs');

const config = {
    extends: {
        array: false,
        object: false,
        string: false,
        lazy: false
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
            if (core.isIterator(this)) {
                return new IteratorEnumerable(this);
            } else {
                if (this[typeAs] === core.types.String) {
                    return new StringEnumerable(this);
                } else if (this[typeAs] === core.types.Array || this[typeAs] === core.types.Set) {
                    return new ArrayEnumerable(this);
                } else if (this[typeAs] === core.types.Map) {
                    return new MapEnumerable(this);
                } else if (this[typeAs] === core.types.Iterator) {
                    return new IteratorEnumerable(this);
                } else {
                    return new ObjectEnumerable(this);
                }
            }
        }
    });
    config.as = name;
};

initAs(defaultAs);

Enumerable.typeAs = (type, as) => {
    if (type.constructor.prototype !== type) type = type.prototype;
    type[typeAs] = as;
};

Enumerable.types = core.types;

Enumerable.config = {
    extends: {
        set array(value) {
            if (config.extends.array !== value) {
                if (value) {
                    extendArray.install();
                } else {
                    extendArray.uninstall();
                }
            }
            config.extends.array = value;
        },
        get array() {
            return config.extends.array;
        },
        set object(value) {
            if (config.extends.object !== value) {
                if (value) {
                    extendObject.install();
                } else {
                    extendObject.uninstall();
                }
            }
            config.extends.object = value;
        },
        get object() {
            return config.extends.object;
        },
        set string(value) {
            if (config.extends.string !== value) {
                if (value) {
                    extendString.install();
                } else {
                    extendString.uninstall();
                }
            }
            config.extends.string = value;
        },
        get string() {
            return config.extends.string;
        },
        set lazy(value) {
            if (config.extends.lazy !== value) {
                core.lazy = value;
            }
            config.extends.lazy = value;
        },
        get lazy() {
            return config.extends.lazy;
        }
    },
    set as(name) {
        initAs(name);
    },
    get as() {
        return config.as;
    }
};

module.exports = Enumerable;