'use strict';

const g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;
if (!g.regeneratorRuntime && typeof regeneratorRuntime === 'undefined') {
    require('babel-polyfill');
}

const CONFLICT_SET_CONFIG = 'Can not set this config after call the noConflict method. If you want, you can use Enumerable.noConflict method with one parameter which value is "true" to set Enumerable of global back to this module';
const CONFLICT_SUGGEST = 'You may require this module twice or more. I suggest you to only require once. If you must to, you can also use Enumerable.noConflict method to solve the conflict';

const defaultAs = 'asEnumerable';
const typeAs = Symbol('typeAs');

const clear = name => {
    delete String.prototype[name];
    delete Array.prototype[name];
    delete Map.prototype[name];
    delete Set.prototype[name];
    delete Object.prototype[name];
};

const save = (saved, enumerable) => {
    if (enumerable.config.as !== defaultAs) clear(enumerable.config.as);
    clear(defaultAs);
    saved.config.extends.array = enumerable.config.extends.array;
    enumerable.config.extends.array = false;
    saved.config.extends.string = enumerable.config.extends.string;
    enumerable.config.extends.string = false;
    saved.config.extends.object = enumerable.config.extends.object;
    enumerable.config.extends.object = false;
    saved.extends = enumerable.extends;
    if (enumerable.unextendAll) enumerable.unextendAll();
};

const restore = (saved, enumerable) => {
    let as = enumerable.config.as;
    enumerable.config.as = defaultAs;
    if (as !== defaultAs) enumerable.config.as = as;
    enumerable.config.extends.array = saved.config.extends.array;
    enumerable.config.extends.string = saved.config.extends.string;
    enumerable.config.extends.object = saved.config.extends.object;
    enumerable.extendAll(saved.extends);
};

let _Enumerable;
let _saved = {
    config: {
        extends: {
            array: false,
            string: false,
            object: false
        }
    },
    extends: new Map()
};
if (g.Enumerable) {
    save(_saved, _Enumerable = g.Enumerable);
    delete g.Enumerable;
    console.warn(CONFLICT_SUGGEST);
}

const core = require('./core/core');

const Enumerable = require('./Enumerable');

const MapEnumerable = require('./enumerables/MapEnumerable');
const ArrayEnumerable = require('./enumerables/ArrayEnumerable');
const StringEnumerable = require('./enumerables/StringEnumerable');
const IteratorEnumerable = require('./enumerables/IteratorEnumerable');
const ObjectEnumerable = require('./enumerables/ObjectEnumerable');
const TreeEnumerable = require('./enumerables/TreeEnumerable');

const extendArray = require('./linq-array');
const extendObject = require('./linq-object');
const extendString = require('./linq-string');

const config = {
    extends: {
        array: false,
        object: false,
        string: false,
        lazy: false
    },
    as: defaultAs,
    noConflict: false
};
const saved = {
    config: {
        extends: {
            array: false,
            object: false,
            string: false
        }
    },
    extends: []
};

const initAs = (name) => {
    if (name !== defaultAs && config.as && config.as !== defaultAs) {
        clear(config.as);
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
        [name](childrenSelector) {
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
                    return core.isUndefined(childrenSelector) ? new ObjectEnumerable(this) : new TreeEnumerable(this, childrenSelector);
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
            if (config.noConflict) {
                console.warn(CONFLICT_SET_CONFIG);
                return;
            }
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
            if (config.noConflict) {
                console.warn(CONFLICT_SET_CONFIG);
                return;
            }
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
            if (config.noConflict) {
                console.warn(CONFLICT_SET_CONFIG);
                return;
            }
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

Enumerable.noConflict = function(callback = false) {
    if (callback !== true) {
        if (this.isConflict) {
            save(saved, this);
            config.noConflict = true;
            restore(_saved, g.Enumerable = _Enumerable);

            let noConflict = g.Enumerable.noConflict;
            g.Enumerable.noConflict = function(callback = false) {
                if (callback === true) {
                    save(_saved, g.Enumerable);
                    config.noConflict = false;
                    restore(saved, Enumerable);
                    g.Enumerable.noConflict = noConflict;
                    return Enumerable;
                } else {
                    return noConflict();
                }
            };
        }
    }
    if (callback && core.isFunction(callback)) callback(Enumerable);
    return Enumerable;
};
core.defineProperty(Enumerable, 'isConflict', () => {
    return _Enumerable && !config.noConflict;
}, true, true);

module.exports = g.Enumerable = Enumerable;