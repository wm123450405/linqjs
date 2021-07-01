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
    if (_Enumerable.save) {
        _Enumerable.save(_saved);
    }
    delete g.Enumerable;
    console.warn(CONFLICT_SUGGEST);
}

const packageInfo = require('./../package.json');
const core = require('./core/core');

const Enumerable = require('./Enumerable');

core.defineProperty(Enumerable, 'version', () => packageInfo.version, true);

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
    core.defineProperties(Object.prototype, {
        [name](childrenSelector, valueSelector) {
            return core.asEnumerable(this, childrenSelector, valueSelector);
        }
    });
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
    config.as = name;
};

initAs(defaultAs);

Enumerable.typeAs = (type, as) => {
    if (type.constructor.prototype !== type) type = type.prototype;
    type[core.typeAs] = as;
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
            if (g.Enumerable.restore) {
                g.Enumerable.restore(_saved);
            }

            let noConflict = g.Enumerable.noConflict;
            g.Enumerable.noConflict = function(callback = false) {
                if (callback === true) {
                    if (g.Enumerable.save) {
                        g.Enumerable.save(_saved);
                    }
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

const MapEnumerable = require('./enumerables/MapEnumerable');
const ArrayEnumerable = require('./enumerables/ArrayEnumerable');
const StringEnumerable = require('./enumerables/StringEnumerable');