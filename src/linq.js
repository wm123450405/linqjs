'use strict';

const g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;
// if (!g.regeneratorRuntime && typeof regeneratorRuntime === 'undefined') {
//     require('@babel/polyfill');
// }

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

let _Enumerable;
let _saved = {
};

if (g.Enumerable) {
    _Enumerable = g.Enumerable;
    _Enumerable.save(_saved);
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

const config = {
    as: defaultAs,
    noConflict: false
};
const saved = {
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
        [name](childrenSelector, valueSelector) {
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
                    return core.isUndefined(childrenSelector) ? new ObjectEnumerable(this) : new TreeEnumerable(this, childrenSelector, valueSelector);
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
    set as(name) {
        initAs(name);
    },
    get as() {
        return config.as;
    }
};

Enumerable.save = function(saved) {
    if (this.config.as !== defaultAs) clear(this.config.as);
    clear(defaultAs);
};
Enumerable.restore = function(saved) {
    let as = this.config.as;
    this.config.as = defaultAs;
    if (as !== defaultAs) this.config.as = as;
};

Enumerable.noConflict = function(callback = false) {
    if (callback !== true) {
        if (this.isConflict) {
            this.save(saved);
            config.noConflict = true;
            g.Enumerable = _Enumerable;
            g.Enumerable.restore(_saved);

            let noConflict = g.Enumerable.noConflict;
            g.Enumerable.noConflict = function(callback = false) {
                if (callback === true) {
                    g.Enumerable.save(_saved);
                    config.noConflict = false;
                    Enumerable.restore(saved);
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